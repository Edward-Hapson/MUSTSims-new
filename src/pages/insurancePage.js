import "./insurancePage.css"
export default function InsurancePage() {
  return (
    <div className="insurancePage">
     <div className="upper__div">
      <p>Card Application</p>
      <button>Apply for NHIF Card</button>
     </div>
     <p>ApplicationNo : 1000292/2021/2022/03940</p>
     <div className="lower__div">
      <ul className="lower__div_ul1">
        <li>AYear: 2021/2022</li>
        <li>RegNo: 20100123090024</li>
        <li>First Name: Edward</li>
        <li>Middle Name: Laizer</li>
        <li>Last Name: HAPSON</li>
      </ul>
      <ul className="lower__div_ul2">
        <li><p>Gender: M</p></li>
        <li><p>Form4 Index: S0147/0022/2019</p></li>
        <li><p>CardNo  101402438553</p></li>
        <li><p>Category: Renew Card</p></li>
        <li><p>Class: Second Year</p></li>
      </ul>
      <ul className="lower__div_ul3">
        <li>Mobile: 255629570295</li>
        <li>NHIF Submission Response :: Application Received Successfully</li>
        <li>Submission Time: 2021-12-07 16:54:16</li>
      </ul>
      <ul className="lower__div_ul4">
        <li>Control Number: 994000850622</li>
        <li>IdentificationNo: 402438553</li>
        <li>Amount: 50,400.00</li>
        <li>Status: Paid</li>    
      </ul>      
     </div>
    </div>
  );
}
