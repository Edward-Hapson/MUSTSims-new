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
      <div  className="dashboard_utilities">
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
               
                 </ul>                 
                 <ul>
                    <li className="div__ul_li">Type</li>               
                 </ul>
                 <ul>
                   <li className="div__ul_li">Deadline</li>
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
