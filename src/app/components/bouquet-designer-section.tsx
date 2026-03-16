import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import type { AppContent } from "../content";

type BouquetDesignerSectionProps = {
  content: AppContent;
};

export function BouquetDesignerSection({ content }: BouquetDesignerSectionProps) {
  const { designer } = content;

  return (
    <section id="design-your-bouquet" className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[#fffaf7]/90 p-6 shadow-[0_24px_80px_rgba(121,94,108,0.12)] backdrop-blur dark:border-white/10 dark:bg-[#221d22]/90 sm:p-8 md:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-[#f7d9e3]/60 via-[#fff7f2] to-[#e5f0df]/70 dark:from-[#5d3f50]/45 dark:via-[#221d22] dark:to-[#384936]/35" />
            <div className="relative">
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#e8d5db] bg-white/70 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[#7b6871] dark:border-white/10 dark:bg-white/6 dark:text-[#dcc8d1] sm:px-4 sm:text-xs sm:tracking-[0.28em]">
                <Sparkles className="h-4 w-4" />
                {designer.badge}
              </span>
              <h2 className="mt-6 max-w-xl text-4xl leading-none text-[#2d2d2d] dark:text-[#f6edf0] sm:text-5xl md:text-6xl">
                {designer.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f5960] dark:text-[#cabec5] md:text-lg">
                {designer.description}
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {designer.steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[1.75rem] border border-[#ead9de] bg-white/80 p-5 dark:border-white/10 dark:bg-white/6"
                  >
                    <p className="text-sm uppercase tracking-[0.25em] text-[#9f8d96] dark:text-[#bca8b2]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 text-2xl text-[#2d2d2d] dark:text-[#f6edf0]">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#645d63] dark:text-[#ccbfc7]">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {designer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f8e8ee] px-4 py-2 text-sm text-[#755d69] dark:bg-[#352932] dark:text-[#ead9e0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6"
          >
            <div className="rounded-[2rem] border border-[#e9d8dd] bg-[#fff4ef] p-5 shadow-[0_24px_80px_rgba(121,94,108,0.12)] dark:border-white/10 dark:bg-[#241f25] sm:p-7">
              <p className="text-sm uppercase tracking-[0.25em] text-[#8d727e] dark:text-[#bfaab4]">{designer.recipeEyebrow}</p>
              <div className="mt-5 space-y-4">
                {designer.options.map((option) => {
                  const Icon = option.icon;
                  return (
                    <div
                      key={option.label}
                      className="flex flex-col items-start gap-3 rounded-[1.5rem] border border-white/70 bg-white/80 px-4 py-4 dark:border-white/10 dark:bg-white/6 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7d9e3] text-[#6f5965] dark:bg-[#352932] dark:text-[#ead6de]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg text-[#2d2d2d] dark:text-[#f6edf0]">{option.label}</h3>
                          <p className="text-sm text-[#6c6469] dark:text-[#cbbec5]">{option.note}</p>
                        </div>
                      </div>
                      <span className="text-sm text-[#8f7f87] dark:text-[#bda8b2]">{designer.included}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#2d2d2d] p-5 text-white shadow-[0_24px_80px_rgba(45,45,45,0.22)] dark:bg-[#f1e7ec] dark:text-[#1c171c] sm:p-7">
              <div className="absolute -right-14 -top-10 h-40 w-40 rounded-full bg-[#f7d9e3]/20 blur-2xl dark:bg-[#ffffff]/45" />
              <div className="absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-[#a8c3a1]/20 blur-2xl dark:bg-[#d6e7ce]/40" />
              <div className="relative">
                <p className="text-sm uppercase tracking-[0.25em] text-white/60 dark:text-[#655761]">{designer.priceEyebrow}</p>
                <p className="mt-4 text-3xl leading-none sm:text-4xl" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {designer.price}
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/75 dark:text-[#564b52]">
                  {designer.priceDescription}
                </p>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2d2d2d] transition-transform hover:scale-[1.02] dark:bg-[#1f1a20] dark:text-[#f6edf0]">
                  {designer.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
