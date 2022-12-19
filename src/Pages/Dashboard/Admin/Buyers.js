import React from "react";
import { useQuery } from "@tanstack/react-query";
import CustomLoading from "../../../Components/CustomLoading";
import toast from "react-hot-toast";

const Buyers = () => {
  const url = `https://assignment12-server-ivory.vercel.app/statusdUser?status=buyer`;

  const { data: allBuyers = [], isLoading, refetch } = useQuery({
    queryKey: ["statusdUser"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <CustomLoading></CustomLoading>;
  }

  const deleteSeller = (id) => {
    fetch(`https://assignment12-server-ivory.vercel.app/user/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("buyer deleted");
        refetch();
      });
  };

  return (
    <div className="mt-3 mx-5">
      <h2 className="text-4xl font-bold text-slate-200 -mb-3">
        Our Respected Buyers
      </h2>
      <div className="divider"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {allBuyers.map((buyer) => (
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="card pt-5 bg-slate-700 text-slate-200 shadow-xl"
          >
            <figure className="h-44">
              <img
                src={buyer.userPhoto}
                className="mask mask-decagon h-full"
                alt="user"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name : {buyer.name}</h2>
              <h5 className="">Email: {buyer.email}</h5>
              <div className="card-actions justify-end">
                <button
                  onClick={() => {
                    deleteSeller(buyer._id);
                  }}
                  className="py-2 px-5 rounded-none bg-red-500 hover:bg-red-700 text-slate-200 "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buyers;
