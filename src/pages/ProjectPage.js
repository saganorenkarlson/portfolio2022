import Project from "../components/Project";
import "../css/ProjectPage.css";
import { motion } from "framer-motion";
import { GoBackButton } from "../components/GoBackButton";
import fulvin from "../images/fulvin.png";
import angrybirds from "../images/angrybirds.png";

const ProjectPage = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "1200px", opacity: 1 }}
      exit={{ width: 0, opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="heading">
        <GoBackButton />
        <p className="page-title">Projects</p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            skills={project.skills}
            image={project.image}
            embededvideo={project.embededvideo}
          />
        ))}
      </div>
    </motion.div>
  );
};

let projects = [
  {
    title: "Bachelor project",
    description:
      "In a team of five, we developed a web tool to help master students choose courses which meet the degree requirements. The tool was developed in .NET with C# and REACT.js and I worked mainly with backend and the implementation of saving/updating profiles of chosen courses. Look at the demo below.",
    skills: "REACT.js | .NET | git | scrum",
    image: null,
    embededvideo: "vDYjw798b_k",
  },
  {
    title: "Website adapted for mobile users",
    description:
      "In the course Communication and User Interfaces TNM040, me and three other students developed a mobile-adapted website for wine brewing that helps you calculate quantities and keep track of all steps that has to be done. See the pictures below.",
    skills: "REACT.js",
    image: fulvin,
    embededvideo: null,
  },
  {
    title: "Modelling project",
    description:
      "In the course Modelling Project TNM085, together with three other students, I developed a simplified version of the game Angry Birds. We calculated the bird's trajectory before and after collision with an object, simulated it in Matlab and then visualized it with JavaScript and the library Two.js. A picture of the game is displayed below but the project's main focus was on the physical calculations.",
    skills: "Javascript | Matlab",
    image: angrybirds,
    embededvideo: null,
  },
];

export default ProjectPage;
