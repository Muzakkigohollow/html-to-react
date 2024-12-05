import React, { useState } from 'react';
import '../styles/Register.css'; // Make sure your styles are in this file or adjust accordingly

const RegisterForm = () => {
  // State to manage the form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation or submission logic can be added here
    console.log('Form Submitted');
    // Reset form
    setUsername('');
    setEmail('');
    setPassword('');
    setAgree(false);
  };

  return (
    <div className="registerkkl">
      <div className="registerkkj">
        <div className="registerregister">
          Register
          <div className="registertext">
            Have an account? <a href="/login">Go Here</a>
          </div>
          <div className="registerform">
            <form onSubmit={handleSubmit}>
              {/* Username Field */}
              <label htmlFor="username" className="name">Name</label><br />
              <input
                type="text"
                id="username"
                name="username"
                className="id"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              /><br />
              
              {/* Email Field */}
              <label htmlFor="email" className="name2">E-mail</label><br />
              <input
                type="email"
                id="email"
                name="email"
                className="id2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              /><br />
              
              {/* Password Field */}
              <label htmlFor="password" className="name3">Password</label><br />
              <input
                type="password"
                id="password"
                name="password"
                className="id3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              /><br />
              
              {/* Checkbox for Terms & Conditions */}
              <div className="checkbox-group">
                <label className="container">
                  <input
                    type="checkbox"
                    required
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                  />
                  <span className="checkmark"></span>
                  Agree to terms and conditions & privacy
                </label>
              </div>
              
              {/* Submit Button */}
              <button type="submit" className="registerregister-btn">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
