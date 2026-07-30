import { contact } from "../../data/contact.js";
import { SectionTitle } from "./section-title.js";
import { Button } from "./button.js";

export function ContactSection() {
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
                        text: "Github",
                        href: contact.github,
                        variant: "secondary",
                        target: "_blank"
                    })}

                    ${Button({
                        text: "Linkedin",
                        href: contact.linkedin,
                        variant: "secondary",
                        target: "_blank"
                    })}

                    ${Button({
                        text: "Email",
                        href: `mailto:${contact.email}`
                    })}

                    ${Button({
                        text: "Download CV",
                        href: contact.cv,
                        target: "_blank"
                    })}
                </div>
            </div>
        </section>
    `;
}