import React from 'react'

const SignUp = ({name,setName,email,setEmail,phone,setPhone,password,setPassword}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) { 
      console.log('Submitted:', { name, email, password });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required';

    if (!phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    else if (!/^\d{10}$/.test(phoneNumber)) newErrors.phoneNumber = 'Enter a valid 10-digit phone number';
    
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Enter a valid email';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    else if (!/\d/.test(password)) newErrors.password = 'Password must contain at least one number';
    else if (!/[A-Z]/.test(password)) newErrors.password = 'Password must contain at least one uppercase letter';

    if (!confirmPassword) newErrors.confirmPassword = 'confirmation of password required';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <form className='sign-up-form'>

      <label>
        Name:
        <input autoFocus placeholder="Enter your name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Email:
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label>
        Phone Number:
        <input
        type="tel" 
        placeholder="Enter your phone number" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        />
      </label>

      <label>
        Password:
        <input 
          type="password" 
          placeholder="Set up your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </label>

      </form>
    </div>
  )
}

export default SignUp
