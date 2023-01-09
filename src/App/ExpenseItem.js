import './App.css'
import Navin from '../Navin';
function ExpenseItem (props){
    return(
        <div id="gg">
            <div className="app">
        <div className="raj"><Navin b={props.j} ></Navin></div>
        <h1 className="kk">{props.j.loan} </h1>
        <div className="navin"><h1>{props.j.amount}</h1></div>
      </div> <br></br>
      {/* <br></br>
      <div className="ww">
        <div className="raj"><Navin b={props.k}></Navin></div>
        <h1 className="kk">{props.k.loan1} </h1>
        <div className="navin"><h1>{props.k.amount1}</h1></div>
      </div>
  <br></br>
      <div className="dd">
        <div className="raj"><Navin b={props.l}></Navin></div>
        <h1 className="kk">{props.l.loan2} </h1>
        <div className="navin"><h1>{props.l.amount2}</h1></div>
      </div> */}
        </div>
    )
}
export default ExpenseItem;