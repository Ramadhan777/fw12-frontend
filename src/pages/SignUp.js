import React from 'react'
import Background from '../components/background/Background'
import FormSignUp from '../components/form/FormSignUp'

const SignUp = () => {
  return (
    <div className='flex h-screen'>
      <Background/>
      <FormSignUp />
    </div>
  )
}

export default SignUp