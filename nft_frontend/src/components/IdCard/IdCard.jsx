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
          `https://project4nft-a334719477d5.herokuapp.com/api/identity/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        response.data.map((data) => {
          if (data.user === user.id) {
            setIdentity(data);
          }
          console.log("this is data.user", data.user)
        });
        

        console.log("identity:");
        console.log(identity);

        console.log("identity response:", response.data);
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
      className="idCard rgb"
      style={props}
      onMouseEnter={() => set({ scale: 1.2 })}
      onMouseLeave={() => set({ scale: 1 })}
    >
      {identity && (
        <>
          
          <div className="id-card-content">
            <img
            className="idCard-image"
              src={identity.photo}
              alt={`${identity.first_name} ${identity.last_name}`}
            />
            <div className="idCard-content"></div>
            <p className="idCard-name">{`${identity.first_name} ${identity.last_name}`}</p>
            <p className="idCard-description">{identity.description}</p>
            <p className="idCard-country">{identity.country}</p>
            <p className="idCard-dob">{identity.date_of_birth}</p>
            <p className="idCard-eyeColor">{identity.eye_color}</p>
          </div>
        </>
      )}
    </animated.div>
  );
};

export default IdCard;
