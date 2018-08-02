import axios from 'axios'
const URL = 'http://localhost:3000/api/todos'


export const mounted = () => (search())

export const search = () => (
	(dispatch, getState) => {
		const description = getState().todo.description.trim() || ''
		const search = description? `?description__regex=/${description}/ig&` : ''
		axios.get(`${URL}/${search}?sort=date`).then(res => (
			dispatch({
				type: 'TODO_SEARCH',
				payload: res.data
			})
		))
	}
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
				dispatch(search())
			})
	}
)

export const clear = () => (
	dispatch => {
		dispatch({type: 'TODO_CLEAR'})
		dispatch(search())
	}
	
)

export const add = () => (
	(dispatch, getState) => {
		const description = getState().todo.description
		
		/*if(!description.trim()){
			return
		}*/

		axios.post(`${URL}`, { description })
			.then(()=>dispatch(clear()))
		
	}
)
