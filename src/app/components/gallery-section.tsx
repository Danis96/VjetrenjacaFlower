import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import ResponsiveMasonry from "react-responsive-masonry";
import type { AppContent } from "../content";

type GallerySectionProps = {
  content: AppContent;
};

export function GallerySection({ content }: GallerySectionProps) {
  const { gallery } = content;

  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
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

        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 640: 2, 1024: 3 }}>
          <Masonry gutter="1rem">
            {gallery.images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.015, y: -3 }}
                className="cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/70 shadow-[0_18px_50px_rgba(121,94,108,0.1)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(121,94,108,0.16)] dark:border-white/10"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-auto w-full object-cover"
                />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
