
'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft | {} => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft | {} = {};

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.entries(timeLeft).forEach(([interval, value]) => {
    if (isNaN(value)) {
      return;
    }

    const labelMap: { [key: string]: string } = {
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

  return (
    <div className="flex items-center justify-center gap-4">
      {timerComponents.length ? timerComponents : <span>Время вышло!</span>}
    </div>
  );
};

    