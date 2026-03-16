import { motion } from "motion/react";
import { Heart, Leaf, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8">
      <div
        className="absolute inset-y-0 left-0 hidden w-[30%] opacity-45 dark:opacity-22 xl:block"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80')",
          backgroundPosition: "left center",
          backgroundSize: "cover",
          maskImage: "linear-gradient(to right, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 40%, transparent 100%)"
        }}
      />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#f7d9e3]/35 blur-3xl dark:bg-[#5f4151]/28" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 p-2 shadow-[0_24px_80px_rgba(121,94,108,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/6 sm:rounded-[2.5rem] sm:p-3">
              <img
                src="https://images.unsplash.com/photo-1719586901803-d3a5ef35b28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBmbG93ZXIlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNjUwMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Flower arrangement"
                className="h-[360px] w-full rounded-[1.6rem] object-cover sm:h-[460px] sm:rounded-[2rem] lg:h-[560px]"
              />
              <div className="absolute left-4 top-4 rounded-[1.2rem] bg-white/90 p-3 shadow-lg backdrop-blur dark:bg-[#221d22]/90 sm:left-8 sm:top-8 sm:rounded-[1.5rem] sm:p-4">
                <Heart className="h-8 w-8 fill-[#F7D9E3] text-[#F7D9E3]" />
              </div>
            </div>

            <motion.div
              className="relative mt-4 w-full max-w-[240px] rounded-[1.6rem] border border-[#e3dad4] bg-[#fffaf6] p-4 shadow-xl dark:border-white/10 dark:bg-[#241f25] sm:absolute sm:-bottom-6 sm:-right-6 sm:mt-0 sm:w-36 sm:p-5"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="text-sm uppercase tracking-[0.24em] text-[#98838d] dark:text-[#b79faa]">In the shop</p>
              <p className="mt-2 text-3xl text-[#2d2d2d] dark:text-[#f6edf0]">Daily curation</p>
              <p className="mt-2 text-sm leading-6 text-[#625c61] dark:text-[#ccbfc7]">
                We style the front table with whatever looks freshest and most alive that morning.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-block rounded-full bg-[#f7d9e3] px-4 py-2 dark:bg-[#352932]">
              <span className="text-sm tracking-[0.2em] text-[#2D2D2D] dark:text-[#f6edf0]">OUR STORY</span>
            </div>

            <h2 className="mb-6 text-4xl leading-none text-[#2D2D2D] dark:text-[#f6edf0] sm:text-5xl md:text-6xl">
              A neighborhood florist with a softer point of view.
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-[#2D2D2D]/80 dark:text-[#ccbfc7]">
              Vjetrenjača is built around gentle color, fresh texture, and arrangements that feel considered rather than mass-produced.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-[#2D2D2D]/80 dark:text-[#ccbfc7]">
              We prepare bouquets for everyday gifting, romantic gestures, weddings, and events, but the heart of the shop is still the same:
              flowers chosen carefully, wrapped beautifully, and handed over with intention.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Heart, title: "Hand arranged", text: "Each bouquet finished by florist hand." },
                { icon: Leaf, title: "Season led", text: "Best stems change with the week." },
                { icon: Sparkles, title: "Gift ready", text: "Cards, wrapping and vase add-ons available." }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.5rem] border border-white/70 bg-white/65 p-5 backdrop-blur dark:border-white/10 dark:bg-white/6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4f0df] text-[#5f7862] dark:bg-[#2d3a2c] dark:text-[#d6e7ce]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-2xl text-[#2d2d2d] dark:text-[#f6edf0]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#665e63] dark:text-[#cabdc5]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
