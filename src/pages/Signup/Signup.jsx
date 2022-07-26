import { Input } from "antd"
import { useState } from "react"

import { sendApiRequest } from '../../utils/client';
import { useNavigate } from 'react-router-dom';
import { urls } from '../../config/urls';

import './Signup.css'

export const Signup = () => {
  const navigate = useNavigate()

  const [signupForm, setSignupForm] = useState({
    dashboardName: '',
    email: '',
    password: ''
  })
  
  const [errorMessage, setErrorMessage] = useState('')


  const handleSignup = async (e) => {
    e.preventDefault()
    const endpoint = '/api/v1/auth/signup'
    const headers = {
      "Content-type": "application/json; charset=UTF-8"
    }
    const response = await sendApiRequest.post(endpoint, signupForm, headers)
    if (response.statusCode === 201) {
      navigate(urls.loginPage)
    } else {
      setErrorMessage(response.message)
    }
  }

  const handleChange = ({ target }) => {
    setSignupForm({
      ...signupForm,
      [target.name]: target.value  
    })
  }
  const inputStyle = {
    textAlign: 'center',
    marginBottom: '15px',
    marginTop: '5px'
  }
  return (
    <section className="Signup">
      
      <div className="Signup__container-left">
        <form action="post" className="Signup__form" onSubmit={handleSignup}>
          <span className="Signup__form-label">Choose a name for your dashboard:</span>
          <Input 
              style={inputStyle}
              onChange={handleChange}
              type="text" 
              name="dashboardName" />
          <span className="Signup__form-label">Your email:</span>
          <Input 
              style={inputStyle}
              onChange={handleChange}
              type="text" 
              name="email" />
          <span className="Signup__form-label">Enter a password:</span>
          <Input 
              style={inputStyle}
              onChange={handleChange}
              type="password" 
              name="password" />
          <Input type="submit" className="Signup__form-button" value="SIGNUP" />
          {errorMessage && (<div className="Signup__form-error">
                              <small>{ errorMessage }</small>
                            </div>)
          }
        </form>
      </div>
      <div className="Signup__container-right">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, minima distinctio nobis exercitationem commodi ratione laudantium ipsa quo fugit! Aperiam aliquam cum reprehenderit non nulla molestias asperiores rem. Delectus, iste?
        </p>
      </div>


    </section>
  )
}
