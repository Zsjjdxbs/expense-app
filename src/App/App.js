
import './App.css';
import Raj from './Raj';
function App() {
//   let amount="+rs.2000";
//   let date=78;
// let mothe="August";
// let year=2022;
// let loan="Bank loan";
// // ---
// let amount1="rs.8000";
// let date1=98;
// let mothe1="August";
// let year1=2000;
// let loan1="Car loan";

const a=[{amount:"rs.2000",loan:"bank loan",date1:new Date("1,23,2020")},
{amount:"rs.3000",date1:new Date("8, 30,2021"),loan:"car loan"},
{amount:"rs.9000",date1:new Date("12,1,2022"),loan:"home loan"}
]


// let amount="rs.2000";
// let date=78;
// let mothe="August";
// let year=2022;
// let loan="Bank loan";
// // ---
// let amount1="rs.8000";
// let date1=98;
// let mothe1="August";
// let year1=2000;
// let loan1="Car loan";
  return (
    // <div className="App">
    //  <div className="y"><h1 className="raj">Welcome to React JS</h1></div>
    //  <div className="navin">
    //   <img src={navin} className="image1"></img>
    //   <img src={navin} className="image2"></img>
    //   </div>
    //  </div>
    // -----------------------
   
    <div>
      <Raj d={a}></Raj>
     
     
    </div>
    
  );
}

export default App;
