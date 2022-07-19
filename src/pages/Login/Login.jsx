import React, { useState } from 'react'
import './Login.css'

export const Login = () => {
  
  const [formData, setFormData] = useState({ 
    dashboard_name: '',
    password: '',
    email: 'gertellezv@gmail.com'
  })

  const handleChange = ({ target }) => {
    setFormData({
      ...formData, 
      [target.name]: target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('formData :>> ', formData);
    const login = await fetch('http://localhost:3001/api/v1/auth/signin', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    const data = await login.json()
    console.log('data :>> ', data);

  }
  return (
    <section className="Login">
      <div className="Login__container">
        
        <form onSubmit={handleSubmit}>
          <div className='Login__input-container'>
            <input 
            onChange={handleChange} 
            className='Login__input' 
            placeholder='Dashboard name' 
            type="text" 
            name="dashboard_name" />
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
            <input className='Login__button' type="submit" value="Login" />
          </div>
        </form>

      </div>
    </section>
  )
}
