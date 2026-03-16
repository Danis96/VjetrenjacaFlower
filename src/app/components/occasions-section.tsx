import { motion } from "motion/react";
import type { AppContent } from "../content";

type OccasionsSectionProps = {
  content: AppContent;
};

export function OccasionsSection({ content }: OccasionsSectionProps) {
  const { occasions } = content;

  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#8d7982] dark:text-[#b59faa]">{occasions.eyebrow}</p>
          <h2 className="mt-4 text-5xl leading-none text-[#2D2D2D] dark:text-[#f6edf0] md:text-6xl">
            {occasions.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[#2D2D2D]/70 dark:text-[#ccbfc7]">
            {occasions.description}
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {occasions.items.map((occasion, index) => {
            const Icon = occasion.icon;
            return (
              <motion.div
                key={occasion.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.72, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
              >
                <div className="h-full rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_18px_50px_rgba(121,94,108,0.08)] backdrop-blur transition-all duration-300 group-hover:shadow-[0_24px_60px_rgba(121,94,108,0.12)] dark:border-white/10 dark:bg-white/6">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ backgroundColor: occasion.color }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mt-6 text-3xl leading-none text-[#2D2D2D] dark:text-[#f6edf0]">
                    {occasion.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#645d63] dark:text-[#cabdc5]">
                    {occasion.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
