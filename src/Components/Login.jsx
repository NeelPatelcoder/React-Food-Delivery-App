import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import im from './user.png'
import './Login.css'
import M from 'materialize-css'
import { auth } from '../firebase'


toast.configure()
const Login = () => {
    const [phonenumber, setPhonenumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(phonenumber, password,email)
        try {
            const result = await auth.signInWithEmailAndPassword(email, password)
            
            M.toast({ html: `Welcome ${result.user.email}`, classes: "green" })
            history.push('/Menu')

        }
        catch (err) {
            
            M.toast({ html: err.message, classes: "green" })
        }

    }


    return (
        <div className="loginbox">
            <img className="user" src={im} alt="user" />
            <h3>Sign In</h3>
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
                <div className="inputBox">
                    <span><i className='fa fa-lock'></i></span>
                    <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="login" />
                {/* <button className='submit'>Loggin</button> */}
                <ToastContainer />
            </form>
            <Link to="/forgot">Forgot Password ?</Link>
            <Link to="/reset">Reset Password </Link>
        </div>
    )
}

export default Login
