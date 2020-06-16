import {GET_LOGS,SET_LOADING,LOGS_ERROR,ADD_LOGS,RESET_ALL,DELETE_ITEM} from './types'
import axios from 'axios'

// export const getLogs=()=>
// {
//     return async (dispatch,getstate)=>
//     {
// setLoading();
// const res =await fetch('http://localhost:3001/logs')
// const data=await res.json()

// dispatch({
//     type:GET_LOGS,
//     payload:data
// })

//     }
// }

export const getLogs=()=>async (dispatch,getstate)=>
{
   
   setLoading();
   axios.get("http://localhost:3001/logs").then(res=>res.data)
   .then(res=>{
        try{
    dispatch({
        type:GET_LOGS,
        payload:res
    })
    }
   catch(err){
   dispatch({
        type:LOGS_ERROR,
        payload:err
    })
   }}) 
    
}

export const addLogs=(id,value)=>async (dispatch,getstate)=>
{
    setLoading();
    axios.post("http://localhost:3001/logs/",value)
   .then(res=>console.log(res))
   .catch(err => console.error("Wasn't able to update property.", err))
    dispatch({
    type:ADD_LOGS,
    payload:value
})    
}

export const Reset=()=>async (dispatch,getstate)=>
{
   setLoading();
   axios.delete("http://localhost:3001/logs/")
   .then(res=>console.log(res))
   .catch(err => console.error("Wasn't able to update property.", err))
    dispatch({
   type:RESET_ALL
             })    
}

export const removeLog=(id)=>async (dispatch,getstate)=>
{
   setLoading();
   axios.delete(`http://localhost:3001/logs/${id}`)
   .then(res=>console.log(res))
   .catch(err => console.error("Wasn't able to update property.", err))
    dispatch({
   type:DELETE_ITEM,
   payload:id
             })    
}

export const setLoading=()=>
{
    return{
        type:SET_LOADING
    }
}