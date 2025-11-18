import { LoaderCircleIcon } from "lucide-react";

export function FullscreenLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <LoaderCircleIcon className="animate-spin" />
    </div>
  );
}
