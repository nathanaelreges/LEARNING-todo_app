const INITIAL_STATE = {
   description: 'pesquisando',
   list: [{
      _id: 1,
      description:'Primeira tarefa',
      done: false
   },
   {
      _id: 2,
      description:'Segunda tarefa',
      done: false
   }]
}


export default (state = INITIAL_STATE, action) => {
   switch(action.type){
      case 'TODO_SEARCH':
         return {...state, list: action.payload}
      case 'TODO_DESCRIPTION_CHANGE':
            return {...state, description: action.payload}
      default:
         return state
   }
}

