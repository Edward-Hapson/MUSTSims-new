import homeimg from "../fotos/home.png";
import React from "react";
import "./sideNavbar.css";
import { Link } from "react-router-dom";
import hospitalIcon from "../fotos/Hospital-icon .png";
import chequeIcon from "../fotos/cheque icon.png";
import announcement from "../fotos/announcement.png";
import mshale from "../fotos/MSHALE.png";
import registerIcon from "../fotos/registered.png";
import menubar from "../fotos/menubar.png";
import result from "../fotos/results-icon-png.png";
import security from "../fotos/security.png";
import sms from "../fotos/Sms.png";
import Main from "./main";
import WideNavbar from "./wideNavbar";

export default function SideNavbar() {
  const [popup, setPopup] = React.useState("");

  function Popup() {
    setPopup(
      <div className="popup-div">
        <ul className="popup-ul">
          <li className="popup-li">
            <a>{" > Create Invoice"}</a>
          </li>
          <li className="popup-li">
            <a>{" > Invoice List"}</a>
          </li>
        </ul>
      </div>
    );
  }

  function Popup1() {
    setPopup(
      <div className="popup-div1">
        <ul className="popup-ul1">
          <li className="popup-li1">
            <a>{" > Card Application"}</a>
          </li>
        </ul>
      </div>
    );
  }
  function Popup2() {
    setPopup(
      <div className="popup-div2">
        <ul className="popup-ul2">
          <li className="popup-li2">
            <a>{" > CA Result"}</a>
          </li>
          <li className="popup-li2">
            <a>{" > Final Result"}</a>
          </li>
        </ul>
      </div>
    );
  }
  function Popup3() {
    setPopup(
      <div className="popup-div3">
        <ul className="popup-ul3">
          <li className="popup-li3">
            <a>{" > Login History"}</a>
          </li>
          <li className="popup-li3">
            <a>{" > Change Password"}</a>
          </li>
        </ul>
      </div>
    );
  }

  function RemovePopup() {
    setPopup("");
  }

  return (
    <div className="navbar--div">
    <div className="sideNavbar-div">
      <p>
        SIMS <br /> MUST
      </p>
      <ul className="ul--sideNavbar">
        <li>
          <Link to="/dashboard">
            <img src={menubar} alt="menubar" className="navImg--icon" />
          </Link>
        </li>
        <li onMouseOver={Popup} onMouseOut={RemovePopup}>
          <Link to="/payments">
            <img src={chequeIcon} alt="chequeIcon" className="navImg--icon" />
          </Link>
        </li>
        <li onMouseOver={Popup1} onMouseOut={RemovePopup}>
          <Link to = "/insurance">
            <img
              src={hospitalIcon}
              alt="hospitalIcon"
              className="navImg--icon"
            />
          </Link>
        </li>
        <li>
          <Link to="CourseReg">
            <img
              src={registerIcon}
              alt="registerIcon"
              className="navImg--icon"
            />
          </Link>
        </li>
        <li onMouseOver={Popup2} onMouseOut={RemovePopup}>
          <Link to="/Exams">
            <img src={result} alt="result" className="navImg--icon" />
          </Link>
        </li>
        <li>
          <Link to="/message">
            <img src={sms} alt="sms" className="navImg--icon" />
          </Link>
        </li>
        <li>
          <Link to="/news">
            <img
              src={announcement}
              alt="announcement"
              className="navImg--icon"
            />
          </Link>
        </li>
        <li onMouseOver={Popup3} onMouseOut={RemovePopup}>
          <Link to="/security">
            <img src={security} alt="security" className="navImg--icon" />
          </Link>
        </li>
      </ul>
    </div>
    {popup}
    </div>
  );
  // return (
  //   <div className="non-header--wrapper">
  //     <div className="navbar--div">
  //       <div className="div--sideNavbar">
  //         <p>
  //           SIMS <br /> MUST
  //         </p>
  //         <ul className="ul--sideNavbar">
  //           <li>
  //             <Link to = "/insurance">
  //               <img src={menubar} alt="menubar" className="navImg--icon" />
  //             </Link>
  //           </li>
  //           <li onMouseOver={Popup} onMouseOut={RemovePopup}>
  //             <a>
  //               <img
  //                 src={chequeIcon}
  //                 alt="chequeIcon"
  //                 className="navImg--icon"
  //               />
  //             </a>
  //           </li>
  //           <li onMouseOver={Popup1} onMouseOut={RemovePopup}>
  //             <a>
  //               <img
  //                 src={hospitalIcon}
  //                 alt="hospitalIcon"
  //                 className="navImg--icon"
  //               />
  //             </a>
  //           </li>
  //           <li>
  //             <Link to="/exams">
  //               <img
  //                 src={registerIcon}
  //                 alt="registerIcon"
  //                 className="navImg--icon"
  //               />
  //             </Link>
  //           </li>
  //           <li onMouseOver={Popup2} onMouseOut={RemovePopup}>
  //             <a>
  //               <img src={result} alt="result" className="navImg--icon" />
  //             </a>
  //           </li>
  //           <li>
  //             <a>
  //               <img src={sms} alt="sms" className="navImg--icon" />
  //             </a>
  //           </li>
  //           <li>
  //             <a>
  //               <img
  //                 src={announcement}
  //                 alt="announcement"
  //                 className="navImg--icon"
  //               />
  //             </a>
  //           </li>
  //           <li onMouseOver={Popup3} onMouseOut={RemovePopup}>
  //             <a>
  //               <img src={security} alt="security" className="navImg--icon" />
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //     {popup}
  //   </div>
  // );
}
