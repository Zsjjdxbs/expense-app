import { useState } from "react";
import './Expenseltem.css';
function Expense(props){
    let month=props.b.toLocaleString("en-Us",{month:"long"})
    let day=props.b.toLocaleString("en-Us",{day:"2-digit"})
    let year=props.b.getFullYear()

    const [name,rename]=useState(month)
    function simple(){
      rename("update")
      console.log(month);
    }
    return(
        <div>
        <h1>{name} <br></br>{day}<br></br>{year}</h1>
        <button className='button' onClick={simple}>click</button>
        </div>
    )
}
export default Expense;