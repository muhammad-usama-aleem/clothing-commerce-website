import React from 'react';
import SignIn from '../../components/sign-in/Sign-In.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './Sign-In-Up.style.scss'

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
  
  export default SignInAndSignUpPage;