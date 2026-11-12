import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as reasons, n as Eyebrow, o as btnPrimary, t as Container } from "./ui-CiVmCo1h.mjs";
import { t as CtaBand } from "./cta-band-CoTusuZz.mjs";
import { t as ProcessBlock } from "./process-block-CeOOYUh-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/why-us-CNKMrvTy.js
var import_jsx_runtime = require_jsx_runtime();
function WhyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink text-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why choose us" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-5xl leading-tight md:text-7xl",
							children: "Because the work should be accountable."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-fog md:text-lg",
							children: "A handsome feed is not a strategy. We are chosen by businesses that want marketing, websites and creative held to the same standard — and explained without fog."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: `${btnPrimary} mt-8`,
							children: "Get a free consultation"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/office.jpg",
						alt: "A modern office interior with long tables and daylight",
						className: "aspect-[4/3] w-full object-cover"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
					className: "py-20 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-8 md:grid-cols-2",
						children: reasons.map((reason, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-mist pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-4xl text-gold",
									children: String(index + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-3xl text-ink",
									children: reason.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-lg text-base leading-relaxed text-quiet",
									children: reason.text
								})
							]
						}, reason.title))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessBlock, { tone: "dark" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "Let’s grow your business." })
		]
	});
}
//#endregion
export { WhyPage as component };
