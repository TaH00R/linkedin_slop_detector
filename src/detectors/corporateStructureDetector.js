const SECTIONS = [
    "problem statement",
    "solution",
    "usp",
    "key features",
    "benefits",
    "for customers",
    "for businesses",
    "for restaurant owners",
    "key takeaways",
    "conclusion"
];

export function detectCorporateStructure(text) {

    const lower =
        text.toLowerCase();

    let matches = 0;

    SECTIONS.forEach(section => {
        if (lower.includes(section)) {
            matches++;
        }
    });

    let score = matches * 12;

    if (
        lower.includes("problem statement") &&
        lower.includes("solution")
    ) {
        score += 20;
    }

    return {
        score: Math.min(score, 70),
        matches,
        reason:
            `${matches} AI-style section headers detected`
    };
}