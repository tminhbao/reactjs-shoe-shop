import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const { products } = this.props;
    const renderShoeItem = () => {
      return products.map((product, index) => {
        return (
          <div className="col-4" key={index}>
            <ProductItem
              item={product}
              setStateModal={this.props.setStateModal}
            />
          </div>
        );
      });
    };
    return (
      <div className="row">
        <h3 className="text-center">Shoe Shop</h3>
        {renderShoeItem()}
      </div>
    );
  }
}
