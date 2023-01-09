
function Navin(props){

    let month=props.b.date1.toLocaleString("en-US",{month:'long'});
    let day=props.b.date1.toLocaleString("en-US",{day:'2-digit'})
    let year=props.b.date1.getFullYear()
    return(
        <div><h1>{month} <br></br>{day}<br></br>{year}</h1></div>
    );
}
export default Navin 