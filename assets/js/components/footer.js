import { footer } from "../../data/footer.js";
import { Button } from "./button.js";

export function FooterSection() {
    return `
        <footer class="footer">
            <div class="container">
                <p class="footer__role">
                    ${footer.role} | ${footer.copyright}
                </p>
            </div>
        </footer>
    `;
}