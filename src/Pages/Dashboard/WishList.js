import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import CustomLoading from "../../Components/CustomLoading";
import { AuthContext } from "../../contexts/AuthProvider";

const WishList = () => {
  const { user, loading } = useContext(AuthContext);

  const url = `https://assignment12-server-ivory.vercel.app/wishList?email=${user?.email}`;

  const {
    data: wishList = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["wishList", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading || loading) {
    return <CustomLoading></CustomLoading>;
  }

  console.log(wishList);

  const deleteOrder = (id) => {
    fetch(`https://assignment12-server-ivory.vercel.app/wishList/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("WishList Cancelled");
        refetch();
      });
  };

  return (
    <div className="mt-3 mx-5">
      <h2 className="text-4xl font-bold text-slate-200 -mb-3">My Wish List</h2>
      <div className="divider"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {wishList.map((wish) => (
          <div className="card bg-slate-700 text-slate-200 shadow-xl">
            <figure className="h-64 w-full border-2 rounded-2xl border-slate-400 mx-auto">
              <img
                src={wish.image_url}
                className=" h-full w-full object-cover"
                alt="user"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-bold">{wish.title}</h2>
              <p>Seller: {wish.seller}</p>
              <div className="space-y-2 flex flex-col">
                <p className=" bg-slate-600  py-2 px-4 rounded-2xl">
                  Buyer: {wish.buyer_email}
                </p>
                <p className=" bg-slate-600   py-2 px-4 rounded-2xl">
                  Seller: {wish.seller_email} days
                </p>
              </div>

              <h2 className="my-5 font-bold text-2xl text-red-400">
                Price : {wish.resale_price}/=
              </h2>

              <div className="card-actions justify-between">
                <button
                  onClick={() => {
                    deleteOrder(wish._id);
                  }}
                  className="py-1 w-28 rounded-3xl bg-red-500 hover:bg-red-600 text-slate-200 "
                >
                  Cancel
                </button>
                <button className="py-1 w-28 rounded-3xl bg-blue-500 hover:bg-blue-600 text-slate-200">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
