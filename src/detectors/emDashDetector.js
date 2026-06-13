export function detectEmDashes(text) {
    const matches = (text.match(/—/g) || []).length;

    return {
        score: matches * 3,
        matches,
        reason: `${matches} em dashes detected`
    };
}