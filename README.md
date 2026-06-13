# AI-SLOP

AI-SLOP is a Chrome extension that analyzes LinkedIn posts and estimates how likely they are to have been generated using AI-style writing patterns.

Instead of looking for topics, AI-SLOP looks for common patterns often found in AI-generated LinkedIn content:

* Generic life lessons
* GPT-style phrasing
* Engagement bait
* Corporate buzzwords
* Storytelling templates
* Startup pitch-deck structures
* Excessive formatting
* Emoji overload

Posts are classified into categories ranging from **Likely Human** to **Very Likely AI**, along with a confidence score and explanation of detected signals.

---

## Features

* Real-time LinkedIn post analysis
* AI likelihood score (0-100%)
* Confidence labels
* Detailed reasoning panel
* Dynamic feed support using MutationObserver
* Runs entirely in the browser
* No APIs
* No backend
* No data collection

---

## How It Works

AI-SLOP scans LinkedIn posts and runs them through multiple detectors.

Examples include:

* AI phrase detection
* Engagement bait detection
* Corporate buzzword detection
* Story-pattern detection
* Formatting analysis
* Emoji analysis
* Structural template detection

The results are combined into a final AI-likelihood score.

Example:

```text
🔴 Very Likely AI (87%)

Detected Signals:
• 3 AI-style phrases detected
• 2 story patterns detected
• 4 buzzwords detected
• AI-style section headers detected
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/TaH00R/ai-slop.git
cd ai-slop
```

### Install dependencies

```bash
npm install
```

### Build the extension

```bash
npm run build
```

### Load into Chrome

1. Open:

```text
chrome://extensions
```

2. Enable **Developer Mode**

3. Click **Load unpacked**

4. Select the project folder

5. Open LinkedIn

6. Refresh the page

---

## Project Structure

```text
src/
├── content/
├── data/
├── detectors/
├── options/
├── popup/
├── scoring/
├── storage/
├── styles/
├── ui/
└── tests/

dist/
└── content.js
```

---

## Disclaimer

AI-SLOP does not determine with certainty whether a post was written by AI.

It estimates the likelihood that a post contains writing patterns commonly associated with AI-generated content.

False positives and false negatives are expected.

---

## Why?

Because sometimes you scroll LinkedIn and wonder:

> "Did a person write this, or did ChatGPT clock in for another shift?"

AI-SLOP attempts to answer that question.

---

## License

MIT License
