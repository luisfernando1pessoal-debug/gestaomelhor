"use client";

import { useState, useEffect } from "react";
import LeadMagnet from "./LeadMagnet";

interface ExitIntentPopupProps {
  slug: string;
  nicho: string;
}

export default function ExitIntentPopup({ slug, nicho }: ExitIntentPopupProps) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Listen for lead captured event from inline form
  useEffect(() => {
    const handler = () => setDismissed(true);
    window.addEventListener("lead-captured", handler);
    return () => window.removeEventListener("lead-captured", handler);
  }, []);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
      }
    };

    // Mobile: detect back/scroll-up intent
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      // Only trigger after user has scrolled 60%+ of the page
      if (current < lastScroll && current > document.body.scrollHeight * 0.6) {
        setShow(true);
      }
      lastScroll = current;
    };

    // Delay to avoid triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg animate-fade-up">
        <button
          onClick={() => { setShow(false); setDismissed(true); }}
          className="absolute -right-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--text-secondary)] shadow-md transition-colors hover:text-[var(--text)]"
          aria-label="Fechar"
        >
          &#10005;
        </button>
        <LeadMagnet
          slug={slug}
          nicho={nicho}
          origem="Exit-Intent"
          onSuccess={() => { setTimeout(() => { setShow(false); setDismissed(true); }, 2000); }}
        />
      </div>
    </div>
  );
}
