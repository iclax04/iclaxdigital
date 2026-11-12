import { J as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Eyebrow, t as Container } from "./ui-CiVmCo1h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-nQ7fPQcK.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-line bg-ink text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-3xl font-display text-5xl leading-tight text-ivory md:text-7xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-base leading-relaxed text-fog md:text-lg",
					children: lede
				})
			]
		})
	});
}
//#endregion
export { PageHero as t };
