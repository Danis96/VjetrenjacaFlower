import { Cake, Gift, GraduationCap, Heart, Leaf, Sparkles, Flower2 } from "lucide-react";

export type Language = "en" | "bs";

export const defaultLanguage: Language = "bs";

export const languages = [
  { code: "en" as const, label: "EN" },
  { code: "bs" as const, label: "BS" }
];

export const content = {
  en: {
    meta: {
      htmlLang: "en",
      title: "Vjetrenjaca"
    },
    controls: {
      switchLanguage: "Switch language",
      switchThemeToLight: "Switch to light theme",
      switchThemeToDark: "Switch to dark theme",
      lightMode: "Light mode",
      darkMode: "Dark mode"
    },
    nav: {
      bouquets: "Bouquets",
      customDesign: "Custom Design",
      visit: "Visit"
    },
    hero: {
      eyebrow: "Flower studio in Sarajevo",
      brand: "Cvjecara Vjetrenjaca Margareta",
      badge: "Seasonal flowers, beautifully wrapped",
      title: "Flowers arranged with warmth, elegance, and intention.",
      description:
        "From everyday bouquets to meaningful gifts and wedding florals, each arrangement is designed to feel personal, polished, and quietly memorable.",
      primaryCta: "Order a Signature Bouquet",
      secondaryCta: "Design Your Bouquet",
      highlights: [
        ["Same-day bouquets", "Fresh stems styled and wrapped throughout the day"],
        ["Wedding florals", "Bouquets, table pieces, and ceremony details"],
        ["Thoughtful finishing", "Handwritten cards, ribbons, and gift-ready wrapping"]
      ],
      heroImageAlt: "Soft pink bouquet",
      weeklyLabel: "This week",
      weeklyTitle: "Peonies, garden roses, and sweet avalanche",
      weeklyDescription:
        "Finished in silk wrap with layered ribbon and fresh greenery for a softer, romantic silhouette.",
      floatingNote: "Conditioned fresh every morning"
    },
    featured: {
      eyebrow: "Signature Collection",
      title: "Bouquets with a softer silhouette and a refined romantic feel.",
      intro:
        "Created for gifts, celebrations, dinner tables, and the kind of gesture that deserves something more considered than the ordinary.",
      handTied: "Hand tied",
      flowers: [
        {
          id: 1,
          name: "Blush Poetry",
          price: "45 KM",
          note: "Roses, lisianthus, and eucalyptus",
          image:
            "https://images.unsplash.com/photo-1588385494080-201c47faad95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        },
        {
          id: 2,
          name: "Ivory Morning",
          price: "120 KM",
          note: "Wedding-inspired whites",
          image:
            "https://images.unsplash.com/photo-1505046430430-7b035179ad30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        },
        {
          id: 3,
          name: "Spring Studio",
          price: "35 KM",
          note: "Seasonal colour study",
          image:
            "https://images.unsplash.com/photo-1773206022502-c3c82e6d0b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        },
        {
          id: 4,
          name: "Velvet Gift Box",
          price: "65 KM",
          note: "Layered florals in a keepsake box",
          image:
            "https://images.unsplash.com/photo-1767510533183-425731f088a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        }
      ],
      floristNoteEyebrow: "Florist's note",
      floristNoteTitle: "Looking for something more personal?",
      floristNoteDescription:
        "We tailor colour palette, bouquet size, wrapping style, and finishing details for birthdays, anniversaries, apologies, engagements, and weddings.",
      floristNoteCta: "Create a Custom Bouquet",
      cartLabel: "Add bouquet to cart"
    },
    designer: {
      badge: "Design Your Bouquet",
      title: "Build a bouquet that feels made for one exact moment.",
      description:
        "Choose the colour mood, flower style, wrapping, and finishing touches. We bring it together by hand into an arrangement that feels complete.",
      studioEyebrow: "Arrange the stems",
      studioTitle: "Drag flowers into the bouquet",
      dragHint: "Press and drag any flower card into the bouquet area, then reposition stems until the shape feels right.",
      dragAction: "Drag to bouquet",
      canvasLabel: "Bouquet canvas",
      emptyHint: "Layer stems, rebalance the silhouette, and build your own composition.",
      emptyState: "Your bouquet starts here. Drag flowers from the palette and drop them onto the canvas.",
      stemCountLabel: "stems",
      removeFlower: "Remove flower",
      selectedFlowerLabel: "Selected stem",
      selectedFlowerEmpty: "Select a flower in the bouquet to rotate or remove it.",
      rotateLeft: "Rotate left",
      rotateRight: "Rotate right",
      rotateHint: "Fine-tune the angle until the bouquet feels balanced.",
      finishEyebrow: "Choose the finish",
      finishTitle: "Vase or wrapping",
      finishHint: "Pick how the arrangement should be presented and preview it on the board.",
      resetCta: "Reset bouquet",
      orderSummaryEyebrow: "Custom bouquet summary",
      orderSummaryTitle: "Order this arrangement",
      basePriceLabel: "Base arrangement",
      flowersPriceLabel: "Flowers added",
      finishPriceLabel: "Finish selected",
      totalPriceLabel: "Estimated total",
      quickOrderCta: "Quick order this bouquet",
      quickOrderHint: "Opens your email app with your bouquet summary ready to send.",
      orderSubject: "Custom bouquet order",
      orderIntro: "Hello, I would like to order this custom bouquet:",
      orderBaseLine: "Base arrangement",
      orderFlowersLine: "Flowers",
      orderFinishLine: "Finish",
      orderTotalLine: "Estimated total",
      orderClosing: "Please contact me to confirm availability and delivery.",
      basePriceValue: 5,
      steps: [
        {
          title: "Choose the mood",
          description: "Soft blush, garden-inspired, elegant white, or warm sunset tones."
        },
        {
          title: "Select your flowers",
          description: "Peonies, roses, tulips, ranunculus, eucalyptus, and seasonal accents."
        },
        {
          title: "Finish the details",
          description: "Ribbon, premium paper, a handwritten card, and vase styling if desired."
        }
      ],
      tags: ["Blush & cream", "Wild garden", "Luxury white", "Sunny pastel", "Ribbon note"],
      recipeEyebrow: "Suggested selection",
      catalogEyebrow: "Flower catalog",
      catalogTitle: "Choose up to four flowers first",
      catalogHint: "Build your palette before arranging. Only selected flowers can be dragged onto the bouquet board.",
      catalogSelectedLabel: "selected",
      catalogMaxLabel: "Max 4 flowers",
      selectFlowerCta: "Select flower",
      selectedFlowerCta: "Selected",
      draggableEyebrow: "Selected flowers",
      draggableTitle: "Drag your chosen stems",
      draggableHint: "Press and drag only from your selected flowers below.",
      draggableEmpty: "Select up to four flowers from the catalog to unlock dragging.",
      options: [
        {
          label: "Garden Rose",
          note: "Full romantic rose",
          icon: Flower2,
          price: 12,
          image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          imageAlt: "Single garden rose"
        },
        {
          label: "Parrot Tulip",
          note: "Airy sculpted petals",
          icon: Sparkles,
          price: 9,
          image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          imageAlt: "Single parrot tulip"
        },
        {
          label: "Silver Dollar Eucalyptus",
          note: "Soft green branching stem",
          icon: Leaf,
          price: 7,
          image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          imageAlt: "Single eucalyptus stem"
        },
        {
          label: "Blush Peony",
          note: "Rounded luxury bloom",
          icon: Flower2,
          price: 14,
          image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          imageAlt: "Single blush peony"
        },
        {
          label: "White Lisianthus",
          note: "Soft layered white bloom",
          icon: Sparkles,
          price: 11,
          image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          imageAlt: "Single white lisianthus"
        },
        {
          label: "Ranunculus",
          note: "Tight layered petals",
          icon: Flower2,
          price: 13,
          image: "https://images.unsplash.com/photo-1469259943454-aa100abba749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          imageAlt: "Single ranunculus flower"
        }
      ],
      finishes: [
        { id: "none", label: "No finish", note: "Only the bouquet silhouette", price: 0 },
        { id: "paper", label: "Premium paper", note: "Soft wrapped bouquet", price: 6 },
        { id: "vase", label: "Glass vase", note: "Display-ready arrangement", price: 14 }
      ],
      included: "Included",
      priceEyebrow: "From sketch to bouquet",
      price: "75 KM",
      priceDescription:
        "Starting price for a medium custom bouquet with premium wrapping and a handwritten card.",
      cta: "Start Your Bouquet"
    },
    about: {
      imageAlt: "Flower arrangement in the shop",
      inShopEyebrow: "In the shop",
      inShopTitle: "Daily selection",
      inShopDescription:
        "Each morning we arrange the front table with the stems that look freshest, most balanced, and most full of life.",
      eyebrow: "Our Story",
      title: "A neighbourhood florist with a gentle point of view.",
      paragraphOne:
        "Vjetrenjaca is shaped around soft colour, fresh texture, and floral work that feels carefully composed rather than mass-produced.",
      paragraphTwo:
        "We prepare bouquets for everyday gifting, romantic gestures, weddings, and events, but the heart of the shop remains the same: beautiful flowers, wrapped with care and given with meaning.",
      pillars: [
        { icon: Heart, title: "Hand arranged", text: "Every bouquet is finished by the florist's own hand." },
        { icon: Leaf, title: "Season led", text: "The best stems change with the week and the weather." },
        { icon: Sparkles, title: "Gift ready", text: "Cards, wrapping, and vase add-ons are available." }
      ]
    },
    occasions: {
      eyebrow: "Occasion Styling",
      title: "Designed around the feeling, not only the event.",
      description:
        "Every occasion asks for a different floral language. These collections keep the mood clear, elegant, and intentional.",
      items: [
        { id: 1, icon: Heart, title: "Romantic", description: "Blush tones, ribbons, and soft drama.", color: "#F7D9E3" },
        { id: 2, icon: Sparkles, title: "Weddings", description: "Bouquets, tables, and ceremony styling.", color: "#FFE5D9" },
        { id: 3, icon: Cake, title: "Birthdays", description: "Joyful colour stories with beautiful wrapping.", color: "#E6D9F2" },
        { id: 4, icon: GraduationCap, title: "Celebrations", description: "Elegant florals for meaningful milestones.", color: "#A8C3A1" },
        { id: 5, icon: Gift, title: "Thank You", description: "Polished gestures with handwritten notes.", color: "#FFE5D9" },
        { id: 6, icon: Leaf, title: "Sympathy", description: "Quiet, respectful, understated design.", color: "#A8C3A1" }
      ]
    },
    gallery: {
      eyebrow: "Gallery",
      title: "A closer look at the floral atmosphere.",
      description: "Bouquets, event styling, and small in-shop moments collected in one calm visual story.",
      images: [
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
          alt: "Seasonal bouquet"
        },
        {
          id: 8,
          src: "https://images.unsplash.com/photo-1767510533183-425731f088a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmbG93ZXIlMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc3MzY1MDIyOXww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Gift box with flowers"
        }
      ]
    },
    location: {
      eyebrow: "Visit the Shop",
      title: "Stop by for fresh stems, a gift bouquet, or a custom floral consultation.",
      description:
        "A calm, welcoming place for choosing flowers in person, discussing an event palette, or ordering something made especially for the occasion.",
      name: "Cvjecara Vjetrenjaca Margareta",
      city: "Sarajevo, Bosnia and Herzegovina",
      contactTitle: "Contact",
      openingHoursTitle: "Opening Hours",
      hours: ["Monday - Friday: 8:00 - 20:00", "Saturday: 9:00 - 18:00", "Sunday: 10:00 - 16:00"],
      directions: "Get Directions",
      call: "Call the Shop",
      experienceEyebrow: "In-shop experience",
      experienceTitle: "Walk in for a quick bouquet or book a floral consultation.",
      experienceDescription:
        "Ideal for weddings, event styling, and custom gifting when you want to review colour palette, flower selection, and mood in person.",
      quickStopEyebrow: "Quick visit",
      quickStopTitle: "Fresh wrap counter",
      byRequestEyebrow: "By request",
      byRequestTitle: "Event and bridal planning"
    },
    reviews: {
      eyebrow: "Reviews",
      title: "What stays with people is how the flowers made them feel.",
      description: "A few customer notes, presented simply and without embellishment.",
      previous: "Previous review",
      next: "Next review",
      goTo: "Go to review",
      items: [
        {
          id: 1,
          name: "Amira Hadzic",
          text: "The most beautiful bouquets in Sarajevo. Everything is always fresh, elegant, and thoughtfully arranged. I especially recommend them for weddings.",
          rating: 5
        },
        {
          id: 2,
          name: "Selma Kovac",
          text: "Professional service and gorgeous flowers. Vjetrenjaca is my first choice for every important occasion.",
          rating: 5
        },
        {
          id: 3,
          name: "Emir Softic",
          text: "I ordered an anniversary bouquet and my wife was genuinely delighted. Beautiful work and excellent service.",
          rating: 5
        },
        {
          id: 4,
          name: "Lejla Begic",
          text: "The best florist in the city. Margareta always knows what to recommend and every bouquet feels special.",
          rating: 5
        }
      ]
    },
    footer: {
      eyebrow: "Floral invitations",
      title: "Let the next bouquet feel more personal.",
      cta: "Design Your Bouquet",
      description:
        "A Sarajevo flower studio for gifts, weddings, and everyday moments that deserve beautiful flowers.",
      quickLinksTitle: "Quick Links",
      quickLinks: ["Home", "Collections", "Design Your Bouquet", "Visit the Shop", "Contact"],
      contactTitle: "Contact",
      openingHoursTitle: "Opening Hours",
      hours: ["Monday - Friday", "Saturday", "Sunday"],
      hourValues: ["8:00 - 20:00", "9:00 - 18:00", "10:00 - 16:00"],
      copyright: "© 2026 Cvjecara Vjetrenjaca Margareta. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  bs: {
    meta: {
      htmlLang: "bs",
      title: "Vjetrenjaca"
    },
    controls: {
      switchLanguage: "Promijeni jezik",
      switchThemeToLight: "Prebaci na svijetlu temu",
      switchThemeToDark: "Prebaci na tamnu temu",
      lightMode: "Svijetla tema",
      darkMode: "Tamna tema"
    },
    nav: {
      bouquets: "Buketi",
      customDesign: "Po mjeri",
      visit: "Posjeta"
    },
    hero: {
      eyebrow: "Cvjetni studio u Sarajevu",
      brand: "Cvjećara Vjetrenjača Margareta",
      badge: "Sezonsko cvijeće, pažljivo i elegantno upakovano",
      title: "Cvijeće aranžirano s toplinom, elegancijom i mjerom.",
      description:
        "Od svakodnevnih buketa do poklona s razlogom i svadbenih aranžmana, svaka kompozicija nastaje da djeluje lično, profinjeno i dugo pamtljivo.",
      primaryCta: "Naručite signature buket",
      secondaryCta: "Kreirajte svoj buket",
      highlights: [
        ["Buketi isti dan", "Svježe cvijeće aranžirano i umotano tokom dana"],
        ["Svadbeno cvijeće", "Buketi, stolni aranžmani i detalji za ceremoniju"],
        ["Pažljiv završni dojam", "Rukom pisane poruke, mašne i poklon-pakovanje"]
      ],
      heroImageAlt: "Nježni ružičasti buket",
      weeklyLabel: "Ove sedmice",
      weeklyTitle: "Božuri, vrtne ruže i sweet avalanche",
      weeklyDescription:
        "Završeno svilenim omotom, slojevitom mašnom i svježim zelenilom za nježniju, romantičnu siluetu.",
      floatingNote: "Svježe pripremljeno svakog jutra"
    },
    featured: {
      eyebrow: "Signature kolekcija",
      title: "Buketi nježnije siluete i profinjenog romantičnog izraza.",
      intro:
        "Kreirani za poklone, proslave, svečane stolove i one geste koje zaslužuju nešto pažljivije od običnog buketa.",
      handTied: "Ručno vezano",
      flowers: [
        {
          id: 1,
          name: "Blush Poetry",
          price: "45 KM",
          note: "Ruže, lizijantus i eukaliptus",
          image:
            "https://images.unsplash.com/photo-1588385494080-201c47faad95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        },
        {
          id: 2,
          name: "Ivory Morning",
          price: "120 KM",
          note: "Bijela paleta inspirisana vjenčanjima",
          image:
            "https://images.unsplash.com/photo-1505046430430-7b035179ad30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        },
        {
          id: 3,
          name: "Spring Studio",
          price: "35 KM",
          note: "Sezonska igra boja",
          image:
            "https://images.unsplash.com/photo-1773206022502-c3c82e6d0b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        },
        {
          id: 4,
          name: "Velvet Gift Box",
          price: "65 KM",
          note: "Slojeviti aranžman u poklon-kutiji",
          image:
            "https://images.unsplash.com/photo-1767510533183-425731f088a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        }
      ],
      floristNoteEyebrow: "Bilješka floristice",
      floristNoteTitle: "Želite nešto još ličnije?",
      floristNoteDescription:
        "Prilagođavamo paletu boja, veličinu buketa, način pakovanja i završne detalje za rođendane, godišnjice, izvinjenja, zaruke i vjenčanja.",
      floristNoteCta: "Kreirajte buket po mjeri",
      cartLabel: "Dodajte buket"
    },
    designer: {
      badge: "Kreirajte svoj buket",
      title: "Sastavite buket koji je stvoren za jedan poseban trenutak.",
      description:
        "Odaberite raspoloženje boja, vrstu cvijeća, pakovanje i završne detalje. Mi sve povezujemo ručno u skladan i zaokružen aranžman.",
      studioEyebrow: "Aranžirajte stabljike",
      studioTitle: "Prevucite cvijeće u buket",
      dragHint: "Pritisnite i prevucite bilo koji cvijet u prostor buketa, zatim pomjerajte stabljike dok kompozicija ne djeluje skladno.",
      dragAction: "Prevuci u buket",
      canvasLabel: "Platno buketa",
      emptyHint: "Slažite stabljike, balansirajte siluetu i kreirajte vlastitu kompoziciju.",
      emptyState: "Vaš buket počinje ovdje. Prevucite cvijeće iz palete i spustite ga na platno.",
      stemCountLabel: "stabljika",
      removeFlower: "Ukloni cvijet",
      selectedFlowerLabel: "Odabrana stabljika",
      selectedFlowerEmpty: "Odaberite cvijet u buketu da ga rotirate ili uklonite.",
      rotateLeft: "Rotiraj lijevo",
      rotateRight: "Rotiraj desno",
      rotateHint: "Podesite ugao dok kompozicija ne djeluje skladno.",
      finishEyebrow: "Odaberite završnicu",
      finishTitle: "Vaza ili pakovanje",
      finishHint: "Odaberite kako želite da aranžman bude predstavljen i pogledajte prikaz na platnu.",
      resetCta: "Resetuj buket",
      orderSummaryEyebrow: "Sažetak buketa po mjeri",
      orderSummaryTitle: "Naručite ovaj aranžman",
      basePriceLabel: "Osnova aranžmana",
      flowersPriceLabel: "Dodano cvijeće",
      finishPriceLabel: "Odabrana završnica",
      totalPriceLabel: "Procijenjena cijena",
      quickOrderCta: "Brza narudžba buketa",
      quickOrderHint: "Otvara vaš email s već pripremljenim sažetkom buketa.",
      orderSubject: "Narudžba buketa po mjeri",
      orderIntro: "Pozdrav, želim naručiti ovaj buket po mjeri:",
      orderBaseLine: "Osnova aranžmana",
      orderFlowersLine: "Cvijeće",
      orderFinishLine: "Završnica",
      orderTotalLine: "Procijenjena cijena",
      orderClosing: "Molim vas da me kontaktirate radi potvrde dostupnosti i dostave.",
      basePriceValue: 5,
      steps: [
        {
          title: "Odaberite ugođaj",
          description: "Nježna rumena paleta, vrtni stil, elegantna bijela ili topli tonovi zalaska."
        },
        {
          title: "Izaberite cvijeće",
          description: "Božuri, ruže, tulipani, ranunkule, eukaliptus i sezonski akcenti."
        },
        {
          title: "Dodajte završne detalje",
          description: "Mašna, premium papir, rukom pisana poruka i vaza po želji."
        }
      ],
      tags: ["Puderasto i krem", "Divlji vrt", "Luksuzna bijela", "Sunčani pastel", "Poruka s mašnom"],
      recipeEyebrow: "Predložena kombinacija",
      catalogEyebrow: "Katalog cvijeća",
      catalogTitle: "Prvo odaberite do četiri cvijeta",
      catalogHint: "Prvo složite svoju paletu. Samo odabrano cvijeće se može prevući na platno buketa.",
      catalogSelectedLabel: "odabrano",
      catalogMaxLabel: "Maksimalno 4 cvijeta",
      selectFlowerCta: "Odaberi cvijet",
      selectedFlowerCta: "Odabrano",
      draggableEyebrow: "Odabrano cvijeće",
      draggableTitle: "Prevucite izabrane stabljike",
      draggableHint: "Pritisnite i prevucite samo cvijeće koje ste prethodno odabrali.",
      draggableEmpty: "Odaberite do četiri cvijeta iz kataloga da otključate prevlačenje.",
      options: [
        {
          label: "Garden Rose",
          note: "Puna romantična ruža",
          icon: Flower2,
          price: 12,
          image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          imageAlt: "Jedna garden ruža"
        },
        {
          label: "Parrot Tulip",
          note: "Prozračne skulpturalne latice",
          icon: Sparkles,
          price: 9,
          image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          imageAlt: "Jedan papagaj tulipan"
        },
        {
          label: "Silver Dollar Eucalyptus",
          note: "Nježna zelena razgranata stabljika",
          icon: Leaf,
          price: 7,
          image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          imageAlt: "Jedna stabljika eukaliptusa"
        },
        {
          label: "Blush Peony",
          note: "Raskošan puni cvat",
          icon: Flower2,
          price: 14,
          image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          imageAlt: "Jedan rumeni božur"
        },
        {
          label: "White Lisianthus",
          note: "Nježan slojeviti bijeli cvijet",
          icon: Sparkles,
          price: 11,
          image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          imageAlt: "Jedan bijeli lizijantus"
        },
        {
          label: "Ranunculus",
          note: "Guste slojevite latice",
          icon: Flower2,
          price: 13,
          image: "https://images.unsplash.com/photo-1469259943454-aa100abba749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          imageAlt: "Jedan ranunkulus"
        }
      ],
      finishes: [
        { id: "none", label: "Bez završnice", note: "Samo silueta buketa", price: 0 },
        { id: "paper", label: "Premium papir", note: "Nježno umotan buket", price: 6 },
        { id: "vase", label: "Staklena vaza", note: "Aranžman spreman za izlaganje", price: 14 }
      ],
      included: "Uključeno",
      priceEyebrow: "Od ideje do buketa",
      price: "75 KM",
      priceDescription:
        "Početna cijena za srednji buket po mjeri s premium pakovanjem i rukom pisanom porukom.",
      cta: "Započnite svoj buket"
    },
    about: {
      imageAlt: "Cvjetni aranžman u cvjećari",
      inShopEyebrow: "U cvjećari",
      inShopTitle: "Dnevni odabir",
      inShopDescription:
        "Svako jutro uređujemo prednji sto cvijećem koje tog dana izgleda najsvježije, najskladnije i najživlje.",
      eyebrow: "Naša priča",
      title: "Komšijska cvjećara s nježnijim pogledom na floristiku.",
      paragraphOne:
        "Vjetrenjača je oblikovana oko blagih tonova, svježe teksture i aranžmana koji djeluju promišljeno, a ne serijski.",
      paragraphTwo:
        "Pripremamo bukete za svakodnevne poklone, romantične geste, vjenčanja i događaje, ali srce cvjećare ostaje isto: lijepo cvijeće, pažljivo upakovano i predano s razlogom.",
      pillars: [
        { icon: Heart, title: "Ručno aranžirano", text: "Svaki buket završava se rukom floristice." },
        { icon: Leaf, title: "Vođeno sezonom", text: "Najljepše stabljike mijenjaju se iz sedmice u sedmicu." },
        { icon: Sparkles, title: "Spremno za poklon", text: "Dostupne su kartice, pakovanje i dodaci poput vaze." }
      ]
    },
    occasions: {
      eyebrow: "Cvjetni stil za svaku priliku",
      title: "Dizajnirano prema osjećaju, ne samo prema događaju.",
      description:
        "Svaka prilika traži drugačiji cvjetni jezik. Ove kolekcije čuvaju raspoloženje jasnim, elegantnim i promišljenim.",
      items: [
        { id: 1, icon: Heart, title: "Romantika", description: "Puderasti tonovi, mašne i nježna dramatika.", color: "#F7D9E3" },
        { id: 2, icon: Sparkles, title: "Vjenčanja", description: "Buketi, stolovi i cvjetni detalji za ceremoniju.", color: "#FFE5D9" },
        { id: 3, icon: Cake, title: "Rođendani", description: "Radosne palete boja i lijepo poklon-pakovanje.", color: "#E6D9F2" },
        { id: 4, icon: GraduationCap, title: "Proslave", description: "Elegantno cvijeće za važne životne trenutke.", color: "#A8C3A1" },
        { id: 5, icon: Gift, title: "Zahvalnost", description: "Uređene geste uz rukom pisane poruke.", color: "#FFE5D9" },
        { id: 6, icon: Leaf, title: "Sućut", description: "Mirna, dostojanstvena i nenametljiva forma.", color: "#A8C3A1" }
      ]
    },
    gallery: {
      eyebrow: "Galerija",
      title: "Pogled izbliza na naš cvjetni ambijent.",
      description: "Buketi, dekor za događaje i mali trenuci iz cvjećare u jednoj mirnoj vizuelnoj priči.",
      images: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1588385494080-201c47faad95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGluayUyMHJvc2UlMjBib3VxdWV0fGVufDF8fHx8MTc3MzY1MDIyOHww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Buket ruža"
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1719586901803-d3a5ef35b28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBmbG93ZXIlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczNjUwMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Enterijer cvjećare"
        },
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1505046430430-7b035179ad30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvd2VyJTIwYXJyYW5nZW1lbnQlMjB3aGl0ZXxlbnwxfHx8fDE3NzM2NTAyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Svadbeni aranžman"
        },
        {
          id: 4,
          src: "https://images.unsplash.com/photo-1593314519669-61d15f8ec983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBwZW9ueSUyMGFycmFuZ2VtZW50fGVufDF8fHx8MTc3MzY1MDIzMXww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Aranžman s božurima"
        },
        {
          id: 5,
          src: "https://images.unsplash.com/photo-1769812343860-1ec94c4dc4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2F0ZSUyMGZsb3JhbCUyMGRlY29yYXRpb24lMjBldmVudHxlbnwxfHx8fDE3NzM2NTAyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Cvjetna dekoracija"
        },
        {
          id: 6,
          src: "https://images.unsplash.com/photo-1770361516086-5c42022ecdbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHR1bGlwJTIwYm91cXVldCUyMHNwcmluZ3xlbnwxfHx8fDE3NzM2NTAyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Buket tulipana"
        },
        {
          id: 7,
          src: "https://images.unsplash.com/photo-1773206022502-c3c82e6d0b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjBzZWFzb25hbCUyMGZsb3dlcnMlMjBib3VxdWV0fGVufDF8fHx8MTc3MzY1MDIyOXww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Sezonski buket"
        },
        {
          id: 8,
          src: "https://images.unsplash.com/photo-1767510533183-425731f088a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmbG93ZXIlMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc3MzY1MDIyOXww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Poklon-kutija s cvijećem"
        }
      ]
    },
    location: {
      eyebrow: "Posjetite cvjećaru",
      title: "Svratite po svježe cvijeće, poklon-buket ili konsultaciju za aranžman po mjeri.",
      description:
        "Mirno i ugodno mjesto za odabir cvijeća uživo, dogovor za događaj ili narudžbu nečega što je posebno osmišljeno za priliku.",
      name: "Cvjećara Vjetrenjača Margareta",
      city: "Sarajevo, Bosna i Hercegovina",
      contactTitle: "Kontakt",
      openingHoursTitle: "Radno vrijeme",
      hours: ["Ponedjeljak - petak: 8:00 - 20:00", "Subota: 9:00 - 18:00", "Nedjelja: 10:00 - 16:00"],
      directions: "Kako do nas",
      call: "Pozovite cvjećaru",
      experienceEyebrow: "Iskustvo u cvjećari",
      experienceTitle: "Dođite po gotov buket ili rezervišite floralne konsultacije.",
      experienceDescription:
        "Idealno za vjenčanja, cvjetni styling događaja i poklone po mjeri kada želite zajedno uživo uskladiti boje, cvijeće i ugođaj.",
      quickStopEyebrow: "Brza posjeta",
      quickStopTitle: "Pult za svježe umotane bukete",
      byRequestEyebrow: "Po dogovoru",
      byRequestTitle: "Planiranje vjenčanja i događaja"
    },
    reviews: {
      eyebrow: "Utisci",
      title: "Ono što ljudima ostaje u sjećanju jeste osjećaj koji cvijeće nosi.",
      description: "Nekoliko iskrenih poruka kupaca, predstavljeno jednostavno i bez pretjerivanja.",
      previous: "Prethodni utisak",
      next: "Sljedeći utisak",
      goTo: "Idi na utisak",
      items: [
        {
          id: 1,
          name: "Amira Hadžić",
          text: "Najljepši buketi u Sarajevu. Sve je uvijek svježe, elegantno i s puno pažnje aranžirano. Posebno ih preporučujem za vjenčanja.",
          rating: 5
        },
        {
          id: 2,
          name: "Selma Kovač",
          text: "Profesionalna usluga i predivno cvijeće. Vjetrenjača je moj prvi izbor za svaku važnu priliku.",
          rating: 5
        },
        {
          id: 3,
          name: "Emir Softić",
          text: "Naručio sam buket za godišnjicu i supruga je bila iskreno oduševljena. Prelijep rad i odlična usluga.",
          rating: 5
        },
        {
          id: 4,
          name: "Lejla Begić",
          text: "Najbolja cvjećara u gradu. Margareta uvijek zna šta predložiti i svaki buket djeluje posebno.",
          rating: 5
        }
      ]
    },
    footer: {
      eyebrow: "Cvjetni poziv",
      title: "Neka sljedeći buket djeluje još ličnije.",
      cta: "Kreirajte svoj buket",
      description:
        "Sarajevski cvjetni studio za poklone, vjenčanja i svakodnevne trenutke koji zaslužuju lijepo cvijeće.",
      quickLinksTitle: "Brzi linkovi",
      quickLinks: ["Početna", "Kolekcije", "Kreirajte svoj buket", "Posjetite cvjećaru", "Kontakt"],
      contactTitle: "Kontakt",
      openingHoursTitle: "Radno vrijeme",
      hours: ["Ponedjeljak - petak", "Subota", "Nedjelja"],
      hourValues: ["8:00 - 20:00", "9:00 - 18:00", "10:00 - 16:00"],
      copyright: "© 2026 Cvjećara Vjetrenjača Margareta. Sva prava zadržana.",
      privacy: "Politika privatnosti",
      terms: "Uslovi korištenja"
    }
  }
} as const;

export type AppContent = (typeof content)[Language];
