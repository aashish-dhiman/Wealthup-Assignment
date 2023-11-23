# WealthUp.me Internship Assignment

## Introduction

This repository contains the code for the internship assignment provided by WealthUp.me. The goal of this assignment is to create a web design using Next.js from the given Figma design. Additionally, it involves creating a Node.js backend with MongoDB to handle API routes related to code validation.

## Technologies Used

- **Next.js:** The project is built using Next.js, a React framework that enables server-side rendering and easy configuration.

- **Tailwind CSS:** Tailwind CSS is used for styling, providing a utility-first approach for designing the user interface.

- **Node.js:** The backend is developed using Node.js, a JavaScript runtime.

- **MongoDB:** MongoDB is used as the database to store and manage codes.

## Setup Instructions

### Frontend (Next.js)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/wealthup-internship.git
   cd wealthup-internship
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Backend (Node.js with MongoDB)

1. Navigate to the `backend` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   node server.js
   ```


### Backend

1. Create a `.env` file in the `backend` directory:

   ```
   MONGODB_URI=your_actual_connection_string
   ```

2. Update your backend code to use the environment variable:

   ```javascript
   // Example usage in server.js
   require('dotenv').config();

   const mongoose = require('mongoose');
   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
   ```
