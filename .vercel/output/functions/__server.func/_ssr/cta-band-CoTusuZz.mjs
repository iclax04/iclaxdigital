import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as btnGhost, o as btnPrimary } from "./ui-CiVmCo1h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cta-band-CoTusuZz.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand({ title = "Let’s grow your business.", text = "Tell us what you sell and who you want to reach. We will recommend a way forward and prepare a quotation for that work — nothing on this site is a fixed package price." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-8 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-gold",
						children: "Start a conversation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl leading-tight text-ivory md:text-6xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-fog",
						children: text
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: btnPrimary,
					children: "Request a quote"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: btnGhost,
					children: "Talk to our team"
				})]
			})]
		})
	});
}
//#endregion
export { CtaBand as t };
