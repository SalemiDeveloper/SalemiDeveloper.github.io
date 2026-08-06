import { ChallengeCard } from "./challenge-card.js";

export function ChallengesSection(project) {
    return `
        <section class="challenges">
            <h2 class="challenges__title">
                Desafios Técnicos
            </h2>

            <div class="challenges__grid">
                ${project.challenges.map(ChallengeCard).join("")}
            </div>
        </section>
    `;
}