import React from "react";
import { Link, useParams } from "react-router-dom";

const BookingPage = () => {
  const { id } = useParams();

  return (
    <div className="text-center mt-20">
      <h1>
        Your Booking Done. Your Booking ID :{" "}
        <span className="text-red-700">{id}</span>
      </h1>
      <h3>
        Show your id in Our reception.{" "}
        <span className="text-green-600 text-lg">Payment </span> Online Cooming
        soon!!!!!!
      </h3>
      <button className="mt-10">
        <Link className="bg-amber-500 p-3" to="/account/bookings">
          See Your Booking Info
        </Link>
      </button>
    </div>
  );
};

export default BookingPage;
