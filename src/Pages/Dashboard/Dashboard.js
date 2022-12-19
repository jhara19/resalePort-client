import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import CustomLoading from "../../Components/CustomLoading";
import { AuthContext } from "../../contexts/AuthProvider";
import AddProduct from "../Products/AddProduct";
import Sellers from "./Admin/Sellers";
import MyOrders from "./MyOrders";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);

  const url = `https://assignment12-server-ivory.vercel.app/user?email=${user?.email}`;

  const { data: loginUser = {}, isLoading } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading || loading) {
    return <CustomLoading></CustomLoading>;
  }

  const status = loginUser.status;
  return (
    <>
      {status === "seller" && <AddProduct></AddProduct>}
      {status === "buyer" && <MyOrders></MyOrders>}
      {status === "admin" && <Sellers></Sellers>}
    </>
  );
};

export default Dashboard;
