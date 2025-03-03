import React from 'react'
import ProfileCard from './ProfileCard';

const Mentors = () => {
  const profiles = [
    {
      name: "Cillian Leonowicz",
      role: "Director in Technology Consulting",
      company: "EY",
      description: "Set up a Big 4’s first global Blockchain Lab...",
      funding: "100,000",
      imageUrl: "https://via.placeholder.com/200x250",
      linkedInUrl: "https://www.linkedin.com/in/example1/",
    },
    {
      name: "Frank Wang",
      role: "Co-Founder at Meson Network",
      company: "Mask Network",
      description: "Bootstrapped to reach 2/3 of Akamai’s bandwidth...",
      funding: "250,000",
      imageUrl: "https://via.placeholder.com/200x250",
      linkedInUrl: "https://www.linkedin.com/in/example2/",
    },
    {
      name: "Eric Hendrickus",
      role: "Investments, Central Capital Ventura",
      company: "Central Capital Ventura",
      description: "Mentor in SYNERGY, a fintech-focused accelerator...",
      funding: "150,000",
      imageUrl: "https://via.placeholder.com/200x250",
      linkedInUrl: "https://www.linkedin.com/in/example3/",
    },
    {
      name: "Stefon Crawford",
      role: "VC Analyst",
      company: "General Motors Ventures",
      description:
        "Experienced Investor responsible for identifying innovation...",
      funding: "200,000",
      imageUrl: "https://via.placeholder.com/200x250",
      linkedInUrl: "https://www.linkedin.com/in/example4/",
    },
    // Add 6 more profiles...
  ];
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          By getting accepted you unlock access to our elite founder network.
        </h2>
        <p className="mt-2 text-lg italic">
          Join Persist and gain access to our 400+ millionaire and billionaire
          startup network.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-10 bg-[#0b061f]">
        {profiles.map((profile, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <ProfileCard {...profile} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentors