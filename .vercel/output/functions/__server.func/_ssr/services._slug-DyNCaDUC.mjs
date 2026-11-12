import { J as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as services, a as btnGhost, l as getService, o as btnPrimary, t as Container } from "./ui-CiVmCo1h.mjs";
import { t as CtaBand } from "./cta-band-CoTusuZz.mjs";
import { n as Route } from "./router-DKAZTSsT.mjs";
import { t as ServiceArticle } from "./service-article-VAsyNQuc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-DyNCaDUC.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage() {
	const { slug } = Route.useParams();
	const service = getService(slug);
	if (!service) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		id: "content",
		className: "bg-ink px-5 py-24 text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-widest text-gold",
				children: "Services"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-5xl",
				children: "That service is not listed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-fog",
				children: "Browse the full offer, or tell us what you need and we will recommend a starting point."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/services",
					className: btnPrimary,
					children: "All services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: btnGhost,
					children: "Contact us"
				})]
			})
		] })
	});
	const index = services.findIndex((item) => item.slug === service.slug);
	const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink text-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "py-16 md:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-gold",
							children: "Service"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-3xl font-display text-5xl leading-tight md:text-7xl",
							children: service.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-fog md:text-lg",
							children: service.short
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceArticle, {
				service,
				index: index < 0 ? 0 : index
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-mist bg-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-ink md:text-4xl",
						children: "Related services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-4 md:grid-cols-3",
						children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/$slug",
							params: { slug: item.slug },
							className: "block h-full border border-mist bg-paper p-5 transition-colors hover:border-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl text-ink",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-quiet",
								children: item.short
							})]
						}) }, item.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "Talk to our team." })
		]
	});
}
//#endregion
export { ServicePage as component };
