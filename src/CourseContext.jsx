import { createContext, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    
    if (!enrolledCourses.some((enrolled) => enrolled.courseNumber === course.courseNumber)) {
        setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const dropCourse = (courseNumber) => {
    setEnrolledCourses(
      enrolledCourses.filter((course) => course.courseNumber !== courseNumber)
    );
  };

  return (
    <CourseContext.Provider
      value={{ enrolledCourses, enrollCourse, dropCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};
