import "./dashboardPage.css"
import DashboardPage from "./dashboardPage";
export default function DashboardPageListings(props){
    return(
        <div className="div-Listings">
            <ul>
                <li>{props.level}</li>
                <li>{props.examsType}</li>
                <li>{props.date}</li>
            </ul>
        </div>
    )
}