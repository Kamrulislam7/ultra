import React from "react";
import Images from "./Addphotos/Images";

const Placesphoto = (place, index = 0) => {
  if (!place.photos?.length) {
    return "";
  }
  return <Images src={place.photos[index]} alt="" />;
};

export default Placesphoto;
