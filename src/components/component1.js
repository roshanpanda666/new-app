import ExpenceDate from "./ExpenceDate";
import "./component1.css";
function ExpenceItem(props) {


  return (
    <div className="parrentt">
      <ExpenceDate date= {props.date}></ExpenceDate>
      <div className="parrent2">

        <h2 className="carinc">{props.title}</h2>
        <div className="rs">

          <div className="rsbtn">rs.{props.amount}</div>

        </div>
      </div>
    </div>
  );
}

export default ExpenceItem;
