import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const data = [
    {
      name: "Premium",
      description: "4K + HDR",
      button: "Subscribe",
    },
    {
      name: "Basic",
      description: "720p",
      button: "Subscribe",
    },
    {
      name: "Standard",
      description: "1080p",
      button: "Subscribe",
    },
  ];

  const history = useHistory(false);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              {data.map((d) => (
                <div className="planScreen_plan">
                  <div className="planScreen_info">
                    <h5>{d.name}</h5>
                    <h6>{d.description}</h6>
                  </div>
                  <button
                    className="planScreen_button"
                    onClick={() => history.push("/")}
                  >
                    {d.button}
                  </button>
                </div>
              ))}
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
