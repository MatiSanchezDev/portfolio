"use client";
import { Copy } from "lucide-react";
import { useState } from "react";

type CopyButtonProps = {
  label?: string;
  value: string;
};

export default function CopyButton({ label = "", value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm hover:bg-msdev-secondary hover:text-black transition"
    >
      <Copy className="w-4 h-4" />
      {copied ? "¡Copiado!" : label}
    </button>
  );
}
