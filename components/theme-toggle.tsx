import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <label
      htmlFor="theme-toggle-input"
      className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
      aria-label="Alternar modo escuro"
      title="Alternar modo escuro"
    >
      <input id="theme-toggle-input" type="checkbox" className="sr-only" />
      <span className="theme-toggle-moon inline-flex">
        <Moon size={18} />
      </span>
      <span className="theme-toggle-sun hidden">
        <Sun size={18} />
      </span>
    </label>
  );
}
