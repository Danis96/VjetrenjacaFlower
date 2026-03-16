import { motion } from "motion/react";
import { Clock, Facebook, Flower2, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] px-4 pb-8 pt-20 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur dark:bg-white/4 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-white/50 dark:text-[#bdaab3]">Floral invitations</p>
              <h2 className="mt-3 text-4xl leading-none text-white sm:text-5xl">Let the next bouquet feel more personal.</h2>
            </div>
            <a
              href="#design-your-bouquet"
              className="inline-flex items-center justify-center rounded-full bg-[#F7D9E3] px-6 py-3 text-sm font-semibold text-[#2D2D2D] dark:bg-[#f1e7ec]"
            >
              Design Your Bouquet
            </a>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4 flex items-center gap-2">
              <Flower2 className="h-8 w-8 text-[#F7D9E3]" />
              <h3 className="text-2xl" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                Vjetrenjača
              </h3>
            </div>
            <p className="leading-relaxed text-white/70">
              Premium flower shop in Sarajevo, creating beautiful moments with fresh flowers and softer styling.
            </p>
            <div className="mt-6 flex gap-4">
              <motion.a
                whileHover={{ scale: 1.04, y: -1 }}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7D9E3] text-[#2D2D2D] transition-colors hover:bg-[#A8C3A1]"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04, y: -1 }}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7D9E3] text-[#2D2D2D] transition-colors hover:bg-[#A8C3A1]"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 transition-colors hover:text-[#F7D9E3]">
                  Home
                </a>
              </li>
              <li>
                <a href="#collections" className="text-white/70 transition-colors hover:text-[#F7D9E3]">
                  Collections
                </a>
              </li>
              <li>
                <a href="#design-your-bouquet" className="text-white/70 transition-colors hover:text-[#F7D9E3]">
                  Design Your Bouquet
                </a>
              </li>
              <li>
                <a href="#visit" className="text-white/70 transition-colors hover:text-[#F7D9E3]">
                  Visit Shop
                </a>
              </li>
              <li>
                <a href="#visit" className="text-white/70 transition-colors hover:text-[#F7D9E3]">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="mb-4 text-lg">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F7D9E3]" />
                <span className="text-white/70">
                  Sarajevo, Bosnia and Herzegovina
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F7D9E3]" />
                <span className="text-white/70">
                  +387 XX XXX XXX
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F7D9E3]" />
                <span className="text-white/70">
                  info@vjetrenjaca.ba
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="mb-4 flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-[#F7D9E3]" />
              Opening Hours
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-white/70">
                <span>Monday - Friday</span>
                <span>8:00 - 20:00</span>
              </li>
              <li className="flex justify-between text-white/70">
                <span>Saturday</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-white/70">
                <span>Sunday</span>
                <span>10:00 - 16:00</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/50">
              © 2026 Cvjećara Vjetrenjača – Margareta. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:justify-start md:gap-6">
              <a href="#" className="text-white/50 transition-colors hover:text-[#F7D9E3]">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 transition-colors hover:text-[#F7D9E3]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
