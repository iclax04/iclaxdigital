import { J as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Eyebrow, p as process, t as Container } from "./ui-CiVmCo1h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-block-CeOOYUh-.js
var import_jsx_runtime = require_jsx_runtime();
function ProcessBlock({ tone = "dark" }) {
	const dark = tone === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: dark ? "bg-ink text-ivory" : "bg-paper text-body",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Our process" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: `max-w-xl font-display text-4xl leading-tight md:text-6xl ${dark ? "text-ivory" : "text-ink"}`,
					children: "Five steps. No theatre."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-5 max-w-2xl text-base leading-relaxed ${dark ? "text-fog" : "text-quiet"}`,
					children: "Every engagement follows the same discipline, whether the work is a website, a search programme or a paid campaign."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid gap-10 md:grid-cols-5",
					children: process.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-5xl text-gold",
							children: step.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: `mt-4 text-lg ${dark ? "text-ivory" : "text-ink"}`,
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-2 text-sm leading-relaxed ${dark ? "text-fog" : "text-quiet"}`,
							children: step.text
						})
					] }, step.n))
				})
			]
		})
	});
}
//#endregion
export { ProcessBlock as t };
