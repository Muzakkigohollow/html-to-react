import React from 'react';
import "../styles/login.css";  // Assuming you are keeping the same CSS

const Login = () => {
    return (
        <div className="kkl">
            <div className="kkj">
                <div className="login-container">
                    <h1 className="login-title">Login</h1>
                    <p className="login-subtitle">Enjoy your experience</p>
                    <form className="login-form">
                        <label htmlFor="name-email" className="login-label">Name / email</label>
                        <input type="text" id="name-email" name="name-email" className="login-input" />

                        <label htmlFor="password" className="login-label">Password</label>
                        <input type="password" id="password" name="password" className="login-input" />

                        <button type="submit" className="login-btn">LOGIN</button>
                    </form>

                    <div className="login-footer">
                        <a href="yes" className="forgot-password">Forgot password?</a>
                        <a href="manti lagi" className="remember-me">Remember me</a>
                    </div>

                    <div className="login-social">
                        <a href="malas" className="social-icon">
                            <img src="src/assets/fb.webp" alt="Facebook Logo" />
                        </a>
                        <a href="kosong" className="social-icon">
                            <img src="src/assets/Google_Icons-09-512.webp" alt="Google Logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
