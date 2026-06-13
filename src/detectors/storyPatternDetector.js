const PATTERNS = [
    "today i met",
    "today i learned",
    "years ago",
    "nobody talks about",
    "let that sink in",
    "this changed my life",
    "here's what i learned",
    "the lesson"
];

export function detectStoryPatterns(text) {
    const lowerText = text.toLowerCase();

    let matches = 0;

    PATTERNS.forEach(pattern => {
        if (lowerText.includes(pattern)) {
            matches++;
        }
    });

    return {
        score: matches * 7,
        matches,
        reason: `${matches} story patterns detected`
    };
}