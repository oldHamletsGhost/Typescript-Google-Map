# Typescript-Google-Map

A TypeScript project that integrates Google Maps to display companies and users on an interactive map.

## Prerequisites

- Node Version Manager (nvm) installed
- Node.js and npm (managed via nvm)

## Setup Instructions

1. Use the correct Node version:

```bash
nvm use
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.sample .env
```

4. Add Google Console credentials to the `.env` file. You will need:
   - A Map ID
   - A Google Maps JavaScript API key

### Getting Google Console Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the Maps JavaScript API
4. Generate an API key in Credentials
5. Create a Map ID in the Maps Management section

6. Start the development server:

```bash
npx parcel index.html
```

The app will be available at `http://localhost:1234`

## Customization

This project uses [faker](https://github.com/faker-js/faker) to generate placeholder data. You can customize the application by:

- Editing `Company.ts` to modify company data and behavior
- Editing `User.ts` to modify user data and behavior
- Updating the coordinates and properties to suit your needs
