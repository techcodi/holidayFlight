import React from "react";
import "./Search.css";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";

const SEARCH = [
  {
    id: 1,
    image: "./Results Image (1).png",
    name: "1 king bed standar",
    city: "Holiday Inn Expre...",
    price: "$575 /night",
    rate: "4.6 (60 reviews)",
  },
  {
    id: 2,
    image: "./Results Image.png",
    name: "2-Story beachfront ",
    city: "Discovery Shores...",
    price: "$360/night",
    rate: "4.8 (116 reviews)",
  },
  {
    id: 3,
    image: "./Results Image (3).png",
    name: "1 king City view",
    city: "The Westin Bonav...",
    price: "$420/night",
    rate: "4.7 (78 reviews)",
  },
  {
    id: 4,
    image: "././Results Image (2).png",
    name: "Deluxe king",
    city: "The Ritz-Carlton, L..",
    price: "$244/night",
    rate: "4.6 (63 reviews)",
  },
];
const SeachHome = () => {
  return (
    <div className="seach_page">
      <div className="seach_blue_head">
        <div className="search-h2">
          <h2>Stays here in Los Angeles</h2>
        </div>
        <span>Recommended</span>
        <span>Price</span>
        <span>Rating</span>
      </div>
      <div className="search_results">
        <div className="s-result-left">
          {SEARCH.map((search, id) => {
            return (
              <div className="div_result" key={id}>
                <img src={search.image} alt="secrch result" />
                <div className="result-details">
                  <small>
                    {search.name}{" "}
                    <PlayCircleOutlineOutlinedIcon
                      style={{ color: "#114f8b" }}
                    />{" "}
                  </small>
                  <b>{search.city}</b>
                  <p className="result-rate">
                    {" "}
                    <StarOutlinedIcon style={{ color: "gold" }} />
                    {search.rate}{" "}
                  </p>
                  <b>{search.price}</b>
                  <a href="/">View More</a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="s-result-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.0442094317!2d-118.74139651076395!3d34.020608447245856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1697556738442!5m2!1sen!2sng"
            title="map"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/*  */}

      <section className="sectionNews">
        <div className="newPack">
          <div className="news-container">
            <p>Subscribe to our news letter</p>
            <h5>Get weekly updates</h5>
            <form className="news-form">
              <label>Fill in your details to join the party ! </label> <br />
              <input type="name" placeholder=" Your name" required /> <br />
              <input type="email" placeholder="email" required /> <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeachHome;
