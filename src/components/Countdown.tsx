"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string; // ISO date string
  eventName: string;
}

interface TimeLeft {
  jours: number;
  heures: number;
  minutes: number;
  secondes: number;
}

function computeTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    jours: Math.floor(diff / 86_400_000),
    heures: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    secondes: Math.floor((diff % 60_000) / 1_000),
  };
}

export default function Countdown({ targetDate, eventName }: CountdownProps) {
  const target = new Date(targetDate);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(computeTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(computeTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Jours", value: timeLeft.jours },
    { label: "Heures", value: timeLeft.heures },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Secondes", value: timeLeft.secondes },
  ];

  return (
    <div className="bg-acs-blue/30 border border-acs-yellow/20 p-6 md:p-8">
      <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-2">
        Prochain événement majeur
      </p>
      <h3 className="font-display text-white text-xl md:text-2xl font-bold uppercase mb-6">
        {eventName}
      </h3>

      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {units.map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="relative">
              <div className="bg-acs-blue-dark border border-acs-yellow/30 py-3 md:py-4">
                <span className="font-display text-2xl md:text-4xl font-bold text-white tabular-nums">
                  {String(value).padStart(2, "0")}
                </span>
              </div>
              {/* Barre jaune bas */}
              <div className="h-0.5 bg-acs-yellow" />
            </div>
            <p className="text-white/50 text-xs uppercase tracking-widest mt-2">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
