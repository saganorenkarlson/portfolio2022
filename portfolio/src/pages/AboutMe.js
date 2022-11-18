import { motion } from "framer-motion";
import { GoBackButton } from "../components/GoBackButton";
import "../css/AboutMe.css";

const AboutMe = () => {
  const courseList = [
    "Interaction Programming (First cycle course in app development)",
    "Software Testing",
    "Network Programming and Security",
    "Machine Learning for Social Media",
    "Complex networks and big data",
  ];

  return (
    <motion.div
      className="page-container"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "1200px", opacity: 1 }}
      exit={{ width: 0, opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="heading">
        <GoBackButton />
        <p className="page-title">About me</p>
      </div>
      <div className="content-container">
        <div className="about-me-text-container">
          <p>
            ontrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <p className="small-title">Courses I'm taking in my masters degree</p>
          <div className="courses">
            <ul>
              {courseList.map((course) => (
                <li className="course">{course}</li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src={require("./saga.png")}
          className="image-saga"
          alt="Saga"
          width="auto"
          height="500px"
        />
      </div>
    </motion.div>
  );
};

export default AboutMe;
