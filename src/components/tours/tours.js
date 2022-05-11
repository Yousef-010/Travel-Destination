import './tours.css'
function Tours (props){
    return (
        <div>
        <img src= {props.Tourimage} alt ={props.alter} />

        <h3>{props.TourName}</h3>
        </div>
    )}

    export default Tours