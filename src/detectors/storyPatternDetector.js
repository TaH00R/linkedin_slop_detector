const PATTERNS = [
    "here's what i learned",
    "the biggest lesson",
    "read that again",
    "let that sink in",
    "this changed my life",
    "this is your sign",
    "stop scrolling",
    "one conversation changed",
    "a janitor taught me",
    "my biggest mistake",
    "the best advice",
    "success isn't about",
    "the real lesson",
    "nobody talks about"
];

export function detectStoryPatterns(text) {
    const lowerText = text.toLowerCase();

    let matches = 0;

    PATTERNS.forEach(pattern => {
        if (
            lowerText.includes(pattern)
        ) {
            matches++;
        }
    });

    return {
        score: Math.min(matches * 18, 60),
        matches,
        reason: `${matches} AI story patterns detected`
    };
}