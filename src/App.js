import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Component/Home/Login/Login";
import Home from "./Component/Home/Home";
import Body from "./Component/Home/Body/Body";
import Register from "./Component/Home/Register/Register";
import axios from "axios";
import { UserAuthContextProvider } from "./Component/Hook/userContext";
import Account from "./Component/Home/Account/Account";
import PlacesPage from "./Component/Home/Places/PlacesPage";
import Booking from "./Component/Home/Booking/Booking";
import Placesfrom from "./Component/Home/Places/Placesfrom";
import PlacePage from "./Component/Home/PlacePage";
import BookingPage from "./Component/Home/BookingPage";

axios.defaults.baseURL = process.env.REACT_APP_API__URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            <Route index element={<Body></Body>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>

            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/account" element={<Account></Account>}></Route>
            <Route
              path="/account/places"
              element={<PlacesPage></PlacesPage>}
            ></Route>
            <Route
              path="/account/places/new"
              element={<Placesfrom></Placesfrom>}
            ></Route>
            <Route
              path="/account/places/:id"
              element={<Placesfrom></Placesfrom>}
            ></Route>
            <Route path="/places/:id" element={<PlacePage></PlacePage>}></Route>

            <Route
              path="/account/bookings"
              element={<Booking></Booking>}
            ></Route>
            <Route
              path="/account/bookings/:id"
              element={<BookingPage></BookingPage>}
            ></Route>
          </Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
