🛠️ Tech Stack
The project is built with the following technologies:

ReactJS: Frontend framework for building the user interface.
NodeJS: Backend runtime for handling server-side logic.
MongoDB: NoSQL database for storing and managing data.
🚀 Quick Start Guide
Follow these steps to set up the project locally on your machine:

1. Clone the Repository
Start by cloning the repository to your local machine:

bash
Copy
Edit
git clone https://github.com/Flying-Bison/Taskk.git
cd BharatFD
This will create a local copy of the project and navigate you to the project directory.

2. Set Up the Backend
To run the backend, follow these steps:

Navigate to the Server Directory: Change to the server directory:

bash
Copy
Edit
cd backend
Install Backend Dependencies: Install the required NodeJS packages:

bash
Copy
Edit
npm install
Start the Backend Server: After the dependencies are installed, start the server:

bash
Copy
Edit
node server.js
The backend will now be running locally.

3. Set Up the Frontend 
To run the frontend, follow these steps:

Navigate to the Client Directory: Change to the client directory:

bash
Copy
Edit
cd frontend
Install Frontend Dependencies: Install the necessary packages for the frontend:

bash
Copy
Edit
npm install
Start the Frontend Development Server: After the installation completes, start the development server:

bash
Copy
Edit
npm run dev
The frontend will now be live and accessible.

4. Configure MongoDB Connection
In order to connect to your MongoDB database, follow these steps:

Create a .env File: In the server directory, create a .env file.

Add MongoDB Connection URL: In the .env file, add your MongoDB connection string:

env
Copy
Edit
MONGODB_URL=your_mongodb_connection_url
Make sure to replace your_mongodb_connection_url with the actual MongoDB URL you’re using. This will allow the backend to connect to your database.

Notes:
Environment Variables: You may need additional environment variables depending on your specific setup. Make sure to check the .env file in the repository for any other required configurations.
MongoDB Setup: If you're using a cloud-based MongoDB solution (like MongoDB Atlas), ensure that your cluster is set up and your credentials are correctly configured.