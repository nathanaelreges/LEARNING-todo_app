import axios from 'axios'
const URL = 'http://localhost:3000/api/todos'

export const search = (description = '') => (
   axios.get(`${URL}/?description__regex=/${description}/ig&?sort=date`).then(res => (
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

export const markAsDone = id => (
   dispatch => {
      axios.put(`${URL}/${id}`, {done: true})
         .then(() => {
            dispatch(search())
         })
   }
)

export const markAsUndone = id => (
   dispatch => {
		axios.put(`${URL}/${id}`, {done: false})
			.then(() => {
				dispatch(search())
			})
	}
)

export const remove = id => (
	dispatch => {
		axios.delete(`${URL}/${id}`)
			.then(()=> {
				search().then((action)=>{
					dispatch(action)
				})
			})
	}
)

export const clear = () => (
	dispatch => {
		dispatch({type: 'TODO_CLEAR'})
		dispatch(search())
	}
	
)

export const add = description => {
	if(!description.trim()){
		return { type: 'BYPASS'}
	}

	return axios.post(`${URL}`, { description })
		.then(clear)
}
