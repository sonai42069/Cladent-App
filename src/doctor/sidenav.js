import React, { useState} from 'react';
import './sidenav.css';
import { Link, Outlet } from 'react-router-dom';

const SideNavbar = () => {
    const [isConsultantVisible, setIsConsultantVisible] = useState(false);  // Control consultant dropdown visibility
    const [isLabVisible, setIsLabVisible] = useState(false);  // Control lab dropdown visibility
    const [isProfileSettings, setIsProfileSettings] = useState(false);  // Control lab dropdown visibility
  // Toggle Consultant div visibility
  const toggleConsultantVisibility = () => {
    setIsConsultantVisible(prevState => !prevState);  // Toggle visibility state
  };
  const toggleLabVisibility = () => {
    setIsLabVisible(prevState => !prevState);  // Toggle visibility state
  };
  const toggleProfileSettings = () => {
    setIsProfileSettings(prevState => !prevState);  // Toggle visibility state
  };

  return (
    <div className="side-navbar-container">
      <div className="side-navbar">
        <Link to="/doctorlogin/dashboard">Dashboard</Link>
        <Link to="/doctorlogin/dailyappointments">Daily Appointments</Link>
        <Link to="/doctorlogin/diary">Daily Diary</Link>

        {/* Toggle Consultant dropdown */}
        <a onClick={toggleConsultantVisibility}>
          Consultant
        </a>

        {/* Show the consultant options based on isConsultantVisible state */}
        {isConsultantVisible && (
          <div className="options">
            <Link to="/doctorlogin/consultantlist">VIEW</Link>
            <Link to="/doctorlogin/profile">PROFILE</Link>
            <Link to="/doctorlogin/booking">BOOK</Link>
            <Link to="/doctorlogin/payment">PAYMENT</Link>
            <Link to="/doctorlogin/history">HISTORY</Link>
          </div>
        )}
        <a onClick={toggleLabVisibility}>
          Lab Management
        </a>
        {isLabVisible && (
          <div className="options">
              <Link to="/doctorlogin/patientlab">Patient Lab Records</Link>
              <Link to="/doctorlogin/labUpload">Invoice Upload</Link>
              <Link to="/doctorlogin/labUploadHistory">Payment History</Link>
          </div>
        )}
        
        <Link to="/doctorlogin/approval">Approval</Link>
        <a onClick={toggleProfileSettings}>
          Settings
        </a>
        {isProfileSettings && (
          <div className="options">
              <Link to="/doctorlogin/view&update profile">View / Update Profile</Link>
              <Link to="/doctorlogin/changepassword">Change Password</Link>
              
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default SideNavbar;
