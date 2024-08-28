import { useEffect, useState } from "react";

function SchoolCatalog() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("trimester");
  const [sortDirection, setSortDirection] = useState("asc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [showAll, setShowAll] = useState(false);

  // fetches courses from courses.json
  useEffect(() => {
    fetch("../api/courses.json")
      .then((response) => response.json())
      .then((courses) => setCourses(courses));
  }, []);

  // update searchTerm state
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // updates sortDirection state
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
    if (!showAll) {
      setPageSize(sortedCourses.length);
    } else {
      setPageSize(5);
    }
  };

  // filters courses (case insensitive) using searchTerm
  const filteredCourses = courses.filter((course) => {
    const courseNumberMatch = course.courseNumber
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const courseNameMatch = course.courseName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return courseNumberMatch || courseNameMatch;
  });

  // sorts courses based on value in header clicked
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    let comparison = 0;

    if (sortColumn === "trimester") {
      comparison = Number(a.trimester) - Number(b.trimester);
    }
    if (sortColumn === "courseNumber") {
      comparison = a.courseNumber.localeCompare(b.courseNumber);
    }
    if (sortColumn === "courseName") {
      comparison = a.courseName.localeCompare(b.courseName);
    }
    if (sortColumn === "semesterCredits") {
      comparison = Number(a.semesterCredits) - Number(b.semesterCredits);
    }
    if (sortColumn === "totalClockHours") {
      comparison = Number(a.totalClockHours) - Number(b.totalClockHours);
    }
    return sortDirection === "asc" ? comparison : -comparison;
  });

  // paginates data
  const currentPage = sortedCourses.slice(
    (page - 1) * pageSize,
    page * pageSize
  );
  const hasMore = sortedCourses.length > page * pageSize;
  const hasLess = page > 1;

  // Rendered HTML
  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <div className="search-show">
        <input
          type="text"
          placeholder="Search by Name or Course Number"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={handleShowAll} className="showAll">
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th
              className="header-trimester"
              onClick={() => handleSort("trimester")}
            >
              Trimester{" "}
              {sortColumn === "trimester" &&
                (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="header-number"
              onClick={() => handleSort("courseNumber")}
            >
              Course Number{" "}
              {sortColumn === "courseNumber" &&
                (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="header-name"
              onClick={() => handleSort("courseName")}
            >
              Course Name{" "}
              {sortColumn === "courseName" &&
                (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="header-credits"
              onClick={() => handleSort("semesterCredits")}
            >
              Semester Credits{" "}
              {sortColumn === "semesterCredits" &&
                (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="header-hours"
              onClick={() => handleSort("totalClockHours")}
            >
              Total Clock Hours{" "}
              {sortColumn === "totalClockHours" &&
                (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th className="header">Enroll</th>
          </tr>
        </thead>
        <tbody>
          {currentPage.map((course) => (
            <tr key={course.courseNumber}>
              <td className="course-trimester">{course.trimester}</td>
              <td className="course-number">{course.courseNumber}</td>
              <td className="course-name">{course.courseName}</td>
              <td className="course-credits">{course.semesterCredits}</td>
              <td className="course-hours">{course.totalClockHours}</td>
              <td>
                <button>Enroll</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button disabled={!hasLess} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button disabled={!hasMore} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default SchoolCatalog;
