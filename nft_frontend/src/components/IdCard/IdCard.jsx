import React, { useContext, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./idcard.css";
import { AuthContext } from "../../auth/AuthContextComponent";

const IdCard = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [identity, setIdentity] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    console.log("user.id:", user.id);
    const fetchIdentity = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/identity/${user.id}`,
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("identity response:", response.data);
        setIdentity(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIdentity();
  }, [id]);

  const [props, set] = useSpring(() => ({
    scale: 1,
  }));

  return (
    <animated.div
      className="idCard"
      style={props}
      onMouseEnter={() => set({ scale: 1.2 })}
      onMouseLeave={() => set({ scale: 1 })}
    >
      {identity && (
        <>
          <h2>
            {identity.firstName} {identity.lastName}
          </h2>
          <div className="id-card-content">
            <img
              src={identity.photo}
              alt={`${identity.firstName} ${identity.lastName}`}
            />
            <p>{identity.description}</p>
            <p>{identity.address}</p>
            <p>{identity.country}</p>
            <p>{identity.dateOfBirth}</p>
            <p>{identity.eyeColor}</p>
          </div>
        </>
      )}
    </animated.div>
  );
};

export default IdCard;
