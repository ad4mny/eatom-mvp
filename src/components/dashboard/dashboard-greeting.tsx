"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/components/auth/auth-provider";

type DashboardGreetingProps = {
  title: string;
  description: string;
};

function getGreetingByHour(hour: number) {
  if (hour < 12) {
    return "Selamat pagi";
  }

  if (hour < 18) {
    return "Selamat petang";
  }

  return "Selamat malam";
}

export default function DashboardGreeting({
  title,
  description,
}: Readonly<DashboardGreetingProps>) {
  const { session } = useAuth();
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 30000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const greeting = `${getGreetingByHour(now.getHours())}${session?.name ? `, ${session.name}` : ""}`;
  const formattedNow = useMemo(
    () =>
      new Intl.DateTimeFormat("ms-MY", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(now),
    [now],
  );

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-slate-600">{greeting}</p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">{title}</h1>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">
        Masa semasa: {formattedNow}
      </p>
    </section>
  );
}
