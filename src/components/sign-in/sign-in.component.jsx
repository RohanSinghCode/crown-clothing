import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {signInWithGoogle}  from '../firebase/firebase.util';


import './sign-in.style.scss';


class SignIn extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'',password:''});
    }

    handleChange = event => {
        const {value,name} = event.target;

        this.setState({[name]:value});
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    handleChange={this.handleChange}
                    label="email"
                    value={this.state.email} required/>
                    <FormInput 
                    handleChange={this.handleChange}
                    name="password" 
                    type="password"
                    label="password" 
                    value={this.state.password} required/>
                
                    
                    <div className='button'>
                    <CustomButton type='submit' >
                    SIGN IN
                    </CustomButton>
                    <CustomButton 
                    onClick={signInWithGoogle} 
                    isGoogleSignIn
                    >
                    
                    Sign In wiht google
                    </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;