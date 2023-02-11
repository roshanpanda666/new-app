import "./component1.css";
function ExpenceItem(props) {

  const Month=props.date.toLocaleString('en-US',{month:'long'})
  const Day= props.date.toLocaleString('en-US',{day:'2-digit'})
  const Year= props.date.getFullYear()
  return (
    <div className="parrentt">
      <div className="dt">
        <div>{Month}</div>
        <div>{Day}</div>
        <div>{Year}</div>
      </div>
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
