import { J as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as services, t as Container } from "./ui-CiVmCo1h.mjs";
import { t as CtaBand } from "./cta-band-CoTusuZz.mjs";
import { t as PageHero } from "./page-hero-nQ7fPQcK.mjs";
import { t as ServiceArticle } from "./service-article-VAsyNQuc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.index-Umnw2Ew3.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Our services",
				title: "Eight disciplines. One standard.",
				lede: "Choose a service or bring us the whole problem. Every engagement is quoted for your business. You will not find a price table on this website."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: services.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceArticle, {
				service,
				index
			}, service.slug)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
				title: "Not sure where to begin?",
				text: "Describe the business and the result you want. We will recommend the right mix and send a personalised quotation."
			})
		]
	});
}
//#endregion
export { ServicesPage as component };
