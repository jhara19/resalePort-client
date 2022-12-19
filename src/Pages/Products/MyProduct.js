import { Button } from "flowbite-react";
import React from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import CustomButton from "../../Components/CustomButton";

const MyProduct = ({ product, refetch }) => {
  const navigate = useNavigate();
  const {
    category_name,
    sub_category,
    title,
    location,
    resale_price,
    original_price,
    used_duration,
    image_url,
  } = product;

  const handleAdvertised = () => {
    if (product.advertised) {
      toast.error("Already Advertised");
      return;
    }

    const id = product._id;
    delete product._id;
    fetch("https://assignment12-server-ivory.vercel.app/advertisedProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          fetch(
            `https://assignment12-server-ivory.vercel.app/myProducts/${id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              toast.success("advertised is successful");
              refetch();
              navigate("/");
            });
        }
      });
  };

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="card bg-slate-700 shadow-xl"
    >
      <figure className="h-64">
        <img
          className="h-full w-full object-cover"
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          <small>
            {category_name} || {sub_category}
          </small>
        </p>
        <h2 className="text-3xl text-blue-300 font-bold">Tk {resale_price}</h2>
        <div onClick={handleAdvertised} className="card-actions mt-8 -mb-3">
          {product.advertised ? (
            <div>
              <Button gradientDuoTone="cyanToBlue" disabled={true}>
                Already Advertised
              </Button>
            </div>
          ) : (
            <div>
              <Button gradientDuoTone="cyanToBlue">
                Advertise the product
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
