
'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft | {} => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft | {} = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  // Initialize with an empty object on the server and calculate on the client
  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Set initial time left
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);


  const timerComponents: JSX.Element[] = [];

  Object.entries(timeLeft).forEach(([interval, value]) => {
    if (isNaN(value)) {
      return;
    }

    const labelMap: { [key: string]: string } = {
        days: 'Дней',
        hours: 'Часов',
        minutes: 'Минут',
        seconds: 'Секунд',
    };

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center justify-center rounded-[12px] border border-primary/20 bg-background/50 p-3 backdrop-blur-sm min-w-[80px]">
        <span className="font-code text-3xl font-bold text-primary">{String(value).padStart(2, '0')}</span>
        <span className="text-xs text-foreground/60 uppercase tracking-widest">{labelMap[interval]}</span>
      </div>
    );
  });

  // Render a placeholder or nothing on the server, and the actual timer on the client
  if (!isClient || !timerComponents.length) {
    return (
      <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center rounded-[12px] border border-primary/20 bg-background/50 p-3 backdrop-blur-sm min-w-[80px]">
            <span className="font-code text-3xl font-bold text-primary">--</span>
            <span className="text-xs text-foreground/60 uppercase tracking-widest">Дней</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-[12px] border border-primary/20 bg-background/50 p-3 backdrop-blur-sm min-w-[80px]">
            <span className="font-code text-3xl font-bold text-primary">--</span>
            <span className="text-xs text-foreground/60 uppercase tracking-widest">Часов</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-[12px] border border-primary/20 bg-background/50 p-3 backdrop-blur-sm min-w-[80px]">
            <span className="font-code text-3xl font-bold text-primary">--</span>
            <span className="text-xs text-foreground/60 uppercase tracking-widest">Минут</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-[12px] border border-primary/20 bg-background/50 p-3 backdrop-blur-sm min-w-[80px]">
            <span className="font-code text-3xl font-bold text-primary">--</span>
            <span className="text-xs text-foreground/60 uppercase tracking-widest">Секунд</span>
          </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {timerComponents.length ? timerComponents : <span>Время вышло!</span>}
    </div>
  );
};
