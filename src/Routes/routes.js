import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import NotFound from "../Others/NotFound";
import BlogsContainer from "../Pages/Blogs/BlogsContainer";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import Products from "../Pages/Products/Products";
import AddProduct from "../Pages/Products/AddProduct";
import MyProducts from "../Pages/Products/MyProducts";
import Sellers from "../Pages/Dashboard/Admin/Sellers";
import Buyers from "../Pages/Dashboard/Admin/Buyers";
import PrivateRoute from "./PrivateRoute";
import MyBuyers from "../Pages/Dashboard/MyBuyers";
import MyOrders from "../Pages/Dashboard/MyOrders";
import WishList from "../Pages/Dashboard/WishList";
import ReportedItems from "../Pages/Dashboard/Admin/ReportedItems";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories",
        element: <CategoryPage></CategoryPage>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment12-server-ivory.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <BlogsContainer></BlogsContainer>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/sellers",
        element: <Sellers></Sellers>,
      },
      {
        path: "/dashboard/buyers",
        element: <Buyers></Buyers>,
      },
      {
        path: "/dashboard/myBuyers",
        element: <MyBuyers></MyBuyers>,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/wishList",
        element: <WishList></WishList>,
      },
      {
        path: "/dashboard/reportedItems",
        element: <ReportedItems></ReportedItems>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
