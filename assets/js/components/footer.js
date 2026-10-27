
export function FooterSection(footer) {
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
