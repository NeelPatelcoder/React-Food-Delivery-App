import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import im from './user.png'
import './Reset.css'
import M from 'materialize-css'
import { auth } from '../firebase'


toast.configure()
const Reset = ({user}) => {
    const [phonenumber, setPhonenumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ConformPassword, setConformPassword] = useState('')

    const history = useHistory()
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     console.log(phonenumber, password,email)
    //     try {
    //         const result = await auth.verifyPasswordResetCode(actionCode)
    //         .then((email) => {
    //                 const actionCode  = email
    //         })
            
    //         history.push('/login')

    //     }
    //     catch (err) {
            
    //         M.toast({ html: err.message, classes: "green" })
    //     }

    // }

    function handleSubmit(auth, actionCode, continueUrl, lang) {
        // Localize the UI to the selected language as determined by the lang
        // parameter.
      
        // Verify the password reset code is valid.
        auth.verifyPasswordResetCode(actionCode).then((email) => {
          var accountEmail = email;
      
          // TODO: Show the reset screen with the user's email and ask the user for
          // the new password.
          var newPassword = "...";
      
          // Save the new password.
          auth.confirmPasswordReset(actionCode, newPassword).then((resp) => {
            // Password reset has been confirmed and new password updated.
      
            // TODO: Display a link back to the app, or sign-in the user directly
            // if the page belongs to the same domain as the app:
            // auth.signInWithEmailAndPassword(accountEmail, newPassword);
      
            // TODO: If a continue URL is available, display a button which on
            // click redirects the user back to the app via continueUrl with
            // additional state determined from that URL's parameters.
          }).catch((error) => {
            // Error occurred during confirmation. The code might have expired or the
            // password is too weak.
          });
        }).catch((error) => {
          // Invalid or expired action code. Ask user to try to reset the password
          // again.
        });
      }


    return (
        <div className="loginbox">
            <img className="user" src={im} alt="user" />
            <h4>Reset Password</h4>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className='inputBox'>
                    <span><i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <input type="email" placeholder="Email-id" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            <div className='inputBox'>
                    <span><i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='inputBox'>
                    <span>
                        <i className="fa fa-user"></i>
                    </span>
                    <input type="password" placeholder="Conform Password" value={ConformPassword} onChange={(e) => setConformPassword(e.target.value)} required/>
                </div>
              
                <input type="submit" value="Reset password" />
                {/* <button className='submit'>Loggin</button> */}
                <ToastContainer />
            </form>
            
        </div>
    )
}

export default Reset
