export function InfoItem({ label, value, icon = "" }) {
    return `
        <div class="info-item">
            <span class="info-item__label">
                ${label}
            </span>

            <strong class="info-item__value">
                ${icon ? `
                    <span class="info-item__icon">
                        ${icon}
                    </span>
                ` : ""}
                ${value}
            </strong>
        </div>
    `;
}