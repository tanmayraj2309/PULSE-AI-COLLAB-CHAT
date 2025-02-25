Pulse AI Chat - Project Documentation


Overview

Pulse AI Chat is a collaborative development platform that integrates AI-powered code generation and real-time collaboration. It allows users to create projects, collaborate with team members, and generate code using AI. The platform is built using the MERN stack (MongoDB, Express.js, React, Node.js) and integrates with Google's Generative AI for code suggestions.

This project is divided into two main folders:

* Backend: Contains the server-side logic, API endpoints, and database models.
* Frontend: Contains the React-based user interface and client-side logic.

Features

1. User Authentication:

   * Users can register, log in, and log out.
   * JWT-based authentication for secure access.

2. Project Management:

   * Create and manage projects.
   * Add collaborators to projects.
   * Update and manage file structures within projects.

3. AI-Powered Code Generation:

   * Integrates with Google's Generative AI to generate code snippets.
   * AI responds to prompts prefixed with @ai.

4. Real-Time Collaboration:

   * Real-time messaging and file updates using WebSockets.
   * Multiple users can collaborate on the same project simultaneously.

5. Code Execution:

   * Built-in WebContainer for running and testing code directly in the browser.
   * Supports running Node.js applications.

Folder Structure

Backend

backend/
├── controllers/                
│   ├── aicontroller.js
│   ├── projectController.js
│   └── user.controller.js
├── db/
│   └── db.js
├── middleware/
│   └── auth.middleware.js
├── models/
│   ├── project.model.js
│   └── user.model.js
├── routes/
│   ├── ai.routes.js
│   ├── project.route.js
│   └── user.routes.js
├── services/
│   ├── ai.service.js
│   ├── project.service.js
│   ├── redis.service.js
│   └── user.service.js
├── .env
├── package.json
└── server.js

Frontend

frontend/
├── auth/
│   └── UserAuth.js
├── config/
│   ├── axios.js
│   ├── socket.js
│   └── webcontainer.js
├── context/
│   └── user.context.js
├── routes/
│   └── AppRoutes.js
├── screens/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Logout.jsx
│   ├── Project.jsx
│   └── Register.jsx
├── .env
├── index.html
├── package.json
└── vite.config.js


Setup Instructions

Prerequisites

1. Node.js: Ensure Node.js is installed on your machine.
2. MongoDB: Set up a MongoDB database (local or cloud-based).
3. Redis: Set up a Redis server for token blacklisting.
4. Google Generative AI API Key: Obtain an API key from Google.

Backend Setup

1. Clone the repository:
   git clone <repository-url>
   cd <repository-folder>

2. Navigate to the backend folder:
   cd backend

3. Install dependencies:
  npm install

4. Create a .env file in the backend folder and add the following environment variables:
   MONGODB_URI=<your-mongodb-uri>
   PORT=8040
   JWT_SECRET=<your-jwt-secret>
   REDIS_HOST=<your-redis-host>
   REDIS_PORT=<your-redis-port>
   REDIS_PASSWORD=<your-redis-password>
   GOOGLE_AI_KEY=<your-google-ai-key>

5. Start the backend server:
   npm start

Frontend Setup : 

1. Navigate to the frontend folder:
   cd frontend

2.Install dependencies:
  npm install

3. Create a .env file in the frontend folder and add the following environment variable:
   VITE_API_URL=http://localhost:8040

4. Start the frontend development server:
   npm run dev


How It Works

1. User Authentication:

   * Users can register and log in using their email and password.
   * JWT tokens are used for session management.

2. Project Creation:

   * Logged-in users can create new projects.
   * Projects are stored in MongoDB and associated with the user.

3. Collaboration:

   * Users can add collaborators to their projects.
   * Real-time updates are handled using WebSockets.

4. AI Integration:

   * Users can interact with the AI by typing @ai followed by a prompt.
   * The AI generates code snippets and updates the project's file structure.

5. Code Execution:

   * Users can run their code directly in the browser using WebContainers.
   * The output is displayed in an embedded iframe.

Technologies Used

* Backend:

  * Node.js
  * Express.js
  * MongoDB
  * Redis
  * Google Generative AI

* Frontend:

  * React
  * Tailwind CSS
  * WebSockets
  * WebContainers

Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or issues, please open an issue on GitHub or contact the maintainers.
