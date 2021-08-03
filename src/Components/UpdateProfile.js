import React, { useRef, useState } from "react"
import {Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContexts"
import { Link, useHistory } from "react-router-dom"


import im from './user.png'
import './UpdateProfile.css'


export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div className="loginbox">
        <img className="user" src={im} alt="user" />
        <h3>Reset Password</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>

          <div className='inputBox' id="email">
            <span><i className='fa fa-user'></i></span>
            <input type="email" placeholder="Enter Your email" defaultValue={currentUser.email} ref={emailRef} required />
          </div>

          <div className='inputBox' id="password">
            <span><i className='fa fa-user'></i></span>
            <input type="password" placeholder="Enter Your New password" ref={passwordRef} required />
          </div>

          <div className='inputBox' id="password-confirm">
            <span><i className='fa fa-user'></i></span>
            <input type="password" placeholder=" Confirm New Password" ref={passwordConfirmRef} required />
          </div>

          <input disabled={loading} type="submit" value="Reset Password" />

        </form>
        <div>
          <Link to="/">Cancel</Link>
        </div>

      </div>

    </>
  )
}
