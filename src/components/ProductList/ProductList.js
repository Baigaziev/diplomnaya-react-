import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import "./ProductList.css";

import React, { useContext } from "react";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div key={product.id} className="ProductList__item">
        <img src={product.picture} alt={product.name} />
        <NavLink to={"/products/" + product.slug}>{product.name}</NavLink>
        <span> {product.price} $</span>
        <AddToCart product={product} />
        <DeleteProduct product={product} />
      </div>
    ));

  return (
    <div className="ProductList">
      {output}
      <AddProduct category={category} />
    </div>
  );
}
