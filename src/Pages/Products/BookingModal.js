import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import CustomLoading from "../../Components/CustomLoading";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ show, setShow, productInfo }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <CustomLoading></CustomLoading>;
  }

  const handleModal = (event) => {
    event.preventDefault();
    const date = new Date();
    const orderedProduct = {
      image_url: productInfo.image_url,
      title: productInfo.title,
      resale_price: productInfo.resale_price,
      email: user?.email,
      seller_email: productInfo.email,
      ordered_date: date.toDateString(),
    };
    fetch("https://assignment12-server-ivory.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "alreadyAdded") {
          toast.error("Already Ordered! Try another");
          return;
        }
        setShow(false);
        console.log(data);
        toast.success("Order Placed Successfully!");
      });
  };

  if (productInfo && show) {
    return (
      <div>
        <input type="checkbox" id="purchase-modal" className="modal-toggle " />
        <div className="modal bg-gray-900/90">
          <div className="modal-box relative text-slate-200 bg-slate-700">
            <label
              htmlFor="purchase-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-3xl font-bold text-blue-400">
              {productInfo?.title}
            </h3>
            <div className="divider"></div>
            <form onSubmit={handleModal}>
              <div className="space-y-3 text-sm">
                <input
                  type="text"
                  name="name"
                  disabled
                  value={user?.displayName}
                  className="w-full px-4 py-3 cursor-not-allowed   border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                />
                <input
                  type="email"
                  name="email"
                  disabled
                  value={user?.email}
                  className="w-full px-4 py-3 cursor-not-allowed   border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                />
                <input
                  type="text"
                  name="item"
                  disabled
                  value={productInfo?.title}
                  className="w-full px-4 py-3 cursor-not-allowed   border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                />
                <input
                  type="text"
                  name="price"
                  disabled
                  value={productInfo?.resale_price}
                  className="w-full px-4 py-3 cursor-not-allowed   border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                />
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Your phone number?"
                  required
                  className="w-full px-4 py-3  border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                />
                <input
                  type="text"
                  name="meeting_location"
                  placeholder="Where do you want to meet?"
                  required
                  className="w-full px-4 py-3  border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                />
              </div>
              <div className="w-full">
                <button className="w-full mt-5 btn bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl border-none text-slate-100">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default BookingModal;
