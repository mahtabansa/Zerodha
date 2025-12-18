import React from 'react'

export const Login = () => {
  return (
    <div className='container flex justify-content-center align-items-center'>
      <div className='col-12'>
            <div className='pb-3'>
            <label htmlFor="email">Email</label>
            <input name='email'  placeholder='Enter your Email' value={email} onChange={handleOnchnage}></input>
            </div>
            
             <div className='pb-3'>
            <label htmlFor="email">Email</label>
            <input name='email'  placeholder='Enter your Email' value={email} onChange={handleOnchnage}></input>
            </div>
      </div>
      
    </div>
  )
}
