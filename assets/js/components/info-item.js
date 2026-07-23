export function InfoItem({ label, value }) {
    return `
        <div class="info-item">
            <span class="info-item__label">${label}</span>
            <strong class="info-item__value">${value}</strong>
        </div>
    `;
}