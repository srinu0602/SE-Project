import React from 'react'

const SignUp = ({name,setName}) => {


  return (
    <div>
      <form className='sign-up-form'>
      <label>
        Name:
        <input autoFocus placeholder="Enter your name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      </form>
    </div>
  )
}

export default SignUp
