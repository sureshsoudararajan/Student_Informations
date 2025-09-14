# Student Information System

A simple web application to search for students in a database and view their detailed information.

## Features

-   **Search as you type:** Real-time search suggestions for students by name.
-   **Detailed View:** Click on a student from the search results to see their complete profile.
-   **Responsive UI:** A clean and simple user interface that works on different screen sizes.

## Tech Stack

-   **Frontend:**
    -   React.js
    -   Bootstrap
    -   Axios
-   **Backend:**
    -   Node.js
    -   Express.js
    -   PostgreSQL
    -   `node-postgres` (pg)
    -   `cors`
-   **Development:**
    -   `nodemon` for automatic server restarts.

## Setup and Installation

To get this project up and running on your local machine, follow these steps.

### Prerequisites

-   Node.js and npm installed.
-   A running PostgreSQL database instance.

### 1. Database Setup

1.  Make sure your PostgreSQL database is running.
2.  The application is configured to connect to a database named `studentdetails`.
3.  The table schema is expected to match the one provided during the development of this project.

### 2. Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd student-search-app/backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure database connection:**
    -   Open the `server.js` file.
    -   Update the `Pool` configuration with your PostgreSQL username and password:
        ```javascript
        const pool = new Pool({
          user: 'your_db_user',
          host: 'localhost',
          database: 'studentdetails',
          password: 'your_db_password',
          port: 5432, // or your db port
        });
        ```
4.  **Start the backend server:**
    -   For development with auto-reload:
        ```bash
        npm run dev
        ```
    -   The server will start on `http://localhost:3002`.

### 3. Frontend Setup

1.  **Open a new terminal** and navigate to the frontend directory:
    ```bash
    cd student-search-app/frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the frontend development server:**
    ```bash
    npm start
    ```
4.  The application will open automatically in your web browser at `http://localhost:3000`.

## Usage

Once both the backend and frontend servers are running:

1.  Open your browser to `http://localhost:3000`.
2.  Start typing a student's name in the search bar.
3.  A list of matching students will appear below.
4.  Click on any student in the list to view their complete details.
