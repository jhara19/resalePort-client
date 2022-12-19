import { Rating } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Advertised = ({product}) => {
  const {rating} = product;
  const fullStar = Math.ceil(parseInt(rating));
  const starArray = [1, 2, 3, 4, 5];
    return (
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="card bg-slate-600 shadow-xl "
      >
        <figure className="h-64">
          <img
            className="h-full w-full object-cover"
            src={product.image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product?.title}</h2>
          <p className="text-sm">
            <Rating>
              {starArray.map((star) => {
                if (star <= fullStar) {
                  return <Rating.Star key={star} />;
                } else {
                  return <Rating.Star filled={false} key={star} />;
                }
              })}
              <span className="ml-2 text-sm">
                {"("}
                {rating} out of 5{")"}
              </span>
            </Rating>
          </p>
          <div className="space-x-2">
            <button className="py-2 px-8  bg-yellow-500 rounded-3xl text-slate-200">
              Buy Now
            </button>

            <Link to={`/category/${product.sub_category}`}>
              <button className="py-2 px-8  bg-blue-500 rounded-3xl text-slate-200">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Advertised;