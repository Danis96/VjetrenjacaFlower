import { useEffect, useState } from "react";
import { HeroSection } from "./components/hero-section";
import { FeaturedFlowers } from "./components/featured-flowers";
import { BouquetDesignerSection } from "./components/bouquet-designer-section";
import { AboutSection } from "./components/about-section";
import { OccasionsSection } from "./components/occasions-section";
import { GallerySection } from "./components/gallery-section";
import { LocationSection } from "./components/location-section";
import { ReviewsSection } from "./components/reviews-section";
import { Footer } from "./components/footer";
import { ThemeToggle } from "./components/theme-toggle";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("vjetrenjaca-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="fixed right-4 top-4 z-50 md:right-6 md:top-6">
        <ThemeToggle
          theme={theme}
          onToggle={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
        />
      </div>
      <HeroSection />
      <FeaturedFlowers />
      <BouquetDesignerSection />
      <AboutSection />
      <OccasionsSection />
      <GallerySection />
      <LocationSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}
