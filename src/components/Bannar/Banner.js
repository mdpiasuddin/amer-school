import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./banner.css";

const Banner = () => {
  return (
    <div>
      <section>
        <Carousel fade className="">
          <Carousel.Item>
            <img
              className="d-block w-100  banner"
              src="images/banner1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="name_scholl f-5">Amer Scholl ltd</h1>
              <p className="details">
                <strong>
                  Amer school is a leading online education service system{" "}
                </strong>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-30 banner"
              src="images/banner2.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1 className="name_scholl">Amer Scholl ltd</h1>
              <p className="details">
                Amer school is a leading online education service system{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-30 banner"
              src="images/banner3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className="name_scholl">Amer Scholl ltd</h1>
              <p className="details">
                Amer school is a leading online education service system{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
};

export default Banner;
