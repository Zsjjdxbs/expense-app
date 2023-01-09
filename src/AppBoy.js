import { useState } from 'react';
import './components/Expense/App.css'
// import Expense from './components/Expense/Expensedate';
import Exit from './components/Ui/Exit';
import NewExpenseFrom from './From/NewExpenseFrom';


function AppBoy(){
 const DummyExpense=[{id:Math.random(), amount:"rs.2000",date:new Date(),loan:"Bank loan"},
    { id:Math.random(),amount:"rs.8000",date:new Date(),loan:"car loan"} ]

     const [ExpenseDate,setdata]=useState(DummyExpense)

//     function second(ExpenseDate){
//    console.log(ExpenseDate);
//     }
 
function second(ExpenseDate){
    setdata((DummyExpense)=>{
        return[ExpenseDate, ...DummyExpense];
    });
};
  


    return(
        <div>
            <NewExpenseFrom ExpenseDatenew={second}></NewExpenseFrom>
           <Exit g={ExpenseDate}></Exit>
        </div>
    )
}
export default AppBoy;