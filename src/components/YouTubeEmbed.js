import {React,useState} from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => {

const [isLoading, setIsLoading] = useState(true);

return(
  <div className="video-responsive">
    {isLoading ? <div style={{backgroundColor: "#F2F2F2", height:"30rem", width:"100%"}}></div> : null}  <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      onLoad={() => setIsLoading(false)}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />

    
   
  </div>);
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;