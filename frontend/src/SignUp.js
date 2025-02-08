import React from 'react'

const SignUp = ({name,setName,email,setEmail,phone,setPhone,password,setPassword}) => {


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
