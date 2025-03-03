import ProfileCard from "./ProfileCard";
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const profiles = [
  {
    name: "Purnendu Thamb",
    role: "Lead Developer",
    company: "NeighborGood",
    description:
      "NeighborGood aims to create the simplest platform for neighborhoods to connect, using an AI agent that acts as a social extrovert to find activities for people to enjoy together.",
    funding: "61,500",
    imageUrl:
      "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67bdf32ed73b9d632859a762_purnedu-p-500.jpg",
    linkedInUrl: "https://www.linkedin.com/in/purnenduthamb",
  },
  {
    name: "Sophia Lee",
    role: "AI Researcher",
    company: "MindSync",
    description:
      "MindSync is developing an AI-powered mental health support system to provide personalized recommendations and emotional support.",
    funding: "75,000",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedInUrl: "https://www.linkedin.com/in/sophia-lee",
  },
  {
    name: "James Carter",
    role: "CTO",
    company: "EcoTech",
    description:
      "EcoTech focuses on AI-driven sustainability solutions to optimize energy consumption in urban areas.",
    funding: "90,000",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedInUrl: "https://www.linkedin.com/in/james-carter",
  },
  {
    name: "Ava Patel",
    role: "Product Manager",
    company: "HealthSync",
    description:
      "HealthSync integrates AI to improve patient-doctor interactions through real-time health monitoring.",
    funding: "50,000",
    imageUrl: "https://randomuser.me/api/portraits/women/30.jpg",
    linkedInUrl: "https://www.linkedin.com/in/ava-patel",
  },
  {
    name: "Daniel Kim",
    role: "CEO",
    company: "FinAI",
    description:
      "FinAI is leveraging artificial intelligence to provide personalized financial guidance for individuals and businesses.",
    funding: "120,000",
    imageUrl: "https://randomuser.me/api/portraits/men/29.jpg",
    linkedInUrl: "https://www.linkedin.com/in/daniel-kim",
  },
  {
    name: "Olivia Martinez",
    role: "Head of Design",
    company: "AI Creators",
    description:
      "AI Creators develops AI-driven design tools that help artists and brands create unique digital content.",
    funding: "67,000",
    imageUrl: "https://randomuser.me/api/portraits/women/22.jpg",
    linkedInUrl: "https://www.linkedin.com/in/olivia-martinez",
  },
  {
    name: "Liam Johnson",
    role: "Data Scientist",
    company: "DeepData",
    description:
      "DeepData specializes in AI-powered data analysis solutions to help businesses make data-driven decisions.",
    funding: "110,000",
    imageUrl: "https://randomuser.me/api/portraits/men/37.jpg",
    linkedInUrl: "https://www.linkedin.com/in/liam-johnson",
  },
  {
    name: "Emma White",
    role: "Software Engineer",
    company: "CodeGen",
    description:
      "CodeGen is building AI-powered tools to generate efficient and scalable code for developers.",
    funding: "85,000",
    imageUrl: "https://randomuser.me/api/portraits/women/25.jpg",
    linkedInUrl: "https://www.linkedin.com/in/emma-white",
  },
  {
    name: "Ethan Walker",
    role: "AI Ethics Consultant",
    company: "FairAI",
    description:
      "FairAI focuses on ensuring ethical AI development and unbiased decision-making processes.",
    funding: "95,000",
    imageUrl: "https://randomuser.me/api/portraits/men/28.jpg",
    linkedInUrl: "https://www.linkedin.com/in/ethan-walker",
  },
  {
    name: "Mia Robinson",
    role: "ML Engineer",
    company: "SmartML",
    description:
      "SmartML is revolutionizing machine learning model deployment with cutting-edge optimization techniques.",
    funding: "77,000",
    imageUrl: "https://randomuser.me/api/portraits/women/27.jpg",
    linkedInUrl: "https://www.linkedin.com/in/mia-robinson",
  },
];

const Completed = () => {
  const isLg = useMediaQuery({ query: '(min-width: 1024px)' });
  const isMd = useMediaQuery({ query: '(min-width: 768px)' });
  const [visibleProfiles, setVisibleProfiles] = useState(6);

  const getGridColumns = () => {
    if (isLg) return 'lg:grid-cols-4';
    if (isMd) return 'md:grid-cols-3';
    return 'grid-cols-1';
  };

  const handleSeeMore = () => {
    setVisibleProfiles(prev => prev + 6);
  };

  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Completed Startupathon Challenges{" "}
        </h2>
        <p className="mt-2 text-lg italic">
          People like you have cracked Startupathon challenges and are now
          leading thriving startups.
        </p>
      </div>
      <div
        className={`min-h-screen bg-gray-900 p-8 grid gap-6 ${getGridColumns()}`}
        id="past-startupthon"
      >
        {profiles.slice(0, visibleProfiles).map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
        {visibleProfiles < profiles.length && (
          <button
            onClick={handleSeeMore}
            className="col-span-full mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            See More
          </button>
        )}
      </div>
    </>
  );
};

export default Completed;

