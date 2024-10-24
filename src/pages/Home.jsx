import Logo from "../assets/Logo.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="lg:h-screen lg:w-full flex lg:justify-start bg-blue-500 text-white home-img mt-10 backdrop-blur-md lg:mt-10 justify-start"
    >
      <div className="mx-[5%] lg:mx-[0%]  ">
        <h1 className="lg:mt-40 md:mt-30 lg:ml-20 mt-20 mb-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-indigo-900 font-bold font-sans drop-shadow-3xl">
          <img
            src={Logo}
            className="w-[30%] h-[130%] max-[375px]:w-[30%] max-[375px]:h-[140%] max-[425px]:w-[30%] max-[425px]:h-[140%] max-[768px]:w-[30%] max-[768px]:h-[140%] "
          />
        </h1>
        <h3 className="lg:mt-0 lg:ml-20 mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-2xl max-[375px]:-mt-[20px] max-[425px]:-mt-[20px] max-[768px]:-mt-[20px]">
          ENGINEERING CONSULTANTS
        </h3>
        <h4 className="lg:mt-0 lg:ml-20 lg:mb-10 text-lg sm:text-xl md:text-2xl lg:text-3xl drop-shadow-2xl">
          FACILITATING SEAMLESS SOLUTIONS...
        </h4>
        <Link to="contact">
          <button className="lg:mt-0 lg:ml-20 mt-5 mb-10 text-lg sm:text-xl lg:text-2xl bg-green-700 px-4 lg:py-2 rounded-3xl font-Kanit hover:bg-green-800">
            Explore Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
