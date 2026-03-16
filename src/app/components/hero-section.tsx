import { motion } from "motion/react";
import { ArrowRight, Flower2, HeartHandshake, Sparkles } from "lucide-react";
import type { AppContent } from "../content";

type HeroSectionProps = {
  content: AppContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  const { hero, nav } = content;

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-6 md:px-8 md:pb-24">
      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-multiply dark:opacity-[0.24]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1800&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      />
      <div
        className="absolute inset-y-0 left-0 hidden w-[38%] opacity-60 dark:opacity-40 lg:block"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80')",
          backgroundPosition: "left center",
          backgroundSize: "cover",
          maskImage: "linear-gradient(to right, black 45%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 45%, transparent 100%)"
        }}
      />
      <div
        className="absolute bottom-0 right-0 hidden h-[46%] w-[42%] opacity-55 dark:opacity-35 lg:block"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=80')",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          maskImage: "radial-gradient(circle at bottom right, black 35%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(circle at bottom right, black 35%, transparent 78%)"
        }}
      />
      <div className="absolute left-[8%] top-24 h-40 w-40 rounded-full bg-[#f7d9e3]/55 blur-3xl dark:bg-[#6d4860]/35 sm:h-56 sm:w-56" />
      <div className="absolute right-[5%] top-16 h-52 w-52 rounded-full bg-[#dbead5]/70 blur-3xl dark:bg-[#546d50]/28 sm:h-72 sm:w-72" />
      <div className="absolute bottom-8 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#fff2e7] blur-3xl dark:bg-[#3a3037]/55 sm:h-64 sm:w-64" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf6]/80 via-transparent to-[#fff8f4]/55 dark:from-[#161417]/78 dark:via-transparent dark:to-[#181419]/60" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/65 px-4 py-4 backdrop-blur dark:border-white/10 dark:bg-white/6 sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7d9e3] text-[#6c5563] dark:bg-[#352932] dark:text-[#e7d4dc]">
              <Flower2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#8f7a84] dark:text-[#b59eaa]">{hero.eyebrow}</p>
              <p className="text-base text-[#2d2d2d] dark:text-[#f6edf0] sm:text-lg">{hero.brand}</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-2 text-sm text-[#675f64] dark:text-[#dbcfd6]">
            <a href="#collections" className="rounded-full px-3 py-2 hover:bg-[#fff1f0] dark:hover:bg-white/10 sm:px-4">{nav.bouquets}</a>
            <a href="#design-your-bouquet" className="rounded-full px-3 py-2 hover:bg-[#fff1f0] dark:hover:bg-white/10 sm:px-4">{nav.customDesign}</a>
            <a href="#visit" className="rounded-full px-3 py-2 hover:bg-[#fff1f0] dark:hover:bg-white/10 sm:px-4">{nav.visit}</a>
          </nav>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#ead8de] bg-white/70 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#816c78] dark:border-white/10 dark:bg-white/6 dark:text-[#d7c1cb] sm:px-4 sm:text-xs sm:tracking-[0.3em]">
              <Sparkles className="h-4 w-4 text-[#a8c3a1] dark:text-[#d6e7ce]" />
              {hero.badge}
            </span>
            <h1 className="mt-6 max-w-3xl text-[3.2rem] leading-[0.92] text-[#2d2d2d] dark:text-[#f6edf0] sm:text-[4.2rem] md:text-[5.4rem] lg:text-[7rem]">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#60585e] dark:text-[#ccbfc7] md:text-lg">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2d2d2d] px-7 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02] dark:bg-[#f2e8ec] dark:text-[#1d181d]">
                {hero.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#design-your-bouquet"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e4d6db] bg-white/75 px-7 py-4 text-sm font-semibold text-[#3f3a3d] backdrop-blur transition-transform hover:scale-[1.02] dark:border-white/10 dark:bg-white/6 dark:text-[#f6edf0]"
              >
                {hero.secondaryCta}
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {hero.highlights.map(([title, text]) => (
                <div key={title} className="rounded-[1.5rem] border border-white/70 bg-white/60 p-4 backdrop-blur dark:border-white/10 dark:bg-white/6">
                  <p className="text-base text-[#2d2d2d] dark:text-[#f6edf0]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6a6468] dark:text-[#c9bbc3]">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[440px] sm:min-h-[520px] lg:min-h-[560px]"
          >
            <div className="absolute right-0 top-6 w-[88%] overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-2 shadow-[0_24px_80px_rgba(121,94,108,0.14)] backdrop-blur dark:border-white/10 dark:bg-white/6 sm:w-[72%] sm:rounded-[2.5rem] sm:p-3">
              <img
                src="https://images.unsplash.com/photo-1588385494080-201c47faad95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt={hero.heroImageAlt}
                className="h-[300px] w-full rounded-[1.6rem] object-cover sm:h-[420px] sm:rounded-[2rem]"
              />
              <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-t from-[#21171d]/20 via-transparent to-white/10 sm:rounded-[2rem]" />
            </div>

            <div className="absolute bottom-0 left-0 w-[72%] rounded-[1.5rem] border border-[#eadbe0] bg-[#fff8f5]/90 p-4 shadow-[0_24px_80px_rgba(121,94,108,0.12)] backdrop-blur dark:border-white/10 dark:bg-[#241f25]/92 sm:w-[58%] sm:rounded-[2rem] sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dcead7] text-[#56715b] dark:bg-[#2d3a2c] dark:text-[#d6e7ce]">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#95828b] dark:text-[#b79faa]">{hero.weeklyLabel}</p>
                  <p className="text-lg text-[#2d2d2d] dark:text-[#f6edf0] sm:text-xl">{hero.weeklyTitle}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#6b6468] dark:text-[#cdbfc6]">
                {hero.weeklyDescription}
              </p>
            </div>

            <motion.div
              className="absolute left-[8%] top-0 max-w-[72%] rounded-full border border-white/70 bg-white/70 px-3 py-2 text-xs text-[#695c64] shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/8 dark:text-[#efe4e9] sm:left-[16%] sm:max-w-none sm:px-4 sm:py-3 sm:text-sm"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
            >
              {hero.floatingNote}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
