import React, { useEffect, useState } from "react";
import Perks from "../Perks/Perks";
import axios from "axios";
import Addphotos from "../Addphotos/Addphotos";
import Accountnav from "../Account/Accountnav";
import { Navigate, useParams } from "react-router-dom";

const Placesfrom = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhoto, setAddedPhoto] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirect, setRedirect] = useState(false);
  const [price, setPrice] = useState(100);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/places/" + id).then((res) => {
      const { data } = res;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhoto(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
    });
  }, [id]);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }
  async function savePlace(e) {
    e.preventDefault();
    const placeData = {
      title,
      address,
      addedPhoto,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    };
    if (id) {
      await axios.put("/places", {
        id,
        ...placeData,
      });
      setRedirect(true);
    } else {
      await axios.post("/places", placeData);
      setRedirect(true);
    }
  }
  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      <Accountnav></Accountnav>
      <form onSubmit={savePlace}>
        {preInput("Tittle", "Title for your place .Should be short")}

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title , for example: My lovely apt"
        />
        {preInput("Address", "Address to place")}

        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="address"
        />
        {preInput("Photos", "more = better")}
        <Addphotos addedPhoto={addedPhoto} onChange={setAddedPhoto}></Addphotos>
        {preInput("Description", "Description")}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {preInput("perks", "select all the perkes")}
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <Perks selected={perks} onChange={setPerks}></Perks>
        </div>
        {preInput("Extra info", "hous rules etc")}

        <textarea
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
        ></textarea>
        {preInput("Check in & out", "add check in & out")}

        <div className="grid grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 mb-1">Bedrooms</h3>
            <input
              type="text"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              placeholder="1"
            />
          </div>
          <div>
            <h3 className="mt-2 mb-1">Bath</h3>
            <input
              type="text"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              placeholder="1"
            />
          </div>
          <div>
            <h3 className="mt-2 mb-1">Max number of guest</h3>
            <input
              type="number"
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2 mb-1">Price per Night</h3>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
};

export default Placesfrom;
