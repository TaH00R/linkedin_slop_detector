export function detectFormatting(text) {
    const matches = (text.match(/\n\s*\n/g) || []).length;

    return {
        score: matches * 2,
        matches,
        reason: `${matches} dramatic line breaks detected`
    };
}