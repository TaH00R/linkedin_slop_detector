import { ENGAGEMENT_BAIT } from "../data/engagementBait.js";

export function detectEngagementBait(text) {
    const lowerText = text.toLowerCase();

    let matches = 0;

    ENGAGEMENT_BAIT.forEach(phrase => {
        if (
            lowerText.includes(
                phrase.toLowerCase()
            )
        ) {
            matches++;
        }
    });

    return {
        score: Math.min(matches * 15, 45),
        matches,
        reason: `${matches} engagement bait phrases detected`
    };
}