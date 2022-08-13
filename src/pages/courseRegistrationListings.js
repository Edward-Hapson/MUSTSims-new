import "./courseRegistrationListings.css"
export default function CourseRegistrationListings(props){
    return(
        <div className="courseRegistrationListings">
            <ul>
                <li>{props.No}</li>
                <li>{props.CourseCode}</li>
                <li>{props.CourseName}</li>
                <li>{props.Unit}</li>
                <li>{props.Status}</li>
            </ul>
        </div>
    )
}