
import { useState } from "react";
import Display from "../Expense/Display";
import Expenseltem from "../Expense/Expenseltem";
import Filter from "../Expense/Filter";
import "./Exit.css";

function Exit(props){
    const [option1,setoption]=useState("")
    function kk(filtered){
        // setoption( e.target.value)
        //  console.log( e.target.value);
        setoption(filtered)
      
    }
    var filtervalue= props.g.filter((jk)=>{
        return jk.date.getFullYear().toString() === option1;
    })
    return(
        <div>
          
            <Display id="sri">
              {/* <Expenseltem boy={props.g[0]}></Expenseltem>
             <Expenseltem boy={props.g[1]}></Expenseltem>                            static       */}
<Filter kk={kk} option1={option1}></Filter>
 {/* {props.g.map((raj)=>( */}
              {/* {filtervalue.map((raj)=>( */}
              {filtervalue.length===0 ?(<h2 className="filtervalue">No Expense found</h2>)  :   (filtervalue.map((raj)=>( 
                                 <Expenseltem  key={raj.id}
                                   boy={raj.amount} 
                                   boy2={raj.date} 
                                   boy1={raj.loan} ></Expenseltem>
            )))} 
            
             
             </Display>
           
        </div>
    )
}
export default Exit;