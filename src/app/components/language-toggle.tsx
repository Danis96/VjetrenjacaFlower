import { languages, type Language } from "../content";

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
  ariaLabel: string;
};

export function LanguageToggle({ language, onChange, ariaLabel }: LanguageToggleProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="inline-flex items-center rounded-full border border-white/70 bg-white/75 p-1 text-sm text-[#4f474d] shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/8 dark:text-[#f6edf0]"
    >
      {languages.map(({ code, label }) => {
        const active = language === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => onChange(code)}
            className={`rounded-full px-3 py-2 transition-colors ${
              active
                ? "bg-[#2d2d2d] text-white dark:bg-[#f2e8ec] dark:text-[#1d181d]"
                : "text-[#5b5258] hover:bg-[#fff1f0] dark:text-[#f6edf0] dark:hover:bg-white/10"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
