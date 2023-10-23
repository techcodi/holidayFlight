import React from "react";
import Popular from "./Popular";
import RecentSearch from "./RecentSearch";
import Recommended from "./Recommended";
import "./News.css";
const AllHomepage = () => {
  return (
    <div>
      <main>
        <div className="main-container">
          <h2>Let’s explore & travel the world</h2>
          <p>Find the best destinations and the most popular stays!</p>
          <div className="main-form-colunm">
            <div className="main-form">
              <div className="flex main-flex">
                <b>SEARCH FLIGHTS</b>
                <div className="flex radion-container">
                  <div className="flex radio-div">
                    <small>RETURN</small>
                    <input type="radio" />
                  </div>
                  {/*  */}
                  <div className="flex radio-div">
                    <small>One-Way</small>
                    <input type="radio" />
                  </div>
                </div>
              </div>
              <div className="main-grid">
                <div className="grid-input">
                  <input type="text" required placeholder=" Singapore (SIN)" />
                  <label>Depature</label>
                </div>

                <div className="grid-input">
                  <input type="text" required placeholder=" Los Angeles" />
                  <label>Arrival</label>
                </div>
                <div className="grid-input">
                  <input type="date" required />
                  <label>Depature</label>
                </div>
                <button type="search" className="hero-btn">
                  SEARCH FLIGTHS
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <RecentSearch />
      <Recommended />
      <Popular />
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

export default AllHomepage;
