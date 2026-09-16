"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";
import { CommandPalette } from "@/components/motion/CommandPalette";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-tight text-slate-100">
          <span className="text-accent">&gt;</span> {profile.name.split(" ")[0]}
          {profile.name.split(" ")[1]?.charAt(0)}.
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`text-sm transition-colors ${
                  active === link.href ? "text-accent" : "text-muted hover:text-accent"
                }`}
              >
                {link.label}
              </a>
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <CommandPalette />
          <a
            href={profile.resumeUrl}
            download
            className="rounded-full border border-border px-4 py-1.5 text-sm text-slate-100 transition-colors hover:border-accent hover:text-accent"
          >
            Download CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="btn-hard rounded-lg border-2 border-ink bg-accent px-4 py-1.5 text-sm font-bold text-ink"
          >
            Get in touch
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-slate-100 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex flex-col gap-1 overflow-hidden border-t border-border px-6 pb-4 md:hidden"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-sm ${
                    active === link.href ? "text-accent" : "text-muted hover:text-accent"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted hover:text-accent"
              >
                Download CV
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
