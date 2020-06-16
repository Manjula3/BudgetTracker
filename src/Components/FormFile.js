import React from 'react'
import {Formik} from 'formik'
import '../App.css';
import {connect} from 'react-redux';
import {uuid} from 'uuidv4'
import {addLogs} from '../Action_Types/Action'
import * as Yup from 'yup'

const validationSchema=Yup.object().shape({
  Amount:Yup.number().required(),
  Description:Yup.string().required()
})

const FormFile=({addLogs})=>
{
    return(
        <div>
        <Formik
    initialValues={{
        Amount:'',
        Description:'' 
      }}
      validationSchema={validationSchema}
      onSubmit={(values,{setSubmitting,resetForm})=>{
        setSubmitting(true)
        setTimeout(()=>{
        values.id=uuid()
        if(+values.Amount>0)
          values.type="Income"
        else
          values.type="Expense"
        addLogs(values.id,values)
        resetForm()
        setSubmitting(false)},500)}}>

      {({values,handleChange,handleBlur,handleSubmit,isSubmitting,touched,errors})=>
  
      (
       <form onSubmit={handleSubmit}>
        <div className="AmountInput">
        <label>Rs.</label>
        <input type="number" name="Amount" placeholder="Amount" 
        onChange={handleChange}
        value={values.Amount}
        onBlur={handleBlur}></input><br/>
        <label className="suffix">Enter positive number for income, negative number for expense</label>
        {(touched.Amount && errors.Amount)?<span className="suffix">{errors.Amount}!</span>:null}       
        </div>


        <div className="textbox">
        <p>Description:</p>
        <input type="textarea" name="Description" placeholder="Enter a note"
        onChange={handleChange}
        value={values.Description}
        onBlur={handleBlur}></input>
        <br/>
        {(touched.Description && errors.Description)?<span className="suffix">{errors.Description}!</span>:null}

        </div>

        <button className="Button" type="submit">Add</button>

        </form>)}
        </Formik>

    </div>
    )
}

export default  connect(null,{addLogs}) (FormFile)

