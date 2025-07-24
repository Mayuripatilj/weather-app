<<<<<<< HEAD
# weather-app
=======
# Weather Prediction App 🌤️

A full-stack web application for weather predictions with user authentication and interactive dashboard.

## 🚀 Live Demo

[Add your deployed link here]

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🌟 Core Features
- **User Authentication**: Register, Login, and Logout functionality
- **Weather Prediction Dashboard**: Interactive weather interface
- **City Selection**: Choose from 20 major US cities
- **Date-based Predictions**: Yesterday, Today, and Tomorrow forecasts
- **Dynamic Backgrounds**: Weather-based UI themes
- **Responsive Design**: Works on all devices

### 🎨 UI/UX Features
- **Modern Interface**: Clean, professional design
- **Weather Animations**: Floating weather icons
- **Interactive Elements**: Hover effects and smooth transitions
- **Real-time Updates**: Dynamic content loading
- **Session Management**: Persistent user sessions

## 🛠️ Technologies Used

### Frontend
- **React.js** - User interface and component management
- **Vite** - Fast build tool and development server
- **React Router** - Navigation between pages
- **CSS3** - Styling and responsive design
- **Fetch API** - Backend communication

### Backend
- **Node.js** - Server runtime environment
- **Express.js** - Web application framework
- **MySQL** - Database for user data
- **CORS** - Cross-origin resource sharing

### Database
- **MySQL** - Relational database management
- **User Management** - Email and password storage

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/weather-prediction-app.git
cd weather-prediction-app
```

### Step 2: Install Frontend Dependencies
```bash
cd weather-app
npm install
```

### Step 3: Install Backend Dependencies
```bash
cd ../backend
npm install
```

### Step 4: Database Setup
```sql
-- Create database
CREATE DATABASE weatherapp;
USE weatherapp;

-- Create users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Step 5: Configure Backend
Edit `backend/index.js` and update database credentials:
```javascript
const DB_HOST = 'localhost';
const DB_USER = 'your_username';
const DB_PASSWORD = 'your_password';
const DB_NAME = 'weatherapp';
```

## 🚀 Usage

### Start Backend Server
```bash
cd backend
node index.js
```
Backend will run on: http://localhost:5000

### Start Frontend Development Server
```bash
cd weather-app
npm run dev
```
Frontend will run on: http://localhost:5173

### Access the Application
1. Open your browser and go to http://localhost:5173
2. Register a new account or login with existing credentials
3. Navigate to the dashboard to use weather predictions

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   └── Footer.jsx          # Footer component
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── About.jsx           # About page
│   │   ├── Login.jsx           # Login form
│   │   ├── Register.jsx        # Registration form
│   │   └── Dashboard.jsx       # Weather dashboard
│   ├── App.jsx                 # Main app component
│   └── index.css               # Global styles
├── static-html/                # Static HTML versions
└── package.json

backend/
├── index.js                    # Express server
└── package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User authentication
- `GET /api/dashboard` - Dashboard data

### Request/Response Examples

#### Register User
```bash
POST http://localhost:5000/api/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Login User
```bash
POST http://localhost:5000/api/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

## 🗄️ Database Schema

### Users Table
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📸 Screenshots

### Landing Page
![Landing Page](screenshots/landing-page.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Login Form
![Login](screenshots/login.png)

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=weatherapp
PORT=5000
```

### Database Configuration
Update the database connection in `backend/index.js`:
```javascript
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'weatherapp',
});
```

## 🧪 Testing

### Manual Testing
1. **User Registration**: Test with valid/invalid emails
2. **User Login**: Test with correct/incorrect credentials
3. **Weather Dashboard**: Test city selection and date options
4. **Responsive Design**: Test on mobile and desktop
5. **Navigation**: Test all page transitions

### API Testing
Use Postman or curl to test API endpoints:
```bash
# Test registration
curl -X POST http://localhost:5000/api/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
cd weather-app
npm run build
# Deploy dist/ folder to your hosting service
```

### Backend Deployment (Heroku/Railway)
```bash
cd backend
# Set up production environment variables
# Deploy to your cloud platform
```

### Database Deployment
- Set up production MySQL database
- Update connection credentials
- Configure connection pooling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Weather icons and animations
- React.js community
- Node.js and Express.js documentation
- MySQL documentation

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact me at your.email@example.com.

---

**⭐ Star this repository if you found it helpful!** 
>>>>>>> 939803e (first commit)
