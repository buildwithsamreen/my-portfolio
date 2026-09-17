"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profile, skills, experience, certifications, awards } from "@/lib/data";

type Line = { kind: "input" | "output" | "error"; text: string };

const BANNER = `Samreen Hasan Zaidi — interactive terminal
Type 'help' to see what this does.`;

function commandNames() {
  return [
    "help",
    "whoami",
    "about",
    "skills",
    "experience",
    "certifications",
    "awards",
    "contact",
    "resume",
    "cv",
    "open github",
    "open linkedin",
    "cd about",
    "cd skills",
    "cd experience",
    "cd credentials",
    "cd contact",
    "sudo hire-me",
    "ls",
    "clear",
    "exit",
  ];
}

function runCommand(raw: string): { output: string[]; action?: () => void; shouldClear?: boolean; shouldExit?: boolean } {
  const cmd = raw.trim().toLowerCase();

  if (cmd === "") return { output: [] };

  if (cmd === "help") {
    return {
      output: [
        "Available commands:",
        "  help                 show this list",
        "  whoami               who am I talking to?",
        "  about                a short bio",
        "  skills               what I work with",
        "  experience           where I've worked",
        "  certifications       licenses & certifications",
        "  awards               honors & recognition",
        "  contact              how to reach me",
        "  resume | cv          download my CV",
        "  open github|linkedin open a profile in a new tab",
        "  cd <section>         jump to about|skills|experience|credentials|contact",
        "  sudo hire-me         ;)",
        "  clear                clear the terminal",
        "  exit                 close this window",
      ],
    };
  }

  if (cmd === "whoami") {
    return {
      output: [
        `${profile.name} — ${profile.title}.`,
        "12+ years turning designs into pixel-perfect, accessible, fast interfaces.",
        "Currently building AI-powered commerce experiences at GMG.",
      ],
    };
  }

  if (cmd === "about") {
    return { output: [profile.summary] };
  }

  if (cmd === "skills") {
    return {
      output: skills.flatMap((group) => [`${group.category}:`, `  ${group.items.join(", ")}`]),
    };
  }

  if (cmd === "experience") {
    return {
      output: experience.flatMap((job) => [
        `${job.company} — ${job.role} (${job.period})`,
        `  ${job.summary}`,
      ]),
    };
  }

  if (cmd === "certifications") {
    return { output: certifications.map((c) => `${c.name} — ${c.issued}`) };
  }

  if (cmd === "awards") {
    return { output: awards.map((a) => `✦ ${a}`) };
  }

  if (cmd === "contact") {
    return {
      output: [
        `Email:    ${profile.email}`,
        `LinkedIn: ${profile.linkedin}`,
        `GitHub:   ${profile.github}`,
        `Location: ${profile.location}`,
        "",
        "Opening your mail client...",
      ],
      action: () => {
        window.location.href = `mailto:${profile.email}`;
      },
    };
  }

  if (cmd === "resume" || cmd === "cv") {
    return {
      output: ["Downloading resume-samreen-zaidi.pdf ..."],
      action: () => {
        const a = document.createElement("a");
        a.href = profile.resumeUrl;
        a.download = "";
        a.click();
      },
    };
  }

  if (cmd === "open github") {
    return { output: [`Opening ${profile.github} ...`], action: () => window.open(profile.github, "_blank") };
  }

  if (cmd === "open linkedin") {
    return { output: [`Opening ${profile.linkedin} ...`], action: () => window.open(profile.linkedin, "_blank") };
  }

  if (cmd.startsWith("cd ")) {
    const target = cmd.slice(3).trim();
    const map: Record<string, string> = {
      about: "#about",
      skills: "#skills",
      experience: "#experience",
      credentials: "#credentials",
      contact: "#contact",
      "~": "#top",
      "/": "#top",
    };
    const href = map[target];
    if (!href) {
      return { output: [`cd: no such section: ${target}`] };
    }
    return {
      output: [`Navigating to ${target}...`],
      action: () => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }),
    };
  }

  if (cmd === "sudo hire-me") {
    return {
      output: [
        "[sudo] password for recruiter: ********",
        "Access granted.",
        "Samreen is open to Lead / Senior Frontend roles and consulting engagements.",
        "Run 'contact' to reach her.",
      ],
    };
  }

  if (cmd === "ls") {
    return { output: ["about.txt  experience/  skills.json  certifications.md  contact.sh  resume.pdf"] };
  }

  if (cmd === "clear") {
    return { output: [], shouldClear: true };
  }

  if (cmd === "exit") {
    return { output: ["Goodbye 👋"], shouldExit: true };
  }

  return { output: [`command not found: ${raw}. Type 'help' for a list of commands.`] };
}

export function Terminal() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([{ kind: "output", text: BANNER }]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const typing =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      if (e.key === "`" && !typing) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [open]);

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

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  function submit() {
    const raw = value;
    setValue("");
    setHistoryIndex(null);
    if (raw.trim() !== "") setHistory((h) => [...h, raw]);

    const result = runCommand(raw);
    if (result.shouldClear) {
      setLines([]);
      return;
    }
    setLines((prev) => [
      ...prev,
      { kind: "input", text: raw },
      ...result.output.map((text) => ({ kind: "output" as const, text })),
    ]);
    result.action?.();
    if (result.shouldExit) {
      setTimeout(() => setOpen(false), 400);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      submit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setValue(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setValue("");
      } else {
        setHistoryIndex(nextIndex);
        setValue(history[nextIndex]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = commandNames().find((c) => c.startsWith(value.toLowerCase()) && value.length > 0);
      if (match) setValue(match);
    }
  }

  return (
    <>
      <motion.button
        type="button"
        aria-label="Open terminal"
        onClick={() => setOpen(true)}
        whileHover={reduce ? undefined : { scale: 1.05 }}
        className="btn-hard fixed bottom-6 left-6 z-40 hidden h-11 items-center gap-2 rounded-lg border-2 border-ink bg-accent px-4 font-mono text-xs font-bold text-ink [--btn-hard-shadow:#ff4d2e] sm:flex"
      >
        <span aria-hidden="true">&gt;_</span>
        terminal
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Interactive terminal"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 12 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="relative flex h-[70vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border-2 border-accent bg-ink shadow-[8px_8px_0_0_rgba(215,255,63,0.25)]"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="flex shrink-0 items-center gap-2 border-b border-border bg-panel/80 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-muted">samreen@portfolio: ~</span>
                <button
                  type="button"
                  aria-label="Close terminal"
                  onClick={() => setOpen(false)}
                  className="ml-auto font-mono text-xs text-muted hover:text-accent"
                >
                  esc
                </button>
              </div>

              <div
                ref={bodyRef}
                className="flex-1 overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed text-slate-200"
              >
                {lines.map((line, i) => (
                  <div key={i} className="whitespace-pre-wrap break-words">
                    {line.kind === "input" ? (
                      <span>
                        <span className="text-accent">samreen@portfolio</span>
                        <span className="text-muted">:~$ </span>
                        <span>{line.text}</span>
                      </span>
                    ) : (
                      <span className={line.kind === "error" ? "text-accent2" : "text-slate-300"}>{line.text}</span>
                    )}
                  </div>
                ))}

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-accent">samreen@portfolio</span>
                  <span className="text-muted">:~$</span>
                  <input
                    ref={inputRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    spellCheck={false}
                    autoComplete="off"
                    className="flex-1 bg-transparent text-slate-100 focus:outline-none"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
