import { motion } from "motion/react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import type { AppContent } from "../content";

type FeaturedFlowersProps = {
  content: AppContent;
};

export function FeaturedFlowers({ content }: FeaturedFlowersProps) {
  const { featured } = content;

  return (
    <section id="collections" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-[#8d7982] dark:text-[#b59faa]">{featured.eyebrow}</p>
            <h2 className="mt-4 text-4xl leading-none text-[#2d2d2d] dark:text-[#f6edf0] sm:text-5xl md:text-6xl">
              {featured.title}
            </h2>
          </motion.div>
          <div className="max-w-md rounded-[1.75rem] border border-white/70 bg-white/65 px-6 py-5 text-sm leading-6 text-[#655e63] backdrop-blur dark:border-white/10 dark:bg-white/6 dark:text-[#ccbfc7]">
            {featured.intro}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1fr_0.85fr]">
          {featured.flowers.map((flower, index) => (
            <motion.div
              key={flower.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.995 }}
              className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_18px_50px_rgba(121,94,108,0.1)] backdrop-blur dark:border-white/10 dark:bg-white/6"
            >
              <div className="relative aspect-[0.9] overflow-hidden">
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d]/40 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-2 text-xs uppercase tracking-[0.24em] text-[#7a6671] backdrop-blur dark:bg-[#231f24]/80 dark:text-[#e7d8e0]">
                  {featured.handTied}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-3xl leading-none text-[#2d2d2d] dark:text-[#f6edf0]">{flower.name}</h3>
                <p className="mt-3 text-sm text-[#6a6267] dark:text-[#cbbec5]">{flower.note}</p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-3xl text-[#7c9a76]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                    {flower.price}
                  </p>
                  <button
                    aria-label={featured.cartLabel}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f7d9e3] text-[#5d4954] transition-colors hover:bg-[#a8c3a1] hover:text-white dark:bg-[#352932] dark:text-[#f2dfe7] dark:hover:bg-[#546d50]"
                  >
                    <ShoppingBag className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] bg-[#efe5dc] p-6 text-[#2d2d2d] shadow-[0_18px_50px_rgba(121,94,108,0.08)] dark:bg-[#221d22] dark:text-[#f6edf0] sm:p-7"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-[#8d7982] dark:text-[#b59faa]">{featured.floristNoteEyebrow}</p>
            <h3 className="mt-4 text-3xl leading-none sm:text-4xl">{featured.floristNoteTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-[#5e575d] dark:text-[#cabdc5]">
              {featured.floristNoteDescription}
            </p>
            <a
              href="#design-your-bouquet"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2d2d2d] px-5 py-3 text-sm font-semibold text-white dark:bg-[#f2e8ec] dark:text-[#1d181d]"
            >
              {featured.floristNoteCta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
