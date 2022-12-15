import React from 'react'
import BackgroundReset from '../components/background/BackgroundReset'
import FormResetPassword from '../components/form/FormResetPassword'

const ResetPassword = () => {
  return (
    <div className='flex h-screen'>
        <BackgroundReset />
        <FormResetPassword />
    </div>
  )
}

export default ResetPassword