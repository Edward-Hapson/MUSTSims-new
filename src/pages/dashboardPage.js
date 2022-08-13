import "./dashboardPage.css"
import DashboardPageListings from "./dashboardPageListings";
export default function DashboardPage() {
  return (
    <div>
      <div className="regStatus">
         <p>
         REGISTRATION STATUS ACADEMIC YEAR : 2021/2022 - SEMESTER II<br/>
         You have been Registered in DIPLOMA IN MECHATRONICS ENGINEERING - SECOND YEAR
         </p>
      </div>
      <div className="dashboard_utilities">
             <div className="dashboard__leftDiv">
                <div className="dashboard__leftUpDiv">
                <p className="p1_dashboardleftDiv">Dashboard</p>                
                <p className="p2_dashboardleftDiv">Welcome</p>
                </div>
                <div className="dashboard__leftBtmDiv">
                <p className="p1_dashboardleftBtmDiv">Notifications</p>                
                <p className="p2_dashboardleftBtmDiv">Result Uploads Deadline</p>
                <div className="div__ul">
                 <ul>
                    <li className="div__ul_li">Category</li>                    
                    {/* <li>{"Diploma [ NTA Level 4 - 6 ]"}</li>                    
                    <li>{"Diploma [ NTA Level 4 - 6 ]"}</li>
                    <li>{"Diploma [ NTA Level 4 - 6 ]"}</li>
                    <li>{"Diploma [ NTA Level 4 - 6 ]"}</li>
                    <li>{"Diploma [ NTA Level 4 - 6 ]"}</li>
                    <li>{"Diploma [ NTA Level 4 - 6 ]"}</li>
                    <li>{"Bachelor [ UQF 6 - 8 ]"}</li>
                    <li>{"Bachelor [ UQF 6 - 8 ]"}</li>
                    <li>{"Bachelor [ UQF 6 - 8 ]"}</li>
                    <li>{"Bachelor [ UQF 6 - 8 ]"}</li>
                    <li>{"Bachelor [ UQF 6 - 8 ]"}</li>                     */}
                 </ul>                 
                 <ul>
                    <li className="div__ul_li">Type</li>                 
                    {/* <li>CA Exams</li>
                    <li>SE Exams</li>
                    <li>SUPP/SPECIAL Exams</li>
                    <li>CARRY Exams</li>
                    <li>REPEATER Exams</li>
                    <li>CA Supp</li>
                    <li>CA EXams</li>
                    <li>SE Exams</li>
                    <li>SUPP/SPECIAL Exams</li>
                    <li>CARRY Exams</li>
                    <li>REPEATER Exams</li> */}
                 </ul>
                 <ul>
                    <li className="div__ul_li">Deadline</li>
                    {/* <li>27-07-2022</li>
                    <li>22-07-2022</li>
                    <li>03-11-2021</li>
                    <li>22-07-2022</li>
                    <li>22-07-2022</li>
                    <li>03-11-2021</li>
                    <li>22-07-2022</li>
                    <li>22-07-2022</li>
                    <li>03-11-2022</li>
                    <li>22-07-2022</li>
                    <li>22-07-2022</li> */}
                 </ul>                
                </div>
                <DashboardPageListings
                 level = "Diploma [ NTA Level 4 - 6 ]"
                 examsType ="CA Exams"
                 date = "27-07-2022"
                 />

                <p className="pp">Student Course Registration Deadline <span> : May 31, 2022</span></p>
                </div>
             </div>
             <div className="dashboard__rightDiv">
                <p className="p1_dashboardrightDiv">News</p>                
             </div>
      </div>
    </div>
  );
}
