import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <Fragment>
      <h2 className='large text-primary'>Sign Up</h2>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className='form'>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Full Name'
            name='name'
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
          />
          
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='DOB'
            name='dob'
          />
          
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Company Name'
            name='company'
          />
          
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Profession'
            name='profession'
          />
          
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
           
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
         
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
    )
}

export default Register;