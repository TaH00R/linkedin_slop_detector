export function detectEmojis(text) {
    const emojis =
        text.match(
            /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu
        ) || [];

    const matches = emojis.length;

    let score = 0;

    if (matches >= 3)
        score += 2;

    if (matches >= 6)
        score += 4;

    if (matches >= 10)
        score += 6;

    if (matches >= 15)
        score += 8;

    return {
        score,
        matches,
        reason: `${matches} emojis detected`
    };
}