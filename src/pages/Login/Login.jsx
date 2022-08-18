import { Spin } from 'antd';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, NavLink, useParams, useSearchParams } from 'react-router-dom';
import { sendApiRequest } from '../../utils/client';
import { urls } from '../../config/urls';
import { APP_NAME } from '../../utils/constants';

import './Login.css'
import 'antd/lib/spin/style/index.css'

export const Login = () => {
  const [isLoading, setisLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { register, setValue, handleSubmit, formState: { errors } } = useForm({ defaultValues: { dashboardName: '', password: '' } })
  const navigate = useNavigate()
  const { dashboardName, status } = useParams()
  const params = useParams()
  const [searchParams] = useSearchParams();
  const signupStatus = searchParams.get('status') === 'ok'
  
  if (dashboardName) {
    setValue('dashboardName', dashboardName)
  }

  const handleChange = ({ target }) => {
    const dashboardName = target.value;
    const newDashboardName = dashboardName.replace(/[^\w]+/g, '').toUpperCase()
    setValue('dashboardName', newDashboardName)
  }

  const handleLogin = async (data) => {
    setisLoading(true)
    try {
      const url = '/api/v1/auth/signin';
      const headers = {
        "Content-type": "application/json; charset=UTF-8"
      }
      const login = await sendApiRequest.post(url, data, headers)
      if (login.statusCode !== 200) {
        setisLoading(false)
        setErrorMessage(login.data.message)
      } else {
        setisLoading(false)
        setErrorMessage('')
        localStorage.setItem('pairing-token', JSON.stringify(login.data.token))
        navigate(`/${data.dashboardName}`)
        window.location.reload()
      }
    } catch (error) {
      setisLoading(false)
    }
  }

  return (
    <section className="Login">
      <div className="Login__column-left">
        <div className="Login__container-left">

          {
            signupStatus && (
              <p className='Login__message-success animate__animated animate__fadeOut'>
                Your account was created succesfully.
              </p>
              
            )
          }
          <h1 className='Login__title'>
            {
              dashboardName
                ? dashboardName
                : APP_NAME
            }
          </h1>

          
          <form onSubmit={handleSubmit(handleLogin)}>
            <Toaster />
            <div className='Login__input-container'>
              {
                !dashboardName && <>
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
                          {errors?.dashboardName?.message}
                        </small>
                      </p>
                    </div>
                  )
                }
                </>
              }
              
            </div>

            <div className='Login__input-container'>
              <input
                className='Login__input'
                type="password"
                placeholder='Password'
                {...register("password", { required: "The password is required" })}
              />
              <p className="Login__password-label">At least 8 characters</p>

              {
                errors?.password?.message && (
                  <div className='Login__error-container'>
                    <p className='Login__error-field'>
                      <small>
                        {errors?.password?.message}
                      </small>
                    </p>
                  </div>
                )
              }
            </div>
            <div className='Login__input-container'>
              {
                isLoading && <Spin />
              }
              {
                !isLoading && (
                  <input className='Login__button' type="submit" value={'LOGIN'} />
                )
              }


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
            <h1>1. Add the team members</h1>
          </div>
          <div className="step-container">
            <h1>2. Create new tasks</h1>
          </div>
          <div className="step-container">
            <h1>3. Drag and Drop the team members</h1>
          </div>
        </div>
        <div className="Latam">
          <small>Developed with 🤍 by LATAM </small>
        </div>
      </div>

    </section>
  )
}
