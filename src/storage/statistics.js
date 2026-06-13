const DEFAULT_STATS = {
    scannedPosts: 0,
    humanPosts: 0,
    suspiciousPosts: 0,
    aiPosts: 0,
    maxSlopPosts: 0
};

export async function getStats() {
    const stats = await chrome.storage.local.get(DEFAULT_STATS);

    return {
        ...DEFAULT_STATS,
        ...stats
    };
}

export async function updateStats(label) {
    try {
        const stats = await getStats();

        stats.scannedPosts++;

        switch (label) {
            case "Human":
                stats.humanPosts++;
                break;

            case "Suspicious":
                stats.suspiciousPosts++;
                break;

            case "AI Slop":
                stats.aiPosts++;
                break;

            case "Maximum Slop":
                stats.maxSlopPosts++;
                break;
        }

        await chrome.storage.local.set(stats);

    } catch (error) {
        console.error(
            "Failed to update statistics:",
            error
        );
    }
}