import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import im from './user.png'
import './Forgot.css'
import M from 'materialize-css'
import { auth } from '../firebase'


toast.configure()
const Forgot = ({user}) => {
    const [phonenumber, setPhonenumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(phonenumber, password,email)
        try {
            const result = await auth.sendPasswordResetEmail(email)
            .then(() => {
                    alert(`Hey! plese Check your Email-Box`)
            })
            
            history.push('/login')

        }
        catch (err) {
            
            M.toast({ html: err.message, classes: "green" })
        }

    }


    return (
        <div className="loginbox">
            <img className="user" src={im} alt="user" />
            <h4>Forgot Password</h4>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className='inputBox'>
                    <span><i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <input type="email" placeholder="Email-Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='inputBox'>
                    <span>
                        <i className="fa fa-user"></i>
                    </span>
                    <input type="phone-number" placeholder="Phone Number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} required/>
                </div>
              
                <input type="submit" value="Change password" />
                {/* <button className='submit'>Loggin</button> */}
                <ToastContainer />
            </form>
            
        </div>
    )
}

export default Forgot
