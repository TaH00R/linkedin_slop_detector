export function detectEmDashes(text) {

    const matches =
        (text.match(/—/g) || []).length;

    let score = 0;

    if (matches >= 2)
        score += 2;

    if (matches >= 4)
        score += 4;

    if (matches >= 7)
        score += 6;

    return {
        score,
        matches,
        reason: `${matches} em dashes detected`
    };
}