# Personal Finance Tracker

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing personal income and expenses.

![Finance Tracker](https://img.shields.io/badge/MERN-Stack-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## Features

- 🔐 **User Authentication** - Secure JWT-based login and registration
- 💰 **Transaction Management** - Add, edit, and delete income/expenses
- 📊 **Visual Analytics** - Dashboard with pie charts and bar graphs
- 🔍 **Search & Filter** - Find transactions by type, category, or description
- 📱 **Responsive Design** - Works on desktop and mobile devices

## Tech Stack

**Frontend:**
- React 18 with Vite
- React Router for navigation
- Recharts for data visualization
- Axios for API calls

**Backend:**
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd "Finance Tracker - MERN Stack"
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables:**
   
   Edit `backend/.env` file:
   ```env
   MONGO_URI=mongodb://localhost:27017/finance-tracker
   JWT_SECRET=your_super_secret_key_here
   PORT=5000
   ```

4. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start MongoDB** (if running locally)

2. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```
   Backend runs on http://localhost:5000

3. **Start the frontend (new terminal):**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend runs on http://localhost:5173

## Project Structure

```
Finance Tracker - MERN Stack/
├── backend/
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── models/
│   │   ├── User.js          # User schema
│   │   └── Transaction.js   # Transaction schema
│   ├── routes/
│   │   ├── auth.js          # Auth endpoints
│   │   └── transactions.js  # CRUD endpoints
│   ├── .env                 # Environment variables
│   ├── package.json
│   └── server.js            # Express server
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── ProtectedRoute.jsx
    │   │   ├── TransactionForm.jsx
    │   │   └── TransactionItem.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── Dashboard.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── Transactions.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/user` | Get current user |

### Transactions (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/transactions` | Get all transactions |
| POST | `/api/transactions` | Create transaction |
| PUT | `/api/transactions/:id` | Update transaction |
| DELETE | `/api/transactions/:id` | Delete transaction |

## License

MIT License
