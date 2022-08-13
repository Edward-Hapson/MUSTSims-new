import "./paymentsDropdown.css"

export default function Payments(){
    return(
        <div className="div-dropdown">
        <ul className="div-dropdown__ul">
          <li><p>{"> Create Invoice"}</p></li>
          <li><p>{"> Invoice List"}</p></li>
        </ul>
      </div>
    )
}