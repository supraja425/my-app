import React, { useState } from 'react';
import './Register.css'; // Ensure styles for Register are applied
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // !!! Placeholder: Replace with actual registration API call and validation !!!
    console.log('Registering with:', { email, password });
    
    // Assuming registration is successful:
    // Do NOT set isLoggedIn here. Registration only creates the account.
    // localStorage.setItem('isLoggedIn', 'true'); // Removed

    // Remove redirection logic based on previous path
    /*
    const redirectPath = localStorage.getItem('redirectAfterLogin');
    if (redirectPath) {
      localStorage.removeItem('redirectAfterLogin'); // Clear the saved path
      navigate(redirectPath); // Redirect to the original page
    } else {
      navigate('/'); // Redirect to home page by default
    }
    */

    // Always redirect to the login page after successful registration
    alert('Registration successful! Please log in.'); // Optional: inform the user
    navigate('/login'); 
  };

  return (
    <div className="register-container">
      {/* Register Form */}
      <div className="register-header">
        <h1>Create an Account</h1>
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="register-btn">Register</button>
      </form>

      {/* Login Option */}
      <div className="login-option">
        <p>Already have an account?</p>
        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
  );
};

export default Register;
