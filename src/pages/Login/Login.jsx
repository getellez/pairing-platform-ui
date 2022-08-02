import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { sendApiRequest } from '../../utils/client';
import { urls } from '../../config/urls';
import { APP_NAME } from '../../utils/constants';
import { useForm } from 'react-hook-form';

import './Login.css'

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const { register, setValue, handleSubmit, formState: { errors }} = useForm({ defaultValues: { dashboardName: '', password: '' } })
  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    const dashboardName = target.value;
    const newDashboardName = dashboardName.replace(/[^\w]+/g,'').toUpperCase()

    setValue('dashboardName', newDashboardName)
  }

  const handleLogin = async (data) => {
    const url = '/api/v1/auth/signin';
    const headers = {
      "Content-type": "application/json; charset=UTF-8"
    }
    const login = await sendApiRequest.post(url, data, headers)
    if (login.statusCode !== 200) {
      setErrorMessage(login.data.message)
    } else {
      setErrorMessage('')
      localStorage.setItem('pairing-token', JSON.stringify(login.data.token))
      navigate(`/dashboards/${data.dashboardName}`)
      window.location.reload()
    }
  }

  return (
    <section className="Login">
      <div className="Login__column-left">
        <div className="Login__container-left">
          
          <h1 className='Login__title'>{APP_NAME}</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className='Login__input-container'>
              <input
                { 
                  ...register("dashboardName", 
                  {
                    required: true,
                    pattern: {
                      value: /[\w]+/g,
                      message: 'Only numbers and letters are valid'
                    }
                  })
                }
                onChange={handleChange}
                type="text"
                className='Login__input'
                placeholder='Dashboard name'
              />
            {
              errors?.dashboardName?.message && (
              <div className='Login__error-container'>
                <p className='Login__error-field'>
                  <small>
                    { errors?.dashboardName?.message }
                  </small>
                </p>
              </div>
              )
            }
            </div>

            <div className='Login__input-container'>
              <input
                className='Login__input'
                type="password"
                placeholder='Password'
                { ...register("password", { required: "The password is required" }) }
              />
              {
                errors?.password?.message && (
                <div className='Login__error-container'>
                  <p className='Login__error-field'>
                    <small>
                      { errors?.password?.message }
                    </small>
                  </p>
                </div>
                )
              }
            </div>
            <div className='Login__input-container'>
              <input className='Login__button' type="submit" value="LOGIN" />
            </div>
          </form>

          <p className='signup-message'>
            <small>
              Do you want a new account? <NavLink to={urls.signupPage}>Signup</NavLink>
            </small>
          </p>
          {
            errorMessage && (
              <p className='Login__error'>
                <small>
                  {errorMessage}
                </small>
              </p>
            )
          }

        </div>
      </div>
      <div className="Login__column-right">
        <div className="Login__container-right">
          <div className="step-container">
            <h1>1. Add your teammates to the dashboard</h1>
          </div>
          <div className="step-container">
            <h1>2. Create new tasks</h1>
          </div>
          <div className="step-container">
            <h1>3. Drag and Drop the team members into a task</h1>
          </div>
        </div>
      </div>

    </section>
  )
}
