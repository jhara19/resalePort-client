import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://assignment12-server-ivory.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="bg-slate-800 mt-24 p-6">
      <h2 className="text-4xl font-bold text-slate-200 -mb-3">
        Our Products Category
      </h2>
      <div className="divider"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Category key={category.index} category={category}></Category>
        ))}
      </div>
    </section>
  );
};

export default Categories;
