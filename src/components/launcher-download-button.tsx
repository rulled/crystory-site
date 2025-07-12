
"use client";

import { useEffect, useState } from "react";
import { Download, Loader2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

interface ReleaseData {
  tag_name: string;
  assets: ReleaseAsset[];
}

export function LauncherDownloadButton({ repo }: { repo: string }) {
  const [release, setRelease] = useState<ReleaseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.github.com/repos/${repo}/releases/latest`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch latest release");
        }
        const data: ReleaseData = await res.json();
        setRelease(data);
        setError(null);
      } catch (e) {
        setError(e instanceof Error ? e.message : "An unknown error occurred");
        setRelease(null);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestRelease();
  }, [repo]);

  if (loading) {
    return <Skeleton className="h-12 w-48 rounded-lg" />;
  }

  if (error || !release?.assets?.[0]?.browser_download_url) {
    return (
      <Button variant="destructive" disabled size="lg" className="h-12 text-base">
        <AlertTriangle className="mr-2 h-5 w-5" />
        Скачать лаунчер
      </Button>
    );
  }

  const downloadUrl = release.assets.find(asset => asset.name.endsWith('.exe'))?.browser_download_url;

  if (!downloadUrl) {
      return (
        <Button variant="destructive" disabled size="lg" className="h-12 text-base">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Файл не найден
        </Button>
      )
  }

  return (
    <Button asChild size="lg" className="h-12 text-base glow-on-hover">
      <a href={downloadUrl}>
        <Download className="mr-2 h-5 w-5" />
        Скачать лаунчер
        <span className="ml-2 rounded-md bg-primary-foreground/20 px-2 py-1 text-xs">
          {release.tag_name}
        </span>
      </a>
    </Button>
  );
}

    