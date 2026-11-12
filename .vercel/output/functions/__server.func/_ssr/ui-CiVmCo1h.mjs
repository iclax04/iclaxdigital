import { J as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-CiVmCo1h.js
var import_jsx_runtime = require_jsx_runtime();
var brand = {
	name: "ICLAX DIGITAL",
	short: "ICLAX",
	tagline: "Innovating your digital growth.",
	headline: "Your business deserves to be seen.",
	support: "We help businesses attract more customers, build powerful online brands and achieve sustainable growth through innovative digital marketing and technology solutions."
};
/**
* Replace these with the agency's real contact details before going live.
* They are intentionally shown on the site so the buttons work today.
*/
var contact = {
	email: "hello@iclaxdigital.com",
	phoneDisplay: "+234 800 000 0000",
	phoneTel: "+2348000000000",
	whatsapp: "2348000000000",
	location: "Nigeria",
	/**
	* Optional form inbox. Paste a Formspree (or similar) endpoint to receive
	* enquiries directly. Leave empty to send each enquiry through WhatsApp
	* and email instead.
	*/
	formEndpoint: "",
	socials: [
		{
			label: "Instagram",
			href: "https://instagram.com/iclaxdigital"
		},
		{
			label: "Facebook",
			href: "https://facebook.com/iclaxdigital"
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/company/iclaxdigital"
		},
		{
			label: "TikTok",
			href: "https://www.tiktok.com/@iclaxdigital"
		},
		{
			label: "YouTube",
			href: "https://www.youtube.com/@iclaxdigital"
		}
	]
};
/** Leave blank until the real IDs are issued. Nothing loads while these are empty. */
var tracking = {
	googleAnalyticsId: "",
	googleSiteVerification: ""
};
function whatsappHref(message) {
	return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
function mailtoHref(subject, body) {
	return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
var services = [
	{
		slug: "google-ads",
		title: "Google Ads Management",
		short: "Search, Display and YouTube campaigns built around the customers already looking for you.",
		description: "Google Ads puts your business in front of people at the moment they are searching, watching or browsing. We handle the structure, the keywords, the creative and the measurement so media spend has a job to do. Campaigns are scoped to your offer and your market. There is no public price list — ask us for a quotation prepared for your business.",
		includes: [
			"Google Search Ads",
			"Google Display Advertising",
			"YouTube Ads",
			"Keyword Research",
			"Campaign Setup",
			"Campaign Optimisation",
			"Conversion Tracking",
			"Performance Reporting"
		],
		benefits: [
			"Reach people while they are actively looking",
			"A campaign structure matched to your offer",
			"Tracking that shows which enquiries came from ads",
			"Ongoing optimisation and plain-language reports"
		],
		image: "/images/analytics.jpg",
		imageAlt: "Marketing performance dashboard on a laptop screen"
	},
	{
		slug: "websites",
		title: "Website Design & Development",
		short: "Fast, mobile-ready websites that make a business look as serious as it is.",
		description: "Your website is often the first meeting with a customer. We design and build business, corporate, ecommerce, portfolio and landing sites that load quickly, read clearly on a phone and make the next step obvious — a call, a WhatsApp message or an enquiry. Redesigns and ongoing care are part of the same practice.",
		includes: [
			"Business Websites",
			"Corporate Websites",
			"E-commerce Websites",
			"Landing Pages",
			"Portfolio Websites",
			"Mobile-Responsive Design",
			"Website Redesign",
			"Website Maintenance"
		],
		benefits: [
			"A credible first impression on every screen",
			"Clear paths to call, WhatsApp or enquire",
			"A structure your team can grow with",
			"Design that belongs to your brand, not a template"
		],
		image: "/images/web.jpg",
		imageAlt: "A business website layout open on a laptop in a workspace"
	},
	{
		slug: "seo",
		title: "Search Engine Optimisation",
		short: "Technical, on-page and local SEO so the right people can find you on Google.",
		description: "Search is a long game we play with care. We audit the site, fix what blocks visibility, align pages with the words your customers actually use and strengthen your presence in local results. You get a plan you can follow, not a pile of jargon.",
		includes: [
			"Technical SEO",
			"On-page SEO",
			"Keyword Research",
			"Website Audits",
			"Local SEO",
			"Content Optimisation",
			"Google Search Visibility"
		],
		benefits: [
			"Problems found before they quietly cost you traffic",
			"Pages written around real search demand",
			"Stronger visibility for customers near you",
			"Recommendations you can act on"
		],
		image: "/images/laptop-woman.jpg",
		imageAlt: "A Nigerian professional working on a laptop in a calm, styled office"
	},
	{
		slug: "social-media",
		title: "Social Media Management",
		short: "Consistent content, design and replies across the platforms your customers already use.",
		description: "A quiet page does not build a brand. We plan, design and publish for Facebook, Instagram, TikTok and LinkedIn, then stay close to the comments and messages that turn attention into conversation. The voice stays yours. The calendar stays full.",
		includes: [
			"Facebook Management",
			"Instagram Management",
			"TikTok Management",
			"LinkedIn Management",
			"Content Creation",
			"Graphic Design",
			"Promotional Videos",
			"Content Scheduling",
			"Audience Engagement"
		],
		benefits: [
			"A presence that does not go quiet between campaigns",
			"Creative made for each platform, not resized leftovers",
			"Scheduling handled so you can run the business",
			"Replies that keep the relationship warm"
		],
		image: "/images/desk.jpg",
		imageAlt: "An African businesswoman working at her desk with a laptop"
	},
	{
		slug: "meta-ads",
		title: "Facebook & Instagram Advertising",
		short: "Lead, message and sales campaigns with audiences, creative and retargeting in one place.",
		description: "Meta advertising is where many Nigerian customers discover a business and decide to message it. We build Facebook and Instagram campaigns for leads, WhatsApp conversations and sales, then refine the audiences and the creative from what the numbers show. Retargeting keeps you in front of people who already looked.",
		includes: [
			"Facebook Ads",
			"Instagram Ads",
			"Lead Generation",
			"WhatsApp Advertising",
			"Sales Campaigns",
			"Audience Targeting",
			"Retargeting",
			"Campaign Optimisation"
		],
		benefits: [
			"Campaigns pointed at leads, messages or sales",
			"Audiences shaped around who actually buys",
			"Retargeting for people who already showed interest",
			"Creative and media managed together"
		],
		image: "/images/entrepreneur.jpg",
		imageAlt: "A Lagos entrepreneur working on a laptop in a modern office"
	},
	{
		slug: "google-business",
		title: "Google Business Profile Management",
		short: "A complete Google profile so you can be found, trusted and chosen on Maps.",
		description: "When someone searches for a service nearby, your Google Business Profile is often the listing they judge first. We set it up, keep the details accurate, strengthen how you appear on Maps and support the way reviews are handled. Local search should not be an afterthought.",
		includes: [
			"Business Profile Setup",
			"Profile Optimisation",
			"Google Maps Visibility",
			"Business Information Management",
			"Review Management Support",
			"Local Search Optimisation"
		],
		benefits: [
			"A profile that looks complete and trustworthy",
			"A better chance of appearing in local results",
			"Hours, services and photos kept up to date",
			"Support for the reputation you are building"
		],
		image: "/images/retail.jpg",
		imageAlt: "Clothing racks inside a well-lit retail store"
	},
	{
		slug: "branding",
		title: "Branding & Creative Design",
		short: "Identity, logos and marketing graphics that look consistent everywhere you show up.",
		description: "A brand is the set of decisions people recognise. We design logos, identity systems, flyers, banners and the guidelines that keep them consistent — on a website, a social post, a shopfront banner or a proposal. The aim is a look that feels established, not assembled overnight.",
		includes: [
			"Logo Design",
			"Brand Identity",
			"Promotional Flyers",
			"Business Banners",
			"Marketing Graphics",
			"Brand Guidelines"
		],
		benefits: [
			"A look people can recognise across web, social and print",
			"Files your team can actually use",
			"Design that feels considered, not generic",
			"One visual system instead of mismatched assets"
		],
		image: "/images/fashion.jpg",
		imageAlt: "A fashion portrait photographed in Lagos"
	},
	{
		slug: "ai-video",
		title: "AI Video Advertising",
		short: "Promotional films, product stories and reels produced with modern AI workflows.",
		description: "Not every offer can wait for a full production crew. We create AI-assisted promotional videos, commercials, product films, social reels and explainers that tell the story clearly and look fit for paid media. The idea still starts with your business — the tools simply get it finished faster.",
		includes: [
			"AI Promotional Videos",
			"Business Commercials",
			"Product Advertisement Videos",
			"Social Media Reels",
			"Explainer Videos"
		],
		benefits: [
			"Campaign films without a heavy production schedule",
			"Cuts prepared for reels, ads and websites",
			"Product and offer stories told in plain pictures",
			"A faster path from idea to something you can run"
		],
		image: "/images/dining.jpg",
		imageAlt: "An elegant dining scene in Lagos, styled like a hospitality commercial"
	}
];
function getService(slug) {
	return services.find((service) => service.slug === slug);
}
var values = [
	{
		letter: "I",
		word: "Innovation",
		text: "We look for the sharper way to solve a commercial problem, not the noisiest one."
	},
	{
		letter: "C",
		word: "Creativity",
		text: "Ideas should feel specific to the business in front of us, not borrowed from a template."
	},
	{
		letter: "L",
		word: "Leadership",
		text: "We recommend a direction and stand behind it. We do not disappear after the brief."
	},
	{
		letter: "A",
		word: "Advertising",
		text: "Media is spent against a goal, then explained in language a founder can use."
	},
	{
		letter: "X",
		word: "Excellence",
		text: "The details of a page, a profile and a campaign are the brand. We treat them that way."
	}
];
var reasons = [
	{
		title: "Professional digital marketing strategies",
		text: "Plans are written around your market, your offer and the result you actually need — leads, bookings, sales or a stronger reputation."
	},
	{
		title: "Creative and modern solutions",
		text: "Design, websites and campaigns are made to feel current and specific, so the business looks established from the first impression."
	},
	{
		title: "Customer-focused approach",
		text: "We start with how your customer decides, then build the message, the page and the media around that decision."
	},
	{
		title: "Data-driven advertising",
		text: "Audiences, keywords and creative are adjusted from performance, not from guesswork dressed up as instinct."
	},
	{
		title: "Transparent performance reporting",
		text: "You see what ran, what it produced and what we recommend next. Reports are written to be read, not to impress."
	},
	{
		title: "Affordable customised solutions",
		text: "Scope is shaped to the business. We do not publish package prices — every quotation is prepared after we understand the work."
	},
	{
		title: "Dedicated client support",
		text: "You have people to speak to. Questions do not vanish into a shared inbox with no owner."
	},
	{
		title: "Multiple digital services under one roof",
		text: "Ads, search, social, websites, profiles and creative can be planned together instead of fighting each other."
	}
];
var process = [
	{
		n: "01",
		title: "Discovery",
		text: "We understand your business and objectives."
	},
	{
		n: "02",
		title: "Strategy",
		text: "We develop a suitable digital strategy."
	},
	{
		n: "03",
		title: "Implementation",
		text: "We execute the agreed services."
	},
	{
		n: "04",
		title: "Optimisation",
		text: "We monitor and improve performance."
	},
	{
		n: "05",
		title: "Reporting",
		text: "We provide progress reports and recommendations."
	}
];
var industries = [
	{
		title: "Small and medium businesses",
		image: "/images/desk.jpg",
		alt: "A business owner working at a laptop"
	},
	{
		title: "Startups and entrepreneurs",
		image: "/images/entrepreneur.jpg",
		alt: "An entrepreneur in a modern Lagos office"
	},
	{
		title: "Real estate",
		image: "/images/property.jpg",
		alt: "A property professional holding keys outside a home"
	},
	{
		title: "Hotels and restaurants",
		image: "/images/restaurant.jpg",
		alt: "A busy, well-designed restaurant interior"
	},
	{
		title: "Fashion brands",
		image: "/images/fashion-street.jpg",
		alt: "Two women in contemporary fashion, photographed in Lagos"
	},
	{
		title: "Retail businesses",
		image: "/images/boutique.jpg",
		alt: "A clothing boutique with apparel displayed on racks"
	},
	{
		title: "Corporate organisations",
		image: "/images/office.jpg",
		alt: "A modern office interior with clean lines and natural light"
	},
	{
		title: "Businesses expanding online",
		image: "/images/city.jpg",
		alt: "Glass office towers against a clear sky"
	}
];
var samples = [
	{
		quote: "They made the offer easier to understand, and the enquiries that followed were from people who already knew what we sold.",
		who: "Sample client",
		context: "Retail business, Lagos"
	},
	{
		quote: "Our pages finally matched the standard of the rooms. Guests could find us, see the place properly and book without a chase.",
		who: "Sample client",
		context: "Hospitality business"
	},
	{
		quote: "The campaigns stopped feeling random. We could see which messages brought serious buyers and which ones we should retire.",
		who: "Sample client",
		context: "Real estate company"
	}
];
var approach = [
	{
		title: "Listen before we propose",
		text: "The first conversation is about the business, the customer and the constraint. A strategy that ignores those is just decoration."
	},
	{
		title: "One plan, several disciplines",
		text: "Website, search, social, advertising and creative are planned as one system so they do not contradict each other."
	},
	{
		title: "Build, then improve from response",
		text: "We launch the agreed work and adjust it from enquiries, calls and campaign data — not from opinions alone."
	},
	{
		title: "Say what happened",
		text: "Reporting names the result, the reason and the next move. You should never have to translate your own report."
	}
];
var serviceOptions = [...services.map((service) => service.title), "Not sure yet — advise me"];
function cn(...parts) {
	return parts.filter(Boolean).join(" ");
}
function Container({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-6xl px-5 md:px-8", className),
		children
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-gold",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block h-px w-8 bg-gold",
			"aria-hidden": "true"
		}), children]
	});
}
var btnPrimary = "inline-flex min-h-11 items-center justify-center px-6 text-center text-xs font-medium uppercase tracking-widest text-ink bg-gold transition-colors duration-200 hover:bg-gold-bright";
var btnGhost = "inline-flex min-h-11 items-center justify-center border border-gold/80 px-6 text-center text-xs font-medium uppercase tracking-widest text-ivory transition-colors duration-200 hover:bg-gold hover:text-ink";
function pageMeta(title, description) {
	return { meta: [{ title }, {
		name: "description",
		content: description
	}] };
}
//#endregion
export { services as _, btnGhost as a, whatsappHref as b, contact as c, mailtoHref as d, pageMeta as f, serviceOptions as g, samples as h, brand as i, getService as l, reasons as m, Eyebrow as n, btnPrimary as o, process as p, approach as r, cn as s, Container as t, industries as u, tracking as v, values as y };
