import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types';

const Register = ({setAlert, register}) => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    dob:'',
    company:'',
    profession:'',
    password:'',
    password2:''

  });

  const { name, email, dob, company, profession, password, password2} = formData;

  const onChange = e => 
  setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = async e => {
  e.preventDefault();

  if(password !== password2){
    setAlert('Password do not match ', 'danger')
  } else{
    register({ name, email, dob, company, profession, password });
  }
};

    return (
        <Fragment>
      <h2 className='large text-primary'>Sign Up</h2>
      <p className='lead'>
        Create Your Account
      </p>
      <form className='form' onSubmit = { e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Full Name'
            name='name'
            value={name}
            onChange = {e => onChange(e)}
            
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange = {e => onChange(e)}
            
          />
          
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='DOB'
            name='dob'
            value={dob}
            onChange = {e => onChange(e)}
            
          />
          
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Company Name'
            name='company'
            value={company}
            onChange = {e => onChange(e)}
            
            
          />
          
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Profession'
            name='profession'
            value={profession}
            onChange = {e => onChange(e)}
            
         
          />
          
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange = {e => onChange(e)}
           
            
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange = {e => onChange(e)}
           
            
         
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

Register.prototype = {
  setAlert : PropTypes.func.isRequired,
  register : PropTypes.func.isRequired
}

export default connect(null, { setAlert, register })(Register);