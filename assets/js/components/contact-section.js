
import { SectionTitle } from "./section-title.js";
import { Button } from "./button.js";

export function ContactSection(contact, texts) {
    return `
        <section class="contact section" id="contact" data-reveal>
            <div class="container">
                ${SectionTitle({
                    eyebrow: "",
                    title: contact.title
                })}

                <div class="contact__content">
                    <div class="contact__visual">
                        <svg
                            class="contact__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 200"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M35 45 H165 A15 15 0 0 1 180 60 V135 A15 15 0 0 1 165 150 H35 A15 15 0 0 1 20 135 V60 A15 15 0 0 1 35 45 Z"
                                stroke="currentColor"
                                stroke-width="5"
                                stroke-linejoin="round"
                            />

                            <path
                                d="M25 55 L100 110 L175 55"
                                stroke="currentColor"
                                stroke-width="5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>

                    <div class="contact__info">
                        <p class="contact__description">
                            ${contact.description}
                        </p>

                        <div class="contact__actions">
                            ${Button({
                                text: texts.github,
                                href: contact.github,
                                variant: "secondary",
                                target: "_blank"
                            })}

                            ${Button({
                                text: texts.linkedin,
                                href: contact.linkedin,
                                variant: "secondary",
                                target: "_blank"
                            })}

                            ${Button({
                                text: texts.email,
                                href: `mailto:${contact.email}`
                            })}

                            ${Button({
                                text: texts.downloadCV,
                                href: contact.cv,
                                target: "_blank"
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
