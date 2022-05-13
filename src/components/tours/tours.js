import './tours.css'
function Tours (props){
    return (
        <>
        <ul className="cards">
        <li>
          <a   className="card">
            <img src={props.Tourimage}  className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src={props.Tourimage} alt={props.alter} />
                <div className="card__header-text">
                  <h3 className="card__title">{props.TourName}</h3>
                  <span className="card__status">Price :{props.price}$</span>
                </div>          
              </div>
              <p className="card__description">{props.info}</p>
            </div>
          </a>
        </li>    
      </ul>
      </>
    )}

    export default Tours