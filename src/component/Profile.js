import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import profileimage from "../images/profileimage.png";

function Profile(props) {
  const [data, setData] = useState({});

  const userDetails = () => {
    axios
      .get("https://indapi.kumba.io/webdev/assignment")
      .then((response) => {
        console.log(response.data);
        console.log(response.data.user);
        setData(response.data.user);
      })
      .catch((e) => console.log("something went wrong :(", e));
  };

  useEffect(() => {
    userDetails();
  }, []);
  return (
    <div className="container">
      {data && (
        <div className="profile-info">
          <div className="image-div">
            <img src={profileimage} alt="Profile Image" />
          </div>
          <div className="profile-text">
          <p>Name: {data.name}</p>
          <p>id: {data.id}</p>
          <p>Address: {data.address}</p>
          <p>Phone: {data.phone}</p>
          <p>About: {data.about}</p>
          <p>likes: {data.likes}</p>
          <p>Dislike: {data.dislikes}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Profile;
