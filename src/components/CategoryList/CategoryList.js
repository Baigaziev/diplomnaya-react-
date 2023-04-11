import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { categories } from "../../firebase";
import { getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

export default function CategoryList() {
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    getDocs(categories).then((snapshot) => {
      const newCategoryList = [];
      snapshot.docs.forEach((doc) => {
        const category = doc.data();
        category.id = doc.id;

        newCategoryList.push(category);
      });
      setCategoriesList(newCategoryList);
    });
  }, []);

  const output = categoriesList.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>{category.name}</NavLink>
    </li>
  ));

  return (
    <div className="CategoryList">
      <h2>Categories</h2>
      <ul>{output}</ul>
    </div>
  );
}
