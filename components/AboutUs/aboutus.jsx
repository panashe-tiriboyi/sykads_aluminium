import React, { Component } from "react";
import classes from "../../styles/AboutUs.module.css";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className={classes.aboutUs}>
      <div className="container text-light">
        <div className="row">
          <div
            className="col-2"
            style={{ backgroundColor: "rgba(3, 100, 109, 0.7)" }}
          >
            <h1 className={classes.heading}>ABOUT US</h1>
          </div>
          <div className="col-6 text-dark">
            <div className={classes.rgbaBackground}>
              <div className={classes.crossSection}>
                <Image
                  src="/crossSection.png"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>

              <p>
                Aluminum window and door made at the superior standards of
                common steel windows, ths ecxiting new range not only offers
                homeowners great choice, but also Zimbabwe excellence, long
                lasting quality and great value.
              </p>
              <p>
                Sykads Aluminium windows and door are made of a lightweight
                aluminium alloy frames. They require limited mantainance and
                never need to be painted_the perfect combination of durability,
                energy efficiency and affordability.
              </p>

              <h3>Vision</h3>
              <p>To be the leading contruction company</p>
              <h3>Mission Statement</h3>
              <p>To minimize prices in contruction for everyone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
