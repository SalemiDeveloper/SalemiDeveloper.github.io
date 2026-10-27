
export function RoleSection(project, texts) {
    return `
        <section class="role">
            <h2 class="role__title">
                ${texts.myRole}
            </h2>

            <p class="role__type">
                ${project.role.type}
            </p>

            <p class="role__description">
                ${project.role.description}
            </p>
        </section>
    `;
}
