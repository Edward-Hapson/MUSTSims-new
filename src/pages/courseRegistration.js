import "./courseRegistration.css";
import CourseRegistrationListings from "./courseRegistrationListings";
export default function CoursePAge() {
  return (
    <div className="courseRegistration">
      <div className="upperr__div">
        <p>Course registration closed</p>
      </div>
      <div className="lowerr__div">
        <p>Course Registration/Enrollment</p>

        <p>
          CORE {"&"} FUNDAMENTAL COURSES :: ACADEMIC YEAR 2021/2022-Semester II{" "}
        </p>
        <div className="Ul__div">
          <ul className="Ul__div__ul">
            <li className="Ul__div__ul__li">S/No</li>
            <li className="Ul__div__ul__li">Course Code</li>
            <li className="Ul__div__ul__li">Course Name</li>
            <li className="Ul__div__ul__li">Unit</li>
            <li className="Ul__div__ul__li">Status</li>
          </ul>
          <div>
            <CourseRegistrationListings
              No="1"
              CourseCode="EE 6274"
              CourseName="Electrical Circuits Analysis"
              Status="Core"
              Unit="6"
            />

          </div>
        </div>
      </div>
    </div>
  );
}
