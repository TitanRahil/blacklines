import { ServiceCategory, FAQItem } from './types';

export const BRAND_NAME = "BLACKLINES";
export const BRAND_SUBTITLE = "Motorsport";

// Using picsum images to simulate the aesthetic. 
// In a real app, these would be specific assets.
export const HERO_IMAGE = "https://picsum.photos/id/111/1920/1080"; // Dark car vibe

export const SERVICE_DATA: Record<string, ServiceCategory> = {
  "engine-tuning": {
    id: "engine-tuning",
    title: "Engine Tuning",
    shortDescription: "Unlock the true potential of your Japanese machine.",
    fullDescription: "Our engine tuning philosophy is built on balance and endurance. We don't just chase peak horsepower; we engineer usable power curves for street and track dominance. Using state-of-the-art dyno dynamics, we calibrate ECUs to perfection.",
    heroImage: "https://picsum.photos/id/1071/1600/900",
    subCategories: [
      {
        title: "Stage 1 Remap",
        description: "Software optimization for stock hardware. Improved throttle response and efficiency.",
        image: "https://picsum.photos/id/1/600/400"
      },
      {
        title: "Turbo Upgrades",
        description: "Bolt-on turbocharger kits for massive gains in top-end power.",
        image: "https://picsum.photos/id/250/600/400"
      },
      {
        title: "Internals Forging",
        description: "Strengthening pistons and rods to handle extreme boost pressures.",
        image: "https://picsum.photos/id/305/600/400"
      }
    ]
  },
  "wheels": {
    id: "wheels",
    title: "Wheels",
    shortDescription: "Stance, grip, and lightweight performance.",
    fullDescription: "Wheels are the ultimate expression of style and performance. We curate a selection of authentic Japanese forged wheels designed to reduce unsprung weight while providing the structural integrity needed for the track.",
    heroImage: "https://picsum.photos/id/171/1600/900",
    subCategories: [
      {
        title: "Spider Wheels",
        description: "Aggressive multi-spoke designs inspired by GT racing.",
        image: "https://picsum.photos/id/146/600/400"
      },
      {
        title: "Forged Wheels",
        description: "Monoblock forged aluminum for the ultimate strength-to-weight ratio.",
        image: "https://picsum.photos/id/364/600/400"
      },
      {
        title: "Track Wheels",
        description: "Durable, lightweight options specifically designed for slick tires.",
        image: "https://picsum.photos/id/526/600/400"
      }
    ]
  },
  "wraps": {
    id: "wraps",
    title: "Wraps & PPF",
    shortDescription: "Transform and protect your vehicle's aesthetic.",
    fullDescription: "Using premium materials from 3M and Avery Dennison, our master installers provide seamless color changes and paint protection films. Whether for show or stealth, we ensure a paint-like finish.",
    heroImage: "https://picsum.photos/id/366/1600/900",
    subCategories: [
      {
        title: "Matte Wrap",
        description: "Non-reflective finish for a stealth, under-the-radar look.",
        image: "https://picsum.photos/id/203/600/400"
      },
      {
        title: "Metallic Wrap",
        description: "Deep flake metallic options that shine under streetlights.",
        image: "https://picsum.photos/id/352/600/400"
      },
      {
        title: "Satin Wrap",
        description: "The perfect middle ground between matte and gloss. Silky texture.",
        image: "https://picsum.photos/id/402/600/400"
      },
      {
        title: "Carbon Fiber Wrap",
        description: "Realistic textured carbon fiber accents for hoods and roofs.",
        image: "https://picsum.photos/id/531/600/400"
      }
    ]
  },
  "spoilers": {
    id: "spoilers",
    title: "Spoilers & Aero",
    shortDescription: "Downforce and stability for high-speed driving.",
    fullDescription: "Aerodynamics is not just for looks. Our functional aero parts are wind-tunnel tested to provide real downforce, keeping your car planted at high speeds.",
    heroImage: "https://picsum.photos/id/628/1600/900",
    subCategories: [
      {
        title: "Sport Spoiler",
        description: "Subtle enhancements that follow body lines.",
        image: "https://picsum.photos/id/669/600/400"
      },
      {
        title: "Track Wing",
        description: "High-mount adjustable GT wings for maximum downforce.",
        image: "https://picsum.photos/id/839/600/400"
      },
      {
        title: "OEM+ Spoiler",
        description: "Factory-style upgrades for a cleaner, refined appearance.",
        image: "https://picsum.photos/id/955/600/400"
      }
    ]
  },
  "side-skirts": {
    id: "side-skirts",
    title: "Side Skirts",
    shortDescription: "Lower your profile and manage airflow.",
    fullDescription: "Complete the ground effects package with our precision-molded side skirts. Designed to prevent high-pressure air from rolling under the chassis.",
    heroImage: "https://picsum.photos/id/106/1600/900",
    subCategories: [
      {
        title: "Carbon Extensions",
        description: "Flat bottom extensions for a race-inspired look.",
        image: "https://picsum.photos/id/119/600/400"
      },
      {
        title: "Widebody Skirts",
        description: "Integrated skirts for widebody fender kits.",
        image: "https://picsum.photos/id/133/600/400"
      }
    ]
  },
  "interiors": {
    id: "interiors",
    title: "Interiors",
    shortDescription: "Luxury meets driver-focused ergonomics.",
    fullDescription: "The cockpit is where you connect with the machine. We offer complete reupholstery services and racing seat installations to keep you comfortable and secure.",
    heroImage: "https://picsum.photos/id/1060/1600/900",
    subCategories: [
      {
        title: "Black Leather Interior",
        description: "Classic, premium Nappa leather with contrast stitching.",
        image: "https://picsum.photos/id/1081/600/400"
      },
      {
        title: "White Leather Interior",
        description: "Bold, pristine white leather for a VIP style finish.",
        image: "https://picsum.photos/id/114/600/400"
      },
      {
        title: "Alcantara Interior",
        description: "Suede-like grip for steering wheels, dashes, and seats.",
        image: "https://picsum.photos/id/296/600/400"
      }
    ]
  }
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you offer warranties on tuning work?",
    answer: "Yes, all our in-house ECU calibrations come with a lifetime software warranty. Hardware installations carry the specific manufacturer's warranty plus a 1-year labor guarantee."
  },
  {
    question: "Can I bring my own parts for installation?",
    answer: "We prefer to source parts to ensure authenticity and quality. However, we can install client-supplied parts after a rigorous inspection, subject to a varied labor rate."
  },
  {
    question: "How long does a full wrap take?",
    answer: "A standard color change wrap typically takes 3-5 business days. This allows for proper disassembly, cleaning, installation, and post-heat curing."
  },
  {
    question: "Do you work on European cars?",
    answer: "While our heritage is Japanese Motorsport (JDM), our engineering principles apply to all platforms. We have extensive experience with German and Italian high-performance vehicles."
  }
];