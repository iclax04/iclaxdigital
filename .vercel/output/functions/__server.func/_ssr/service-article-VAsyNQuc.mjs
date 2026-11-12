import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as btnPrimary, s as cn } from "./ui-CiVmCo1h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-article-VAsyNQuc.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceArticle({ service, index }) {
	const flipped = index % 2 === 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		id: service.slug,
		className: "scroll-mt-28 border-t border-mist py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("overflow-hidden bg-mist", flipped && "lg:order-2"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: service.image,
					alt: service.imageAlt,
					className: "aspect-[4/3] h-full w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-gold",
					children: String(index + 1).padStart(2, "0")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl leading-tight text-ink md:text-5xl",
					children: service.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-relaxed text-body",
					children: service.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs uppercase tracking-widest text-quiet",
						children: "What we handle"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: service.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 h-1.5 w-1.5 shrink-0 bg-gold",
								"aria-hidden": "true"
							}), item]
						}, item))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs uppercase tracking-widest text-quiet",
						children: "Why it matters"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: service.benefits.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 h-1.5 w-1.5 shrink-0 bg-gold",
								"aria-hidden": "true"
							}), item]
						}, item))
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						search: { service: service.slug },
						className: btnPrimary,
						children: "Contact us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-quiet",
						children: "Ask for a personalised quotation. We do not list prices."
					})]
				})
			] })]
		})
	});
}
//#endregion
export { ServiceArticle as t };
