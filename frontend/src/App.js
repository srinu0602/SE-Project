import React, { useState } from 'react';
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  const [showSignIn, setShowSignIn] = useState(true); // Start with SignIn

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <div className="App">
      {showSignIn ? (
        <SignIn />
      ) : (
        <SignUp />
      )}
      <button onClick={toggleForm}>
        {showSignIn ? 'Switch to Sign Up' : 'Switch to Sign In'}
      </button>
    </div>
  );
}

export default App;
