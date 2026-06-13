import { GPT_PHRASES } from "../data/gptPhrases.js";

export function detectGPTPhrases(text) {
    const lowerText = text.toLowerCase();

    let matches = 0;

    GPT_PHRASES.forEach(phrase => {
        if (lowerText.includes(phrase.toLowerCase())) {
            matches++;
        }
    });

    return {
        score: matches * 8,
        matches,
        reason: `${matches} GPT-style phrases detected`
    };
}