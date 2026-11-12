import { i as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as services, b as whatsappHref, c as contact, d as mailtoHref, g as serviceOptions, n as Eyebrow, o as btnPrimary, t as Container } from "./ui-CiVmCo1h.mjs";
import { a as MapPin, o as Mail, r as Phone } from "../_libs/lucide-react.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { a as WhatsAppIcon, i as SocialIcon, r as Route$6 } from "./router-DKAZTSsT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-QlGwXS5_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	fullName: string().trim().min(2, "Enter your full name."),
	businessName: string().trim().min(2, "Enter your business name."),
	email: string().trim().email("Enter a valid email address."),
	phone: string().trim().min(7, "Enter a phone number we can reach."),
	service: string().trim().min(1, "Choose a service, or tell us you are unsure."),
	project: string().trim().min(20, "Describe the project in at least a sentence so we can respond usefully."),
	website: string().optional()
});
var inputClass = "mt-2 w-full min-h-11 border border-mist bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-quiet focus:border-gold";
function ContactForm({ preset }) {
	const presetTitle = services.find((service) => service.slug === preset)?.title ?? "";
	const [values, setValues] = (0, import_react.useState)({
		fullName: "",
		businessName: "",
		email: "",
		phone: "",
		service: presetTitle,
		project: "",
		website: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [formError, setFormError] = (0, import_react.useState)("");
	function update(key, value) {
		setValues((current) => ({
			...current,
			[key]: value
		}));
	}
	function messageBody(data) {
		return [
			`Name: ${data.fullName}`,
			`Business: ${data.businessName}`,
			`Email: ${data.email}`,
			`Phone: ${data.phone}`,
			`Service: ${data.service}`,
			"",
			data.project
		].join("\n");
	}
	async function onSubmit(event) {
		event.preventDefault();
		setFormError("");
		const parsed = schema.safeParse(values);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (typeof key === "string" && !next[key]) next[key] = issue.message;
			}
			setErrors(next);
			setStatus("idle");
			return;
		}
		setErrors({});
		if (parsed.data.website) {
			setStatus("sent");
			return;
		}
		const body = messageBody(parsed.data);
		if (contact.formEndpoint) {
			setStatus("sending");
			try {
				if (!(await fetch(contact.formEndpoint, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					},
					body: JSON.stringify({
						name: parsed.data.fullName,
						business: parsed.data.businessName,
						email: parsed.data.email,
						phone: parsed.data.phone,
						service: parsed.data.service,
						message: parsed.data.project
					})
				})).ok) throw new Error("Request failed");
				setStatus("sent");
				return;
			} catch {
				setStatus("error");
				setFormError("The enquiry could not be delivered automatically. Use WhatsApp or email below — your details are still here.");
			}
		}
		if (!window.open(whatsappHref(`Hello ICLAX Digital,\n\n${body}`), "_blank", "noopener,noreferrer")) setFormError("Your browser blocked the new window. Use the WhatsApp or email button below to send this enquiry.");
		setStatus("ready");
	}
	const summary = messageBody(values);
	const subject = `Enquiry from ${values.businessName || "a business"} — ${values.service || "new project"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "border border-mist bg-ivory p-5 md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full name",
						error: errors.fullName,
						htmlFor: "full-name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "full-name",
							name: "fullName",
							autoComplete: "name",
							value: values.fullName,
							onChange: (event) => update("fullName", event.target.value),
							className: inputClass,
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Business name",
						error: errors.businessName,
						htmlFor: "business-name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "business-name",
							name: "businessName",
							autoComplete: "organization",
							value: values.businessName,
							onChange: (event) => update("businessName", event.target.value),
							className: inputClass,
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email address",
						error: errors.email,
						htmlFor: "email",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							name: "email",
							type: "email",
							autoComplete: "email",
							value: values.email,
							onChange: (event) => update("email", event.target.value),
							className: inputClass,
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone number",
						error: errors.phone,
						htmlFor: "phone",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "phone",
							name: "phone",
							type: "tel",
							autoComplete: "tel",
							value: values.phone,
							onChange: (event) => update("phone", event.target.value),
							className: inputClass,
							required: true
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Service required",
					error: errors.service,
					htmlFor: "service",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "service",
						name: "service",
						value: values.service,
						onChange: (event) => update("service", event.target.value),
						className: inputClass,
						required: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select a service"
						}), serviceOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: option,
							children: option
						}, option))]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Project description",
					error: errors.project,
					htmlFor: "project",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "project",
						name: "project",
						rows: 6,
						value: values.project,
						onChange: (event) => update("project", event.target.value),
						className: inputClass,
						placeholder: "What do you sell, who is the customer, and what should change in the next few months?",
						required: true
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute -left-[9999px] h-0 w-0 overflow-hidden",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "website",
					children: "Website"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "website",
					name: "website",
					tabIndex: -1,
					autoComplete: "off",
					value: values.website,
					onChange: (event) => update("website", event.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: `${btnPrimary} mt-6 w-full sm:w-auto`,
				disabled: status === "sending",
				children: status === "sending" ? "Sending…" : "Submit enquiry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-quiet",
				children: "By sending this enquiry you agree that we may use these details to reply, as described in our privacy policy. Fees are quoted individually — nothing here is a price list."
			}),
			formError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-ink",
				role: "alert",
				children: formError
			}) : null,
			status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 border border-gold bg-paper p-4 text-sm text-ink",
				role: "status",
				children: "Thank you. Your enquiry has been submitted. We will reply using the email or phone you provided."
			}) : null,
			status === "ready" || status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 border border-gold bg-paper p-4 text-sm text-ink",
				role: "status",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your enquiry is ready. WhatsApp should open with the message — press send so it reaches ICLAX Digital. You can also email it directly." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: btnPrimary,
						href: whatsappHref(`Hello ICLAX Digital,\n\n${summary}`),
						target: "_blank",
						rel: "noreferrer",
						children: "Send on WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "inline-flex min-h-11 items-center justify-center border border-ink px-6 text-xs font-medium uppercase tracking-widest text-ink",
						href: mailtoHref(subject, summary),
						children: "Email this enquiry"
					})]
				})]
			}) : null
		]
	});
}
function Field({ label, htmlFor, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor,
			className: "text-xs uppercase tracking-widest text-quiet",
			children: label
		}),
		children,
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-ink",
			role: "alert",
			children: error
		}) : null
	] });
}
function ContactPage() {
	const { service } = Route$6.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-ivory",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "py-16 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Contact" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-3xl font-display text-5xl leading-tight md:text-7xl",
						children: "Tell us what you want to grow."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-fog md:text-lg",
						children: "Share a few details and we will come back with a point of view and a quotation prepared for your business. There is no public price list."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-12 py-16 lg:grid-cols-12 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { preset: service ?? "" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-ink",
							children: "Speak to the team directly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${contact.email}`,
									className: "flex items-start gap-3 text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs uppercase tracking-widest text-quiet",
										children: "Email"
									}), contact.email] })]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${contact.phoneTel}`,
									className: "flex items-start gap-3 text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs uppercase tracking-widest text-quiet",
										children: "Phone"
									}), contact.phoneDisplay] })]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappHref("Hello ICLAX Digital, I would like a quotation."),
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-start gap-3 text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "mt-0.5 size-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs uppercase tracking-widest text-quiet",
										children: "WhatsApp"
									}), "Message the team"] })]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs uppercase tracking-widest text-quiet",
										children: "Location"
									}), contact.location] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-sm leading-relaxed text-quiet",
							children: "We reply with a recommended scope and a quotation prepared for your business. Media budgets, where relevant, are discussed with you before anything is spent."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-wrap gap-3",
							children: contact.socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: social.href,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": social.label,
								className: "grid h-11 w-11 place-items-center border border-mist text-ink transition-colors hover:border-gold hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
									label: social.label,
									className: "size-4"
								})
							}) }, social.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/hotel.jpg",
							alt: "A hospitality interior, the kind of business ICLAX Digital helps promote",
							className: "mt-10 aspect-[16/10] w-full object-cover"
						})
					]
				})]
			})
		})]
	});
}
//#endregion
export { ContactPage as component };
