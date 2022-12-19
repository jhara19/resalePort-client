import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Testimonals = () => {
  const TestimonialInfo = [
    {
      feedback:
        "Got a used Life Fitness elliptical trainer about a month ago at a great price and am EXTREMELY happy with it.  Even had a part come off and called into them and within 48 hours had a new part shipped to me to make it right!  Strongly recommend that anyone interested in any exercise equipment take a drive to their warehouse",
      customer: "Mitchel Starc",
    },
    {
      feedback:
        "The delivery showed up on time, protected the walls as they carried the new treadmill upstairs (not at all an easy task), and were spectacular. My wife is an avid walker and uses the treadmill daily and loves it. As long as she is happy, I am happy",
      customer: "Leonel Messi",
    },
    {
      feedback:
        "We ordered our treadmill online from ResalePort.com, the next day I received an email confirming our order with full contact information. They were very quick to respond via email too. We are very happy with our purchase and the customer service! We will definitely shop with ResalePort.com again!!",
      customer: "Md. Rafique",
    },
    {
      feedback:
        "Awesome customer service. Debbie assisted us in finding the perfect machines for our home gym. Great prices, I am definitely coming back for more equipment.",
      customer: "Salman Khan",
    },
    {
      feedback:
        "We recently purchased some gym equipment from Global Fitness and the customer service, price, and quality of the equipment we received was fantastic! I would highly recommend it.",
      customer: 'John Abraham'
    },
  ];
  return (
    <div className="bg-slate-800 text-center py-16 mt-32">
      <h2 className="text-5xl font-bold text-slate-200">
        What Our Customer Have To Say
      </h2>
      <Swiper
        // install Swiper modules
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={2}
        loop
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mt-12 bg-slate-800"
      >
        {TestimonialInfo.map((info, index) => (
          <SwiperSlide className="p-4  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl " key={index}>
            <div className="hero-content h-[450px] md:h-[400px] bg-slate-300 md:px-10 py-2 rounded-2xl flex-col text-center ">
              <p className="md:text-xl text-gray-900">{info.feedback}</p>
              <p className="text-xl text-red-500 font-semibold">
                --{info.customer}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonals;
