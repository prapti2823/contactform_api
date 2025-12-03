# Contact Form API

A Node.js Express API for handling portfolio contact form submissions with MongoDB integration.

## Features

- Express.js REST API
- MongoDB database integration
- CORS enabled for cross-origin requests
- Contact form data handling

## Environment Variables

Create a `.env` file or set the following environment variables:

```
MONDODB_CONNECTION=your_mongodb_connection_string
PORT=5000
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment on Render

1. Connect your GitHub repository to Render
2. Set the following environment variables in Render dashboard:
   - `MONDODB_CONNECTION`: Your MongoDB connection string
3. Render will automatically detect the Node.js app and deploy using `npm start`

## API Endpoints

Refer to the routes defined in `./Routers/routes.js` for available endpoints.

## Project Structure

```
contactform_api/
├── Controllers/     # Request handlers
├── Models/         # Database models
├── Routers/        # API routes
├── config.js       # Database configuration
├── index.js        # Main application file
└── package.json    # Dependencies and scripts
```