import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import CustomLoading from "../../Components/CustomLoading";
import MyProduct from "./MyProduct";

const MyProducts = () => {
  const { user, loading } = useContext(AuthContext);

  const url = `https://assignment12-server-ivory.vercel.app/myProducts?email=${user?.email}`;

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProducts", user?.email],
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
    <div className="text-slate-200">
      <h2 className="text-4xl text-slate-200">My Orders</h2>
      <div className="divider mt-2"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {myProducts.map((product) => (
          <MyProduct
            key={product._id}
            product={product}
            refetch={refetch}
          ></MyProduct>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
