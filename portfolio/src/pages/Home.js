import "../css/Home.css";
import { motion } from "framer-motion";
import { HomeLinks } from "../components/HomeLinks";

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ x: "-100%", opacity: 0, }}
      animate={{ x: 0, opacity: "1", }}
      exit={{ x: "-100%", transition: { duration: 0.2 } }}
    >
      <div className="home-content-container">
        <p className="my-name">Hi my name is Saga Norén Karlson</p>
        <h1 className="my-studies">
          I am a 4th year M.Sc student in Media Technology and Engineering
        </h1>
        <p className="my-goal">
          And I am looking for a summer internship. More specifically, I am looking
          for a place to practice my passion for programming and my passion for 
          learning more about it. I believe that getting an insight in a company and
          its processes is a valuable experience that will make me a better engineer.
        </p>
        <p className="learn-more">Learn more</p>
        <HomeLinks />
      </div>
      <img
          src={require("./saga-home.jpg")}
          className="image-saga-home"
          alt="Saga"
          width="auto"
          height="600px"
        />
    </motion.div>
  );
};

export default Home;
