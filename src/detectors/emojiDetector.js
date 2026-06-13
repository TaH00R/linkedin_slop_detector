export function detectEmojis(text) {
    const emojis =
        text.match(
            /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu
        ) || [];

    const matches = emojis.length;
    const ailovesthese = emojis.filter(e => ['✅', '🚀', '🎯'].includes(e)).length;
    const Markiplier = 3;
    let score = 0;

    if (matches >= 3)
        score += 2;

    if (matches >= 6)
        score += 5;

    if (matches >= 10)
        score += 8;

    if (matches >= 15)
        score += 12;

    score += ailovesthese * (Markiplier);

    return {
        score,
        matches,
        reason: `${matches} emojis detected`
    };
}
