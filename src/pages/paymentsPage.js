import "./paymentsPage.css"
export default function PaymentsPage() {
  return (
    <div className="payments">
      <p>Add/Edit Invoice</p>
      <div className="Main__lower__div">
        <div className="leftSide__ul">
          <ul>
            <li>ACTION MENU</li>
            <li>Tuition Fee</li>
            <li>Accommodation Fee</li>
            <li>Meals Fee</li>
            <li>Carry/Retake/Repeater Fee</li>
            <li>Other Fee</li>
          </ul>
          </div>
          <div className="rightSide__ul">
            <p className="paraUp">Fee Structure Invoices</p>
            <ul className="firstUl">
              <li>Student Name:<span className="redStar">{"*"}</span></li>
              <li>20100123090024-HAPSON, Edward</li><span className="studentSpan">STUDENT</span>
              <li>Academic Year:</li>
              <li>2021/2022</li>
            </ul>
            <ul className="secondUl">
              <li className="unBordered_li">Programme:</li>
              <li className="bordered_li">DIPLOMA IN MECHATRONICS ENGINEERING</li>
            </ul>
            <ul className="thirdUl">
              <li className="unBordered_li">Class:</li>
              <li className="bordered_li">Second Year</li>
              <li className="unBordered_li">Category:</li>
              <li className="bordered_li">Private</li>
              <li className="unBordered_li">Currency</li>
              <li className="bordered_li">TZS</li>
            </ul>
            <p className="Para">
            For those students sponsored by Government make sure the category read Government before creating invoice. Otherwise<br/>
            visit Admission Office for updating your information.
            </p>
            <button className="btn">Load Invoice Items</button>
          </div>
        </div>
      </div>
    
  );
}
