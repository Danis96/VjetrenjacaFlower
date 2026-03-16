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
import { LanguageToggle } from "./components/language-toggle";
import { content, defaultLanguage, type Language } from "./content";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem("vjetrenjaca-language");
    return savedLanguage === "en" || savedLanguage === "bs" ? savedLanguage : defaultLanguage;
  });

  const currentContent = content[language];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("vjetrenjaca-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = currentContent.meta.htmlLang;
    document.title = currentContent.meta.title;
    window.localStorage.setItem("vjetrenjaca-language", language);
  }, [currentContent.meta.htmlLang, currentContent.meta.title, language]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="fixed right-4 top-4 z-50 flex flex-col items-end gap-3 md:right-6 md:top-6">
        <LanguageToggle
          language={language}
          onChange={setLanguage}
          ariaLabel={currentContent.controls.switchLanguage}
        />
        <ThemeToggle
          theme={theme}
          onToggle={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
          labels={currentContent.controls}
        />
      </div>
      <HeroSection content={currentContent} />
      <FeaturedFlowers content={currentContent} />
      <BouquetDesignerSection content={currentContent} />
      <AboutSection content={currentContent} />
      <OccasionsSection content={currentContent} />
      <GallerySection content={currentContent} />
      <LocationSection content={currentContent} />
      <ReviewsSection content={currentContent} />
      <Footer content={currentContent} />
    </div>
  );
}
