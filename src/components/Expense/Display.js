import './App.css';
// import  Filter from'./Filter'
function Display(props){
    return(
        <div id={props.id} >
            {/* <Filter></Filter> */}
            {props.children}
            
            </div>
    )
}
export default Display;