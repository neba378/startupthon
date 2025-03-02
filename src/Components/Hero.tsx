import React from "react";

const Hero = () => {
  return (
    <div className="p-8 relative text-center">
      {/* Background Image */}
      <img
        src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped.png"
        alt="image of mentors"
        className="w-full object-cover"
        style={{ filter: "grayscale(100%)" }}
      />

      {/* Text Section */}
      <div className="mt-4">
        <h1 className="-mt-10 magic-text text-[80px] font-bold relative z-10">
          Startupathon
        </h1>
        <h2 className="text-2xl text-white">
          Your Chance to Build, Lead, and Succeed as a Founder
        </h2>
      </div>

      {/* Loom Video Embed */}
      <div className="mt-10 bg-[#1a1a1a] p-4 rounded-2xl max-w-lg mx-auto shadow-lg border border-purple-600">
        <iframe
          src="https://www.loom.com/share/996f59a2e5c34fd38b86544833c23dde?sid=47dc3a96-4aee-48d7-b741-c624717b99c0"
          title="Loom Video"
          allowFullScreen
          className="w-full h-64 rounded-lg"
        ></iframe>
      </div>
      {/* nav links */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mt-8">
        <button className="justify-center bg-[#432d7b] hover:bg-[#6e42ca] text-white px-4 py-2 rounded-lg w-full border-2 border-purple-500 hover:border-purple-300 transition-all duration-300 ease-in-out flex items-center ">
          <a
            href="#startupthon-guide"
            className="transition-colors duration-300 flex items-center"
          >
            <span className="mr-2 text-xl">Ongoing Startupathon</span>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584067844b40361f47c65_user-guide.png"
              alt=""
              className="w-6 h-6"
            />
          </a>
        </button>
        <button className="justify-center bg-[#432d7b] hover:bg-[#6e42ca] text-white px-4 py-2 rounded-lg w-full border-2 border-purple-500 hover:border-purple-300 transition-all duration-300 ease-in-out flex items-center ">
          <a
            href="#startupthon-guide"
            className="transition-colors duration-300 flex items-center"
          >
            <span className="mr-2 text-xl">Startupathon Guide</span>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584067844b40361f47c65_user-guide.png"
              alt=""
              className="w-6 h-6"
            />
          </a>
        </button>
        <button className="justify-center bg-[#432d7b] hover:bg-[#6e42ca] text-white px-4 py-2 rounded-lg w-full border-2 border-purple-500 hover:border-purple-300 transition-all duration-300 ease-in-out flex items-center ">
          <a
            href="#startupthon-guide"
            className="transition-colors duration-300 flex items-center"
          >
            <span className="mr-2 text-xl">Mentor Network</span>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584067844b40361f47c65_user-guide.png"
              alt=""
              className="w-6 h-6"
            />
          </a>
        </button>
        <button className="justify-center bg-[#432d7b] hover:bg-[#6e42ca] text-white px-4 py-2 rounded-lg w-full border-2 border-purple-500 hover:border-purple-300 transition-all duration-300 ease-in-out flex items-center ">
          <a
            href="#startupthon-guide"
            className="transition-colors duration-300 flex items-center"
          >
            <span className="mr-2 text-xl">Past Startupathon</span>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584067844b40361f47c65_user-guide.png"
              alt=""
              className="w-6 h-6"
            />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
