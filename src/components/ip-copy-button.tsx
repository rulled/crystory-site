
"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function IpCopyButton({ ipAddress }: { ipAddress: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    if (isCopied) return;
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

  const iconVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -90 },
    visible: { scale: 1, opacity: 1, rotate: 0 },
  };

  return (
    <div className="flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-background/50 p-2 backdrop-blur-sm sm:h-12 sm:p-3">
      <span className="font-code text-lg text-primary sm:text-xl md:text-2xl">
        {ipAddress}
      </span>
      <Button
        onClick={handleCopy}
        variant="ghost"
        size="icon"
        className="relative h-8 w-8 text-primary hover:bg-primary/20 hover:text-primary glow-on-hover sm:h-10 sm:w-10"
        aria-label="Copy IP address"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isCopied ? (
            <motion.div
              key="check"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute"
            >
              <Check className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute"
            >
              <Copy className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </div>
  );
}

    
