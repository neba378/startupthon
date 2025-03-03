import React from "react";

interface Props {
  imgSrc: string;
  title: string;
}

const RewardCard = ({ imgSrc, title }: Props) => {
  return (
    <div className="w-36 h-40 p-2 m-1 flex items-center align-middle flex-col rounded shadow-[2px_4px_6px_rgba(66,44,116,1),-1px_-1px_3px_rgba(66,44,116,1)]">
      <img
        src={imgSrc}
        className="w-15 h-15 object-contain mx-auto mt-2"
        alt=""
      />
      <h3 className="text-center mt-2 text-sm font-bold">{title}</h3>
    </div>
  );
};

export default RewardCard;
