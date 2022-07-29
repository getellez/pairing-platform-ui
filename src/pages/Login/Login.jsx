import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { sendApiRequest } from '../../utils/client';
import { AuthContext } from '../../context/AuthContext';

import './Login.css'

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    dashboardName: '',
    password: ''
  })
  const navigate = useNavigate()

  const { isLoggedIn, onLogin } = useContext(AuthContext)

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const url = '/api/v1/auth/signin';
    const headers = {
      "Content-type": "application/json; charset=UTF-8"
    }
    const login = await sendApiRequest.post(url, formData, headers)
    if (login.statusCode !== 200) {
      setErrorMessage(login.message)
    } else {
      setErrorMessage('')
      localStorage.setItem('pairing-token', JSON.stringify(login.data.token))
      onLogin()
      navigate(`/dashboards/${formData.dashboardName}`)
      window.location.reload()
    }

  }

  return (
    <section className="Login">
      <div className="Login__column-left">
        <div className="Login__container">
          <form onSubmit={handleLogin}>
            <div className='Login__input-container'>
              <input
                onChange={handleChange}
                className='Login__input'
                placeholder='Dashboard name'
                type="text"
                name="dashboardName"
                value={formData.dashboardName}
              />
            </div>

            <div className='Login__input-container'>
              <input
                onChange={handleChange}
                className='Login__input'
                placeholder='Password'
                type="password"
                name="password"
                value={formData.password}

              />
            </div>
            <div className='Login__input-container'>
              <input className='Login__button' type="submit" value="LOGIN" />
            </div>
          </form>
          {
            errorMessage && (
              <small className='error-message'>
                {errorMessage}
              </small>
            )
          }

        </div>
      </div>
      <div className="Login__column-right"></div>

    </section>
  )
}
