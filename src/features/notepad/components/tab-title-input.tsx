"use client";

import { RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { X } from "lucide-react";

interface TabTitleInputProps {
  tabId: string;
  title: string;
  index: number;
  isActive: boolean;
  isMac: boolean;
  titleInputRef: RefObject<HTMLInputElement | null>;
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  onTitleChange: (tabId: string, title: string) => void;
  onDelete: (tabId: string) => void;
}

export function TabTitleInput({
  tabId,
  title,
  index,
  isActive,
  isMac,
  titleInputRef,
  textareaRef,
  onTitleChange,
  onDelete,
}: TabTitleInputProps) {
  return (
    <>
      <input
        ref={isActive ? titleInputRef : null}
        value={title}
        maxLength={100}
        onChange={(e) => {
          e.stopPropagation();
          onTitleChange(tabId, e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            textareaRef.current?.focus();
          }
        }}
        className="bg-transparent outline-none w-24 text-sm"
        placeholder="Untitled"
      />
      {index < 9 && (
        <Kbd className="text-[10px] px-1 py-0">
          {isMac ? "⌘" : "Ctrl+"}
          {index + 1}
        </Kbd>
      )}
      <Button
        variant="ghost"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(tabId);
        }}
        className="h-4 w-4 p-0 -mr-1 hover:bg-destructive/20"
      >
        <X className="h-3 w-3" />
      </Button>
    </>
  );
}
