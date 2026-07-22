export function Button({
    text,
    href = "#",
    variant = "primary",
    target = "_self"
}) {
    return `
        <a 
            href="${href}"
            target="${target}"
            class="button button--${variant}"
        >
            ${text}
        </a>
    `;
};