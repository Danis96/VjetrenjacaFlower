import { motion } from "motion/react";
import type { AppContent } from "../content";

type GallerySectionProps = {
  content: AppContent;
};

const galleryCardClasses = [
  "sm:col-span-1 xl:col-span-3 aspect-[0.92]",
  "sm:col-span-1 xl:col-span-4 aspect-[1.28]",
  "sm:col-span-2 xl:col-span-5 aspect-[1.7]",
  "sm:col-span-1 xl:col-span-5 aspect-[1.1]",
  "sm:col-span-1 xl:col-span-3 aspect-[1.02]",
  "sm:col-span-2 xl:col-span-4 aspect-[1.32]",
  "sm:col-span-1 xl:col-span-3 aspect-[0.9]",
  "sm:col-span-1 xl:col-span-5 aspect-[1.52]"
] as const;

export function GallerySection({ content }: GallerySectionProps) {
  const { gallery } = content;

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8">
      <div className="absolute left-[8%] top-20 h-48 w-48 rounded-full bg-[#f7d9e3]/18 blur-3xl dark:bg-[#5f4151]/22" />
      <div className="absolute bottom-12 right-[10%] h-56 w-56 rounded-full bg-[#dcead7]/22 blur-3xl dark:bg-[#4b6048]/22" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#8d7982] dark:text-[#b59faa]">{gallery.eyebrow}</p>
          <h2 className="mb-4 text-5xl leading-none text-[#2D2D2D] dark:text-[#f6edf0] md:text-6xl">
            {gallery.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#2D2D2D]/70 dark:text-[#ccbfc7]">
            {gallery.description}
          </p>
        </motion.div>

        <div className="rounded-[2rem] border border-white/70 bg-white/45 p-4 shadow-[0_24px_80px_rgba(121,94,108,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-6 lg:p-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-12">
            {gallery.images.map((image, index) => (
              <motion.figure
                key={image.id}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-[#f7f1f3] shadow-[0_18px_50px_rgba(121,94,108,0.12)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(121,94,108,0.18)] dark:border-white/10 dark:bg-[#231f24] ${galleryCardClasses[index % galleryCardClasses.length]}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e171b]/55 via-[#1e171b]/8 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white/85 backdrop-blur">
                    {gallery.eyebrow}
                  </span>
                  <span className="max-w-[65%] text-right text-sm text-white/90 sm:text-base">
                    {image.alt}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
