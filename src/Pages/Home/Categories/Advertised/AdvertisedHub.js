import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CustomLoading from "../../../../Components/CustomButton";
import Advertised from "./Advertised";
import { AuthContext } from "../../../../contexts/AuthProvider";

const AdvertisedHub = () => {
  const { user, loading } = useContext(AuthContext);
  const [range, setRange] = useState(3);

  const url = `https://assignment12-server-ivory.vercel.app/advertisedProducts?range=${range}`;

  const { data: advertisedProducts = [], isLoading } = useQuery({
    queryKey: ["advertisedProducts", user?.email, range],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading || loading) {
    return <CustomLoading></CustomLoading>;
  }
  return (
    <>
      {advertisedProducts.length && (
        <section className="bg-slate-800 mt-24 p-6">
          <h2 className="text-4xl font-bold text-slate-200 -mb-3">
            Our Advertised Products
          </h2>
          <div className="divider"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {advertisedProducts.map((product) => (
              <Advertised key={product._id} product={product}></Advertised>
            ))}
          </div>
          <div className=" mt-16 w-1/2 mx-auto text-center">
            {range > advertisedProducts.length ? (
              <button
                onClick={() => {
                  setRange(3);
                }}
                className="py-3 px-8  font-bold bg-red-500 hover:bg-red-600 rounded-md text-slate-200"
              >
                View Less
              </button>
            ) : (
              <button
                onClick={() => {
                  setRange(range + 3);
                }}
                className="py-3 px-8  font-bold bg-yellow-500 hover:bg-yellow-600 rounded-md text-slate-200"
              >
                View More
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default AdvertisedHub;
