import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton";

const Category = ({ category }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="card text-center  bg-slate-700 shadow-xl image-full">
        <figure className="h-64">
          <img
            className="h-full w-full object-cover"
            src={category.img}
            alt={category.category_name}
          />
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="text-3xl text-blue-300 my-5">
            {category.category_name}
          </h2>
          <div className="dropdown dropdown-right">
            <CustomButton tabIndex={0}>Explore More</CustomButton>

            <ul
              tabIndex={0}
              className="dropdown-content  text-left menu shadow "
            >
              {category.categoryList.map((item, index) => (
                <Link
                  className="btn btn-outline px-2 bg-slate-700 w-32 text-blue-200 text-md"
                  key={index}
                  to={`/category/${item}`}
                >
                  <li>{item}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
