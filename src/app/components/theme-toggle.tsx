import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-3 py-2 text-sm text-[#4f474d] shadow-lg backdrop-blur transition-transform hover:scale-[1.02] dark:border-white/10 dark:bg-white/8 dark:text-[#f6edf0]"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7d9e3] text-[#5d4954] dark:bg-[#2d2530] dark:text-[#d6e7ce]">
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </span>
      <span className="hidden sm:inline">{isDark ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
