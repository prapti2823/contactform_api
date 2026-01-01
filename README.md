# Contact Form API

A Node.js Express API for handling portfolio contact form submissions with MongoDB integration and admin authentication.

## Features

- Express.js REST API
- MongoDB database integration
- CORS enabled for cross-origin requests
- Contact form data handling
- JWT-based admin authentication
- Protected admin routes

## Environment Variables

Create a `.env` file or set the following environment variables:

```
MONDODB_CONNECTION=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_super_secret_jwt_key
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
   - `JWT_SECRET`: Your JWT secret key
3. Render will automatically detect the Node.js app and deploy using `npm start`

## API Endpoints

### Public Endpoints
- `POST /api/contact` - Submit contact form
- `POST /api/add-contact` - Legacy contact submission endpoint

### Admin Endpoints
- `POST /api/admin/login` - Admin login (returns JWT token)
- `GET /api/contacts` - Get all contacts (requires JWT authentication)
- `GET /api/get-contact` - Legacy get contacts endpoint (requires JWT authentication)

### Authentication
For protected routes, include the JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## Contact Form Enhancement
The contact form now automatically adds:
- `createdAt`: Current timestamp
- `isRead`: Default false

## Project Structure

```
contactform_api/
├── Controllers/     # Request handlers
│   ├── Contact.js   # Contact form handlers
│   └── Admin.js     # Admin authentication handlers
├── Models/         # Database models
│   ├── Contact.js  # Contact schema
│   └── Admin.js    # Admin schema
├── Routers/        # API routes
│   └── routes.js   # All API routes
├── middleware/     # Custom middleware
│   └── auth.js     # JWT authentication middleware
├── config.js       # Database configuration
├── index.js        # Main application file
└── package.json    # Dependencies and scripts
```