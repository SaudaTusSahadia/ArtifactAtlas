import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router";

const timeline = [
  {
    year: "March 1961",
    color: "border-primary",
    description:
      "The establishment of our museum, with two professional tourist agents in a small office in Boston.",
  },
  {
    year: "June 1998",
    color: "border-yellow-500",
    description:
      "Last of America's deep space probes. If you have a problem, and no one else can help, call us.",
  },
  {
    year: "May 2004",
    color: "border-orange-400",
    description:
      "They were four men living all together, yet they were all alone.",
  },
];

const HistorySection = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/about");
  };


  return (
    <div className="pb-16">
        <div className="relative text-center my-10 md:mb-10">
      {/* Background word */}
      <h1 className="text-5xl md:text-7xl font-extrabold  opacity-15">
        HISTORY
      </h1>

      {/* Title */}
      <h4 className="absolute inset-0 top-6 text-xl md:text-3xl font-bold ">
        Welcome To Our <span className="text-primary">Museum</span>
      </h4>

      {/* Icon divider below */}
      <div className="mt-8 flex justify-center items-center gap-2 text-primary">
        <div className="w-15 h-1 bg-primary rounded-full"></div>
        <FaShieldAlt className="text-2xl" />
        <div className="w-15 h-1 bg-primary rounded-full"></div>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Image */}
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img
            src="history.png"
            alt="Museum"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Timeline */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            The Great Museum <br />
            <span className="text-primary">Estimated by Romans in 1961</span>
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg">
            Give us any chance we'll take it. Give us any rule we'll break it.
            We’re gonna make our dreams come true. They were four men living all
            together.
          </p>

          <div className="relative border-l-4 border-gray-400  ml-4 space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-6">
                {/* Dot */}
                <span
                  className={`absolute -left-[11px] top-1 w-4 h-4 rounded-full  border-4 ${item.color}`}
                ></span>

                {/* Content */}
                <h4 className="text-md font-semibold text-accent">{item.year}</h4>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
            ))}
          </div>

          <button 
          onClick={handleRedirect}
          className="btn btn-outline btn-primary mt-8 flex justify-center items-center gap-2">
            Learn more our history
            <HiOutlineArrowNarrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
