import React from "react";

export const Courses = () => {
  const courseList = [
    "Interaction Programming (First cycle course in app development)",
    "Software Testing",
    "Network Programming and Security",
    "Machine Learning for Social Media",
    "Complex networks and big data",
  ];
  return (
    <>
      <p className="small-title">
        Courses I'm taking in my masters degree this autumn
      </p>
      <div className="courses">
        <ul>
          {courseList.map((course) => (
            <li className="course">{course}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
