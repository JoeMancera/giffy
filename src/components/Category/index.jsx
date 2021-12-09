import React from "react";
import { Link } from "wouter";

const Category = ({ nameCategory, listOfItems }) => {
  return listOfItems.map((gif) => (
    <li key={gif}>
      <Link to={`/search/${gif}`}>{gif}</Link>
    </li>
  ));
};

export default Category;
