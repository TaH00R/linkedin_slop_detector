    import { analyzePost } from "../scoring/scoreCalculator.js";

    import { createBadge } from "../ui/badgeRenderer.js";
    import { createDetailsPanel } from "../ui/detailsPanel.js";

    console.log("AI-SLOP loaded");

    function scanPosts() {
        console.log("Scanning posts...");

        const posts = getPosts();

        console.log(`Found ${posts.length} potential posts`);

        posts.forEach(post => {
            try {
                // Prevent duplicate injections
                if (
                    post.querySelector(".ai-slop-badge") ||
                    post.dataset.slopScanned === "true"
                ) {
                    return;
                }

                const text = extractPostText(post);

                if (!text || !text.trim()) {
                    return;
                }

                const result = analyzePost(text);

                const badge = createBadge(result);
                const panel = createDetailsPanel(result);

               const container = post.parentElement;

if (!container) return;

container.prepend(panel);
container.prepend(badge);

                post.dataset.slopScanned = "true";

                console.log(
                    `${result.label} (${result.score}%)`
                );

            } catch (error) {
                console.error(
                    "Failed to analyze post:",
                    error
                );
            }
        });
    }

    // Initial scan
    scanPosts();

    // LinkedIn dynamically loads posts
    const observer = new MutationObserver(() => {
        scanPosts();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log("MutationObserver active");

    function getPosts() {
    return document.querySelectorAll(
        '[data-testid="expandable-text-box"]'
    );
}

    function extractPostText(postElement) {
    return postElement.textContent || "";
}