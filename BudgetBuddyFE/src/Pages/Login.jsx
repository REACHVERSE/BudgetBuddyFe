import React, { useState } from "react";
import "./Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';         
import bb from "../assests/images/bb.png";
import { useAuth } from "../Auth/AuthContext"; 

const Login = () => {
  const { login } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = email.trim() !== "" && 
                     validateEmail(email) && 
                     password.trim().length >= 6;

  const showError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const showSuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validation checks with toast notifications
    if (!email.trim()) {
      showError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      showError("Please enter a valid email address");
      return;
    }
    
    if (!password.trim()) {
      showError("Password is required");
      return;
    }
    
    if (password.length < 6) {
      showError("Password must be at least 6 characters");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('https://8895-102-216-11-2.ngrok-free.app/auth/login', {
        email,
        password
      });

      if (response.data.token) {
        // Store token
        localStorage.setItem('token', response.data.token);
        
        // Extract user data from response (adjust according to your API response)
        const userData = {
          token: response.data.token,
          email: email,
          
          role: response.data.role || "user",
          name: response.data.name || "",
          id: response.data.id || "",
          // Add any other user details from response
        };

        showSuccess("Login successful!");
        
        // Use Auth Context login function
        login(userData);
        
        // Note: No need for navigate here as it's handled by the login function
      }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            showError("Invalid email or password");
            break;
          case 404:
            showError("Account not found");
            break;
          case 429:
            showError("Too many login attempts. Please try again later");
            break;
          default:
            showError("An error occurred during login. Please try again");
        }
      } else if (error.request) {
        showError("Unable to connect to the server. Please check your internet connection");
      } else {
        showError("An unexpected error occurred. Please try again");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-container d-flex flex-column flex-lg-row">
      {/* Add ToastContainer at the top level */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="signup-image">
        <img src={bb} alt="Safe" className="img-fluid" />
      </div>

      <div className="signup-form-container d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <h2 className="text-center mb-0">Welcome Back!</h2>
        </div>
        <p className="text-center right">Login to your account</p>

        <form onSubmit={handleLogin} className="form-step second">
          <div className="form-group mb-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group password-field position-relative">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} toggle-password`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <div className="d-flex justify-content-start mb-3 forgot mt-2">
            Forgot Password?    
            <Link to="/forgot-password" className="forgot-password-link">
              Reset
            </Link>
          </div>

          <button 
            type="submit"
            className={`btn btn-primary w-100 ${isFormValid ? 'active' : 'disabled'}`}
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? (
              <div className="d-flex align-items-center justify-content-center">
                Logging in...
              </div>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <p className="auth-footer mt-3">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;