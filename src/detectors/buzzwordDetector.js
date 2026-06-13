import { BUZZWORDS } from "../data/buzzwords.js";

export function detectBuzzwords(text) {
    const lowerText = text.toLowerCase();

    let matches = 0;

    BUZZWORDS.forEach(word => {
        if (lowerText.includes(word.toLowerCase())) {
            matches++;
        }
    });

    return {
        score: matches * 5,
        matches,
        reason: `${matches} buzzwords detected`
    };
}