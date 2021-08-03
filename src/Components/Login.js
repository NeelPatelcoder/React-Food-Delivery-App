import React, { useRef, useState } from "react"

import { useAuth } from "../contexts/AuthContexts"
import { Link, useHistory } from "react-router-dom"

import './Login.css'
import im from './user.png'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="loginbox">
        <img className="user" src={im} alt="user" />
        <h3>Sign In</h3>


        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        <form onSubmit={handleSubmit}>

          <div className='inputBox' id="email">
            <span><i className='fa fa-user'></i></span>
            <input type="email" placeholder="Enter Your email" ref={emailRef} required />
          </div>
          
          <div className='inputBox' id="password">
            <span><i className='fa fa-user'></i></span>
            <input type="password" placeholder="Enter Your password" ref={passwordRef} required />
          </div>
          
          <input type="submit" value="login" />
        </form>
        
        <div>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        
        <div >
          Need an account? <span><Link to="/signup">Sign Up</Link></span>
        </div>

      </div>

    </>
  )
}
