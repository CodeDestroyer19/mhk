import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import img from "../../public/res/serBG.jpg";
import img2 from "../../public/logo@0.25x.png";

const Child = () => {
  return (
    <>
      <div className="py-16 text-white min-h-screen absolute inset-0 flex items-center justify-center h-half">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-1.02">
              <div className="absolute top-0 left-0 h-full w-full blue-glassmorphism"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Crypto Trading</h3>
                <p className="text-white mb-6">
                  We offer top-of-the-line crypto trading services to help you
                  get the most out of your investments.
                </p>
                <a
                  href="#"
                  className="text-purple-700 font-semibold hover:text-purple-800 transition-all duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-1.02">
              <div className="absolute top-0 left-0 h-full  w-full blue-glassmorphism"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Crypto Wallets</h3>
                <p className="text-white mb-6">
                  Keep your cryptocurrency secure and easily accessible with our
                  range of crypto wallets.
                </p>
                <a
                  href="#"
                  className="text-purple-700 font-semibold hover:text-purple-800 transition-all duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-1.02">
              <div className="absolute top-0 left-0 h-full w-full blue-glassmorphism"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Crypto Mining</h3>
                <p className="text-white mb-6">
                  Get involved in cryptocurrency mining and start earning
                  passive income with our cutting-edge mining solutions.
                </p>
                <a
                  href="#"
                  className="text-purple-700 font-semibold hover:text-purple-800 transition-all duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ServicesSection = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: img.src,

          speed: -20,
          style: {
            width: "100vw",
          },
        },
        {
          image: img2.src,
          speed: -10,
          style: {
            height: "150px",
            backgroundSize: "75px auto",
            backgroundRepeat: "no-repeat",
            width: "75px",
            position: "absolute",
            top: 70,
            left: '80',
            right: "10%",
          },
        },
        {
          speed: -15,
          children: <Child />,
        },
      ]}
      className="aspect-[2/1] min-h-screen"
    />
  );
};

export default ServicesSection;
