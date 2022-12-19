import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";
import CustomLoading from "../../Components/CustomLoading";

const MyBuyers = () => {
  const { user, loading } = useContext(AuthContext);
  const url = `https://assignment12-server-ivory.vercel.app/buyers/myBuyer?email=${user?.email}`;

  const {
    data: myBuyers = [],
    isLoading,
  } = useQuery({
    queryKey: ["myBuyer", user?.email],
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
    <div className="mt-3 mx-5">
      <h2 className="text-4xl font-bold text-slate-200 -mb-3">
        My Respected Buyers
      </h2>
      <div className="divider"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {myBuyers.map((buyer) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBuyers;
