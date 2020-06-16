import React from 'react'
import {Pie} from 'react-chartjs-2'
import FormFile from './FormFile'
import {connect} from 'react-redux'
import '../App.css';

const MainPage=({log})=>
{
    let ExpenseAmount=[]
    log.logs.filter(items=>items.type=="Expense")
    .map(i=>ExpenseAmount.push(Math.abs(i.Amount)))
    let Expense=ExpenseAmount.reduce((add,item)=>add+=item,0)
    let IncomeAmount=[]
    log.logs.filter(items=>items.type=="Income")
    .map(i=>IncomeAmount.push(Math.abs(i.Amount)))
    let Income=IncomeAmount.reduce((add,item)=>add+=item,0)
    let Total=Income-Expense
    

    return(
        <div className="mainPage">
        <div className="row myRow">
    <div className="column myColumn">
    <FormFile/>
    </div>
      <div className="column">
      <div className="Balance">
      <p>Balance : Rs. {Total}</p>
      </div>
       <div className="row">
       <div className="Balance-sub-i"><p>Income: Rs. {Income}</p></div>
       <div className="Balance-sub"><p>Expense: Rs. {Expense}</p></div>
      </div>
        </div>
        </div>
        <div className="chart">
        <Pie
    data={{labels: ["income","expense"],
    datasets: [{
        label: 'Number of Views',
        data:[Income,Expense],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
    }]}}
  width={100}
  height={35}/>
        </div>
        </div>
    )
}
const mapStateToProps=state=>
({
    log:state.Log
    })
export default connect(mapStateToProps,null)(MainPage)