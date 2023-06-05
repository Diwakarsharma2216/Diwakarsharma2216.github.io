import { Avatar, Image } from "@chakra-ui/react";

function HexagonProfilePic(props) {
  return (
    
    <Image
      name={props.name}
      src={props.src}
      className="home-img "
      css={{
        width: "350px",
        height: "350px",
        position: "relative",
        overflow: "hidden",
        borderRadius:"20px",
        borderRadius: "none",
        clipPath: "polygon(50% 0%, 91% 26%, 91% 74%, 50% 100%, 9% 74%, 9% 26%)",
        WebkitClipPath:
          "polygon(50% 0%, 91% 26%, 91% 74%, 50% 100%, 9% 74%, 9% 26%)",
        backgroundImage:
          "linear-gradient(to right, #caac15, #ff4e50, #f9d423)",
        // add vendor prefixes for Safari support
      }}
      
    />
  );
}

export default HexagonProfilePic;




// HexagonProfilePic