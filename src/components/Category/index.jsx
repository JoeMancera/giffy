import React from "react";
import { Link } from "wouter";
import "./Category.css";

const Category = ({ nameCategory, listOfItems }) => {
  return listOfItems.map((gif) => (
    <li className="trending-item" key={gif}>
      <Link to={`/search/${gif}`}>{gif}</Link>
    </li>
  ));
};

export default Category;
