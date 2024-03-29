import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-1xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Levan Gabedava
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-end Developer
        </h2>
        <p className="text-[#a5aaba] py-4 max-w-[700px]">
          Self-taught front-end developer with a strong motivationand passion
          for coding. Proven ability to quickly learn newskills through online
          resources and mentorship. Efficientlyhandle multiple tasks and thrive
          on challenges. Eager tocontribute to a dynamic organization's success.
        </p>
        <button className="max-w-[160px] hover:scale-110">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
