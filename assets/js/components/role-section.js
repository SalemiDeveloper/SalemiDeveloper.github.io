export function RoleSection(project) {
    return `
        <section class="role">
            <h2 class="role__title">
                Meu papel
            </h2>

            <p class="role__type">
                ${project.role.type}
            <p>

            <p class="role__description">
                ${project.role.description}
            </p>
        </section>
    `;
}