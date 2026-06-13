import { getStats } from "../storage/statistics.js";

async function loadStats() {
    try {
        const stats = await getStats();

        document.getElementById("stats").innerHTML = `
            <div class="stat">Posts Scanned: ${stats.scannedPosts}</div>
            <div class="stat">Humans: ${stats.humanPosts}</div>
            <div class="stat">Suspicious: ${stats.suspiciousPosts}</div>
            <div class="stat">AI Slop: ${stats.aiPosts}</div>
            <div class="stat">Maximum Slop: ${stats.maxSlopPosts}</div>
        `;
    } catch (error) {
        console.error("Failed to load stats:", error);

        document.getElementById("stats").innerHTML = `
            <div class="stat">
                Failed to load statistics.
            </div>
        `;
    }
}

loadStats();

document
    .getElementById("resetStats")
    .addEventListener("click", async () => {
        try {
            await chrome.storage.local.set({
                scannedPosts: 0,
                humanPosts: 0,
                suspiciousPosts: 0,
                aiPosts: 0,
                maxSlopPosts: 0
            });

            await loadStats();
        } catch (error) {
            console.error("Failed to reset stats:", error);
        }
    });