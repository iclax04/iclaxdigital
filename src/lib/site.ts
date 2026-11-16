export const SITE = {
  name: "ICLAX Digital",
  legalName: "ICLAX DIGITAL",
  url: "https://www.iclaxdigital.com",
  email: "contact@iclaxdigital.com",
  phoneDisplay: "+234 814 326 0133",
  phoneTel: "+2348143260133",
  whatsapp: "2348143260133",
  slogan: "Innovating your digital growth.",
} as const;

export const WA_GENERAL =
  "Hello ICLAX Digital, I would like to talk about my business.";

export function waLink(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Our Work" },
] as const;

export const SOCIAL = [
  { href: "https://facebook.com/iclaxdigital", label: "Facebook" },
  { href: "https://www.tiktok.com/@iclaxdigital", label: "TikTok" },
] as const;

export type ServiceIcon = "megaphone" | "search" | "pin" | "share" | "clapper";

export type Service = {
  id: string;
  title: string;
  summary: string;
  icon: ServiceIcon;
  tone: "ink" | "paper";
  body: string;
  handle: string[];
  matters: string[];
};

export const SERVICES: Service[] = [
  {
    id: "google-ads",
    title: "Google Ads Management",
    summary:
      "Strategic Google advertising campaigns designed to reach potential customers actively searching for your products and services.",
    icon: "megaphone",
    tone: "ink",
    body: "Google Ads puts a business in front of people at the moment they are searching, watching or browsing. We structure campaigns, choose keywords, prepare creative and measure which clicks become enquiries. Management fees are quoted for the work. Media spend is separate and agreed with you before anything is spent.",
    handle: [
      "Search, Display and YouTube campaign structure",
      "Keyword research and campaign setup",
      "Creative prepared for the offer",
      "Conversion tracking and clear reporting",
    ],
    matters: [
      "You reach people while they are already looking",
      "Spend is discussed against an enquiry, not only a click",
      "The account is managed against a written scope",
    ],
  },
  {
    id: "seo",
    title: "Search Engine Optimisation (SEO)",
    summary:
      "Improve your website’s visibility on search engines through keyword research, on-page optimisation, technical SEO and content strategies.",
    icon: "search",
    tone: "paper",
    body: "Search engine optimisation is the work of making the right pages visible when people search for what you sell. We look at technical issues that block a site, the words customers actually type, and the pages that should answer them. Local SEO is part of the same job when enquiries start near a place of business.",
    handle: [
      "Technical SEO that affects visibility",
      "On-page optimisation for the pages that matter",
      "Keyword research based on real demand",
      "Local SEO for customers near the business",
      "Content recommendations tied to the offer",
    ],
    matters: [
      "Search visibility does not stop when an ad is paused",
      "Pages can match the way customers describe the offer",
      "You can see what was changed and why",
    ],
  },
  {
    id: "google-business",
    title: "Google Business Profile Management",
    summary:
      "Help local businesses improve their Google visibility, manage their business profiles and attract more local customers.",
    icon: "pin",
    tone: "ink",
    body: "When someone searches for a service nearby, a Google Business Profile is often the first thing they judge. We set the profile up properly, keep the name, category, hours, services and photos accurate, and strengthen how the business appears on Google and Maps. Reviews are handled with care so the listing looks complete rather than abandoned.",
    handle: [
      "Profile setup and category selection",
      "Hours, services and contact details kept accurate",
      "Photos and posts that show the real business",
      "Google Maps visibility",
      "Guidance on how reviews are handled",
    ],
    matters: [
      "Local customers can find the business before a competitor",
      "A complete profile is easier to trust",
      "Local searches can lead to calls and direction requests",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Management",
    summary:
      "Build a stronger online presence through strategic content creation, account management and audience engagement.",
    icon: "share",
    tone: "paper",
    body: "A quiet page does not build recognition. Social media management covers the plan, the posts and the accounts they appear on: content in the business’s own voice, publishing into the right profiles, and attention to the comments and messages that turn a view into a conversation.",
    handle: [
      "Content planned around the offer and the audience",
      "Design and captions prepared for the platform",
      "Account management so profiles stay in order",
      "Engagement with comments and messages within the agreed scope",
    ],
    matters: [
      "Customers see the business between campaigns",
      "The offer stays visible without daily effort from the owner",
      "Creative and replies can sound like the company",
    ],
  },
  {
    id: "ai-ugc",
    title: "AI UGC Video Advertising",
    summary:
      "Create realistic, engaging AI-powered promotional videos designed to capture attention and promote products and services.",
    icon: "clapper",
    tone: "ink",
    body: "AI UGC videos are short, direct films that can feel like a person recommending the business, rather than a commercial that never gets watched. We use them for product stories, offers, explainers and social films that can run on a page or in an ad. The idea still starts with what you sell and who it is for.",
    handle: [
      "Scripts built around the offer",
      "Promotional videos prepared for social pages and ads",
      "Product and service stories told plainly",
      "Cuts agreed before they are published",
    ],
    matters: [
      "A video can explain an offer faster than a caption",
      "Production does not depend on a full crew for every film",
      "The number and use of films are agreed in the scope",
    ],
  },
];

export const MARKETS = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Nigeria",
  "Worldwide",
] as const;

