import React from 'react'

import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (evt) => {
        evt.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword){
            alert("Passwords don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            // create and add the user into the firestore database
            await createUserProfileDocument(user, {displayName})

            //reset the state
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error)
        }
    }

    handleChange = (evt) => {
        const { name, value } = evt.target
        this.setState({
            [name] : value
        })
    }


    render(){
        const {displayName, email, password, confirmPassword} = this.state

        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label= 'Display Name'
                        required
                    /> 

                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label= 'Email'
                        required
                    /> 

                    <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label= 'Password'
                        required
                    /> 

                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label= 'Confirm Password'
                        required
                    /> 
                    
                    <CustomButtom type='submit'> SIGN UP </CustomButtom>

                </form>

            </div>
        )
    }
}


export default SignUp
