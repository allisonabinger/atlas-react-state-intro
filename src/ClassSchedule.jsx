import { useContext } from "react";
import { CourseContext } from "./CourseContext";

export default function ClassSchedule() {
  // uses course context for warning
  const { enrolledCourses, dropCourse } = useContext(CourseContext);

  return (
    <div className="class-schedule">
      <h1>Class Schedule</h1>
      <div
        className="warning"
        style={enrolledCourses.length >= 5 ? {} : { display: "none" }}
      >
        Careful! Too many classes may lead to burn-out!
      </div>
      <table>
        <thead>
          <tr>
            <th>Course Number</th>
            <th>Course Name</th>
            <th>Drop</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.map((course) => (
            <tr key={course.courseNumber}>
              <td>{course.courseNumber}</td>
              <td>{course.courseName}</td>
              <td>
                <button onClick={() => dropCourse(course.courseNumber)}>
                  Drop
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
