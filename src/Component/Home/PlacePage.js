import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bookingweget from "../Bookingweget";
import Images from "./Addphotos/Images";
const PlacePage = () => {
  const { id } = useParams();
  const [showAllphotos, setShowallPhotps] = useState(false);
  const [place, setPlace] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((res) => {
      setPlace(res.data);
    });
  }, [id]);
  if (!place) return "";

  if (showAllphotos) {
    return (
      <div className="absolute inset-0 bg-white  min-h-screen">
        <div className="p-8 grid gap-4">
          <div>
            <h2 className="text-3xl text-center mb-10">
              Photo of : {place.title}
            </h2>
            <button
              onClick={() => setShowallPhotps(false)}
              className="flex gap-1 py-2 px-4 rounded-2xl fixed shadow shadow-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  filRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  cliRule="evenodd"
                />
              </svg>
              Close photos
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div className="container-[700px] mx-auto">
                <Images src={photo} alt="" />
              </div>
            ))}
        </div>
      </div>
    );
  }
  return (
    <div className=" mt-4 bg-gray-100 -mx-8 px-8 py-8 container mx-auto">
      <h1 className="text-3xl">{place.title}</h1>
      <a
        className="block font-semibold underline my-2"
        href={"https://www.google.com/maps/?q=" + place.address}
      >
        {place.address}
      </a>
      <div className="relative max-h-[400px]">
        <div className="grid gap-2 grid-cols-[512px_1fr_1fr] ">
          <div>
            {place.photos?.[0] && (
              <div className="aspect-square object-cover">
                <Images src={place.photos[0]} alt="" />
              </div>
            )}
          </div>

          <div className="grid gap-y-2 grid-rows-[187px_187px] ">
            <div className="overflow-hidden">
              {place.photos?.[1] && (
                <Images
                  className="aspect-square object-cover"
                  src={place.photos[1]}
                  alt=""
                />
              )}
            </div>
            <div className="overflow-hidden">
              {place.photos?.[2] && (
                <Images
                  className="aspect-square object-cover relative "
                  src={place.photos[2]}
                  alt=""
                />
              )}
            </div>
          </div>

          <div className="grid gap-y-2 grid-rows-[187px_187px] ">
            <div className="overflow-hidden">
              {place.photos?.[1] && (
                <Images
                  className="aspect-square object-cover"
                  src={place.photos[3]}
                  alt=""
                />
              )}
            </div>
            <div className="overflow-hidden">
              {place.photos?.[2] && (
                <Images
                  className="aspect-square object-cover relative"
                  src={place.photos[4]}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowallPhotps(true)}
          className=" flex gap-1 absolute bottom-10 right-4 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
              clip-rule="evenodd"
            />
          </svg>
          Show more photos
        </button>
      </div>

      <div className="grid grid-cols-2 mt-10 gap-x-4">
        <div>
          <div className="mr-20 ">
            <h2>Description</h2>
            {place.description}
          </div>
          <div>
            Bedrooms:{place.checkIn} <br />
            Bath:{place.checkOut} <br />
            Max number of guests:{place.maxGuests}
          </div>
        </div>
        <Bookingweget></Bookingweget>
      </div>
    </div>
  );
};

export default PlacePage;
