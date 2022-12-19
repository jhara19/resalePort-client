import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import Product from "./Product";

const Products = () => {
  const [show, setShow] = useState(false);
  const [productInfo, setProductInfo] = useState({});

  const products = useLoaderData();
  return (
    <div className="mt-24">
      <h2 className="text-4xl text-red-400 font-bold -mb-3 text-center">
        {products[0].category_name}
      </h2>
      <div className="divider"></div>
      <div className="grid grid-cols-1 gap-y-44 sm:w-5/6 mx-auto">
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            setProductInfo={setProductInfo}
            setShow={setShow}
          ></Product>
        ))}
      </div>
      <BookingModal
        setShow={setShow}
        show={show}
        productInfo={productInfo}
      ></BookingModal>
    </div>
  );
};

export default Products;
