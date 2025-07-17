
"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ServerStatusData {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
}

export function ServerStatus() {
  const [status, setStatus] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStatus() {
      try {
        setLoading(true);
        const res = await fetch("https://api.mcsrvstat.us/3/kristory.fun");
        if (!res.ok) {
          throw new Error("Failed to fetch server status");
        }
        const data = await res.json();
        setStatus({
          online: data.online,
          players: data.players,
        });
        setError(null);
      } catch (e) {
        setError(e instanceof Error ? e.message : "An unknown error occurred");
        setStatus({ online: false });
      } finally {
        setLoading(false);
      }
    }

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);
  
  const containerClasses = "flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-background/50 p-2 backdrop-blur-sm text-foreground/80";

  if (loading && !status) {
    return (
        <div className={containerClasses}>
            <Skeleton className="h-4 w-24" />
        </div>
    );
  }

  if (error) {
      return (
        <div className={`${containerClasses} text-destructive`}>
            <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-destructive"></span>
                </span>
                <span>Ошибка статуса</span>
            </div>
        </div>
      );
  }

  if (!status?.online) {
    return (
      <div className={containerClasses}>
        <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
                <span className="relative inline-flex h-3 w-3 rounded-full bg-destructive"></span>
            </span>
            <span>Оффлайн</span>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
        <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
        </span>
        <span>
            Игроков онлайн: {status.players?.online ?? 0}
        </span>
    </div>
  );
}
