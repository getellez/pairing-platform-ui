import { useState } from "react"
import { sendApiRequest } from '../../utils/client';
import { NavLink, useNavigate } from 'react-router-dom';
import { urls } from '../../config/urls';
import { APP_NAME } from '../../utils/constants';
import { useForm } from 'react-hook-form';

import './Signup.css'
import 'antd/lib/spin/style/index.css'
import { Spin } from "antd";


export const Signup = () => {
  
  const [isLoading, setisLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const { handleSubmit, setValue, register, formState: { errors } } = useForm({ email: '', password: '', dashboardName: '' })

  const handleChange = ({ target }) => {
    const dashboardName = target.value;
    const newDashboardName = dashboardName.replace(/[^\w]+/g,'').toUpperCase()
    setValue('dashboardName', newDashboardName)
  }

  const handleSignup = async (data) => {
    setisLoading(true)
    try {
      const endpoint = '/api/v1/auth/signup'
      const headers = {
        "Content-type": "application/json; charset=UTF-8"
      }
      const signup = await sendApiRequest.post(endpoint, data, headers)
      if (signup.statusCode === 201) {
        navigate(urls.loginPage)
      } else {
        setisLoading(false)
        setErrorMessage(signup.data.message)
      }
      
    } catch (error) {
      setisLoading(false)
    }
  }

  return (
    <section className="Signup">
      
      <div className="Signup__container-left">
        <div className="Signup__form-container">
          
          <form className="Signup__form" onSubmit={handleSubmit(handleSignup)}>
            <h1 className='Signup__title'>{APP_NAME}</h1>
            <div className='Signup__input-container'>
              <input 
                  {
                    ...register("dashboardName", {
                      required: "Enter a valid dashboard name",
                      pattern: {
                        value: /[\w]+/g,
                        message: 'Only numbers and letters are valid'
                      }
                    })
                  }
                  type="text" 
                  autoComplete="organization"
                  onChange={handleChange}
                  className="Signup__input"
                  placeholder="Enter a dashboard name"
                  />
                  {
                    errors?.dashboardName?.message && (
                    <div className='Signup__error-container'>
                      <p className='Signup__error-field'>
                        <small>
                          { errors?.dashboardName?.message }
                        </small>
                      </p>
                    </div>
                    )
                  }
            </div>

            <div className='Signup__input-container'>
              <input 
                  className="Signup__input"
                  placeholder="Email"
                  {
                    ...register("email", { 
                      required: "Enter a valid email",
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: 'Enter a valid email address'
                      }
                    })
                  }
                  />
              {
                errors?.email?.message && (
                <div className='Signup__error-container'>
                  <p className='Signup__error-field'>
                    <small>
                      { errors?.email?.message }
                    </small>
                  </p>
                </div>
                )
              }
            </div>
            <div className='Signup__input-container'>
              <input 
                className="Signup__input"
                placeholder="Password"
                type="password"
                autoComplete="new-password"
                {
                  ...register("password", {
                    minLength: 8,
                    required: "Enter a valid password"
                  })
                }
                />
              <p className="Signup__password-label">At least 8 characters</p>
              {
                errors?.password?.message && (
                <div className='Signup__error-container'>
                  <p className='Signup__error-field'>
                    <small>
                      { errors?.password?.message }
                    </small>
                  </p>
                </div>
                )
              }
            </div>
            <div className='Signup__input-container'>
              {
                isLoading && (
                  <Spin />
                  )
                }
              {
                !isLoading && (
                  <input 
                  className="Signup__form-button"
                  type="submit" 
                  value="SIGNUP" />
                )
              }
            
            </div>
          </form>
          <p className="Login__message">
            <small>
              Do you already have an account?  <NavLink to={urls.loginPage}> Login </NavLink>
            </small>
          </p>
          {
            errorMessage && (
              <p className='Signup__error'>
                <small>{ errorMessage }</small>
              </p>
            )
          }

        </div>
      </div>
      <div className="Signup__container-right">
        <div className="Signup__description">
          <p>
            { APP_NAME } is a platform based on the Pair Programming methodology that you can use to assign team members to tasks.
          </p>
        </div>
      </div>


    </section>
  )
}
