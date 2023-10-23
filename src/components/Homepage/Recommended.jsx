import React from "react";
import "./Recommend.css";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { useState } from "react";

const Recommended = () => {
  const data = [
    {
      id: 1,
      image: "./ParisImage.png",
      country: "Bali",
      price: "$899",
      code: "4DN3",
    },
    {
      id: 2,
      image: "./NorwayImage.png",
      country: "Swiss",
      price: "$900",
      code: "6DN5",
    },
    {
      id: 3,
      image: "./TuscanyImage.png",
      country: "Boracay",
      price: "$699",
      code: "5DN4",
    },
    {
      id: 4,
      image: "./GreeceImage.png",
      country: "Bali",
      price: "$899",
      code: "4DN3",
    },
  ];

  const datas = [
    {
      id: 1,
      image: "./Results Image (3).png",
      country: "Norway",
      price: "$899",
      code: "4DN3",
    },
    {
      id: 2,
      image: "./Results Image (1).png",
      country: "Swiss",
      price: "$900",
      code: "6DN5",
    },
    {
      id: 3,
      image: "./Results Image (2).png",
      country: "Atlanta",
      price: "$699",
      code: "5DN4",
    },
    {
      id: 4,
      image: "./Results Image (3).png",
      country: "Texas",
      price: "$899",
      code: "4DN3",
    },
  ];
  const [openHoliday, setOpenHoliday] = useState(false);
  return (
    <article>
      <div className="holiday_head">
        <h2>Recommended Holidays</h2>
        <span
          onClick={() => {
            setOpenHoliday(!openHoliday);
          }}
        >
          View all holidays <ArrowRightAltOutlinedIcon />
        </span>
      </div>
      {/*  */}
      <div className={`more-holiday  ${openHoliday ? "active" : null}`}>
        {datas.map((card) => {
          return (
            <div className="grid">
              <div className=" row-grid" key={card.id}>
                <img src={card.image} alt="loaction" />
                <div className="row-under">
                  <div className="row-left">
                    <span>{card.country}</span>
                    <small style={{ color: "#555", display: "block" }}>
                      {card.code}
                    </small>
                  </div>
                  <b
                    style={{
                      color: "#114f8b",
                      fontWeight: "bolder",
                      fontSize: "20px",
                    }}
                  >
                    {card.price}
                  </b>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/*  */}
      <div className="recommendedConatiner">
        {data.map((card) => {
          return (
            <div className="grid">
              <div className=" row-grid" key={card.id}>
                <img src={card.image} alt="vaction location" />
                <div className="row-under">
                  <div className="row-left">
                    <span>{card.country}</span>
                    <small style={{ color: "#555", display: "block" }}>
                      {card.code}
                    </small>
                  </div>
                  <b
                    style={{
                      color: "#114f8b",
                      fontWeight: "bolder",
                      fontSize: "20px",
                    }}
                  >
                    {card.price}
                  </b>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/*  */}
    </article>
  );
};

export default Recommended;
