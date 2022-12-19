import React, { useContext } from "react";
import { Rating } from "flowbite-react";
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import CustomLoading from "../../Components/CustomLoading";
import toast from "react-hot-toast";

const Product = ({ product, setShow, setProductInfo }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <CustomLoading></CustomLoading>;
  }

  const {
    category_name,
    sub_category,
    rating,
    title,
    isVerified,
    location,
    resale_price,
    original_price,
    seller,
    used_duration,
    posted_time,
    image_url,
    email,
  } = product;
  const fullStar = Math.ceil(parseInt(rating));
  const starArray = [1, 2, 3, 4, 5];

  const handleWishList = () => {
    const wishedProduct = {
      productId: product._id,
      image_url,
      buyer_email: user.email,
      seller_email: email,
      title,
      seller,
      category_name,
      sub_category,
      resale_price,
    };
    console.log("wishlist");
    fetch(`https://assignment12-server-ivory.vercel.app/wishList`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "alreadyAdded") {
          toast.error("Already Added to the Wish List!");
        } else {
          toast.success("Wish List Added");
        }
      });
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className="card flex-col md:flex-row bg-slate-700 shadow-xl text-slate-200 border rounded-none p-2">
        <figure className="md:w-1/2 rounded-none max-h-[600px]">
          <img
            className="h-full w-full object-cover  border-slate-600 border-2"
            src={image_url}
            alt={sub_category}
          />
        </figure>
        <div className="card-body py-4">
          <h2 className="card-title -mb-5 text-3xl text-blue-400">
            {title}
            <div className="badge badge-primary relative -top-2 text-xs">
              NEW
            </div>
          </h2>

          <div className="divider"></div>
          <div className="-mt-6 flex flex-row">
            <p className="text-xs">
              <span className="">{category_name}</span> ||{" "}
              <span>{sub_category}</span>
            </p>
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
          </div>
          <div className=" flex">
            <h2 className="-mt-2 max-w-fit">
              For Sale By:{" "}
              <span className="text-xl font-semibold text-blue-200">
                {seller}
              </span>
            </h2>
            {isVerified && (
              <FaCheckCircle
                title="verified"
                className="text-blue-300  relative ml-1 -top-2"
              />
            )}
          </div>
          <div className="divider"></div>
          <div>
            <h2 className="text-yellow-400 md:text-4xl tracking-wide font-bold">
              Tk {resale_price}
            </h2>
            <p className="line-through text-lg text-blue-200">
              (Market Price: {original_price})
            </p>
          </div>
          <div className="my-5">
            <p className="text-semibold text-slate-400">Description:</p>
            <ul>
              <li>Bought {used_duration} days ago.</li>
              <li>Rarely used as its my personal machine. </li>
              <li>Fully Fresh & Spot Less like new.</li>
              <li>
                Market price is{" "}
                <span className="text-yellow-400 font-semibold">
                  tk {original_price}
                </span>{" "}
                at present
              </li>
            </ul>
          </div>
          <label
            htmlFor="purchase-modal"
            className="btn bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl border-none text-slate-100"
            onClick={() => {
              setProductInfo(product);
              setShow(true);
            }}
          >
            Purchase Now
          </label>

          <label
            className="btn bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl border-none text-slate-100"
            onClick={handleWishList}
          >
            Wish List
          </label>
          <div className="gap-y-5 mt-8 grid grid-cols-1 sm:grid-cols-3">
            <small className="bg-slate-600  max-w-fit py-2 px-4 rounded-2xl">
              Post{posted_time}
            </small>
            <small className="bg-slate-600 max-w-fit  py-2 px-4 rounded-2xl">
              Location: {location}
            </small>
            <small className="bg-slate-600 max-w-fit  py-2 px-4 rounded-2xl">
              Used for {used_duration} days
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
