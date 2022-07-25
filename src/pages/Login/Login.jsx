import React, { useState } from 'react'
import './Login.css'
import { sendApiRequest } from '../../utils/client';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  
  const [formData, setFormData] = useState({ 
    dashboardName: '',
    password: '',
    email: 'gertellezv@gmail.com'
  })
  const navigate = useNavigate()
  
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
    const token = await sendApiRequest.post(url, formData, headers)
    localStorage.setItem('pairing-token', JSON.stringify(token))
    navigate(`/dashboards/${formData.dashboardName}`)
    window.location.reload()
  }

  return (
    <section className="Login">
      <div className="Login__container">
        
        <form onSubmit={handleLogin}>
          <div className='Login__input-container'>
            <input 
            onChange={handleChange} 
            className='Login__input' 
            placeholder='Dashboard name' 
            type="text" 
            name="dashboardName" />
          </div>

          <div className='Login__input-container'>
            <input 
            onChange={handleChange} 
            className='Login__input' 
            placeholder='Password' 
            type="password" 
            name="password" />
          </div>
          <div className='Login__input-container'>
            <input className='Login__button' type="submit" value="LOGIN" />
          </div>
        </form>

      </div>
    </section>
  )
}
