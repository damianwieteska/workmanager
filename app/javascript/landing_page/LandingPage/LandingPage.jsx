import React from 'react';
import { Link } from 'react-router-dom';
import LandingPageCarousel from './LandingPageCarousel'

const LandingPage = (props) => (~
  .row
    .col
      <LandingPageCarousel />
      .text-center
        %h1
          Join us today!
        %h5
          We give you the chance to create a unique application. Join us, participate in creating the code, have control over the progress of work. Don't wait to make your dreams come true!
        %p
          <Link to='/signup'>
            %button.btn.btn-lg.btn-success
              Sign up
          </Link>
        %p
          <Link to='/login'>
            %button.btn.btn-lg.btn-outline-dark
              Log in
          </Link>
~)

export { LandingPage };