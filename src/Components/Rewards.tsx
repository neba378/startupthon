import React from 'react';
import RewardCard from './RewardCard';

const rewards = [
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png",
    title: "Competitive Salary",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png",
    title: "≥ $10,000 USD in Company Funding",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png",
    title: "≥ 10% Founder Equity",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png",
    title: "≥ $100,000 USD AWS Credits",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png",
    title: "$1,000 OpenAI Credits",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae3f61195ced8cfc850c8_ibm.png",
    title: "$120,000 USD IBM Cloud Credits",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f508ad153ee0fc9169_icons8-twilio-is-a-cloud-communications-platform-as-a-service-company-100.png",
    title: "$2,500 Twilio Credits",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a4146_icons8-airtable-100.png",
    title: "$2,000 Airtable Credits",
  },
];

const Rewards = () => {
  return (
    <div className="hidden md:block">
      <h1 className="text-3xl text-center mb-5">
        Startupathon Success Comes with Extraordinary Rewards
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-5 gap-4 p-5">
          {rewards.slice(0, 5).map((reward, index) => (
            <div key={index} className="flex flex-col items-center">
              <RewardCard imgSrc={reward.imgSrc} title={reward.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="grid grid-cols-3 gap-4 p-5">
          {rewards.slice(5).map((reward, index) => (
            <div key={index} className="flex flex-col items-center">
              <RewardCard imgSrc={reward.imgSrc} title={reward.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rewards;