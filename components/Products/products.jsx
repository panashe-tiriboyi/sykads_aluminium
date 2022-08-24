import React, { Component } from "react";
import classes from "../../styles/Products.module.css";
import Product from "./product";

class Products extends Component {
  render() {
    return (
      <div className={classes.products}>
        <div className="container text-light">
          <div className="row">
            <div
              className="col-2"
              style={{ backgroundColor: "rgba(3, 100, 109, 0.7)" }}
            >
              <h1 className={classes.heading}>PRODUCTS</h1>
            </div>
            <div className="col-10 text-dark" style={{ position: "relative" }}>
              <div className={classes.product}>
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
