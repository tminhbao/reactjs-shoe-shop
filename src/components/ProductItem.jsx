import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { item, setStateModal } = this.props;
    return (
      <div className="card my-2 ">
        <img
          className="card-img-top"
          src={item.image}
          alt="Title"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setStateModal(item)}
          style={{ cursor: "pointer" }}
        />
        <div
          className="card-body"
          style={{
            height: "180px",
          }}
        >
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price} $</p>
          <div className="button-wrapper d-flex justify-content-around">
            <button className="btn btn-dark">Add to cart</button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => setStateModal(item)}
            >
              View Detail Infomation
            </button>
          </div>
        </div>
      </div>
    );
  }
}
