export function Button({
    text,
    href = "#",
    variant = "primary",
    target = "_self"
}) {
    const rel = target === "_blank" ? 'rel="noopener noreferrer"' : "";

    return `
        <a
            href="${href}"
            target="${target}"
            ${rel}
            class="button button--${variant}"
        >
            ${text}
        </a>
    `;
}