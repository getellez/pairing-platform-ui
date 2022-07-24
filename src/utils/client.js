import decode from 'jwt-decode'

export const sendApiRequest = {
  get: async (url, headers) => {
    const response = await fetch(url, {
          headers,
          method: 'GET'
        })
    const data = await response.json()
    return data
  },
  post: async (url, body={}, headers={}) => {
    const response = await fetch(url, {
          headers,
          method: 'POST',
          body: JSON.stringify(body),
        })
    const data = await response.json()
    return data
  }
}


export const decodeJwtToken = (token) => {
  return decode(token)
}

export const getDashboardName = () => {
  const storedToken = localStorage.getItem('pairing-token')
  const jwtPayload = decodeJwtToken(storedToken)
  return jwtPayload.dashboardName
}

export const getTokenFromLocalStorage = () => {
  let token;
  let tokenInLocalStorage = JSON.parse(localStorage.getItem('pairing-token'))
  if (tokenInLocalStorage) {
    token = tokenInLocalStorage.token
  }
  
  if (token) {
    return {
      'Authorization': `Bearer ${token}`
    }
  }
  return {}
}