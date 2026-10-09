# Speechbot

A modern, responsive text-to-speech web application built with Next.js and the Web Speech API.

## Features

- **Text-to-Speech Conversion**: Convert any text to speech using the Web Speech API
- **Multi-language Support**: Choose from multiple languages with automatic voice detection
- **Voice Selection**: Select from available system voices for each language
- **Adjustable Speed**: Control playback speed (0.5x, 0.75x, 1x, 1.5x)
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Loading States**: Smooth loading experience with spinner during voice initialization
- **Modern UI**: Clean interface with gradient buttons and dark theme

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: Web Speech API (SpeechSynthesis)
- **Icons & Assets**: Next.js Image optimization

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thateflondon/speechbot.git
cd speechbot
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Enter your text in the text area
2. Select a language from the dropdown
3. Choose a voice for the selected language
4. Adjust playback speed if desired
5. Click "Text to Speech" to hear your text

## Browser Compatibility

The Web Speech API is supported in:
- Chrome 33+
- Edge 14+
- Safari 7+
- Opera 21+

Note: Firefox has limited support. For best experience, use Chrome or Edge.

## Project Structure

```
speechbot/
├── app/
│   ├── components/      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Dropdown.tsx
│   │   ├── SpeedSelector.tsx
│   │   └── TextArea.tsx
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main application page
├── public/
│   └── assets/          # Images and SVG icons
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

Created by [thateflondon](https://github.com/thateflondon)
