
"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function IpCopyButton({ ipAddress }: { ipAddress: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(ipAddress).then(
      () => {
        setIsCopied(true);
        toast({
          title: "Скопировано!",
          description: `IP адрес ${ipAddress} скопирован в буфер обмена.`,
        });
        setTimeout(() => setIsCopied(false), 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
        toast({
          variant: "destructive",
          title: "Ошибка",
          description: "Не удалось скопировать IP адрес.",
        });
      }
    );
  };

  return (
    <div className="flex items-center justify-center gap-2 rounded-lg border border-primary/20 bg-background/50 p-2 backdrop-blur-sm sm:p-3">
      <span className="font-code text-lg text-primary sm:text-xl md:text-2xl">
        {ipAddress}
      </span>
      <Button
        onClick={handleCopy}
        variant="ghost"
        size="icon"
        className="text-primary hover:bg-primary/20 hover:text-primary glow-on-hover"
        aria-label="Copy IP address"
      >
        {isCopied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
      </Button>
    </div>
  );
}
