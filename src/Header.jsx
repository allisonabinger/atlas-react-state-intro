import logo from "./assets/logo.png";
import { useContext } from "react";
import { CourseContext } from "./CourseContext";

export default function Header() {
  const { enrolledCourses } = useContext(CourseContext);
  const totalCourses = enrolledCourses.length
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="enrollment">
        Classes Enrolled: {totalCourses}
      </div>
    </div>
  );
}
