export function createBadge(result) {

    const badge = document.createElement("div");

    badge.classList.add("ai-slop-badge");

    const label = (result.label || "").toLowerCase();

    if (label.includes("human")) {
        badge.classList.add("ai-slop-human");
    }
    else if (label.includes("mixed")) {
        badge.classList.add("ai-slop-suspicious");
    }
    else if (label.includes("likely ai")) {
        badge.classList.add("ai-slop-ai");
    }
    else {
        badge.classList.add("ai-slop-max");
    }

    badge.textContent =
    `${result.emoji} ${result.label} (${result.score}%)`;

    return badge;
}