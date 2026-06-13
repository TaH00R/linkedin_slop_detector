const DEFAULT_SETTINGS = {
    enabled: true,
    sensitivity: 50,
    showReasons: true
};

export async function getSettings() {
    const settings = await chrome.storage.local.get(DEFAULT_SETTINGS);

    return {
        ...DEFAULT_SETTINGS,
        ...settings
    };
}

export async function saveSettings(settings) {
    await chrome.storage.local.set(settings);
}