export function detectBuzzwords(text) {
    const lowerText = text.toLowerCase();

    let matches = 0;

    BUZZWORDS.forEach(word => {
        const escaped = word.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );

        const regex = new RegExp(
            `\\b${escaped}\\b`,
            "i"
        );

        if (regex.test(lowerText)) {
            matches++;
        }
    });

    let score = 0;

    if (matches >= 2) score += 5;
    if (matches >= 4) score += 10;
    if (matches >= 6) score += 15;

    return {
        score,
        matches,
        reason: `${matches} buzzwords detected`
    };
}