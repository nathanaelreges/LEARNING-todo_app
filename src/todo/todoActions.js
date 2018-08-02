export const search = () => {
   return {
      type: 'TODO_SEARCH',
      payload: [{
         _id: 1,
         description:'Terceira tarefa',
         done: false
      },
      {
         _id: 2,
         description:'Quarta tarefa',
         done: false
      }]
   }
}