
"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LauncherDownloadButton() {
  const downloadUrl = "https://github.com/rulled/kristory-online-setup/releases/download/1.0.0/KRISTORY_Online_Setup_v1.0.0.exe";

  return (
    <Button asChild size="lg" className="h-12 rounded-[18px] text-base glow-on-hover">
      <a href={downloadUrl}>
        <Download className="mr-2 h-5 w-5" />
        Скачать лаунчер
      </a>
    </Button>
  );
}
