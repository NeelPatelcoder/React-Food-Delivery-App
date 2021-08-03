import React, { useRef, useState } from "react"
import { Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContexts"
import { Link } from "react-router-dom"

import './ForgotPassword.css'
import im from './user.png'

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="loginbox">
        <img className="user" src={im} alt="user" />
        <h2>Fogot Password</h2>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        {message && <Alert variant="success">{message}</Alert>}
        <form onSubmit={handleSubmit}>

          <div className='inputBox' id="email">
            <span><i className='fa fa-user'></i></span>
            <input  type="email" placeholder="Enter Your email" ref={emailRef} required />
          </div>
          
          <input disabled={loading} type="submit" value="Forgot Password" />
          
        </form>
        <div className="w-100 text-center mt-3">
          <Link to="/login">Login</Link>
        </div>

        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>

    </>
  )
}
