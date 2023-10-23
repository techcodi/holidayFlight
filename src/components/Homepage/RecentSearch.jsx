import React from "react";
import "./Recent.css";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import { Icon } from "@iconify/react";
import planeIcon from "@iconify/icons-bxs/plane";
import BedIcon from "@mui/icons-material/Bed";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import RestaurantSharpIcon from "@mui/icons-material/RestaurantSharp";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";

const RecentSearch = () => {
  return (
    <section>
      <div className="recent_container">
        <b>Recent search</b>
        <div className="flex flight-div">
          {/*  */}
          <div className="flight-first">
            <div className="flex flight-icon">
              <big>SIN</big>
              <div className="flex flex-dash">
                <span className="flex flex-dash">
                  {" "}
                  <FiberManualRecordOutlinedIcon className="icon" />
                  ---
                </span>
                <Icon icon={planeIcon} color="blue" height="24" rotate={1} />
                <span className="flex flex-dash">
                  {" "}
                  ---
                  <FiberManualRecordOutlinedIcon className="icon" />
                </span>
              </div>
              <big>LAX</big>
            </div>
            <div className="date-flight">
              <span className="f-depart">Depart On :</span>{" "}
              <small>7 Sep 2023</small>
            </div>
          </div>

          {/*  */}
          <div className="flight-first">
            <div className="flex flight-icon">
              <big>MY</big>
              <div className="flex flex-dash">
                <span className="flex flex-dash">
                  {" "}
                  <FiberManualRecordOutlinedIcon className="icon" />
                  ---
                </span>
                <Icon icon={planeIcon} color="blue" height="24" rotate={1} />
                <span className="flex flex-dash">
                  {" "}
                  ---
                  <FiberManualRecordOutlinedIcon className="icon" />
                </span>
              </div>
              <big>DUB</big>
            </div>
            <div className="date-flight">
              <span className="f-depart">Depart On :</span>{" "}
              <small>7 Sep 2023</small>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="traveling-icons">
        <div className="icon1">
          <span>
            <BedIcon
              style={{
                backgroundColor: "#F9668D",
                fontSize: " 50px ",
                borderRadius: "5px",
              }}
            />
          </span>
          <small>Hotel</small>
        </div>
        <div className="icon1">
          <span>
            <BoltRoundedIcon
              style={{
                backgroundColor: "#FF9B53",
                fontSize: " 50px ",
                borderRadius: "5px",
              }}
            />
          </span>
          <small>Hotel</small>
        </div>
        <div className="icon1">
          <span>
            <RestaurantSharpIcon
              style={{
                backgroundColor: "#36DA76",
                fontSize: " 50px ",
                borderRadius: "5px",
              }}
            />
          </span>
          <small>Hotel</small>
        </div>
        <div className="icon1">
          <span>
            <DirectionsBusIcon
              style={{
                backgroundColor: "#FDBF00",
                fontSize: " 50px ",
                borderRadius: "5px",
              }}
            />
          </span>
          <small>Commute</small>
        </div>

        <div className="icon1">
          <span>
            <DirectionsCarIcon
              style={{
                backgroundColor: "#4DABFF",
                fontSize: " 50px ",
                borderRadius: "5px",
              }}
            />
          </span>
          <small>Taxi</small>
        </div>
        <div className="icon1">
          <span>
            <MovieFilterOutlinedIcon
              className="h"
              style={{
                backgroundColor: "green",
                fontSize: " 50px ",
                borderRadius: "5px",
              }}
            />
          </span>
          <small>Movies</small>
        </div>
      </div>
    </section>
  );
};

export default RecentSearch;
