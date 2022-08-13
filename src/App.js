import React from "react";
import {Route , Routes} from 'react-router-dom';
import "./app.css"
import Header from "./components/header";
import Main from "./components/main";
import SideNavbar from "./components/sideNavbar";
import mustLogo from "./fotos/mustlogo.jpg";
import listIcon from "./fotos/listicon.png";
import hospitalIcon from "./fotos/Hospital-icon .png";
import chequeIcon from "./fotos/cheque icon.png";
import announcement from "./fotos/announcement.png";
import registerIcon from "./fotos/registered.png";
import menubar from "./fotos/menubar.png";
import result from "./fotos/results-icon-png.png";
import security from "./fotos/security.png";
import sms from "./fotos/Sms.png";
import WideNavbar from "./components/wideNavbar";
import Insurance from "./components/insuranceDropdown";
import Examination from "./components/examinationDropdown";
import NavBarMain from "./components/navMain";
import DashboardPage from "./pages/dashboardPage";
import NewsPage from "./pages/newsPage";
import MessagePage from "./pages/messagePage";
import InsurancePage from "./pages/insurancePage";
import PaymentsPage from "./pages/paymentsPage";
import SecurityPage from "./pages/securityPage";
import CoursePAge from "./pages/courseRegistration";
import ExamsPage from "./pages/examsPage";


function Apps() {
  
  const [popup, setPopup] = React.useState("");
  const [sideNavbar , setSideNavbar] = React.useState(true)
  
  function ToggleNavbar(){
   setSideNavbar(!sideNavbar)
  }
 

return(
  <div className="general--div">
    <div className="header--div">
        <img src={mustLogo} alt="mustlogo" className="mustlogo"/>
           <div className="header--words">
             <h1>MBEYA UNIVERSITY OF SCIENCE AND TECHNOLOGY</h1>
             <p>STUDENTS INFOMATION MANAGEMENT SYSTEM {"{ SIMS }"}</p>
             </div>
             <button className="listIcon--btn" onClick={ToggleNavbar}>
                 <img src={listIcon} alt="listIcon" />
             </button>
    </div>      
    <div className="lowerGeneral--div">
    {sideNavbar ? <SideNavbar/> : <WideNavbar/>}
    <Main/>
    {/* <Routes>
      <Route path="/dashboard" element={<DashboardPage/>}/>
      <Route path="/news" element={<NewsPage/>}/>
      <Route path="/message" element={<MessagePage/>}/>
      <Route path="/insurance" element={<InsurancePage/>}/>
      <Route path="payments" element={<PaymentsPage/>}/>
      <Route path="security" element={<SecurityPage/>}/>
      <Route path="CourseReg" element={<CoursePAge/>}/>
      <Route path="Exams" element={<ExamsPage/>}/>
    </Routes> */}
    </div>
  </div>
)
}
export default Apps;
