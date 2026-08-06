export function ArchitectureDiagram() {
    const items = [
        "Browser",
        "Controllers",
        "Services",
        "Models",
        "MySQL"
    ];

    return `
        <div class="architecture-diagram">

            ${items.map((item, index) => `
                <div class="architecture-diagram__step">

                    <div class="architecture-diagram__box">
                        ${item}
                    </div>

                    ${
                        index < items.length - 1
                            ? `
                                <div class="architecture-diagram__arrow">
                                    ↓
                                </div>
                            `
                            : ""
                    }

                </div>
            `).join("")}

        </div>
    `;
}