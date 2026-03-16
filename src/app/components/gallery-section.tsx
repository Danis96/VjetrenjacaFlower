import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import ResponsiveMasonry from "react-responsive-masonry";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1588385494080-201c47faad95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGluayUyMHJvc2UlMjBib3VxdWV0fGVufDF8fHx8MTc3MzY1MDIyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Rose bouquet"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1719586901803-d3a5ef35b28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBmbG93ZXIlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNjUwMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Shop interior"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1505046430430-7b035179ad30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvd2VyJTIwYXJyYW5nZW1lbnQlMjB3aGl0ZXxlbnwxfHx8fDE3NzM2NTAyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Wedding arrangement"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1593314519669-61d15f8ec983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBwZW9ueSUyMGFycmFuZ2VtZW50fGVufDF8fHx8MTc3MzY1MDIzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Peony arrangement"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1769812343860-1ec94c4dc4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2F0ZSUyMGZsb3JhbCUyMGRlY29yYXRpb24lMjBldmVudHxlbnwxfHx8fDE3NzM2NTAyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Floral decoration"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1770361516086-5c42022ecdbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHR1bGlwJTIwYm91cXVldCUyMHNwcmluZ3xlbnwxfHx8fDE3NzM2NTAyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Tulip bouquet"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1773206022502-c3c82e6d0b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjBzZWFzb25hbCUyMGZsb3dlcnMlMjBib3VxdWV0fGVufDF8fHx8MTc3MzY1MDIyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Seasonal flowers"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1767510533183-425731f088a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmbG93ZXIlMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc3MzY1MDIyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Gift box"
  }
];

export function GallerySection() {
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
          <p className="text-sm uppercase tracking-[0.28em] text-[#8d7982] dark:text-[#b59faa]">Gallery</p>
          <h2 className="mb-4 text-5xl leading-none text-[#2D2D2D] dark:text-[#f6edf0] md:text-6xl">
            Inside the floral moodboard.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#2D2D2D]/70 dark:text-[#ccbfc7]">
            A softer gallery wall with bouquets, event styling, and little in-shop moments.
          </p>
        </motion.div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 640: 2, 1024: 3 }}>
          <Masonry gutter="1rem">
            {galleryImages.map((image, index) => (
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
