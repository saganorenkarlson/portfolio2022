import { motion } from "framer-motion";
import { GoBackButton } from "../components/GoBackButton";
import "../css/AboutMe.css";
import { Contacts } from "../components/Contacts";
import { Courses } from "../components/Courses";

const AboutMe = () => {
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
            I thrive on problem-solving and analytical thinking, and I know 
            that my loyalty and attitude have been appreciated by previous 
            employers. In addition, I am reliable and results-oriented in my 
            professional role, and I am driven by being an important part of 
            the team.
            <br />
            <br />
            Besides learning from my studies, I also enjoy searching for
            knowledge in my spare time. Especially this year, I have been looking
            more into web programming and doing my own projects, for example
            this simple website. My goal is now to fill out the Projects page
            with my own projects.
          </p>
          <Courses />
          <Contacts />
        </div>
        <img
          src={require("../images/saga-aboutme.png")}
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
