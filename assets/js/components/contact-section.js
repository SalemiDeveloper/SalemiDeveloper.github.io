
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
        </section>
    `;
}
