import './From.css'
import { useState } from "react";

function From(props){
    const [name,rename]=useState('')
    const[name1,setname]=useState('')
    const[name2,getname]=useState('')
    
    

    function sample(e){
    //    console.log(e.target.value);
        //   console.log('updated');
      rename(e.target.value);
    }
      function sample1(e){
        setname(e.target.value);
      }
      function sample2(e){
      getname(e.target.value);
    }
    function func(e){
        e.preventDefault()
       let ExpenseDate={ id:Math.random(),loan:name,amount:name1,date:new Date(name2)}
        // console.log(name);
        // console.log(name1);
        // console.log(name2);
      props.onSaveExpenseDate(ExpenseDate)
        rename('')
        setname('')
        getname('')
   //
        
    }
    
    
    

    return(
        <div>
            <div id="board" >
            <form className="frombg">
             <label className="sun">Enter your name: <span><label  className="text" htmlFor="number">Amount</label></span><br></br>
             <input   id="number1" type="text" value={name} onChange={sample}></input>
             <input type="number" id="number"value={name1} onChange={sample1}></input></label><br></br> <br></br>
              
              <label className="sun">Date <br></br><input id="date" type="date"  value={name2} onChange={sample2}   min="2021-01-01" max="2022-12-31"></input></label> <br></br> <br></br>
              <button className="button2" onClick={props.onC}>Cancel</button> <span id="span"></span>
              <button className="button1"onClick={func} >Add Expense</button>

            </form>

            </div>
           
        </div>
    )
}
export default From;