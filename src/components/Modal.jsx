import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { content } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <h6>
                  Tên sản phẩm:{" "}
                  <span className="text-info">{content.name}</span>
                </h6>
                <h6>
                  Mô tả:{" "}
                  <span className="text-success">{content.description}</span>
                </h6>
                <h6>
                  Giá: <span className="text-danger">{content.price}$</span>
                </h6>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
