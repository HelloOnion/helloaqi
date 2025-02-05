# HelloAQI Chrome Extension

This is a Hobby Project!
A simple Chrome extension that displays real-time Air Quality Index (AQI) data for your current location.

## Features

- 🌍 Real-time AQI data
- 📍 Location-based (IP) air quality information
- 🎨 Color-coded AQI levels for easy understanding
- 🔔 Simple and clean interface in Chrome toolbar
- 🌞/🌙 toggle between Light and Dark modes
  
## Installation

1. Download or clone this repository
2. npm/yarn/pnpm install
3. request a new [AQIAPI](https://aqicn.org/api/) token from [AQIAPI Token](https://aqicn.org/data-platform/token/)
4. paste you new token to the .env file NEXT_PUBLIC_AQI_TOKEN (example: NEXT_PUBLIC_AQI_TOKEN=1234567abcdef)
5. npm run build / yarn run build / pnpm build
6. Open Chrome and go to `chrome://extensions/`
7. Enable "Developer mode" in the top right
8. Click "Load unpacked" and select the extension directory
9. Select the "out" folder inside the project.
10. voila!

## Usage

1. Click the extension icon in your Chrome toolbar
2. Allow location access when prompted
3. View your local AQI data instantly
4. type country or city name to search.

## API

This extension uses the [AQIAPI](https://aqicn.org/api/) to fetch AQI data.

## Technologies Used

- NextJS
- JavaScript
- HTML/CSS
- AQI API

## License

This project is personal and not open for contributions.
