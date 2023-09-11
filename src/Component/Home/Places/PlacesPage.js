import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Accountnav from "../Account/Accountnav";
import axios from "axios";
import PlaceImg from "./PlaceImg";

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <Accountnav></Accountnav>
      <div className="text-center mt-6">
        <Link
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
          to="/account/places/new"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new place
        </Link>
      </div>
      <div className="mt-4">
        {places.length > 0 &&
          places.map((place) => (
            <Link to={"/account/places/" + place._id} key={place._id}>
              <div className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
                <div className="w-32 max-w-[8rem] h-32 bg-gray-300 grow shrink-0">
                  <PlaceImg place={place} />
                </div>
                <div className="grow-0 shrink">
                  <h2 className="text-xl">{place.title}</h2>
                  <p className="text-sm mt-2">{place.description}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PlacesPage;
