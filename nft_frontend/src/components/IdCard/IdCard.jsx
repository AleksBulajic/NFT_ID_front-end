import React, { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./idcard.css";
import { AuthContext } from "../../auth/AuthContextComponent";
import VanillaTilt from 'vanilla-tilt';


const IdCard = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const tiltRef = useRef();
  const [identity, setIdentity] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const tiltNode = tiltRef.current;
      VanillaTilt.init(tiltNode, {
      max: 30,
      speed: 200,
      glare: true,
      "max-glare": 0.5,
    });
    return () => tiltNode.vanillaTilt.destroy();
  }, []);


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

 
  return (
    <div
    ref={tiltRef}
      className="idCard rgb"
    >
      {identity && (
        <>
          
          <div className="id-card-content">
            <img
            className="idCard-image"
              src={identity.photo}
              alt={`${identity.first_name} ${identity.last_name}`}
            />
            <div className="idCard-content">
              <p className="idCard-name">{`${identity.first_name} ${identity.last_name}`}</p>
              <p className="idCard-dob">{identity.date_of_birth}</p>
              <p className="idCard-country">{identity.country}</p>
              <p className="idCard-eyeColor">{identity.eye_color}</p>
              <p className="idCard-description">{identity.description}</p>
            </div>
          </div>
        </>
      )
      }
    </div>
  );
};

export default IdCard;
