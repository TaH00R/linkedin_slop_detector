export function detectGPTPhrases(text) {
    const lowerText = text.toLowerCase();

    let matches = 0;

    GPT_PHRASES.forEach(phrase => {
        if (
            lowerText.includes(
                phrase.toLowerCase()
            )
        ) {
            matches++;
        }
    });

    return {
        score: Math.min(matches * 12, 50),
        matches,
        reason: `${matches} AI-style phrases detected`
    };
}