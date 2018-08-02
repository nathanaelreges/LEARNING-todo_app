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

export const descriptionChange = value => ({
   type: 'TODO_DESCRIPTION_CHANGE',
   payload: value
})