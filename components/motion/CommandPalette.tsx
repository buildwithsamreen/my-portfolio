"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data";

type Command = {
  id: string;
  label: string;
  hint: string;
  action: () => void;
};

const sectionLinks = [
  { href: "#top", label: "Go to top" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const reduce = useReducedMotion();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const commands = useMemo<Command[]>(() => {
    const navCommands: Command[] = sectionLinks.map((link) => ({
      id: `nav-${link.href}`,
      label: link.label,
      hint: "Section",
      action: () => {
        document.querySelector(link.href)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      },
    }));

    const actionCommands: Command[] = [
      {
        id: "copy-email",
        label: "Copy email address",
        hint: profile.email,
        action: async () => {
          try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          } catch {
            // clipboard unavailable — no-op
          }
        },
      },
      {
        id: "email",
        label: "Send me an email",
        hint: "Opens mail client",
        action: () => {
          window.location.href = `mailto:${profile.email}`;
        },
      },
      {
        id: "download-cv",
        label: "Download CV",
        hint: "PDF resume",
        action: () => {
          window.open(profile.resumeUrl, "_blank");
        },
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        hint: "New tab",
        action: () => window.open(profile.linkedin, "_blank"),
      },
      {
        id: "github",
        label: "Open GitHub",
        hint: "New tab",
        action: () => window.open(profile.github, "_blank"),
      },
    ];

    return [...navCommands, ...actionCommands];
  }, [reduce]);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    function handleGlobalKeydown(e: KeyboardEvent) {
      const isMeta = e.metaKey || e.ctrlKey;
      if (isMeta && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleGlobalKeydown);
    return () => window.removeEventListener("keydown", handleGlobalKeydown);
  }, []);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleInputKeydown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const cmd = filtered[activeIndex];
      if (cmd) {
        cmd.action();
        close();
      }
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label="Open command palette"
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent md:inline-flex"
      >
        Search
        <span className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted">
          ⌘K
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              onClick={close}
              aria-hidden="true"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              className="card-border relative w-full max-w-lg overflow-hidden rounded-2xl bg-panel shadow-2xl"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -8 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                <span className="font-mono text-accent" aria-hidden="true">
                  ⌘
                </span>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleInputKeydown}
                  placeholder="Jump to a section or run an action…"
                  className="w-full bg-transparent text-sm text-slate-100 placeholder:text-muted focus:outline-none"
                />
                <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted">
                  esc
                </kbd>
              </div>

              <ul className="max-h-80 overflow-y-auto p-2">
                {filtered.length === 0 && (
                  <li className="px-3 py-6 text-center text-sm text-muted">No matches</li>
                )}
                {filtered.map((cmd, i) => (
                  <li key={cmd.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => {
                        cmd.action();
                        close();
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                        i === activeIndex
                          ? "bg-accent/10 text-accent"
                          : "text-slate-100 hover:bg-white/5"
                      }`}
                    >
                      <span>{cmd.label}</span>
                      <span className="font-mono text-xs text-muted">
                        {cmd.id === "copy-email" && copied ? "Copied!" : cmd.hint}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
