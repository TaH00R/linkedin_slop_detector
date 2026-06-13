import { detectBuzzwords } from "../detectors/buzzwordDetector.js";
import { detectEmDashes } from "../detectors/emDashDetector.js";
import { detectEmojis } from "../detectors/emojiDetector.js";
import { detectEngagementBait } from "../detectors/engagementBait.js";
import { detectFormatting } from "../detectors/formattingDetector.js";
import { detectGPTPhrases } from "../detectors/gptPhraseDetector.js";
import { detectStoryPatterns } from "../detectors/storyPatternDetector.js";
import { getLabel } from "./scoreLabels.js";
import {detectCorporateStructure} from "../detectors/corporateStructureDetector.js";

function safeDetect(detector, text) {
    try {
        return detector(text);
    } catch (error) {
        console.error(error);

        return {
            score: 0,
            matches: 0,
            reason: ""
        };
    }
}

export function analyzePost(text) {

    const detectors = [
        safeDetect(detectBuzzwords, text),
        safeDetect(detectEmDashes, text),
        safeDetect(detectEmojis, text),
        safeDetect(detectEngagementBait, text),
        safeDetect(detectFormatting, text),
        safeDetect(detectGPTPhrases, text),
        safeDetect(detectStoryPatterns, text),
        safeDetect(detectCorporateStructure, text)
    ];

    const rawScore = detectors.reduce(
        (sum, detector) => sum + detector.score,
        0
    );

    const score = Math.min(
    Math.round(
        100 * (
            1 - Math.exp(
                -rawScore / 35
            )
        )
    ),
    100
);

    const reasons = detectors
        .filter(d => d.matches > 0)
        .map(d => d.reason);

    return {
        score,
        reasons,
        ...getLabel(score)
    };
}