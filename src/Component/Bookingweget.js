import axios from "axios";
import { differenceInCalendarDays } from "date-fns";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useUserAuth } from "./Hook/userContext";

const Bookingweget = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [redirect, setRedirect] = useState("");
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const { user, ready } = useUserAuth();

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  async function bookthispage() {
    if (!ready) {
      return "loding";
    }
    if (ready && !user && !redirect) {
      return setRedirect(`/login`);
    }
    const response = await axios.post("/bookings", {
      checkIn,
      checkOut,
      name,
      phone: mobile,
      place,
      price: numberOfNights * place.price,
    });
    // const bookingId = response.data._id;

    setRedirect(`/account/bookings/${id}`);
  }

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((res) => {
      setPlace(res.data);
    });
  }, [id]);

  if (!place) return "";

  if (redirect) {
    return <Navigate to={redirect}></Navigate>;
  }
  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">Price: {place.price}</div>
      <div className="my-4 bg-gray-200">
        <label>Check in:</label>
        <input
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          type="date"
        />
      </div>
      <div className="my-4 bg-gray-200">
        <label>Check out:</label>
        <input
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          type="date"
        />
      </div>

      {numberOfNights > 0 && (
        <div className="my-4 bg-gray-200">
          <label>Your Full Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <label>Phone Number:</label>
          <input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            type="number"
          />
        </div>
      )}
      <button onClick={bookthispage} className="primary mt-4">
        Book this place
        {numberOfNights > 0 && <span>{numberOfNights * place.price} </span>}
      </button>
    </div>
  );
};

export default Bookingweget;
