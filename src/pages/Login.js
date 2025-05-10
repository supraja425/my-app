import React, { useState } from 'react';
import './Login.css'; // Ensure styling is included
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // !!! Placeholder: Replace with actual login API call and validation !!!
    console.log('Attempting login with:', { email, password });
    // Assuming login is successful for this example:
    localStorage.setItem('isLoggedIn', 'true'); // Set login status
    localStorage.setItem('userEmail', email); // Store the logged-in user's email

    // Check for redirect path
    const redirectPath = localStorage.getItem('redirectAfterLogin');
    if (redirectPath) {
      localStorage.removeItem('redirectAfterLogin'); // Clear the saved path
      navigate(redirectPath); // Redirect to the original page
    } else {
      navigate('/'); // Redirect to home page by default
    }
  };

  return (
    <div className="login-container">
      {/* Login Form */}
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>

      {/* Register Option */}
      <div className="register-option">
        <p>Don't have an account?</p>
        <button className="register-btn" onClick={() => navigate('/register')}>Register</button>
      </div>
    </div>
  );
};

export default Login;
