"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useMemo, useRef } from "react";
import { externalMainModules } from "@/config/external-main-modules";
import { mainModules } from "@/config/erp-main-modules";
import { getInternalModules } from "@/lib/internal-modules/catalog";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const sectionIn: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

const staggerIn: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const corporatePillars = [
  {
    title: "Enterprise Governance",
    description:
      "Unified roles, access control, and audit visibility for critical licensing and regulatory workflows.",
  },
  {
    title: "Operational Intelligence",
    description:
      "Cross-module data visibility for internal teams, with real-time progression and process-level reporting.",
  },
  {
    title: "Scalable Service Delivery",
    description:
      "One platform experience for internal operations and external stakeholders across high-volume digital services.",
  },
];

export default function LandingView() {
  const rootRef = useRef<HTMLDivElement>(null);
  const internalModules = useMemo(() => getInternalModules(), []);

  const metrics = useMemo(() => {
    const submoduleCount = internalModules.reduce((count, moduleDef) => count + moduleDef.submodules.length, 0);
    const processCount = internalModules.reduce(
      (count, moduleDef) =>
        count + moduleDef.submodules.reduce((subCount, submodule) => subCount + submodule.processes.length, 0),
      0,
    );

    return [
      {
        label: "Enterprise Modules",
        value: `${mainModules.length + externalMainModules.length}`,
      },
      {
        label: "Submodules",
        value: `${submoduleCount}`,
      },
      {
        label: "Workflow Processes",
        value: `${processCount}`,
      },
    ];
  }, [internalModules]);

  const showcasePages = useMemo(
    () => [
      ...mainModules.slice(0, 3).map((moduleDef) => ({
        ...moduleDef,
        category: "Internal",
      })),
      ...externalMainModules.slice(0, 2).map((moduleDef) => ({
        ...moduleDef,
        category: "External",
      })),
    ],
    [],
  );

  useLayoutEffect(() => {
    if (!rootRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.to("[data-ambient-orb]", {
        x: "random(-24, 24)",
        y: "random(-18, 18)",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.25,
      });

      gsap.to("[data-lens-layer]", {
        backgroundPosition: "200% 0%",
        duration: 16,
        repeat: -1,
        ease: "none",
      });

      gsap.fromTo(
        "[data-showcase-card]",
        { autoAlpha: 0, y: 42 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: "[data-showcase-grid]",
            start: "top 78%",
            once: true,
          },
        },
      );
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip px-4 pb-10 pt-8 sm:px-7 lg:px-10">
      <svg aria-hidden className="h-0 w-0">
        <defs>
          <filter id="lens-distortion">
            <feTurbulence baseFrequency="0.008 0.011" numOctaves="2" result="noise" seed="4" type="fractalNoise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" xChannelSelector="R" yChannelSelector="B" />
          </filter>
        </defs>
      </svg>

      <div ref={rootRef} className="relative mx-auto max-w-7xl">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            data-ambient-orb
            className="absolute -top-20 left-[-8%] h-72 w-72 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(22, 163, 74, 0.24), rgba(20, 184, 166, 0.08) 58%, transparent 75%)",
            }}
          />
          <div
            data-ambient-orb
            className="absolute right-[-10%] top-16 h-80 w-80 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 60% 45%, rgba(14, 165, 233, 0.26), rgba(59, 130, 246, 0.08) 56%, transparent 78%)",
            }}
          />
          <div
            data-ambient-orb
            className="absolute bottom-[20%] left-[36%] h-72 w-72 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(45, 212, 191, 0.2), rgba(16, 185, 129, 0.08) 52%, transparent 76%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-40 hue-drift"
            style={{
              filter: "url(#lens-distortion)",
            }}
          >
            <div
              data-lens-layer
              className="h-full w-full"
              style={{
                background:
                  "radial-gradient(circle at 18% 12%, rgba(255,255,255,0.28), transparent 30%), radial-gradient(circle at 80% 24%, rgba(186, 230, 253, 0.28), transparent 34%), radial-gradient(circle at 60% 78%, rgba(153, 246, 228, 0.2), transparent 36%)",
                backgroundSize: "150% 150%",
              }}
            />
          </div>
        </div>

        <motion.section
          animate="show"
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 p-7 shadow-[0_30px_80px_rgba(15,23,42,0.16)] backdrop-blur-md md:p-10"
          initial="hidden"
          variants={sectionIn}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                "linear-gradient(128deg, rgba(240, 253, 250, 0.7) 0%, rgba(226, 232, 240, 0.2) 40%, rgba(224, 242, 254, 0.48) 100%)",
            }}
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <motion.p
                className="inline-flex rounded-full border border-slate-300/80 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600"
                variants={sectionIn}
              >
                eATOM Corporate Platform
              </motion.p>
              <motion.h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl" variants={sectionIn}>
                One digital command center for licensing, regulation, and public services.
              </motion.h1>
              <motion.p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base" variants={sectionIn}>
                eATOM streamlines internal operations and external stakeholder services through a single enterprise-grade platform.
                Built for scale, compliance, and continuous service delivery.
              </motion.p>

              <motion.div className="mt-7 flex flex-wrap gap-3" variants={sectionIn}>
                <a
                  className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                  href="/login"
                >
                  Access Portal
                </a>
                <Link
                  className="inline-flex items-center rounded-xl border border-slate-300 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white"
                  href="/erp/dashboard"
                >
                  View Dashboard
                </Link>
              </motion.div>
            </div>

            <motion.div
              animate="show"
              className="rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              initial="hidden"
              variants={staggerIn}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Platform Snapshot</p>
              <div className="mt-3 grid gap-2">
                {metrics.map((item) => (
                  <motion.div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3"
                    variants={sectionIn}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                    <p className="mt-1 text-2xl font-semibold text-slate-900">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          animate="show"
          className="mt-10 rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-[0_24px_64px_rgba(15,23,42,0.1)] backdrop-blur md:p-8"
          data-showcase-grid
          initial="hidden"
          variants={sectionIn}
        >
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">Page Showcase</h2>
          <p className="mt-2 text-sm text-slate-600">
            Preview of key modules and portals across internal and external workflows. Placeholder frames are included for
            rapid content iteration.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {showcasePages.map((item, index) => (
              <motion.article
                key={`${item.category}-${item.id}`}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_14px_32px_rgba(15,23,42,0.06)]"
                data-showcase-card
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400">Page {index + 1}</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.description}</p>

                <div className="mt-4 rounded-xl border border-slate-200 bg-[linear-gradient(140deg,#f8fafc_0%,#edf7f5_45%,#ecfeff_100%)] p-3">
                  <div className="mb-3 flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-teal-300" />
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 w-[72%] rounded-full bg-slate-200" />
                    <div className="h-2.5 w-[88%] rounded-full bg-slate-100" />
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="h-10 rounded-lg bg-white shadow-sm" />
                      <div className="h-10 rounded-lg bg-white shadow-sm" />
                      <div className="h-10 rounded-lg bg-white shadow-sm" />
                    </div>
                  </div>
                </div>

                <Link className="mt-4 inline-flex text-xs font-semibold text-slate-600 hover:text-slate-900" href={item.href}>
                  Open route
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          animate="show"
          className="mt-10 grid gap-4 md:grid-cols-3"
          initial="hidden"
          variants={staggerIn}
        >
          {corporatePillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_14px_36px_rgba(15,23,42,0.08)]"
              variants={sectionIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <h3 className="text-base font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.section>

        <footer className="mt-12 rounded-3xl border border-slate-200 bg-slate-900 px-6 py-8 text-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.32)] md:px-8">
          <div className="grid gap-7 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">eATOM</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-300">
                Corporate digital platform for integrated licensing, regulatory operations, and public-facing services.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Internal</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {mainModules.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <Link className="text-slate-300 transition hover:text-white" href={item.href}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">External</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {externalMainModules.map((item) => (
                  <li key={item.id}>
                    <Link className="text-slate-300 transition hover:text-white" href={item.href}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Jabatan Tenaga Atom Malaysia</li>
                <li>Digital Operations Office</li>
                <li>support@eatom.gov.my</li>
                <li>+60 3-0000 0000</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-700 pt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} eATOM. Enterprise Resource and Service Platform.
          </div>
        </footer>
      </div>

      <style jsx>{`
        .hue-drift {
          animation: hueShift 14s ease-in-out infinite;
        }

        @keyframes hueShift {
          0% {
            filter: url(#lens-distortion) hue-rotate(0deg);
          }
          50% {
            filter: url(#lens-distortion) hue-rotate(20deg);
          }
          100% {
            filter: url(#lens-distortion) hue-rotate(0deg);
          }
        }
      `}</style>
    </main>
  );
}
