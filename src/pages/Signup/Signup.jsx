import { useState } from "react"
import { sendApiRequest } from '../../utils/client';
import { NavLink, useNavigate } from 'react-router-dom';
import { urls } from '../../config/urls';
import { APP_NAME } from '../../utils/constants';

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

  return (
    <section className="Signup">
      
      <div className="Signup__container-left">
        <div className="Signup__form-container">
          <form action="post" className="Signup__form" onSubmit={handleSignup}>
            <h1 className='Signup__title'>Easy Pair</h1>
            <div className='Signup__input-container'>
              <input 
                  className="Signup__input"
                  placeholder="Enter a dashboard name"
                  onChange={handleChange}
                  type="text" 
                  name="dashboardName" />
            </div>

            <div className='Signup__input-container'>
              <input 
                  className="Signup__input"
                  placeholder="Email"
                  onChange={handleChange}
                  type="text" 
                  name="email" />
            </div>
            <div className='Signup__input-container'>
              <input 
                  className="Signup__input"
                  placeholder="Password"
                  onChange={handleChange}
                  type="password" 
                  name="password" />
            </div>
            <div className='Signup__input-container'>
              <input 
              className="Signup__form-button"
              type="submit" 
              value="SIGNUP" />
            </div>


            {
              errorMessage && (
              <div className="Signup__form-error">
                <small>{ errorMessage }</small>
              </div>
              )
            }
          <p>
            <small>
              Do you already have an account?  <NavLink to={urls.loginPage}> Login </NavLink>
            </small>
          </p>
          </form>
        </div>
      </div>
      <div className="Signup__container-right">
        <div className="Signup__description">
          <p>
            { APP_NAME } is a platform based on the Pair Programming methodology that you can use to relate team members with tasks.
          </p>
        </div>
      </div>


    </section>
  )
}
