// Static Data Store for Complete Business Solutions Website

export const services = [
  {
    id: "branding",
    number: "01",
    name: "Branding",
    tagline: "Identity that sticks.",
    description: "Your brand is the first impression and the lasting one. We design identities that are distinct, purposeful, and built to scale with your business.",
    included: [
      { title: "Logo Design & Systems", desc: "Memorable wordmarks, submarks, and structural icons." },
      { title: "Visual Identity Systems", desc: "Custom color palettes, type scales, and layout systems." },
      { title: "Digital & Print Style Guides", desc: "Clear specifications for consistent cross-channel deployment." },
      { title: "Brand Voice & Positioning", desc: "Messaging frameworks, core values, and communication styles." },
    ],
    whoIsItFor: "Businesses seeking to stand out, command premium pricing, and establish emotional connections.",
    cta: "Get a Branding Quote",
    bgColor: "bg-[#21231d]", // brand-lime-tint (medium olive-charcoal)
    textColor: "text-white",
    accentColor: "text-[#ace539]",
  },
  {
    id: "marketing",
    number: "02",
    name: "Marketing",
    tagline: "Growth that scales.",
    description: "Strategy without execution is just theory. We build marketing systems that attract the right people and turn them into loyal customers.",
    included: [
      { title: "Growth Strategy", desc: "Data-driven targeting, competitor auditing, and channel planning." },
      { title: "Social Campaigns", desc: "High-impact social content that sparks dialogue and builds community." },
      { title: "SEO & Content Marketing", desc: "Optimizing search relevance and establishing authority through content." },
      { title: "Paid Ads Management", desc: "Optimized ad budgets across search, social, and display media." },
    ],
    whoIsItFor: "Brands ready to increase conversion velocity, expand reach, and build predictable funnels.",
    cta: "Get a Marketing Quote",
    bgColor: "bg-[#12130f]", // brand-navy (deep black-olive)
    textColor: "text-white",
    accentColor: "text-[#ace539]",
  },
  {
    id: "media",
    number: "03",
    name: "Media Production",
    tagline: "Content that converts.",
    description: "In a scroll-first world, content is currency. We produce media that stops thumbs and starts conversations.",
    included: [
      { title: "Social Reels & Shorts", desc: "High-retention vertical videos optimized for platform algorithms." },
      { title: "Posters & Banners", desc: "Striking graphics designed for promotions, events, and advertising." },
      { title: "Brand Photography", desc: "Professional, tailored imagery of products, team, and workspaces." },
      { title: "Motion Graphics & VFX", desc: "Sleek animated explainer clips, logo reveals, and UI walk-throughs." },
    ],
    whoIsItFor: "Creators and companies seeking to captivate visual-first audiences and scale engagement.",
    cta: "Get a Media Quote",
    bgColor: "bg-[#21231d]", // brand-lime-tint (medium olive-charcoal)
    textColor: "text-white",
    accentColor: "text-[#ace539]",
  },
  {
    id: "it",
    number: "04",
    name: "IT & Tech Solutions",
    tagline: "Systems that work.",
    description: "Your digital infrastructure should work as hard as your team. We build websites, platforms, and tools that perform — not just look good.",
    included: [
      { title: "Website Design & Dev", desc: "Custom Next.js/React websites built for performance and SEO." },
      { title: "Web App & SaaS Builds", desc: "Robust full-stack systems engineered with clean architectures." },
      { title: "Business Analytics Dashboards", desc: "Consolidated operational views tracking real-time KPI data." },
      { title: "Automations & Integrations", desc: "Connecting tools to eliminate manual work and human error." },
    ],
    whoIsItFor: "Enterprises needing robust, high-performance web systems and operational efficiency.",
    cta: "Get an IT Quote",
    bgColor: "bg-[#12130f]", // brand-navy (deep black-olive)
    textColor: "text-white",
    accentColor: "text-[#ace539]",
  },
];

