export function detectEmojis(text) {
    const emojis =
        text.match(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu) || [];

    const matches = emojis.length;

    return {
        score: Math.min(matches * 2, 20),
        matches,
        reason: `${matches} emojis detected`
    };
}