import axios from "axios";
import React, { useEffect, useState } from "react";
import Accountnav from "../Account/Accountnav";
import Images from "../Addphotos/Images";

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("/bookings").then((res) => {
      setBookings(res.data);
    });
  }, []);
  return (
    <div>
      <Accountnav></Accountnav>
      <div>
        <div></div>
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <div className="flex mt-4" key={booking._id}>
              {booking.place?.photos?.[0] && (
                <div className="w-32 max-w-[8rem] h-32 bg-gray-300 grow shrink-0">
                  <Images src={booking?.place?.photos[0]} alt="" />
                </div>
              )}
              <div className="ml-8 mr-24">
                <br />
                Name: {booking.name} <br />
                <span className="text-sm ">
                  Phone : {booking.phone} <br />
                  Price: {booking.price} <br />
                  Date: {booking.checkIn} - {booking.checkOut}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Booking;
