import React from "react";

interface ProfileCardProps {
  name: string;
  role: string;
  company: string;
  description: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  company,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-[#0b061f] border border-[#6e42ca] rounded-2xl p-5 text-white w-72 md:w-80 shadow-lg flex flex-col">
      {/* Image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Content */}
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-400">{role}</p>
        <p className="text-sm text-gray-500">{company}</p>
        <p className="text-xs text-gray-400 mt-2">{description}</p>
      </div>

      {/* LinkedIn Button */}
      <button className="mt-4 bg-purple-700 p-2 rounded-full w-8 h-8 flex items-center justify-center">
        <span className="text-white text-lg font-bold">in</span>
      </button>
    </div>
  );
};

export default ProfileCard;
