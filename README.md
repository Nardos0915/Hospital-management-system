# Hospital Management System

A comprehensive web-based Hospital Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This system provides a complete solution for managing hospital operations, including patient management, doctor appointments, and administrative tasks.

## Features

### For Patients
- User registration and authentication
- Book appointments with doctors
- View appointment history
- Access medical prescriptions
- View and update personal profile

### For Doctors
- Secure login and authentication
- View and manage patient appointments
- Prescribe medications
- Access patient medical history
- Update personal profile and availability

### For Administrators
- Manage doctors and patients
- View system overview and statistics
- Add new doctors to the system
- Monitor hospital operations
- Access comprehensive reports

## Tech Stack

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Lucide React (for icons)
  - React Router (for navigation)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (database)
  - JWT (authentication)
  - Bcrypt (password hashing)

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hospital-management-system.git
cd hospital-management-system
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Project Structure

```
hospital-management-system/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication
- POST `/api/login` - User login
- POST `/api/signup` - User registration

### Doctor Routes
- GET `/api/doctor/profile` - Get doctor profile
- PUT `/api/doctor/profile` - Update doctor profile
- POST `/api/doctor/schedule-appointment` - Schedule appointment
- POST `/api/doctor/prescribe-medication` - Prescribe medication

### Admin Routes
- POST `/api/admin/add-doctor` - Add new doctor
- GET `/api/admin/doctor-overview` - Get doctor statistics
- GET `/api/admin/patient-overview` - Get patient statistics

### Patient Routes
- GET `/api/patient/appointments` - Get patient appointments
- POST `/api/patient/book-appointment` - Book new appointment

## Security Features

- JWT-based authentication
- Password hashing using bcrypt
- Protected routes for different user roles
- Input validation and sanitization

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com
Project Link: https://github.com/yourusername/hospital-management-system

## Acknowledgments

- React.js documentation
- MongoDB documentation
- Express.js documentation
- Tailwind CSS documentation

## Deployment

### Backend Deployment (Render)

1. Create a Render account at https://render.com

2. Create a new Web Service:
   - Click "New +" and select "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - Name: `hospital-management-backend`
     - Environment: `Node`
     - Build Command: `npm install`
     - Start Command: `npm start`
     - Add the following environment variables:
       ```
       MONGODB_URI=your_mongodb_connection_string
       JWT_SECRET=your_jwt_secret
       PORT=5000
       ```

3. Click "Create Web Service"

### Frontend Deployment (Vercel)

1. Create a Vercel account at https://vercel.com

2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

3. In your frontend directory, create a `vercel.json` file:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/static-build",
         "config": { "distDir": "build" }
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/index.html"
       }
     ]
   }
   ```

4. Update your frontend API calls:
   - Create a `.env` file in your frontend directory:
     ```
     REACT_APP_API_URL=https://your-render-backend-url.onrender.com
     ```
   - Update all API calls in your frontend code to use this environment variable:
     ```javascript
     const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
     // Use API_URL in your fetch calls
     ```

5. Deploy to Vercel:
   ```bash
   cd frontend
   vercel
   ```

6. Follow the CLI prompts to complete deployment

### Important Deployment Notes

1. **CORS Configuration**
   Update your backend CORS settings in `server.js`:
   ```javascript
   const cors = require('cors');
   app.use(cors({
     origin: ['https://your-vercel-frontend-url.vercel.app', 'http://localhost:3000'],
     credentials: true
   }));
   ```

2. **Environment Variables**
   - Keep your environment variables secure
   - Never commit `.env` files to version control
   - Use different environment variables for development and production

3. **Database**
   - Use MongoDB Atlas for production database
   - Update your MongoDB connection string in Render environment variables
   - Ensure your MongoDB Atlas IP whitelist includes Render's IP ranges

4. **Testing Deployment**
   - Test all features after deployment
   - Verify API endpoints are accessible
   - Check authentication flows
   - Test file uploads if any
   - Verify email functionality if implemented
