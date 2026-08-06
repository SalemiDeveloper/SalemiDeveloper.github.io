export function ChallengeCard(challenge) {
    return `
        <article class="challenge-card">
            <h3 class="challenge-card__title">
                ${challenge.title}
            </h3>

            <div class="challenge-card__block">
                <h4>Problema</h4>
                <p>${challenge.problem}</p>
            </div>

            <div class="challenge-card__block">
                <h4>Solução</h4>
                <p>${challenge.solution}</p>
            </div>

            <div class="challenge-card__block">
                <h4>Resultado</h4>
                <p>${challenge.result}</p>
            </div>
        </article>
    `;
}