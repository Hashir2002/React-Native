import ActionTypes from '../Constant';

const INITIAL_STATE = {
    todo: [],
    Id:[],
    error:''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ActionTypes.TODO:
        console.log(action.id)

            return ({
                ...state,
                Id:action.id,
                todo: action.payload,
            })
// =================

            case ActionTypes.ReduxAddTodo:
            return ({
                ...state,
                todo: state.todo.concat(action.payload),
            })

            case ActionTypes.DELETETODO:
            // console.log(action.payload)
            state.todo.splice(action.payload, 1)
            return ({
                ...state,
                todo: state.todo.concat(),
            })

        case ActionTypes.UPDATETODO:
    
        
        state.todo[action.id] = action.payload
        
            return ({
                ...state,
                todo: state.todo.concat()
                
            })


            case ActionTypes.DELETEALLTODO:
            return ({
                ...state,
                todo: []
            })


            case ActionTypes.ForData:
            return ({
                ...state,
                spaining:false
            })


            case ActionTypes.Error:
            return ({
                ...state,
                error:action.payload
            })


        default:
            return state;
    }
}
