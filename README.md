# User Management System

This is a simple **User Management System** built with **React, Express, and MongoDB**. The application allows users to **Create, Read, Update, and Delete (CRUD)** users in a database.

## Features

- 📌 List all users with a responsive table
- ✨ Add new users with a form
- 🖊 Edit existing users
- 🗑 Delete users (with real-time UI updates)
- 🚀 REST API integration with Axios
- 🎨 Styled with Bootstrap

## Technologies Used

- **Frontend:** React, React Router, Axios, Bootstrap
- **Backend:** Express.js, Node.js, MongoDB (with Mongoose)

## Setup Instructions

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/user-management-system.git
cd user-management-system
```

### 2️⃣ Install Dependencies

#### Backend (Server)

```sh
cd server
npm install
```

#### Frontend (React App)

```sh
cd client
npm install
```

### 3️⃣ Start the Application

#### Start Backend

```sh
cd server
npm start
```

#### Start Frontend

```sh
cd client
npm start
```

The application will run at **http://localhost:3000/**.

## Project Structure

```
user-management-system/
│── server/                 # Backend (Express + MongoDB)
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── server.js           # Main server file
│
│── client/                 # Frontend (React App)
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── App.js          # Main React component
│   │   ├── index.js        # Entry point
│
│── README.md               # Project documentation
│── package.json            # Dependencies and scripts
```

## API Endpoints

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/`               | Get all users       |
| POST   | `/createUser`     | Create a new user   |
| GET    | `/getUser/:id`    | Get a single user   |
| PUT    | `/updateUser/:id` | Update user details |
| DELETE | `/deleteUser/:id` | Delete a user       |

## Future Enhancements

- ✅ Add user authentication (Login/Signup)
- ✅ Improve UI with Material-UI
- ✅ Implement form validation

## Author

👤 **Mohsin Zia**  
🔗 [Your GitHub](https://github.com/mohsinziaa)

---

Enjoy coding! 🚀
