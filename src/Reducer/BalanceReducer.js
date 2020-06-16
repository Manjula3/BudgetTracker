import {GET_LOGS,SET_LOADING,LOGS_ERROR,ADD_LOGS,RESET_ALL,DELETE_ITEM} from '../Action_Types/types'

const initialState={
    logs:[],
    current:null,
    loading:null,
    error:null
}


export default (state=initialState,action)=>
{
    switch(action.type){
        case GET_LOGS:
            return{
               ...state,
               logs:action.payload,
               loading:false
            }

        case ADD_LOGS:
            return{
                ...state,
                logs:[...state.logs,action.payload],
                loading:false
            }
        case RESET_ALL:
            return{
                ...state,
                logs:[],
                loading:false
            }
        case SET_LOADING:
            return{
                ...state,
                loading:true
            }

        case LOGS_ERROR:
            console.log(action.payload)
            return{
                   ...state,
                   error:action.payload
                }
        
        case DELETE_ITEM:
            return{
                ...state,
                logs:state.logs.filter(item=>item.id!=action.payload),
                loading:false
            }

        default:
            return state;
    }
}