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
        console.log(phonenumber, password)
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
                    <input type="email" placeholder="Email-Id" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='inputBox'>
                    <span>
                        <i className="fa fa-user"></i>
                    </span>
                    <input type="phone-number" placeholder="Phone Number" onChange={(e) => setPhonenumber(e.target.value)} />
                </div>
                <div className="inputBox">
                    <span><i className='fa fa-lock'></i></span>
                    <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="login" />
                {/* <button className='submit'>Loggin</button> */}
                <ToastContainer />
            </form>
            <Link href="">Forgot Password</Link>
        </div>
    )
}

export default Login
