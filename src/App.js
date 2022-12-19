import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import { routes } from "./Routes/routes";

function App() {
  

  return (
    <div className="main-container">
      <ScrollToTop
        smooth
        color="white"
        width="40"
        position="relative"

        style={{
          backgroundColor: "rgb(255, 142, 55)",
          borderRadius: "50%",
          zIndex:"100"
        }}
        top="600"
      />
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
