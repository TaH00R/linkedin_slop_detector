import {
    getSettings,
    saveSettings
} from "../storage/settings.js";

const sensitivityInput =
    document.getElementById("sensitivity");

const sensitivityValue =
    document.getElementById("sensitivityValue");

const showReasonsInput =
    document.getElementById("showReasons");

const saveBtn =
    document.getElementById("saveBtn");

async function init() {

    const settings = await getSettings();

    sensitivityInput.value =
        settings.sensitivity;

    sensitivityValue.textContent =
        settings.sensitivity;

    showReasonsInput.checked =
        settings.showReasons;
}

sensitivityInput.addEventListener(
    "input",
    () => {
        sensitivityValue.textContent =
            sensitivityInput.value;
    }
);

saveBtn.addEventListener(
    "click",
    async () => {

        await saveSettings({
            sensitivity:
                Number(
                    sensitivityInput.value
                ),

            showReasons:
                showReasonsInput.checked
        });

        saveBtn.textContent = "Saved ✓";

        setTimeout(() => {
            saveBtn.textContent = "Save";
        }, 1500);
    }
);

init();