import React, { Component } from 'react';
import FormInput from '../form-input/Form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './Sign-In.style.scss';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({ email: '' , password: '' })
    }

    handleChange = event =>{
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name='email'
                    handleChange={this.handleChange}
                    label='email'
                    type='email' 
                    value={this.state.email} required />
                    
                    <FormInput 
                    name='password'
                    handleChange={this.handleChange} 
                    label='password'
                    type='password' 
                    value={this.state.password} required />
                    

                    <CustomButton type='submit'>SIGN IN</CustomButton>
                </form>
            </div>
        )
    }
}
