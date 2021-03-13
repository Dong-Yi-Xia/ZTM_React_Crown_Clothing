import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = this.state

        try {
            //firebase signIn using email and password
            await auth.signInWithEmailAndPassword(email, password)

            //reset the state
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (e) => {
        const {value, name} = e.target    
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email' 
                        label='email'
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required 
                    />

                    <FormInput 
                        name='password' 
                        type='password' 
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required 
                     />
      
                    <div className='buttons'> 
                        <CustomButton type='submit'> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn