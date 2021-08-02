import React, { useState } from 'react'
import im from './user.png'
import './Signup.css'
import { Link,useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import M from 'materialize-css'



toast.configure()

const Signup = () => {
    const [phonenumber, setPhonenumber] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const history = useHistory()




    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(phonenumber, password, name, email)
        try {
            const result = await auth.createUserWithEmailAndPassword(email, password)
            toast("Wow so easy !");
            M.toast({ html: `Welcome ${result.user.email}`, classes: "green" })
            history.push('/Menu')

        }
        catch (err) {
            toast("Enter 8 digit password !");
            M.toast({ html: err.message, classes: "green" })
        }


    }



    return (
        <div className="loginbox">
            <img className="user" src={im} alt="user" />
            <h3>SignUp</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='inputBox'>
                    <span><i className='fa fa-user'></i></span>
                    <input type="text" placeholder="Enter Your Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='inputBox'>
                    <span><i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <input type="email" placeholder="Email-Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='inputBox'>
                    <span><i className='fa fa-phone-square'></i></span>
                    <input type="phone-number" placeholder="Phone Number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                </div>
                <div className="inputBox">
                    <span><i className='fa fa-lock'></i></span>
                    <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="Create Account" />
                <ToastContainer />
            </form>


            <Link to="/forgot">Forgot Password</Link>
        </div>
    )
}

export default Signup
