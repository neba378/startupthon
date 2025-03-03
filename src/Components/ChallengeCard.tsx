import React from 'react'

interface ChallengeCardProps {
  imgSrc: string;
  title: string;
  funding: number;
  description: string;
  deadline: string;
  imgRef: string
}

const ChallengeCard = (challengeDiscription: ChallengeCardProps) => {
    return (
    <div className="w-auto h-auto p-5 flex items-center align-middle flex-col rounded-3xl border-1 border-[#533892] hover:shadow-[4px_8px_12px_rgba(66,44,116,1),-2px_-2px_6px_rgba(66,44,116,1)] space-y-2 lg:space-y-4 hover:scale-105 transition-transform duration-300">
      <a href={challengeDiscription.imgRef} className="h-12 w-12 mb-2 cursor-pointer">
        <img
          src={challengeDiscription.imgSrc}
          alt="Challenge"
          className="h-full w-full"
        />
      </a>
      <h2 className="text-md md:text-lg lg:text-xl font-bold mb-2">
        {challengeDiscription.title}
      </h2>
      <p className="text-xs md:text-sm lg:text-base font-bold text-[#885fed] mb-2">
        Initial Funding Offered: <span className='font-extrabold'>${challengeDiscription.funding}</span>
      </p>
      <p className="text-xs md:text-sm lg:text-base text-gray-300 mb-2">
        {challengeDiscription.description}
      </p>
      <div className="flex items-center mb-2">
        <img
        src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a08bb798234106f88d71f_burning.png"
        alt="on fire"
        className="h-6 w-6 "
        />
        <p className="text-sm md:text-base lg:text-lg font-bold text-[#885fed]">
        Deadline approaching! Apply by {challengeDiscription.deadline}!
        </p>
      </div>
      <a href={challengeDiscription.imgRef} className="text-[15px] bg-gradient-to-r from-[#402d6f] to-[#7a56d6] px-2 py-1 rounded-lg w-full relative overflow-hidden cursor-pointer text-center">
        View Challenge Details
        <span className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
      </a>
    </div>
    );
};

export default ChallengeCard
