import React, { useState } from 'react';
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import FoodStalls from './FoodStalls';

function App() {
  const [showSignIn, setShowSignIn] = useState(true); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, confirmSetPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    //  <div className="App">
    //     <SignUp
    //     name={name}
    //     setName={setName}
    //     email={email}
    //     setEmail={setEmail}
    //     phone={phone}
    //     setPhone={setPhone}
    //     password={password}
    //     setPassword={setPassword}
    //     confirmPassword={confirmPassword}
    //     confirmSetPassword={confirmSetPassword}
    //     errors={errors}
    //     setErrors={setErrors}
    //     passwordFocused={passwordFocused}
    //     setPasswordFocused={setPasswordFocused}
    //      />
    // </div>
    <FoodStalls/>
  );
}

export default App;
