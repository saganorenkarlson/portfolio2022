import "../css/Home.css";
import { motion } from "framer-motion";
import { HomeLinks } from "../components/HomeLinks";
import { useEffect, useState } from "react";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 600;

  return (
    <motion.div
      className="home-container"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: "1" }}
      exit={{ x: "-100%", transition: { duration: 0.2 } }}
    >
      <div className="home-content-container">
        <p className="my-name">Hi my name is Saga Norén Karlson</p>
        <h1 className="my-studies">
          I am a 4th year M.Sc student in Media Technology and Engineering
        </h1>
        <p className="my-goal">
          This summer I am looking for an internship. More specifically, I am
          looking for a place to practice my passion for programming and my
          passion for learning more about it. I believe that getting an insight
          into a company and its processes is a valuable addition to my studies.
        </p>
        <p className="learn-more">Learn more</p>
        <HomeLinks isMobile={isMobile}/>
      </div>
      <img
        src={width < 1200 ? require("../images/saga-home-mobile.jpg") : require("../images/saga-home.jpg")}
        className={"image-saga-home"}
        alt="Saga"
        width="auto"
        height="565px"  
      />
    </motion.div>
  );
};

export default Home;
