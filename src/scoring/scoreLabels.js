export function getLabel(score) {
    if (score < 20) {
        return {
            label: "Likely Human",
            emoji: "🟢"
        };
    }

    if (score < 45) {
        return {
            label: "Mixed Signals",
            emoji: "🟡"
        };
    }

    if (score < 70) {
        return {
            label: "Likely AI",
            emoji: "🟠"
        };
    }

    return {
        label: "Very Likely AI",
        emoji: "🔴"
    };
}