export const INDUSTRIES = [
  {
    slug: "real-estate",
    title: "Real estate",
    image: "/images/ind-estate.jpg",
    alt: "A limestone townhouse terrace on a London street",
    body: "Agencies and developments need to be found on Google and Maps, and explained clearly before anyone books a viewing.",
  },
  {
    slug: "hotels",
    title: "Hotels",
    image: "/images/ind-hotel.jpg",
    alt: "A hotel lobby with tall windows and a stone reception desk",
    body: "Guests compare photos, location and reviews before they enquire. A complete profile and a clear website make that comparison easier.",
  },
  {
    slug: "fashion",
    title: "Fashion",
    image: "/images/ind-fashion.jpg",
    alt: "A woman browsing a clothing rail in a Paris boutique",
    body: "Fashion brands are judged on the work itself. Social content, search and a credible site should feel specific to the label.",
  },
  {
    slug: "retail",
    title: "Retail",
    image: "/images/ind-retail.jpg",
    alt: "A shopper in a timber retail shop",
    body: "Shops and product businesses need to show what is for sale, where to find it, and how to ask a question without friction.",
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    image: "/images/ind-restaurant.jpg",
    alt: "A linen-covered table in a city restaurant at night",
    body: "A search, a map pin and a recent photo often decide the booking. The listing and the page should agree with each other.",
  },
  {
    slug: "education",
    title: "Education",
    image: "/images/ind-education.jpg",
    alt: "Students seated in a bright classroom",
    body: "Schools and training businesses need plain pages that answer what is taught, who it is for, and how to enrol.",
  },
  {
    slug: "technology",
    title: "Technology",
    image: "/images/ind-technology.jpg",
    alt: "Two colleagues in a glass office overlooking a city skyline",
    body: "Technology companies are often explained too vaguely. The site, the ads and the profile should say what the product actually does.",
  },
  {
    slug: "professional-services",
    title: "Professional services",
    image: "/images/ind-professional.jpg",
    alt: "A man in a navy suit in an office overlooking Sydney Harbour",
    body: "Firms selling expertise need to look established and make the first conversation easy to start.",
  },
] as const;

