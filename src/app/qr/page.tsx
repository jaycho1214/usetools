import { Suspense } from "react";
import QRGeneratorContent from "@/features/qr-generator/components/qr-generator-content";
import { FullscreenLoading } from "@/components/fullscreen-loading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Generator",
  description: "Fast QR code generator with history and keyboard shortcuts",
};

export default function QRPage() {
  return (
    <Suspense fallback={<FullscreenLoading />}>
      <QRGeneratorContent />
    </Suspense>
  );
}
