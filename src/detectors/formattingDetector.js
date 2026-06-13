export function detectFormatting(text) {

    const lineBreaks =
        (text.match(/\n/g) || []).length;

    const matches =
        Math.floor(lineBreaks / 2);

    let score = 0;

    if (matches >= 5) score += 5;
    if (matches >= 10) score += 10;
    if (matches >= 15) score += 15;

    return {
        score,
        matches,
        reason:
            `${matches} dramatic line breaks detected`
    };
}