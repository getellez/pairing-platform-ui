import decode from 'jwt-decode'

const BASE_URL = import.meta.env.VITE_API_URL

export const sendApiRequest = {
  get: async (endpoint, headers) => {
    let data = null;
    const url = `${BASE_URL}${endpoint}`
    const response = await fetch(url, {
      headers,
      method: 'GET'
    })
    if (response.status === 200) {
      data = await response.json()
    } 
    return {
      statusCode: response.status,
      data
    }
  },
  post: async (endpoint, body={}, headers={}) => {
    let data = null;
    const url = `${BASE_URL}${endpoint}`
    const response = await fetch(url, {
          headers,
          method: 'POST',
          body: JSON.stringify(body),
        })
    
    if (response.status === 200 || response.status === 201 ) {
      data = await response.json()
    }

    return {
      statusCode: response.status,
      data
    }
  }
}


export const decodeJwtToken = (token) => {
  return decode(token)
}

export const getTokenPayload = () => {
  const storedToken = localStorage.getItem('pairing-token')
  if (storedToken) {
    const jwtPayload = decodeJwtToken(storedToken)
    return jwtPayload
  }
  return null
}

export const getDashboardName = () => {
  const storedToken = localStorage.getItem('pairing-token')
  if (storedToken) {
    const jwtPayload = decodeJwtToken(storedToken)
    return jwtPayload.dashboardName
  }
  return null
}

export const getTokenHeader = () => {
  let token = null;
  let tokenInLocalStorage = JSON.parse(localStorage.getItem('pairing-token'))
  
  if (tokenInLocalStorage) {
    token = tokenInLocalStorage
  }

  if (token) {
    return {
      'Authorization': `Bearer ${token}`
    }
  }

  return token
}