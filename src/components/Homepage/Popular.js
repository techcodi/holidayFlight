import React from "react";
// import { useState } from "react";
import "./Popular.css";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";

const POPULAR = [
  {
    id: 1,
    image: "./MAtterhorn Suites Image.png",
    name: "Entire bongalow",
    city: "Matterhorn Suite",
    price: "$575 /night",
    rate: "4.6 (60 reviews)",
  },
  {
    id: 2,
    image: "./Discovery Shores Image.png",
    name: "2-Story beachfront suite",
    city: "Discovery Shores",
    price: "$360/night",
    rate: "4.8 (116 reviews)",
  },
  {
    id: 3,
    image: "Arctic Hut Image.png",
    name: "Single deluxe hut",
    city: "Arctic hut",
    price: "$420/night",
    rate: "4.7 (78 reviews)",
  },
  {
    id: 4,
    image: "./Lake Louise Image.png",
    name: "Deluxe king room",
    city: "Lake Louise Inn",
    price: "$244/night",
    rate: "4.6 (63 reviews)",
  },
];

const Popular = () => {
  return (
    <section>
      <div className="popular-container">
        <h2>Most Popular</h2>
        <div className="popularStay">
          {POPULAR.map((popular, id) => {
            return (
              <div className="popularCard" key={popular.id}>
                <img src={popular.image} alt="popular imags" />
                <small>
                  {popular.name}{" "}
                  <PlayCircleOutlineOutlinedIcon style={{ color: "#114f8b" }} />
                </small>
                <b>{popular.city}</b>
                <span>{popular.price}</span>
                <span className="price">
                  <StarOutlinedIcon style={{ color: "gold" }} />
                  {popular.rate}
                </span>
                <a href="/">MORE DETAILS</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
