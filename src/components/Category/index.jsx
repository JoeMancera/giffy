import React from "react";
import {
  CategoryTitle,
  CategoryList,
  CategoryListItem,
  CategoryLink,
} from "./styles";
import "./Category.css";

const Category = ({ nameCategory, listOfItems }) => {
  return (
    <section>
      <CategoryTitle>{nameCategory}</CategoryTitle>
      <CategoryList className="Category-list">
        {listOfItems.map((singleOption, index) => (
          <CategoryListItem
            key={singleOption}
            index={index}
            className="Category-list-item"
          >
            <CategoryLink
              className="Category-link"
              to={`/search/${singleOption}`}
            >
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </section>
  );
};

export default Category;
