import YoutubeEmbed from "./YouTubeEmbed";

const Project = ({ title, description, skills, embededvideo, image }) => (
  <div className="project">
    <h2 className="project-title">{title} </h2>
    <p className="project-description">{description}</p>
    <p className="skills"> Skills: &emsp; {skills}</p>
    {embededvideo ? (
      <div className="embeded-video">
        <YoutubeEmbed embedId={embededvideo} />
      </div>
    ) : (
      <div style={{ backgroundImage: `url(${image})` }} className="image"></div>
    )}
  </div>
);

export default Project;
