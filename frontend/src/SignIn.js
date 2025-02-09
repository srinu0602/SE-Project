import React from "react";
import cafeteriaBg from "./cafeteria-bg.jpg"; 

const SignIn = () => {
  return (
    <div
      className="signin-page"
      style={{
        backgroundImage: `url(${cafeteriaBg})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <div className="signin-container">
        <h2>Sign In</h2>
            <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="signin-btn">Submit</button>
        <div className="signin-links">
          <a href="#">Forgot password?</a> | <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
