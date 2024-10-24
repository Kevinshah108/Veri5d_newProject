import React from "react";
import ConsultancyImg from "../assets/ConsultancyImage.jpg";
import ConsultancyImg2 from "../assets/ConsultancyImg2.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="lg:h-auto bg-indigo-200 text-black pt-5 pb-5 lg:w-[100%]"
    >
      {/* <h2 className="text-3xl font-bold">About Us</h2> */}
      <div className="lg:w-auto h-auto bg-cyan-700 rounded-lg m-5 ">
        <div>
          <div className=" relative flex justify-center">
            <h1 className="lg:text-3xl text-3xl font-bold text-black lg:flex lg:justify-center flex justify-center z-10 max-[767px]:absolute max-[767px]:items-center lg:ml-0 -ml-3 pt-5 max-[375px]:pt-16 max-[425px]:pt-20 max-[768px]:pt-24 drop-shadow-3xl  md:mt-0 md:ml-10 lg:text-white lg:drop-shadow-2xl">
              OUR VISION
            </h1>
          </div>
          <div className="lg:flex md:flex">
            <img
              src={ConsultancyImg2}
              className="rounded max-[767px]:relative sm:w-full md:w-60 md:ml-7 lg:w-80 ml-0  lg:mt-10 md:mt-0 mb-10 max-[375px]:w-full max-[425px]:w-full max-[768px]:w-full"
            />
            <p className="text-white sm:text-xl lg:text-2xl lg:w-3/5 mt-5 flex justify-start lg:ml-10 m-5 pb-10">
              {/* Veri5D comprises a diverse and passionate group of engineers and
              designers, offering professional services in the AEC
              (Architecture, Engineering and construction) field for a wide
              range of structures. */}
              Veri5D comprises a group of professionals in the field of AEC
              industries offering boutique services to unique projects. With a
              wealth of over 15 years of work experiences, we provide highly
              integrated services tailored to meet clients' project
              expectations. Our key area of expertise:
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-auto h-auto bg-cyan-700 rounded-lg m-5">
        <div className=" relative flex justify-center">
          <h1 className="lg:text-3xl text-3xl max-[767px]:absolute max-[767px]:items-center font-bold text-black lg:text-white lg:flex z-10 lg:justify-center flex justify-center lg:ml-0 ml-0 mt-0 pt-5 max-[375px]:pt-16 max-[425px]:pt-20 max-[768px]:pt-24 drop-shadow-3xl  md:mt-0 md:ml-10 lg:drop-shadow-2xl">
            OUR MISSION
          </h1>
        </div>
        <div className="lg:flex md:flex text-white  ">
          <img
            src={ConsultancyImg}
            className="rounded max-[767px]:relative sm:w-full md:w-60 md:h-60 md:ml-7 lg:w-80 ml-0 md:mt-10 mb-10 lg:mt-10"
          />
          <ul className="lg:text-2xl sm:text-xl lg:w-3/5 lg:mt-10 pb-10 justify-end  lg:ml-10 mx-5  md:ml-5 md:mt-5">
            <li>
              • Setting up higher standards of detailing in field of Industrial
              Engineering
            </li>
            <li>
              • Emerging new trends in India by adopting best global engineering
              practices
            </li>
            <li>
              • Provide cost effective solutions to clients in line with our
              workmanship
            </li>
            <li>
              • Deliver timely and meaningful construction documents to
              contractor for quality completion of project in predefined time
              line
            </li>
            <li>
              • Ensure post project availability to maintain client delight
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
