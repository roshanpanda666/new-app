import './ExpenceDate.css'
function ExpenceDate(props){

    const Month=props.date.toLocaleString('en-US',{month:'long'})
    const Day= props.date.toLocaleString('en-US',{day:'2-digit'})
    const Year= props.date.getFullYear()

    return(
    
    <div className="dt">
        <div className="exdtmonth">{Month}</div>
        <div className="exdtday">{Day}</div>
        <div className="exdtyear">{Year}</div>
    </div>
    )

}

export default ExpenceDate