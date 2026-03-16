import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { AppContent } from "../content";

type ReviewsSectionProps = {
  content: AppContent;
};

export function ReviewsSection({ content }: ReviewsSectionProps) {
  const { reviews } = content;
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8">
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#F7D9E3] opacity-10 dark:bg-[#6d4860]" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#A8C3A1] opacity-10 dark:bg-[#546d50]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#8d7982] dark:text-[#b59faa]">{reviews.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 leading-none text-[#2D2D2D] dark:text-[#f6edf0]">
            {reviews.title}
          </h2>
          <p className="text-lg text-[#2D2D2D]/70 dark:text-[#ccbfc7]">
            {reviews.description}
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 22, scale: 0.985 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -22, scale: 0.985 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#FFF7F2] to-white p-6 shadow-[0_24px_80px_rgba(121,94,108,0.12)] dark:border-white/10 dark:from-[#241f25] dark:to-[#1a171c] sm:p-8 md:p-12"
            >
              <Quote className="w-12 h-12 text-[#F7D9E3] dark:text-[#caa6b8] mb-6" />
              
              <p className="text-lg text-[#2D2D2D] dark:text-[#f6edf0] mb-8 leading-relaxed italic sm:text-xl md:text-2xl">
                "{reviews.items[currentIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h4 className="text-lg text-[#2D2D2D] dark:text-[#f6edf0] mb-2">
                    {reviews.items[currentIndex].name}
                  </h4>
                  <div className="flex gap-1">
                    {[...Array(reviews.items[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FFE5D9] fill-[#FFE5D9]" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={prev}
              aria-label={reviews.previous}
              className="w-12 h-12 bg-[#A8C3A1] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <div className="flex items-center gap-2">
              {reviews.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`${reviews.goTo} ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-[#A8C3A1]' 
                      : 'bg-[#A8C3A1]/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={next}
              aria-label={reviews.next}
              className="w-12 h-12 bg-[#A8C3A1] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
