# Favorite City App

An interactive web application built with [Next.js](https://nextjs.org) and [React](https://reactjs.org) that allows users to search for cities, view details about them, and save their favorite cities for quick access.

## Project Description

This application enables users to:

- Search for cities using an external [geocoding API](https://developer.mapquest.com/documentation/geocoding-api/).
- View detailed information about a selected city, including weather data.
- Save cities to a favorites list using [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
- Navigate between pages to explore different cities.

## Pages Structure

- **Home Page** - Contains a search bar for looking up cities.
- **City Page** - Displays detailed information about a specific city, including weather and geographical data.
- **Favorites Page** - Shows a list of saved favorite cities.

## Technologies Used

- [Next.js](https://nextjs.org) for routing and page management.
- [React](https://reactjs.org) for UI components and state management.
- [Chakra UI](https://chakra-ui.com) for styling and responsive design.
- [Geocoding API](https://developer.mapquest.com/documentation/geocoding-api/) for retrieving city details.
- [Weather API](https://openweathermap.org/api) for fetching weather-related information.
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for storing favorite cities.

## Installation and Running the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/favorite-city-app.git
   
2. Navigate to the project folder:

   ```bash
   cd favorite-city-app

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install

4. Run the application:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev

The application will be available at http://localhost:3000.

## Branch Structure

- main: The stable version of the application.
- feature/search: Implementation of city search functionality.
- feature/favorites: Feature branch for managing favorite cities.
- improvements: Various optimizations and UI enhancements.

## Branch Workflow

1. Create a new branch for a feature:

   ```bash
   git checkout -b feature/new-feature

2. Commit and push changes:

   ```bash
   git add .
   git commit -m "Implemented new feature"
   git push origin feature/new-feature

3. Open a Pull Request (PR) to merge changes into the main branch.
4. Once the feature is complete, open a Pull Request (PR) to merge changes into the main branch.
5. After approval, the feature is included in the main branch.

## Future Improvements

- Implement filtering options for favorite cities.
- Add user authentication to save favorite cities across devices.
- Improve UI/UX with better animations and transitions.

## Contributions

Contributions are welcome! Follow these steps to contribute:

- Fork the repository and create a branch for your modifications.
- Implement changes and commit them with descriptive messages.
- Submit a Pull Request with a detailed explanation of the improvements.

If you encounter any issues or have suggestions, please open an issue on GitHub! 🚀

## Learn More

To learn more about Next.js, take a look at the following resources:

- Next.js Documentation - learn about Next.js features and API.
- Learn Next.js - an interactive Next.js tutorial.

You can check out the Next.js GitHub repository - your feedback and contributions are welcome!
