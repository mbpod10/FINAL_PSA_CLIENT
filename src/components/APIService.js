import axios from "axios"

export class API {
  static register(body) {
    return axios.post(`http://127.0.0.1:8000/api/users/register/`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
  }
  static login(body) {
    return axios.post(`http://127.0.0.1:8000/api/users/login/`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
  }
}