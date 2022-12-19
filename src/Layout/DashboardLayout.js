import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLoading from "../Components/CustomLoading";
import { AuthContext } from "../contexts/AuthProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
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
  let menu = "";

  if (status === "seller") {
    menu = (
      <>
        <li className="bg-slate-700 rounded-md ">
          <Link to="/dashboard/addProduct">Add a product</Link>
        </li>
        <li className="bg-slate-700 rounded-md ">
          <Link to="/dashboard/myProducts">My products</Link>
        </li>
        <li className="bg-slate-700 rounded-md ">
          <Link to="/dashboard/myBuyers">My buyers</Link>
        </li>
      </>
    );
  } else if (status === "buyer") {
    menu = (
      <>
        <li className="bg-slate-700 rounded-md ">
          <Link to="/dashboard/myOrders">My orders</Link>
        </li>
        <li className="bg-slate-700 rounded-md ">
          <Link to="/dashboard/wishList">Wish List</Link>
        </li>
      </>
    );
  } else {
    menu = (
      <>
        <li className="bg-slate-700 rounded-md ">
          <Link to="/dashboard/sellers">All sellers</Link>
        </li>
        <li className="bg-slate-700 rounded-md ">
          <Link to="/dashboard/buyers">All buyers</Link>
        </li>
        <li className="bg-slate-700 rounded-md ">
          <Link to="/dashboard/reportedItems">Reported Items</Link>
        </li>
      </>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[220px] bg-base-100 space-y-3 text-slate-200">
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
