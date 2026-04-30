"use client";

import { GlassPill } from "@/components/GlassPill";
import { MessageSection } from "@/components/MessageSection";
import { closing, heroCopy, messageSections, topbarIconUrl } from "@/lib/content";
import Image from "next/image";
import { useEffect, useState } from "react";

function SocialIcon({ kind }: { kind: "ig" | "tt" | "li" }) {
  if (kind === "ig") {
    return (
      <svg
        className="h-[15px] w-[15px] text-[var(--color-brand)]"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }

  if (kind === "tt") {
    return (
      <svg
        className="h-3.5 w-3.5 text-[var(--color-brand)]"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        aria-hidden
      >
        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
      </svg>
    );
  }

  return (
    <svg
      className="h-[15px] w-[15px] text-[var(--color-brand)]"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Beat-index → CSS class mapping.
// Beats 0 and 1 (first section) are always visible — no class needed.
// Beats 2-5 use pure-CSS sequential reveal with animation-fill-mode:both:
//   • "backwards" holds the element at opacity:0 during the delay
//   • "forwards"  keeps it at opacity:1 after the animation ends
// This works even when React never hydrates (no JS state in the reveal path).
const BEAT_CLASSES = ["reveal-beat-0", "reveal-beat-1", "reveal-beat-2", "reveal-beat-3", "reveal-beat-4", "reveal-beat-5"];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <main className="mx-auto min-h-screen w-full max-w-[390px] bg-[var(--color-page)]">
      {process.env.NODE_ENV === "development" && (
        <div className="fixed left-0 top-0 z-[9999] rounded-br-lg bg-black/85 p-2 font-mono text-[10px] leading-snug text-white">
          <div>mounted: {isMounted ? "✓" : "…"} (CSS reveal is independent of this)</div>
        </div>
      )}
      <div className="swirl-shader pb-[72px]">
        <section className="mx-[17px] mt-6 flex h-[43px] items-center justify-between rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass)] px-5 shadow-[var(--shadow-glass)] backdrop-blur-[25px]">
          <span className="font-spec-serif text-[15px] italic tracking-[-0.5px] text-[var(--color-brand)]">
            baobae
          </span>
          <div className="flex items-center gap-1.5">
            <Image src={topbarIconUrl} alt="" width={17} height={17} aria-hidden />
            <span className="font-spec-body text-[15px] tracking-[-0.5px] text-[var(--color-brand)]">
              try it now
            </span>
          </div>
        </section>

        <section className="mt-[63px] flex flex-col items-center gap-2 px-4">
          <h1 className="font-spec-serif m-0 text-7xl italic tracking-[-3px] text-[var(--color-primary)]">
            {heroCopy.brand}
          </h1>
          <p className="font-spec-body m-0 w-[320px] text-center text-base leading-[1.55] tracking-[0.1px] text-[var(--color-primary)]">
            {heroCopy.subheading}
          </p>
          <p className="font-spec-body m-0 mt-2 text-center text-[15px] leading-relaxed tracking-[0.1px] text-[var(--color-muted)]">
            {heroCopy.scrollHint}
          </p>
        </section>

        <section className="mx-[47px] mt-[73px] flex flex-col gap-[60px]">
          {messageSections.map((section, index) => (
            <MessageSection
              key={section.id}
              section={section}
              index={index}
              beatOneClassName={BEAT_CLASSES[index * 2] ?? ""}
              beatTwoClassName={BEAT_CLASSES[index * 2 + 1] ?? ""}
            />
          ))}
        </section>

        <section className="mt-[40px] flex flex-col items-center px-4">
          <div className="reveal-pill">
            <GlassPill label={closing.cta} iconUrl={topbarIconUrl} />
          </div>
          <h2
            className="reveal-beat-6 m-0 mt-10 mb-10 flex w-[320px] flex-wrap items-baseline justify-center gap-x-2 gap-y-0.5 text-center"
          >
            {closing.words.map((word) => {
              const italic = word === "Less" || word === "more";
              return (
                <span
                  key={word}
                  className={`font-spec-serif text-3xl leading-[1.1] tracking-[-1px] text-[var(--color-primary)] ${italic ? "italic" : ""}`}
                >
                  {word}
                </span>
              );
            })}
          </h2>
          {/* reveal-beat-7 hides the whole block until 9400ms (proven reliable).
               couple-slide-* add the horizontal spring on top of that. */}
          <div className="reveal-beat-7 relative inline-flex items-center">
            <div className="couple-slide-left h-11 w-11 overflow-hidden rounded-full">
              <Image
                src={closing.avatars[0]}
                alt="Couple avatar 1"
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="couple-slide-right -ml-0.5 h-11 w-11 overflow-hidden rounded-full">
              <Image
                src={closing.avatars[1]}
                alt="Couple avatar 2"
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Outer span: absolute positioning only. Inner span: scale animation. */}
            <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <span className="couple-heart block text-base leading-none">💓</span>
            </span>
          </div>
        </section>
      </div>

      <footer className="relative h-[343px] overflow-hidden bg-[var(--color-footer)]">
        <div className="flex flex-col gap-7 px-7 pb-12 pt-10">
          <div className="flex flex-wrap gap-x-6 gap-y-2.5">
            {["About Us", "Privacy", "Terms of Service", "AI Usage"].map((item) => (
              <span
                key={item}
                className="font-spec-body text-[13px] text-[var(--color-brand)]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-1.5">
            {[
              { key: "ig", alt: "Instagram" },
              { key: "tt", alt: "TikTok" },
              { key: "li", alt: "LinkedIn" },
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                aria-label={item.alt}
                className="font-spec-body h-[34px] w-[34px] rounded-full border border-[var(--color-social-border)] bg-[#ffffff60] text-[11px] text-[var(--color-brand)] shadow-[var(--shadow-glass)] backdrop-blur-[25px]"
              >
                <span className="flex h-full w-full items-center justify-center">
                  <SocialIcon kind={item.key as "ig" | "tt" | "li"} />
                </span>
              </button>
            ))}
          </div>
          <span className="font-spec-body text-[10px] text-[#757575]">
            © 2026 Baobae. All rights reserved.
          </span>
        </div>
        <span className="font-spec-serif absolute bottom-[-44px] left-0 right-0 text-center text-[160px] italic leading-[0.8] tracking-[-6px] text-[var(--color-footer-mark)]">
          baobae
        </span>
      </footer>
    </main>
  );
}
