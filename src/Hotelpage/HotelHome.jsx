import React from "react";
import "./Hotel.css";

const HotelHome = () => {
  return (
    <div>
      <main>
        <div className="main-container">
          <h2>Where are you off to ?</h2>

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
      {/*  */}

      <div className="f-cards-result">
        <div className="card-checkbox-list">
          <p>10 out of 777 results</p>
          <div className="checkbox-first">
            <span>
              <b>Stops</b>
              <br />
              <input type="checkbox" /> 1 Stop
              <br />
              <input type="checkbox" /> 2 Stops
            </span>

            <span>
              <b>Booking Options</b>
              <br />
              <input type="checkbox" /> Book on Fickleflight
              <br />
              <input type="checkbox" /> Official Airline Websites
            </span>

            <span>
              <b>Flight Experience</b>
              <br />
              <input type="checkbox" />
              No overnight flights <br />
              <input type="checkbox" /> No long stop-overs
            </span>

            <span>
              <b>Airlines</b>
              <br />
              <input type="checkbox" />
              Singapore Airlines
              <br />
              <input type="checkbox" /> Qata Airways
            </span>
          </div>
          <div className="checkbox-second-div"></div>
        </div>

        {/* ============================================= */}
        <div className="card-table">
          <p>10 out of 777 results</p>
          <div className="card-flight-general">
            <div className="f-space f-right">
              <div className="flex-line f-left-logo">
                <img src="./Vector (1).png" alt="vector logo" />
                <span>TurkeyAirlines</span>
              </div>
              <div className="f-right-flight">
                <div className="f-raw f-right-div-1">
                  <b>11:35 PM</b>
                  <span className="f-space">
                    <img src="./Oval.png" alt="oval logo" />
                    <img src="./Path (1).png" alt=" logo path" />
                    <img src="./Oval.png" alt="oval logo" />
                  </span>
                  <b>4:45 PM</b>
                </div>
                <div className="f-space f-right-div-2">
                  <small>SIN</small>
                  <small>33H 10M, 1-step</small>
                  <small>LAX</small>
                </div>
              </div>
            </div>

            <div className="f-left-price">
              <p>S$ 723</p>
            </div>
          </div>
          {/*  */}
          <div className="card-flight-general">
            <div className="f-space f-right">
              <div className="flex-line f-left-logo">
                <img src="./Path.png" alt="vector logo" />
                <span>CanadaAirlines</span>
              </div>
              <div className="f-right-flight">
                <div className="f-raw f-right-div-1">
                  <b>11:35 PM</b>
                  <span className="f-space">
                    <img src="./Oval.png" alt="oval logo" />
                    <img src="./Path (1).png" alt=" logo path" />
                    <img src="./Oval.png" alt="oval logo" />
                  </span>
                  <b>4:45 PM</b>
                </div>
                <div className="f-space f-right-div-2">
                  <small>SIN</small>
                  <small>33H 10M, 1-step</small>
                  <small>LAX</small>
                </div>
              </div>
            </div>

            <div className="f-left-price">
              <p>S$ 900</p>
            </div>
          </div>
          {/*  */}
          <div className="card-flight-general">
            <div className="f-space f-right">
              <div className="flex-line f-left-logo">
                <img src="./Vector (1).png" alt="vector logo" />
                <span>EuropeAirlines</span>
              </div>
              <div className="f-right-flight">
                <div className="f-raw f-right-div-1">
                  <b>11:35 PM</b>
                  <span className="f-space">
                    <img src="./Oval.png" alt="oval logo" />
                    <img src="./Path (1).png" alt=" logo path" />
                    <img src="./Oval.png" alt="oval logo" />
                  </span>
                  <b>4:45 PM</b>
                </div>
                <div className="f-space f-right-div-2">
                  <small>SIN</small>
                  <small>33H 10M, 1-step</small>
                  <small>LAX</small>
                </div>
              </div>
            </div>

            <div className="f-left-price">
              <p>S$ 823</p>
            </div>
          </div>
          {/*  */}
          <div className="card-flight-general">
            <div className="f-space f-right">
              <div className="flex-line f-left-logo">
                <img src="./path5699.png" alt="vector logo" />
                <span>AtlantaAirlines</span>
              </div>
              <div className="f-right-flight">
                <div className="f-raw f-right-div-1">
                  <b>11:35 PM</b>
                  <span className="f-space">
                    <img src="./Oval.png" alt="oval logo" />
                    <img src="./Path (1).png" alt=" logo path" />
                    <img src="./Oval.png" alt="oval logo" />
                  </span>
                  <b>4:45 PM</b>
                </div>
                <div className="f-space f-right-div-2">
                  <small>SIN</small>
                  <small>33H 10M, 1-step</small>
                  <small>LAX</small>
                </div>
              </div>
            </div>

            <div className="f-left-price">
              <p>S$ 923</p>
            </div>
          </div>
          {/*  */}
          <div className="card-flight-general">
            <div className="f-space f-right">
              <div className="flex-line f-left-logo">
                <img src="./Vector (2).png" alt="vector logo" />
                <span>SingaporeAirline</span>
              </div>
              <div className="f-right-flight">
                <div className="f-raw f-right-div-1">
                  <b>11:35 PM</b>
                  <span className="f-space">
                    <img src="./Oval.png" alt="oval logo" />
                    <img src="./Path (1).png" alt=" logo path" />
                    <img src="./Oval.png" alt="oval logo" />
                  </span>
                  <b>4:45 PM</b>
                </div>
                <div className="f-space f-right-div-2">
                  <small>SIN</small>
                  <small>33H 10M, 1-step</small>
                  <small>LAX</small>
                </div>
              </div>
            </div>

            <div className="f-left-price">
              <p>S$ 883</p>
            </div>
          </div>
          {/*  */}
          <div className="card-flight-general">
            <div className="f-space f-right">
              <div className="flex-line f-left-logo">
                <img src="./Vector (1).png" alt="vector logo" />
                <span>AlgeriaAirline</span>
              </div>
              <div className="f-right-flight">
                <div className="f-raw f-right-div-1">
                  <b>11:35 PM</b>
                  <span className="f-space">
                    <img src="./Oval.png" alt="oval logo" />
                    <img src="./Path (1).png" alt=" logo path" />
                    <img src="./Oval.png" alt="oval logo" />
                  </span>
                  <b>4:45 PM</b>
                </div>
                <div className="f-space f-right-div-2">
                  <small>SIN</small>
                  <small>33H 10M, 1-step</small>
                  <small>LAX</small>
                </div>
              </div>
            </div>

            <div className="f-left-price">
              <p>S$ 423</p>
            </div>
          </div>
          {/*  */}
          <div className="card-flight-general">
            <div className="f-space f-right">
              <div className="flex-line f-left-logo">
                <img src="./Vector (1).png" alt="vector logo" />
                <span>EuropeAirline</span>
              </div>
              <div className="f-right-flight">
                <div className="f-raw f-right-div-1">
                  <b>11:35 PM</b>
                  <span className="f-space">
                    <img src="./Oval.png" alt="oval logo" />
                    <img src="./Path (1).png" alt=" logo path" />
                    <img src="./Oval.png" alt="oval logo" />
                  </span>
                  <b>4:45 PM</b>
                </div>
                <div className="f-space f-right-div-2">
                  <small>SIN</small>
                  <small>33H 10M, 1-step</small>
                  <small>LAX</small>
                </div>
              </div>
            </div>

            <div className="f-left-price">
              <p>S$ 723</p>
            </div>
          </div>
        </div>

        <div className="recent-booked">
          <h2 style={{ color: "#114f8b" }}>RECCENTLY BOOKED</h2>
          <div className="recents-booked-container">
            <div className="recent-booked-card">
              <div className="f-space booked-card-div1">
                <div className="flex-line">
                  <img src="./Path.png" alt=" boked logo" />
                  <small>Singapore Airlines</small>
                </div>
                <p>$1128</p>
              </div>
              <div className="f-space booked-card-div2">
                <div className="card2">
                  <b>SIN</b>
                  <br />
                  <small>Singapore</small>
                </div>
                <div className="flex-line card2-flight">
                  <img src="./Oval.png" alt="fkf" />
                  ---
                  <img src="path (1).png" alt="oval" />
                  ---
                  <img src="./Oval.png" alt="fkfk" />
                </div>
                <div className="card2">
                  <b>LAX</b>
                  <br />
                  <small>Los Angeles</small>
                </div>
              </div>
              <div className="f-space booked-card-div3">
                <div className="flex-line">
                  <img src="./Class icon.png" alt="classs" />
                  <span>Economy</span>
                </div>
                <div className="flex-line">
                  <img src="./Group.png" alt="classs" />
                  <span>2 Adults</span>
                </div>
              </div>
              <p className="line"></p>
              <div className="f-space booked-card-div4">
                <span style={{ color: "#557" }}>
                  Booked on <b style={{ fontSize: "1rem" }}>Expedia</b>
                </span>
                <p
                  style={{
                    color: "#FBA403",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  1s ago
                </p>
              </div>
            </div>
            {/*  */}
            <div className="recent-booked-card">
              <div className="f-space booked-card-div1">
                <div className="flex-line">
                  <img src="./Path.png" alt=" boked logo" />
                  <small>Singapore Airlines</small>
                </div>
                <p>$1128</p>
              </div>
              <div className="f-space booked-card-div2">
                <div className="card2">
                  <b>SIN</b>
                  <br />
                  <small>Singapore</small>
                </div>
                <div className="flex-line card2-flight">
                  <img src="./Oval.png" alt="fkf" />
                  ---
                  <img src="path (1).png" alt="oval" />
                  ---
                  <img src="./Oval.png" alt="fkfk" />
                </div>
                <div className="card2">
                  <b>LAX</b>
                  <br />
                  <small>Los Angeles</small>
                </div>
              </div>
              <div className="f-space booked-card-div3">
                <div className="flex-line">
                  <img src="./Class icon.png" alt="classs" />
                  <span>Economy</span>
                </div>
                <div className="flex-line">
                  <img src="./Group.png" alt="classs" />
                  <span>2 Adults</span>
                </div>
              </div>
              <p className="line"></p>
              <div className="f-space booked-card-div4">
                <span style={{ color: "#557" }}>
                  Booked on <b style={{ fontSize: "1rem" }}>Expedia</b>
                </span>
                <p
                  style={{
                    color: "#FBA403",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  1s ago
                </p>
              </div>
            </div>
            {/*  */}
            <div className="recent-booked-card">
              <div className="f-space booked-card-div1">
                <div className="flex-line">
                  <img src="./Path.png" alt=" boked logo" />
                  <small>Singapore Airlines</small>
                </div>
                <p>$1128</p>
              </div>
              <div className="f-space booked-card-div2">
                <div className="card2">
                  <b>SIN</b>
                  <br />
                  <small>Singapore</small>
                </div>
                <div className="flex-line card2-flight">
                  <img src="./Oval.png" alt="fkf" />
                  ---
                  <img src="path (1).png" alt="oval" />
                  ---
                  <img src="./Oval.png" alt="fkfk" />
                </div>
                <div className="card2">
                  <b>LAX</b>
                  <br />
                  <small>Los Angeles</small>
                </div>
              </div>
              <div className="f-space booked-card-div3">
                <div className="flex-line">
                  <img src="./Class icon.png" alt="classs" />
                  <span>Economy</span>
                </div>
                <div className="flex-line">
                  <img src="./Group.png" alt="classs" />
                  <span>2 Adults</span>
                </div>
              </div>
              <p className="line"></p>
              <div className="f-space booked-card-div4">
                <span style={{ color: "#557" }}>
                  Booked on <b style={{ fontSize: "1rem" }}>Expedia</b>
                </span>
                <p
                  style={{
                    color: "#FBA403",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  1s ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default HotelHome;