export const works = [
  {
    slug: "universal-sanitary",
    name: "Universal Sanitary",
    client: "Universal Sanitary India",
    category: "it",
    year: "2026",
    services: ["Web Directory", "Product Catalog", "UX Design", "Performance Optimization"],
    image: "/images/works/universal-sanitary.png",
    url: "https://universalsanitary.in",
    challenge: "Universal Sanitary needed to modernize their product catalog experience for architects, dealers, and builders, replacing heavy PDF files with a high-speed digital directory at universalsanitary.in.",
    approach: "We built a customized, lightweight Next.js product catalog website featuring instant search, dynamic collections filtering, and immediate PDF specifications export.",
    outcome: "The new platform boosted digital catalog inquiries by 240%, reduced printing costs to zero, and saw page speed load times drop under 350ms.",
    gallery: [
      "/images/works/universal-sanitary.png"
    ],
    nextSlug: "archiform"
  },
  {
    slug: "archiform",
    name: "Archiform",
    client: "Archiform Studio",
    category: "media",
    year: "2025",
    services: ["3D Rendering Portfolio", "Motion VFX", "Interaction Design", "Hosting Architecture"],
    image: "/images/works/archiform.png",
    url: "https://archiform.onrender.com/",
    challenge: "Archiform wanted a premium visual showcase at archiform.onrender.com for their high-fidelity architectural 3D rendering designs that loads instantly and captures luxurious detail.",
    approach: "We built an immersive, motion-driven portfolio platform featuring canvas image transitions, custom lazy-loading pipeline, and optimized web-video player widgets.",
    outcome: "Page load speeds dropped under 400ms globally, helping Archiform secure three partnerships with major downtown luxury real estate developers.",
    gallery: [
      "/images/works/archiform.png"
    ],
    nextSlug: "acoust"
  },
  {
    slug: "acoust",
    name: "Acoust Systems",
    client: "Acoust Inc.",
    category: "branding",
    year: "2026",
    services: ["Brand Strategy", "Logo Design", "Web Simulation App", "Social Assets"],
    image: "/images/works/acoust.png",
    url: "https://acoust.onrender.com/",
    challenge: "Acoust was launching a modern line of acoustic insulation panels at acoust.onrender.com but lacked a brand identity and a mechanism to explain complex sound attenuation properties to workspace designers.",
    approach: "We designed a modular neo-brutalist visual identity and built a Web Audio API simulation tool letting users test sound absorption live in their browser.",
    outcome: "Helped Acoust secure initial distribution partnerships across 12 major corporate office networks and generated $80k in sales within 4 weeks of launch.",
    gallery: [
      "/images/works/acoust.png"
    ],
    nextSlug: "pharmbuds"
  },
  {
    slug: "pharmbuds",
    name: "PharmBuds Tracker",
    client: "PharmBuds Healthcare",
    category: "it",
    year: "2026",
    services: ["React Native App", "Django REST API", "GPS Route Tracking", "Zustand State Engine"],
    image: "/images/pharmbuds.jpg",
    url: "",
    challenge: "PharmBuds needed an integrated mobile and admin tracking solution to manage field sales staff, log medical doctor visits, and verify routes with real-time location analytics.",
    approach: "We engineered a React Native mobile application for logging attendance and doctor visits in the field, coupled with a Django REST API server tracking and rendering routes on Leaflet.js dashboards.",
    outcome: "Eliminated reporting delays entirely, automated location-based punch verification, and saw a 85% compliance increase in daily field visits.",
    gallery: [
      "/images/pharmbuds.jpg"
    ],
    nextSlug: "universal-sanitary"
  }
];

export const clients = [
  { name: "Edupark", logo: "/images/clients/Edupark_Logo.png", category: "Startup" },
  { name: "Elite", logo: "/images/clients/Elite.jpg", category: "SME" },
  { name: "LuluBuds", logo: "/images/clients/LuluBuds.png", category: "Startup" },
  { name: "Ozone", logo: "/images/clients/OZONE.png", category: "Enterprise" },
  { name: "Smart Academy", logo: "/images/clients/Smart Academy.png", category: "SME" },
  { name: "Amber", logo: "/images/clients/amber.png", category: "Startup" },
  { name: "Archiform", logo: "/images/clients/archiform.png", category: "SME" },
  { name: "Leonidaz", logo: "/images/clients/leonidaz.png", category: "Enterprise" },
  { name: "Universal Sanitary", logo: "/images/clients/universal.webp", category: "Enterprise" },
  { name: "Vuespace", logo: "/images/clients/vuespace.png", category: "Startup" }
];

