import { motion } from "motion/react";
import { Clock3, MapPin, Navigation, Phone } from "lucide-react";

export function LocationSection() {
  return (
    <section id="visit" className="px-4 py-24 md:px-8">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] opacity-[0.16] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          maskImage: "linear-gradient(to top, black 20%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 20%, transparent 100%)"
        }}
      />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#8d7982] dark:text-[#b59faa]">Visit The Shop</p>
          <h2 className="mt-4 mb-4 text-4xl leading-none text-[#2D2D2D] dark:text-[#f6edf0] sm:text-5xl md:text-6xl">
            Stop by for stems, gifts, or a custom bouquet consultation.
          </h2>
          <p className="text-lg text-[#2D2D2D]/70 dark:text-[#ccbfc7]">
            The contact area now closes the page with a calmer, more premium invitation instead of a generic map block.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_rgba(121,94,108,0.1)] backdrop-blur dark:border-white/10 dark:bg-white/6 sm:p-8"
          >
            <div className="mb-8">
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F7D9E3] dark:bg-[#352932]">
                  <MapPin className="h-6 w-6 text-[#2D2D2D]" />
                </div>
                <h3 className="text-xl text-[#2D2D2D] dark:text-[#f6edf0] sm:text-2xl">
                  Cvjećara Vjetrenjača – Margareta
                </h3>
              </div>
              <p className="text-lg text-[#2D2D2D]/70 dark:text-[#cabdc5]">
                Sarajevo, Bosnia and Herzegovina
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#A8C3A1]">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg text-[#2D2D2D] dark:text-[#f6edf0]">Contact</h4>
                  <p className="text-[#2D2D2D]/70 dark:text-[#cabdc5]">+387 XX XXX XXX</p>
                  <p className="text-[#2D2D2D]/70 dark:text-[#cabdc5]">info@vjetrenjaca.ba</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFE5D9]">
                  <Clock3 className="h-5 w-5 text-[#2D2D2D]" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg text-[#2D2D2D] dark:text-[#f6edf0]">Opening Hours</h4>
                  <p className="text-[#2D2D2D]/70 dark:text-[#cabdc5]">Mon - Fri: 8:00 - 20:00</p>
                  <p className="text-[#2D2D2D]/70 dark:text-[#cabdc5]">Sat: 9:00 - 18:00</p>
                  <p className="text-[#2D2D2D]/70 dark:text-[#cabdc5]">Sun: 10:00 - 16:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.015, y: -1 }}
                whileTap={{ scale: 0.99 }}
                href="#"
                className="flex items-center gap-2 rounded-full bg-[#A8C3A1] px-6 py-3 text-white shadow-lg transition-shadow hover:shadow-xl dark:bg-[#d6e7ce] dark:text-[#1c171c]"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.015, y: -1 }}
                whileTap={{ scale: 0.99 }}
                href="tel:+387000000000"
                className="flex items-center gap-2 rounded-full bg-[#F7D9E3] px-6 py-3 text-[#2D2D2D] shadow-lg transition-shadow hover:shadow-xl dark:bg-[#352932] dark:text-[#f6edf0]"
              >
                <Phone className="h-4 w-4" />
                Call Shop
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-[#eadbe0] bg-[#fff6f1] p-6 shadow-[0_24px_80px_rgba(121,94,108,0.1)] dark:border-white/10 dark:bg-[#221d22] sm:p-8"
          >
            <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-[#f7d9e3]/40 blur-3xl dark:bg-[#5f4151]/35" />
            <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-[#dcead7]/60 blur-3xl dark:bg-[#4b6048]/30" />
            <div className="relative flex h-full min-h-[420px] flex-col justify-between rounded-[1.75rem] border border-white/70 bg-white/65 p-6 backdrop-blur dark:border-white/10 dark:bg-white/6 sm:min-h-[500px] sm:p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#8d7982] dark:text-[#b59faa]">In-shop experience</p>
                <h3 className="mt-4 text-3xl leading-none text-[#2d2d2d] dark:text-[#f6edf0] sm:text-4xl">
                  Walk in for quick picks or book a floral consult.
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-[#675f64] dark:text-[#cabdc5]">
                  Ideal for wedding styling, event florals, or custom gift bouquets when you want to review palette and mood in person.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[#fff4ef] p-5 dark:bg-[#2a2329]">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#9a818c] dark:text-[#bba6b0]">Quick stop</p>
                  <p className="mt-3 text-2xl text-[#2d2d2d] dark:text-[#f6edf0]">Fresh wrap counter</p>
                </div>
                <div className="rounded-[1.5rem] bg-[#edf5ea] p-5 dark:bg-[#233026]">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#7f8f7d] dark:text-[#b8cfb1]">By request</p>
                  <p className="mt-3 text-2xl text-[#2d2d2d] dark:text-[#f6edf0]">Event and bridal planning</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
