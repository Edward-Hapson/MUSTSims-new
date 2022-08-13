import mustLogo from "../fotos/mustlogo.jpg";
import listIcon from "../fotos/listicon.png";
import "./header.css";
export default function Header(){
    return(
    <div className="header--div">
        <img src={mustLogo} alt="mustlogo" className="mustlogo"/>
           <div className="header--words">
             <h1>MBEYA UNIVERSITY OF SCIENCE AND TECHNOLOGY</h1>
             <p>STUDENTS INFOMATION MANAGEMENT SYSTEM {"{ SIMS }"}</p>
             </div>
             <button className="listIcon--btn">
                 <img src={listIcon} alt="listIcon" />
             </button>
    </div>      
    )
}