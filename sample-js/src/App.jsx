import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Items from "./components/Items";
import ProductDetail from "./components/ProductDetail";
import Contact from "./components/Contact";
import "./index.css";

export default function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email.trim() || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    setMessage("Login successful!");
    setTimeout(() => {
      setShowLoginModal(false);
    }, 1000);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header 
        onLoginClick={() => setShowLoginModal(true)} 
      />
      
      <div style={{ flex: 1 }} className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Items />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />

      {showLoginModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowLoginModal(false)}
        >
          <div
            className="login-card modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowLoginModal(false)}
            >
              &times;
            </button>

            <h1>Welcome Back</h1>
            <p className="subtitle">Login to your account</p>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-field">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    minLength={6}
                    required
                  />
                  <button
                    type="button"
                    className="show-btn"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="login-options">
                <label className="remember">
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#forgot">Forgot password?</a>
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>

              <p className="message" role="status">
                {message}
              </p>
            </form>

            <p className="signup">
              Don't have an account? <a href="#signup">Sign up</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}