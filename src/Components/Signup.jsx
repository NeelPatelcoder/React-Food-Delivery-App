import React, { useRef, useState } from "react"

import './Signup.css'
import { useAuth } from "../contexts/AuthContexts"
import { Link, useHistory } from "react-router-dom"

import im from './user.png'
import { ToastContainer, toast } from 'react-toastify';


toast.configure()
export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <>
            <div className="loginbox">
                <img className="user" src={im} alt="user" />

                <h3>SignUp</h3>
                {/* {error && <Alert variant="danger">{error}</Alert>} */}
                <form onSubmit={handleSubmit}>
                    <div className='inputBox' id="email">
                        <span><i className='fa fa-user'></i></span>
                        <input type="email" placeholder="Enter Your email" ref={emailRef} required />
                    </div>
                    <div className='inputBox' id="password">
                        <span><i className='fa fa-user'></i></span>
                        <input type="password" placeholder="Enter Your Password" ref={passwordRef} required />
                    </div>
                    <div className='inputBox' id="password-confirm">
                        <span><i className='fa fa-user'></i></span>
                        <input type="password" placeholder="Confirm Your Password" ref={passwordConfirmRef} required />
                    </div>


                    {/*             
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group> */}


                    <input disabled={loading} type="submit" value="Create Account" />
                    <span >
                        Already have an account?
                    </span>
                    <Link to="/login">Log In</Link>
                    <ToastContainer />

                </form>

            </div>

        </>
    )
}
