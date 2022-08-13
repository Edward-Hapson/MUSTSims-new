import React from "react";
import {Route , Routes} from 'react-router-dom';
import DashboardPage from "../pages/dashboardPage";
import NewsPage from "../pages/newsPage";
import MessagePage from "../pages/messagePage";
import InsurancePage from "../pages/insurancePage";
import PaymentsPage from "../pages/paymentsPage";
import SecurityPage from "../pages/securityPage";
import CoursePAge from "../pages/courseRegistration";
import ExamsPage from "../pages/examsPage";
import Me from "../fotos/me.jpg";
import Cv from "../fotos/cv.jpg";
import Logout from "../fotos/output-icon.png";
import "./main.css";

export default function Main() {
  return (
    <div className="div-main">
      <nav className="navigation">
        <div className="divOne">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <span>/</span>
            <li>
              <a>Dashboard</a>
            </li>
            <span>/</span>
            <li>
              <a>Normal</a>
            </li>
          </ul>
        </div>
        <div className="divTwo">
          <ul>
            <li>
              <img src={Me} alt="me" className="imgIconME" />
              <p>Mr. Edward</p>
            </li>
            <li>
              <img src={Cv} alt="cv" className="imgIconCV" />
            </li>
            <li>
              <img src={Logout} alt="Logout" className="imgIconLogout" />
              <p>Log out</p>
            </li>
          </ul>
        </div>
      </nav>
      <p className="p">Active Academic Year : 2021/2022 - Semester II</p>
      <hr />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/insurance" element={<InsurancePage />} />
        <Route path="payments" element={<PaymentsPage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="CourseReg" element={<CoursePAge />} />
        <Route path="Exams" element={<ExamsPage />} />
      </Routes>
    </div>
  );
}