export const testimonials = [
  {
    quote: "Working with Metamorph.live was a complete game-changer. They unified our entire brand visual style and built our custom Client Log Portal. Our client retention has gone up and our admin overhead is virtually gone.",
    name: "Sarah Jenkins",
    company: "CEO, Krypton Technologies",
    rating: 5,
    featured: true
  },
  {
    quote: "Our social engagement was stagnant. Metamorph.live's Reels framework blew our expectations out of the water. Over 18 viral reels later, our sales are up 40%.",
    name: "Marcus Vance",
    company: "Marketing Director, Vibe Fashion House",
    rating: 5,
    featured: false
  },
  {
    quote: "Their team worked seamlessly. They understood our technical constraints and delivered a Next.js platform that operates perfectly. Highly recommend their IT and Branding stack.",
    name: "David Chen",
    company: "CTO, Horizon Group",
    rating: 5,
    featured: false
  },
  {
    quote: "Our brand perception completely transformed. Metamorph.live delivered a stunning visual identity and style guide that aligned our product, marketing, and sales materials. We are thrilled with the results.",
    name: "Elena Rostova",
    company: "Founder, Aurora Wellness",
    rating: 5,
    featured: false
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We audit your current brand, tech stack, and marketing channels to find inefficiencies and growth opportunities."
  },
  {
    step: "02",
    title: "Strategize",
    description: "We outline an integrated roadmap bridging identity, visual media campaigns, and core system architectures."
  },
  {
    step: "03",
    title: "Create",
    description: "Our design, production, and dev teams bring the blueprints to life with rigorous attention to detail."
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy systems, publish content, monitor analytics, and optimize assets for long-term growth."
  }
];

export const stats = [
  { metric: "150+", label: "Projects Delivered" },
  { metric: "3x", label: "Average Campaign ROI" },
  { metric: "8", label: "In-House Services" },
  { metric: "48h", label: "First Draft Turnaround" }
];

export const teamMembers = [
  {
    name: "Hari Lal .P",
    role: "Owner",
    bio: "Visionary founder leading Metamorph's mission to integrate brand, media, and technology under one roof.",
    image: "linear-gradient(135deg, #12130f 0%, #ace539 100%)",
  },
  {
    name: "Mohammed Thanzeel .N",
    role: "Software Developer",
    bio: "Full-stack engineer specializing in Next.js, React Native, and scalable digital platforms.",
    image: "linear-gradient(135deg, #ace539 0%, #12130f 100%)",
  },
  {
    name: "Bijin Lal",
    role: "Operations Manager",
    bio: "Keeps the engine running — coordinating timelines, resources, and cross-team delivery.",
    image: "linear-gradient(135deg, #1a1c15 0%, #8ab82e 100%)",
  },
  {
    name: "Vipin Das",
    role: "Creative Head",
    bio: "Design lead crafting visual identities and campaigns that leave a lasting mark.",
    image: "linear-gradient(135deg, #8ab82e 0%, #ace539 100%)",
  },
  {
    name: "Athul Goutham",
    role: "Strategic Advisor",
    bio: "Guides business decisions with market insight and long-term growth strategy.",
    image: "linear-gradient(135deg, #12130f 0%, #ace539 60%, #12130f 100%)",
  },
  {
    name: "Anshif",
    role: "Branding & VFX Coordinator",
    bio: "Blends brand storytelling with motion graphics and high-impact visual effects.",
    image: "linear-gradient(135deg, #ace539 0%, #6d9420 100%)",
  },
  {
    name: "Khairunnisa K",
    role: "Digital Marketing Head",
    bio: "Drives reach and engagement through precision-targeted digital marketing campaigns.",
    image: "linear-gradient(135deg, #21231d 0%, #ace539 100%)",
  },
  {
    name: "Manu Dev",
    role: "Designer",
    bio: "Crafts stunning UI, print, and social designs that bring the brand to life.",
    image: "linear-gradient(135deg, #ace539 0%, #12130f 60%, #ace539 100%)",
  },
];

export const milestones = [
  { year: "2023", title: "Metamorph.live Founded", desc: "Started with a core team of three bridging branding and development." },
  { year: "2024", title: "Expanded to Media Production", desc: "Launched our vertical video and reels department, serving 20+ clients." },
  { year: "2025", title: "Scale Phase", desc: "Delivered first enterprise-grade SaaS platform and hit 100+ projects milestone." },
  { year: "2026", title: "Full Solutions Suite", desc: "Now a team of 12 providing branding, performance ads, media, and systems globally." }
];
