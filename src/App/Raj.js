import ExpenseItem from './ExpenseItem'
function Raj(props){
    return(
        <div>
        <ExpenseItem j={props.d[0]}> </ExpenseItem>
      
      <ExpenseItem j={props.d[1]}></ExpenseItem>
      
      <ExpenseItem j={props.d[2]}></ExpenseItem>
      </div>
    )
}
export default Raj;