export function createDetailsPanel(result) {

    const panel = document.createElement("div");

    panel.className = "ai-slop-details";

    const title = document.createElement("strong");
    title.textContent = "Detected Signals";

    panel.appendChild(title);

    const list = document.createElement("ul");

    if (!result.reasons || result.reasons.length === 0) {

        const item = document.createElement("li");
        item.textContent =
            "No strong AI writing patterns detected.";

        list.appendChild(item);

    } else {

        result.reasons.forEach(reason => {

            const item = document.createElement("li");
            item.textContent = reason;

            list.appendChild(item);

        });

    }

    panel.appendChild(list);

    return panel;
}