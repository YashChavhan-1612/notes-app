# Notes App Backend (MERN) – Internship Mini Project

## Project Overview

This project is a **Backend API for a Notes Taking Application** built using **Node.js, Express.js, MongoDB, and JWT Authentication**.

The API allows users to:

* Register and login
* Create notes
* View their notes
* Update notes
* Delete notes

All note-related routes are **protected using JWT authentication**, ensuring only authenticated users can access their own notes.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcryptjs
* dotenv
* cors

---

## Project Structure

```
notes-backend
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   └── noteController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   ├── User.js
│   └── Note.js
│
├── routes
│   ├── authRoutes.js
│   └── noteRoutes.js
│
├── server.js
├── package.json
└── .env
```

---

## Features

* User registration and login
* Password hashing using bcrypt
* JWT authentication
* Protected routes
* CRUD operations for notes
* MongoDB database integration
* RESTful API design

---

## Installation and Setup

### 1. Clone the Repository

```
git clone https://github.com/yourusername/notes-backend.git
```

### 2. Navigate to Project Folder

```
cd notes-backend
```

### 3. Install Dependencies

```
npm install
```

### 4. Create .env File

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5. Start the Server

```
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## API Endpoints

### Authentication Routes

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   |/api/auth/register  | Register a new user |
| POST   | /api/auth/login    | Login user          |

---

### Notes Routes (Protected)

| Method | Endpoint       | Description                     |
| ------ | -------------- | ------------------------------- |
| GET    | /api/notes     | Get all notes of logged-in user |
| POST   | /api/notes     | Create a new note               |
| PUT    | /api/notes/:id | Update a note                   |
| DELETE | /api/notes/:id | Delete a note                   |

---

## Authentication

Protected routes require a JWT token.

Add the token in request headers:

```
Authorization: Bearer <your_token>
```

---

## Example Request (Create Note)

POST `/api/notes`

Body:

```
{
  "title": "First Note",
  "content": "This is my first note"
}
```

---

## Testing

You can test the API using:

* Postman
* Thunder Client (VS Code)

Steps:

1. Register a user
2. Login to get JWT token
3. Use the token to access protected routes

---

## Author

Developed by:Yash Chavhan 
Internship Project – Full Stack Web Development (MERN)