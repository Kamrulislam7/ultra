import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "../Places/PlacesPage";
import Accountnav from "./Accountnav";
import { useUserAuth } from "../../Hook/userContext";

const Account = () => {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useUserAuth();
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "loding";
  }
  if (ready && !user && !redirect) {
    return <Navigate to={"/login"}></Navigate>;
  }

  if (redirect) {
    return <Navigate to={redirect}></Navigate>;
  }
  return (
    <div>
      <Accountnav></Accountnav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Looged in as {user.name} ({user.email}) <br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacesPage></PlacesPage>}
    </div>
  );
};

export default Account;
