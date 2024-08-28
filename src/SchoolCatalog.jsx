import { useEffect, useState } from "react";

function SchoolCatalog() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("../api/courses.json")
      .then((response) => response.json())
      .then((courses) => setCourses(courses));
  });

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <input type="text" placeholder="Search" />
      <table>
        <thead>
          <tr>
            <th>Trimester</th>
            <th>Course Number</th>
            <th>Courses Name</th>
            <th>Semester Credits</th>
            <th>Total Clock Hours</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.Number}>
              <td className="courseTimester">{course.trimester}</td>
              <td className="courseNumber">{course.courseNumber}</td>
              <td className="courseName">{course.courseName}</td>
              <td className="courseCredits">{course.semesterCredits}</td>
              <td className="courseHours">{course.totalClockHours}</td>
              <td>
                <button>Enroll</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default SchoolCatalog;