export const WORK = [
  {
    id: "gbp",
    title: "Google Business Profile Optimisation",
    note: "A beauty salon profile in the manager view, with interior photos, contact actions and the main sections in place. The business name is covered.",
    image: "/images/gbp-salon.jpg",
    alt: "Manager view of a beauty salon Google Business Profile, with salon photos and contact buttons",
  },
  {
    id: "seo",
    title: "SEO Projects",
    note: "Search appearance for a local beauty salon: the snippet, the queries the page is written for, and the on-page checks.",
    image: "/images/seo-project.jpg",
    alt: "An SEO project sheet showing the search snippet and on-page checks for a local beauty salon",
  },
  {
    id: "ads",
    title: "Google Ads Campaigns",
    note: "A search campaign for the same local salon: the ad, three ad groups and the settings. Spend and results are not shown.",
    image: "/images/ads-project.jpg",
    alt: "A Google Ads project sheet for a local beauty salon search campaign",
  },
  {
    id: "video",
    title: "AI UGC Video Advertising",
    note: "A Christmas film for hotels, supermarkets, restaurants and fashion businesses. It asks owners to get the business in front of more customers before the season passes.",
    media: "/videos/ai-ugc-christmas.mp4",
    poster: "/images/ai-ugc-poster.jpg",
  },
  {
    id: "social",
    title: "Social Media Marketing",
    note: "A week of Instagram and Facebook posts for the salon, with the voice and the reply plan. Follower counts are not shown.",
    image: "/images/social-project.jpg",
    alt: "A one-week social media plan for a local beauty salon",
  },
] as const;

export const VALUES = [
  {
    letter: "I",
    title: "Innovation",
    body: "We look for the sharper way to solve a commercial problem, not the noisiest one.",
  },
  {
    letter: "C",
    title: "Creativity",
    body: "Ideas should feel specific to the business in front of us, not borrowed from a template.",
  },
  {
    letter: "L",
    title: "Leadership",
    body: "We recommend a direction and stand behind it. We do not disappear after the brief.",
  },
  {
    letter: "A",
    title: "Advertising",
    body: "Media is spent against a goal, then explained in language a founder can use.",
  },
  {
    letter: "X",
    title: "Excellence",
    body: "The details of a page, a profile and a campaign are the brand. We treat them that way.",
  },
] as const;

export const WHY = [
  {
    title: "Professional digital marketing strategies",
    body: "Plans are written around your market, your offer and the result you actually need — leads, bookings, sales or a stronger reputation.",
  },
  {
    title: "Creative and modern solutions",
    body: "Design and campaigns are made to feel current and specific, so the business looks established from the first impression.",
  },
  {
    title: "Customer-focused approach",
    body: "We start with how your customer decides, then build the message, the page and the media around that decision.",
  },
  {
    title: "Data-driven advertising",
    body: "Audiences, keywords and creative are adjusted from performance, not from guesswork dressed up as instinct.",
  },
  {
    title: "Transparent performance reporting",
    body: "You see what ran, what it produced and what we recommend next. Reports are written to be read, not to impress.",
  },
  {
    title: "Customised scope",
    body: "Every quotation is prepared after we understand the work. We do not publish package prices.",
  },
  {
    title: "Dedicated client support",
    body: "You have people to speak to. Questions do not vanish into a shared inbox with no owner.",
  },
  {
    title: "Multiple digital services under one roof",
    body: "Ads, search, social, profiles and creative can be planned together instead of fighting each other.",
  },
] as const;

export const COUNTRY_SUGGESTIONS = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Nigeria",
  "Ireland",
  "Germany",
  "France",
  "Netherlands",
  "United Arab Emirates",
  "South Africa",
  "Ghana",
  "Kenya",
  "India",
  "Singapore",
] as const;

export function pageHead(opts: { title: string; description: string; path: string }) {
  const url = opts.path === "/" ? `${SITE.url}/` : `${SITE.url}${opts.path}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.legalName,
    url: SITE.url,
    slogan: SITE.slogan,
    email: SITE.email,
    telephone: SITE.phoneTel,
    image: `${SITE.url}/images/ng-founders.jpg`,
    description:
      "ICLAX Digital is a digital marketing agency helping small businesses, startups and established brands improve online visibility through Google Ads management, SEO, local SEO, Google Business Profile management, social media marketing and AI video advertising.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Nigeria" },
    ],
    sameAs: SOCIAL.map((item) => item.href),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital marketing services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: `${SITE.url}/services#${service.id}`,
        },
      })),
    },
  };
}
