import axios from 'axios'
const URL = 'http://localhost:3000/api/todos'

export const search = () => (
   axios.get(URL).then(res => (
      {
         type: 'TODO_SEARCH',
         payload: res.data
      }
   ))
)

