import React from "react";
import CustomButton from '../../../Components/CustomButton';
import img1 from "../../../Images/img1.jpg";
import img2 from "../../../Images/img2.jpg";
import img3 from "../../../Images/img3.jpg";
import img4 from "../../../Images/img4.jpg";
import img5 from "../../../Images/img5.jpg";
import gymLogo from "../../../Images/gym-logo-removebg-preview.png";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const Banner = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      effect={"fade"}
      autoplay
      loop
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className=""
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero min-h-screen"
            style={{
              background: `url(${img})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="hero-overlay bg-gray-900 bg-opacity-70"></div>
            <div className="hero-content flex-col text-center text-neutral-content">
              <div>
                <img src={gymLogo} className="w-16" alt="" />
              </div>
              <div className="mb-5">
                <h3 className="mb-5 text-xl md:text-2xl font-semibold text-red-300">
                  Shape your body with
                </h3>
                <h1 className="tracking-wide text-3xl sm:text-4xl md:text-6xl font-bold text-red-500">
                  ResalePort.com
                </h1>
              </div>
              <div className="">
                <p className="text-slate-200">
                  We work worldwide. Our motive is to keep you healthy with our{" "}
                  <br />
                  <span className="text-2xl font-bold">
                    used gym equipment.
                  </span>
                </p>
              </div>
              <div className="top-12 relative">
                <Link to="/categories">
                  <CustomButton>Get Started</CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
