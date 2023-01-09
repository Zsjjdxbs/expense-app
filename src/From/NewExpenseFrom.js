import './From.css'
import From from "./From";
import { useState } from "react";

function NewExpenseFrom(props){
    const[btn,setbtn]=useState(false)

 function g(ExpenseDate){
    props.ExpenseDatenew(ExpenseDate)
        
 }

 

function button11(){
     setbtn(true)
}
function button12(){
    setbtn(false)
}
 
    return(
        <div>
            {/* <From onSaveExpenseDate={g} value={btn}></From> */}
            {/* <button onClick={button11}  >click me</button> */}
            {btn? <From onSaveExpenseDate={g} value={btn} onC={button12}></From>:<div className="formbutton"><button onClick={button11} className="buttonstyle"  >click me</button></div>}

        </div>
    )
}
export default NewExpenseFrom;