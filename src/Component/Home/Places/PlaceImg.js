import React from "react";
import Images from "../Addphotos/Images";

const PlaceImg = ({ place, index = 0, className = null }) => {
  if (!place?.photos?.length) {
    return "";
  }
  if (!className) {
    className = "object-cover";
  }
  return <Images className={className} src={place.photos[index]} alt="" />;
};

export default PlaceImg;
