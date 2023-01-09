import { useState } from 'react';
import './Filter.css'
function Filter(props){
 
    // const [option1,setoption]=useState("2022")
    function kk(e){
    //   
    //    console.log( e.target.value);
            props.kk(e.target.value)
    }
    return(
        <div>
            <div className="filter">
                <h3>Filter by year</h3>
                <select onChange={kk} value={props.option1}>
                    <option value='sel'>Select a year</option>
                    <option value='2023'>2023</option>
                    <option  value='2022'>2022</option>
                    <option value='2021'>2021</option>
                </select>
            </div>
        </div>

    )
}
export default Filter;