# LMS Project (MERN Stack) by IMARTICUS

This is a Learning Management System (LMS) built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- User authentication
- Course creation and listing
- View course details
- Responsive UI

## Live Demo

https://lms-imarticus.onrender.com

Note-> The website may take 1–2 minutes to load initially because it is hosted on a free service (Render).

## Tech Stack

- Frontend: React (Vite)
- Backend: Node.js, Express
- Database: MongoDB

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <your-repo-link>
   ```

2. Install dependencies:

   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

3. Add environment variables:
   Create a `.env` file in backend:

   ```
   MONGO_URI=your_mongodb_connection
   PORT=3000
   ```

4. Run the project:

   ```bash
   cd backend
   npm start

   cd ../frontend
   npm run dev
   ```

## Notes

- Ensure MongoDB Atlas IP is whitelisted
- Backend must be running before frontend

## Author

Ritesh
email- riteshsingh01st@gmail.com
no.- 6393682521
