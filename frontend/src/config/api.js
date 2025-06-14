// Use the production API URL directly
const API_URL = 'https://hospital-management-system-bcgy.onrender.com';

const API_ENDPOINTS = {
  // Authentication
  LOGIN: `${API_URL}/api/login`,
  SIGNUP: `${API_URL}/api/signup`,

  // Admin Routes
  ADMIN_PROFILE: `${API_URL}/api/admin/profile`,
  ADD_DOCTOR: `${API_URL}/api/admin/add-doctor`,
  ADD_ADMIN: `${API_URL}/api/admin/add-admin`,
  DOCTOR_OVERVIEW: `${API_URL}/api/admin/doctor-overview`,
  PATIENT_OVERVIEW: `${API_URL}/api/admin/patient-overview`,

  // Doctor Routes
  DOCTOR_PROFILE: `${API_URL}/api/doctor/profile`,
  SCHEDULE_APPOINTMENT: `${API_URL}/api/doctor/schedule-appointment`,
  PRESCRIBE_MEDICATION: `${API_URL}/api/doctor/prescribe-medication`,
  DOCTOR_PRESCRIPTIONS: `${API_URL}/api/doctor/prescriptions`,
  DOCTOR_APPOINTMENTS: `${API_URL}/api/doctor/appointments`,
  DOCTOR_AVAILABLE_SLOTS: `${API_URL}/api/doctor/available-slots`,

  // Patient Routes
  PATIENT_PROFILE: `${API_URL}/api/patient/profile`,
  PATIENT_APPOINTMENTS: `${API_URL}/api/patient/appointments`,
  BOOK_APPOINTMENT: `${API_URL}/api/patient/book-appointment`,
};

export const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

export default API_ENDPOINTS; 
