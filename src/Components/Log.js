import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getLogs,Reset,removeLog} from '../Action_Types/Action'


const Log =({log,getLogs,Reset,removeLog})=>
{   
    const[viewLog,setViewLog]=useState(false)
    useEffect(()=>{getLogs();},[getLogs])
    return(
        <div> 
    <div className="row ">
    <button className="Button" onClick={()=>Reset()}>Reset</button>
    <button className="Button"  onClick={()=>setViewLog(!viewLog)}>View Logs</button>
    {(viewLog&&log.logs.length>0)&&<p className="info">scroll down to see logs</p>}
    </div>  

     {(viewLog)?
        (log.logs.length===0)?<p className="info">No Logs to display</p>:
        log.logs.map(l=>
        
        <div className={(l.type==="Expense")?"red-border row logs":"green-border row logs"}>

    
        <p>{l.Amount}</p>
    
 
        <p> {l.Description}</p>
        
        <i onClick={()=>removeLog(l.id)} class="fas fa-trash-alt"></i></div>):null}
        </div>
    )
}
const mapStateToProps=state=>
({
log:state.Log
})
export default connect(mapStateToProps,{getLogs,Reset,removeLog})(Log)