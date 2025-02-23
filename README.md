**TicketMaster Server**

## 🚀 Overview

TicketMaster Server is a backend system built with Node.js and PostgreSQL to manage user authentication, event creation, and ticket handling for an event registration system which is a PROOF OF CONCEPT for zkp implementation

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js

- **Middleware: ZKP(Zero knowledge proof)**

- Database: PostgreSQL with Sequelize ORM

- **Authentication:** bcrypt (for password hashing)

- **Environment Configuration:** dotenv

- **Logging:** Winston

- **API Testing:** Postman Mock Server

## 📂 Folder Structure

```
ticketmaster-server/
│-- config/            # Configuration files
│-- controller/        # API Controllers
│-- middleware/        # Middleware functions
│-- model/             # Sequelize models
│-- route/             # API routes
│-- utils/             # Utility services (logger, helpers)
│-- .env               # Environment variables
│-- .gitignore         # Ignored files
│-- package.json       # Dependencies and scripts
│-- server.js          # Main server file
```

## 🔧 Setup Instructions

### **1️⃣ Prerequisites**

- Install [Node.js](https://nodejs.org/en/)
- Install [PostgreSQL](https://www.postgresql.org/)
- Install [Postman](https://www.postman.com/) for API testing

### **2️⃣ Clone the Repository**

```sh
git clone https://github.com/Fundspay/ticketmaster-server.git
cd ticketmaster-server
```

### **3️⃣ Install Dependencies**

```sh
npm install
```

### **4️⃣ Setup Environment Variables**

Create a `.env` file in the root directory and configure it as follows:

```ini
PORT=3000
DB_DIALECT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ticketmaster
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_USE_PASSWORD=true
```

### **5️⃣ Start the Server**

```sh
npm run dev
```

Server will start on `http://localhost:3000`

## 📌 API Endpoints

### **🔹 Authentication**

| Method | Endpoint                | Description         |
| ------ | ----------------------- | ------------------- |
| POST   | `/api/v1/auth/register` | Register a new user |
| POST   | `/api/v1/auth/login`    | User login          |

### **🔹 Events Management**

| Method | Endpoint                | Description     |
| ------ | ----------------------- | --------------- |
| POST   | `/api/v1/events/create` | Create an event |
| GET    | `/api/v1/events/`       | Get all events  |

### **🔹 Tickets Management**

| Method | Endpoint                          | Description                |
| ------ | --------------------------------- | -------------------------- |
| POST   | `/api/v1/tickets/register`        | Book a ticket for an event |
| GET    | `/api/v1/tickets?user_id=$userId` | Get user tickets           |

## 🚀 Mock API Server (Postman)

To test API endpoints, use the Postman Mock Server:

```
https://84f8b891-d16f-4dc7-a9c7-4b409123518d.mock.pstmn.io
```

## 🤝 Contributors

- \*\*Nikhita Watpal\*\*

## 📜 License

This project is licensed under the **MIT License**.

---

🚀 **Now you are ready to start working on TicketMaster Server!** 🎟️

