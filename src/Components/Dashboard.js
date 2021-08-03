import React, { useState } from "react"
import {  Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContexts"
import { Link, useHistory } from "react-router-dom"

import im from './user.png'
import './Dashboard.css'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <div className="loginbox">
        <img className="user" src={im} alt="user" />
        <h3>Profile</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email:</strong> {currentUser.email}
        <div className='updateprofile'>
        <Link to="/update-profile">
          Reset Your Password
        </Link>
        </div>

        <div>
          <input type="submit" value="Log Out" onClick={handleLogout} />

        </div>

      </div>

    </>
  )
}
