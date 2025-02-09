import React from 'react'

const SignUp = ({name,setName,email,setEmail,phone,setPhone,password,setPassword,confirmPassword,confirmSetPassword,errors,setErrors,passwordFocused,setPasswordFocused}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) { 
      console.log('Submitted:', { name, email, password });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required';

    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Enter a valid 10-digit phone number';

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
      <form className='sign-up-form' onSubmit={handleSubmit}>

      <label>
        Name:
        <input autoFocus placeholder="Enter your name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>

      <label>
        Email:
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>

      <label>
        Phone Number:
        <input
        type="tel" 
        placeholder="Enter your phone number" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </label>

      <label>
        Password:
        <input 
          type="password" 
          placeholder="Set up your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          onFocus={() => setPasswordFocused(true)} 
          onBlur={() => setPasswordFocused(false)}
        />
        {errors.password && <span className="error">{errors.password}</span>}
        {passwordFocused && (
          <div className="password-requirements">
            <ul>
              <li>At least 8 characters</li>
              <li>At least one number</li>
              <li>At least one uppercase letter</li>
            </ul>
          </div>
        )}
      </label>

      <label>
        Confirm Password:
        <input type="password" placeholder="Re-enter your password" value={confirmPassword} onChange={(e) => confirmSetPassword(e.target.value)} />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </label>

      <button type="submit" disabled={Object.keys(errors).length > 0}>Sign Up</button>

      </form>
    </div>
  )
}

export default SignUp
