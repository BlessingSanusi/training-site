import React from 'react';
import {Link } from 'react-router-dom'


const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className="landing-h1"> Cradle Trainings </h1>
          <p className='lead'>
            We offer a wide variety of corporate training programs which include
            Executive Management courses and Oil & Gas(O & G) Technical courses,
            which can include items from Reservoir Engineering to Crude Oil
            Marketing, Geology to Field Development Planning, and much more.
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
