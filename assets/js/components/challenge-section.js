import { ChallengeCard } from "./challenge-card.js";

export function ChallengesSection(project, texts) {
    return `
        <section class="challenges">
            <h2 class="challenges__title">
                ${texts.technicalChallenges}
            </h2>

            <div class="challenges__grid">
                ${project.challenges.map(ChallengeCard).join("")}
            </div>
        </section>
    `;
}