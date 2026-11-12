export const brand = {
  name: "ICLAX DIGITAL",
  short: "ICLAX",
  tagline: "Innovating your digital growth.",
  headline: "Let's grow your business beyond limits.",
  support:
    "Your business deserves to be seen. At ICLAX Digital, we help Nigerian businesses attract customers, build powerful online brands and grow through innovative digital marketing and technology solutions.",
};

export const cities = ["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Enugu", "Nationwide"];

export const growthPoints = [
  {
    title: "Discovery",
    text: "Appear when a customer in your city searches Google or opens Maps for the service you offer.",
  },
  {
    title: "Reputation",
    text: "A consistent presence on Instagram, Facebook and TikTok, where people judge a business before they visit.",
  },
  {
    title: "Enquiry",
    text: "A clear route from that attention to a call, a form, or a WhatsApp message your team can answer.",
  },
  {
    title: "Decision",
    text: "A website that states the offer plainly, so the right customer can choose you with confidence.",
  },
];

/**
 * Replace these with the agency's real contact details before going live.
 * They are intentionally shown on the site so the buttons work today.
 */
export const contact = {
  email: "hello@iclaxdigital.com",
  phoneDisplay: "+234 814 326 0133",
  phoneTel: "+2348143260133",
  whatsapp: "2348143260133",
  location: "Nigeria",
  /**
   * Optional form inbox. Paste a Formspree (or similar) endpoint to receive
   * enquiries directly. Leave empty to send each enquiry through WhatsApp
   * and email instead.
   */
  formEndpoint: "",
  socials: [
    { label: "Instagram", href: "https://instagram.com/iclaxdigital" },
    { label: "Facebook", href: "https://facebook.com/iclaxdigital" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/iclaxdigital" },
    { label: "TikTok", href: "https://www.tiktok.com/@iclaxdigital" },
    { label: "YouTube", href: "https://www.youtube.com/@iclaxdigital" },
  ],
};

/** Leave blank until the real IDs are issued. Nothing loads while these are empty. */
export const tracking = {
  googleAnalyticsId: "",
  googleSiteVerification: "",
};

export function whatsappHref(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const contactWhatsApp = whatsappHref(
  "Hello ICLAX Digital, I would like to talk about my business.",
);

export function mailtoHref(subject: string, body: string) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  includes: string[];
  benefits: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "google-ads",
    title: "Google Ads Management",
    short: "Search, Display and YouTube campaigns built around the customers already looking for you.",
    description:
      "Google Ads puts your business in front of people at the moment they are searching, watching or browsing. We handle the structure, the keywords, the creative and the measurement so media spend has a job to do. Campaigns are scoped to your offer and your market. There is no public price list — ask us for a quotation prepared for your business.",
    includes: [
      "Google Search Ads",
      "Google Display Advertising",
      "YouTube Ads",
      "Keyword Research",
      "Campaign Setup",
      "Campaign Optimisation",
      "Conversion Tracking",
      "Performance Reporting",
    ],
    benefits: [
      "Reach people while they are actively looking",
      "A campaign structure matched to your offer",
      "Tracking that shows which enquiries came from ads",
      "Ongoing optimisation and plain-language reports",
    ],
    image: "/images/ng-abuja-laptop.jpg",
    imageAlt: "A Nigerian woman in Abuja working on a laptop",
  },
  {
    slug: "websites",
    title: "Website Design & Development",
    short: "Fast, mobile-ready websites that make a business look as serious as it is.",
    description:
      "Your website is often the first meeting with a customer. We design and build business, corporate, ecommerce, portfolio and landing sites that load quickly, read clearly on a phone and make the next step obvious — a call, a WhatsApp message or an enquiry. Redesigns and ongoing care are part of the same practice.",
    includes: [
      "Business Websites",
      "Corporate Websites",
      "E-commerce Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Mobile-Responsive Design",
      "Website Redesign",
      "Website Maintenance",
    ],
    benefits: [
      "A credible first impression on every screen",
      "Clear paths to call, WhatsApp or enquire",
      "A structure your team can grow with",
      "Design that belongs to your brand, not a template",
    ],
    image: "/images/ng-lagos-desk.jpg",
    imageAlt: "A Lagos entrepreneur working at a laptop in a bright office",
  },
  {
    slug: "seo",
    title: "Search Engine Optimisation (SEO)",
    short: "Technical, on-page and local SEO so the right people can find you on Google.",
    description:
      "Search is a long game we play with care. We audit the site, fix what blocks visibility, align pages with the words your customers actually use and strengthen your presence in local results. You get a plan you can follow, not a pile of jargon.",
    includes: [
      "Technical SEO",
      "On-page SEO",
      "Keyword Research",
      "Website Audits",
      "Local SEO",
      "Content Optimisation",
      "Google Search Visibility",
    ],
    benefits: [
      "Problems found before they quietly cost you traffic",
      "Pages written around real search demand",
      "Stronger visibility for customers near you",
      "Recommendations you can act on",
    ],
    image: "/images/ng-abuja-desk.jpg",
    imageAlt: "A Nigerian woman working at her desk in Abuja",
  },
  {
    slug: "social-media",
    title: "Social Media Management",
    short: "Consistent content, design and replies across the platforms your customers already use.",
    description:
      "A quiet page does not build a brand. We plan, design and publish for Facebook, Instagram, TikTok and LinkedIn, then stay close to the comments and messages that turn attention into conversation. The voice stays yours. The calendar stays full.",
    includes: [
      "Facebook Management",
      "Instagram Management",
      "TikTok Management",
      "LinkedIn Management",
      "Content Creation",
      "Graphic Design",
      "Promotional Videos",
      "Content Scheduling",
      "Audience Engagement",
    ],
    benefits: [
      "A presence that does not go quiet between campaigns",
      "Creative made for each platform, not resized leftovers",
      "Scheduling handled so you can run the business",
      "Replies that keep the relationship warm",
    ],
    image: "/images/ng-abuja-cafe.jpg",
    imageAlt: "A young Nigerian woman in an Abuja cafe",
  },
  {
    slug: "meta-ads",
    title: "Facebook & Instagram Advertising",
    short: "Lead, message and sales campaigns with audiences, creative and retargeting in one place.",
    description:
      "Meta advertising is where many customers discover a business and decide to message it. We build Facebook and Instagram campaigns for leads, WhatsApp conversations and sales, then refine the audiences and the creative from what the numbers show. Retargeting keeps you in front of people who already looked.",
    includes: [
      "Facebook Ads",
      "Instagram Ads",
      "Lead Generation",
      "WhatsApp Advertising",
      "Sales Campaigns",
      "Audience Targeting",
      "Retargeting",
      "Campaign Optimisation",
    ],
    benefits: [
      "Campaigns pointed at leads, messages or sales",
      "Audiences shaped around who actually buys",
      "Retargeting for people who already showed interest",
      "Creative and media managed together",
    ],
    image: "/images/ng-founders.jpg",
    imageAlt: "Two Nigerian businesswomen in Lagos holding laptops",
  },
  {
    slug: "google-business",
    title: "Google Business Profile Management",
    short: "A complete Google profile so you can be found, trusted and chosen on Maps.",
    description:
      "When someone searches for a service nearby, your Google Business Profile is often the listing they judge first. We set it up, keep the details accurate, strengthen how you appear on Maps and support the way reviews are handled. Local search should not be an afterthought.",
    includes: [
      "Business Profile Setup",
      "Profile Optimisation",
      "Google Maps Visibility",
      "Business Information Management",
      "Review Management Support",
      "Local Search Optimisation",
    ],
    benefits: [
      "A profile that looks complete and trustworthy",
      "A better chance of appearing in local results",
      "Hours, services and photos kept up to date",
      "Support for the reputation you are building",
    ],
    image: "/images/ng-market.jpg",
    imageAlt: "A Nigerian woman at a busy market in Lagos",
  },
  {
    slug: "branding",
    title: "Branding & Graphic Design",
    short: "Identity, logos and marketing graphics that look consistent everywhere you show up.",
    description:
      "A brand is the set of decisions people recognise. We design logos, identity systems, flyers, banners and the guidelines that keep them consistent — on a website, a social post, a shopfront banner or a proposal. The aim is a look that feels established, not assembled overnight.",
    includes: [
      "Logo Design",
      "Brand Identity",
      "Promotional Flyers",
      "Business Banners",
      "Marketing Graphics",
      "Brand Guidelines",
    ],
    benefits: [
      "A look people can recognise across web, social and print",
      "Files your team can actually use",
      "Design that feels considered, not generic",
      "One visual system instead of mismatched assets",
    ],
    image: "/images/ng-fashion.jpg",
    imageAlt: "A fashion portrait photographed in a Lagos studio",
  },
  {
    slug: "ai-video",
    title: "AI Promotional Video Production",
    short: "Promotional films, product stories and reels produced with modern AI workflows.",
    description:
      "Not every offer can wait for a full production crew. We create AI-assisted promotional videos, commercials, product films, social reels and explainers that tell the story clearly and look fit for paid media. The idea still starts with your business — the tools simply get it finished faster.",
    includes: [
      "AI Promotional Videos",
      "Business Commercials",
      "Product Advertisement Videos",
      "Social Media Reels",
      "Explainer Videos",
    ],
    benefits: [
      "Campaign films without a heavy production schedule",
      "Cuts prepared for reels, ads and websites",
      "Product and offer stories told in plain pictures",
      "A faster path from idea to something you can run",
    ],
    image: "/images/ng-ai-video.jpg",
    imageAlt: "A Nigerian creator producing a promotional video with a cinema camera and editing screen",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const values = [
  {
    letter: "I",
    word: "Innovation",
    text: "We look for the sharper way to solve a commercial problem, not the noisiest one.",
  },
  {
    letter: "C",
    word: "Creativity",
    text: "Ideas should feel specific to the business in front of us, not borrowed from a template.",
  },
  {
    letter: "L",
    word: "Leadership",
    text: "We recommend a direction and stand behind it. We do not disappear after the brief.",
  },
  {
    letter: "A",
    word: "Advertising",
    text: "Media is spent against a goal, then explained in language a founder can use.",
  },
  {
    letter: "X",
    word: "Excellence",
    text: "The details of a page, a profile and a campaign are the brand. We treat them that way.",
  },
];

export const reasons = [
  {
    title: "Professional digital marketing strategies",
    text: "Plans are written around your market, your offer and the result you actually need — leads, bookings, sales or a stronger reputation.",
  },
  {
    title: "Creative and modern solutions",
    text: "Design, websites and campaigns are made to feel current and specific, so the business looks established from the first impression.",
  },
  {
    title: "Customer-focused approach",
    text: "We start with how your customer decides, then build the message, the page and the media around that decision.",
  },
  {
    title: "Data-driven advertising",
    text: "Audiences, keywords and creative are adjusted from performance, not from guesswork dressed up as instinct.",
  },
  {
    title: "Transparent performance reporting",
    text: "You see what ran, what it produced and what we recommend next. Reports are written to be read, not to impress.",
  },
  {
    title: "Affordable customised solutions",
    text: "Scope is shaped to the business. We do not publish package prices — every quotation is prepared after we understand the work.",
  },
  {
    title: "Dedicated client support",
    text: "You have people to speak to. Questions do not vanish into a shared inbox with no owner.",
  },
  {
    title: "Multiple digital services under one roof",
    text: "Ads, search, social, websites, profiles and creative can be planned together instead of fighting each other.",
  },
];

export const process = [
  {
    n: "01",
    title: "Discovery",
    text: "We understand your business and objectives.",
  },
  {
    n: "02",
    title: "Strategy",
    text: "We develop a suitable digital strategy.",
  },
  {
    n: "03",
    title: "Implementation",
    text: "We execute the agreed services.",
  },
  {
    n: "04",
    title: "Optimisation",
    text: "We monitor and improve performance.",
  },
  {
    n: "05",
    title: "Reporting",
    text: "We provide progress reports and recommendations.",
  },
];

export const industries = [
  {
    title: "Real estate",
    image: "/images/ng-estate.jpg",
    alt: "A classic residential building in Lagos",
  },
  {
    title: "Hotels",
    image: "/images/ng-hotel.jpg",
    alt: "A hotel lobby",
  },
  {
    title: "Fashion",
    image: "/images/ng-classic-fashion.jpg",
    alt: "A classic black and white fashion portrait in Lagos",
  },
  {
    title: "Retail",
    image: "/images/ng-boutique.jpg",
    alt: "A woman in an Abuja boutique",
  },
  {
    title: "Restaurants",
    image: "/images/ng-dinner.jpg",
    alt: "A formal dinner in Lagos",
  },
  {
    title: "Education",
    image: "/images/ng-classroom.jpg",
    alt: "Nigerian students in a classroom",
  },
  {
    title: "Technology",
    image: "/images/ng-office.jpg",
    alt: "Two professionals working together in a Lagos office",
  },
  {
    title: "Professional services",
    image: "/images/ng-abuja-boss.jpg",
    alt: "A Nigerian businessman in a navy suit",
  },
];

export const samples = [
  {
    quote:
      "They made the offer easier to understand, and the enquiries that followed were from people who already knew what we sold.",
    who: "Sample client",
    context: "Retail business, Lagos",
  },
  {
    quote:
      "Our pages finally matched the standard of the rooms. Guests could find us, see the place properly and book without a chase.",
    who: "Sample client",
    context: "Hotel",
  },
  {
    quote:
      "The campaigns stopped feeling random. We could see which messages brought serious buyers and which ones we should retire.",
    who: "Sample client",
    context: "Real estate company",
  },
];

export const serviceOptions = [
  ...services.map((service) => service.title),
  "Not sure yet — advise me",
];
