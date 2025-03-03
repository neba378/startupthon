import React from 'react'
import ChallengeCard from './ChallengeCard';

const challengeList = [
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png",
    title: "Competitive Salary",
    funding: 10000,
    description: "Competitive salary for your startup team",
    deadline: "March 7, 2025",
    imgRef: "https://www.openai.com/chatgpt",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png",
    title: "≥ $10,000 USD in Company Funding",
    funding: 10000,
    description: "Funding for your startup",
    deadline: "March 7, 2025",
    imgRef: "https://www.openai.com/chatgpt",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png",
    title: "≥ 10% Founder Equity",
    funding: 10,
    description: "Equity for your startup",
    deadline: "March 7, 2025",
    imgRef: "https://www.openai.com/chatgpt",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png",
    title: "≥ $100,000 USD AWS Credits",
    funding: 100000,
    description: "AWS Credits for your startup",
    deadline: "March 7, 2025",
    imgRef: "https://www.openai.com/chatgpt",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png",
    title: "$1,000 OpenAI Credits",
    funding: 1000,
    description: "OpenAI Credits for your startup",
    deadline: "March 7, 2025",
    imgRef: "https://www.openai.com/chatgpt",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png",
    title: "ChatGPT Integration",
    funding: 5000,
    description: "OpenAI ChatGPT integration for your startup",
    deadline: "March 7, 2025",
    imgRef: "https://www.openai.com/chatgpt",
  },
];

const Challenges = () => {
  return (
    <div className="flex flex-col items-center" id="ongoing-pro">
      <h1 className="text-5xl font-bold mb-3">
        Ongoing Startupathon Challenges
      </h1>
      <p className="text-gray-300 mb-2 text-2xl font-sans italic">
        Start your journey—tackle live challenges, earn equity, and lead the
        future.
      </p>
      <div className="flex flex-wrap justify-center">
        {challengeList.map((challenge, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-5">
            <ChallengeCard
              imgSrc={challenge.imgSrc}
              title={challenge.title}
              funding={challenge.funding}
              description={challenge.description}
              deadline={challenge.deadline}
              imgRef={challenge.imgRef}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges