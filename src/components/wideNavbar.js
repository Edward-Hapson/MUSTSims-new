import { useState } from "react";
import "./wideNavbar.css";
import homeimg from "../fotos/home.png";
import hospitalIcon from "../fotos/Hospital-icon .png";
import chequeIcon from "../fotos/cheque icon.png";
import announcement from "../fotos/announcement.png";
import mshale from "../fotos/MSHALE.png";
import registerIcon from "../fotos/registered.png";
import menubar from "../fotos/menubar.png";
import result from "../fotos/results-icon-png.png";
import security from "../fotos/security.png";
import sms from "../fotos/Sms.png";
import Payments from "./paymentsDropdown";
import Insurance from "./insuranceDropdown";
import Examination from "./examinationDropdown";
import Security from "./securityDropdown";
import { Link } from "react-router-dom";

export default function WideNavbar() {
  const [paymentsDropdown, setPaymentsDropdown] = useState(false);
  const [insuranceDropdown, setinsuranceDropdown] = useState(false);
  const [examinationDropdown, setexaminationDropdown] = useState(false);
  const [securityDropdown, setsecurityDropdown] = useState(false);

  return (
    <div className="wideNavbar-div">
      <div className="div--wideNavbar">
        <p className="p-div">Main Campus</p>
        <ul className="ul--wideNavbar">
          <li>
            <Link to="dashboard" className="a">
              <img src={menubar} alt="menubar" className="navImg--icon" />
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link to="/payments" className="a">
              <img src={chequeIcon} alt="chequeIcon" className="navImg--icon" />
              <p>Payments</p>
            </Link>
            <span
              className="span"
              onClick={() => {
                setPaymentsDropdown(!paymentsDropdown);
              }}
            >
              {"<"}
            </span>
          </li>
          {paymentsDropdown ? <Payments /> : " "}
          <li>
          <Link to = "/insurance" className="a">
              <img
                src={hospitalIcon}
                alt="hospitalIcon"
                className="navImg--icon"
              />
              <p>
                {"Insurance (NHIF)"}
                <span
                  className="span2"
                  onClick={() => {
                    setinsuranceDropdown(!insuranceDropdown);
                  }}
                >
                  {"<"}
                </span>
              </p>
            </Link>
          </li>
          {insuranceDropdown ? <Insurance /> : " "}
          <li>
          <Link to="CourseReg" className="a">
              <img
                src={registerIcon}
                alt="registerIcon"
                className="navImg--icon"
              />
              <p>Course Registration</p>
            </Link>
          </li>
          <li>
          <Link to="/Exams" className="a">
              <img src={result} alt="result" className="navImg--icon" />
              <p>
                Examination Results
                <span
                  className="span1"
                  onClick={() => {
                    setexaminationDropdown(!examinationDropdown);
                  }}
                >
                  {"<"}
                </span>
              </p>
            </Link>
          </li>
          {examinationDropdown ? <Examination /> : ""}
          <li>
          <Link to="/message" className="a">
              <img src={sms} alt="sms" className="navImg--icon" />
              <p>Messages</p>
            </Link>
          </li>
          <li>
          <Link to="/news" className="a">
              <img
                src={announcement}
                alt="announcement"
                className="navImg--icon"
              />
              <p>News</p>
            </Link>
          </li>
          <li>
          <Link to="/security" className="a">
              <img src={security} alt="security" className="navImg--icon" />
              <p>
                Security
                <span
                  className="span3"
                  onClick={() => {
                    setsecurityDropdown(!securityDropdown);
                  }}
                >
                  {"<"}
                </span>
              </p>
            </Link>
          </li>
          {securityDropdown ? <Security /> : ""}
        </ul>
      </div>
    </div>
  );
  // return (
  //   <div className="non-header--wrapper">
  //     <div className="navbar--div">
  //       <div className="div--sideNavbar">
  //         <p className="p-div">Main Campus</p>
  //         <ul className="ul--sideNavbar">
  //           <li>
  //             <a className="a">
  //               <img src={menubar} alt="menubar" className="navImg--icon" />
  //               <p>Dashboard</p>
  //             </a>
  //           </li>
  //           <li>
  //             <a className="a">
  //               <img
  //                 src={chequeIcon}
  //                 alt="chequeIcon"
  //                 className="navImg--icon"
  //               />
  //               <p>Payments</p>
  //             </a>
  //             <span
  //               className="span"
  //               onClick={() => {
  //                 setPaymentsDropdown(!paymentsDropdown);
  //               }}
  //             >
  //               {"<"}
  //             </span>
  //           </li>
  //           {paymentsDropdown ? <Payments /> : " "}
  //           <li>
  //             <a className="a">
  //               <img
  //                 src={hospitalIcon}
  //                 alt="hospitalIcon"
  //                 className="navImg--icon"
  //               />
  //               <p>
  //                 {"Insurance (NHIF)"}
  //                 <span
  //                   className="span2"
  //                   onClick={() => {
  //                     setinsuranceDropdown(!insuranceDropdown);
  //                   }}
  //                 >
  //                   {"<"}
  //                 </span>
  //               </p>
  //             </a>
  //           </li>
  //           {insuranceDropdown ? <Insurance /> : " "}
  //           <li>
  //             <a className="a">
  //               <img
  //                 src={registerIcon}
  //                 alt="registerIcon"
  //                 className="navImg--icon"
  //               />
  //               <p>Course Registration</p>
  //             </a>
  //           </li>
  //           <li>
  //             <a className="a">
  //               <img src={result} alt="result" className="navImg--icon" />
  //               <p>
  //                 Examination Results
  //                 <span
  //                   className="span1"
  //                   onClick={() => {
  //                     setexaminationDropdown(!examinationDropdown);
  //                   }}
  //                 >
  //                   {"<"}
  //                 </span>
  //               </p>
  //             </a>
  //           </li>
  //           {examinationDropdown ? <Examination /> : ""}
  //           <li>
  //             <a className="a">
  //               <img src={sms} alt="sms" className="navImg--icon" />
  //               <p>Messages</p>
  //             </a>
  //           </li>
  //           <li>
  //             <a className="a">
  //               <img
  //                 src={announcement}
  //                 alt="announcement"
  //                 className="navImg--icon"
  //               />
  //               <p>News</p>
  //             </a>
  //           </li>
  //           <li>
  //             <a className="a">
  //               <img src={security} alt="security" className="navImg--icon" />
  //               <p>
  //                 Security
  //                 <span
  //                   className="span3"
  //                   onClick={() => {
  //                     setsecurityDropdown(!securityDropdown);
  //                   }}
  //                 >
  //                   {"<"}
  //                 </span>
  //               </p>
  //             </a>
  //           </li>
  //           {securityDropdown ? <Security /> : ""}
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // );
}
