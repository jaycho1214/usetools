import { useLayoutEffect, useState } from "react";
import { StoreApi, UseBoundStore } from "zustand";
import { PersistOptions } from "zustand/middleware";

type Write<T, U> = Omit<T, keyof U> & U;
type PersistListener<S> = (state: S) => void;
type StorePersist<S, Ps, Pr> = S extends {
  getState: () => infer T;
  setState: {
    (...args: infer Sa1): infer Sr1;
    (...args: infer Sa2): infer Sr2;
  };
}
  ? {
      setState(...args: Sa1): Sr1 | Pr;
      setState(...args: Sa2): Sr2 | Pr;
      persist: {
        setOptions: (options: Partial<PersistOptions<T, Ps, Pr>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: PersistListener<T>) => () => void;
        onFinishHydration: (fn: PersistListener<T>) => () => void;
        getOptions: () => Partial<PersistOptions<T, Ps, Pr>>;
      };
    }
  : never;
type WithPersist<S, A> = Write<S, StorePersist<S, A, unknown>>;

export function useHydrationStoreStatus<T>(
  store: UseBoundStore<WithPersist<StoreApi<T>, T>>,
) {
  const [hydrated, setHydrated] = useState(false);
  useLayoutEffect(() => {
    Promise.resolve(store.persist.rehydrate).finally(() => {
      setHydrated(true);
    });
  }, []);
  return hydrated;
}
