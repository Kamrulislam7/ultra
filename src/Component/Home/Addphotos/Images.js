import React from "react";

const Images = ({ src, ...rest }) => {
  src =
    src && src.includes("https://")
      ? src
      : process.env.REACT_APP_API__URL + "/uploads/" + src;
  return <img {...rest} src={src} alt="" />;
};

export default Images;
