import React, { Component } from "react";
import Modal from "./Modal";
import ProductItem from "./ProductItem";
import ProductList from "./ProductList";
import dataShoe from ".././data/data.json";

export default class ShoeStore extends Component {
  state = {
    productDetail: dataShoe[0],
  };
  setStateModal = (itemClick) => {
    this.setState({
      productDetail: itemClick,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <div className="navigation nav ">
              <a
                href=""
                className="nav-link d-block"
                style={{ borderBottom: "1px solid #6495b5", textAlign: "left" }}
              >
                Home
              </a>
              <a
                href=""
                className="nav-link d-block"
                style={{ borderBottom: "1px solid #6495b5" }}
              >
                Shop
              </a>
            </div>
          </div>
          <div className="col-11 ">
            <ProductList
              products={dataShoe}
              setStateModal={this.setStateModal}
            />
            <Modal content={this.state.productDetail} />
          </div>
        </div>
      </div>
    );
  }
}
