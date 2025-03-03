import React from "react";

interface ProfileCardProps {
  name: string;
  role: string;
  company: string;
  description: string;
  funding: string;
  imageUrl: string;
  linkedInUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  company,
  description,
  funding,
  imageUrl,
  linkedInUrl,
}) => {
  return (
    <div className="bg-black border border-[#6e42ca] rounded-lg p-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-white shadow-lg">
      {/* Company Name */}
      <h1 className="text-xl font-bold text-[#6e42ca] mb-4 text-center">
        {company}
      </h1>

      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Image (3:4 Aspect Ratio) */}
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-32 object-cover rounded-lg border border-gray-500"
        />

        {/* Name, Role, Description, and LinkedIn */}
        <div className="flex flex-col text-center sm:text-left">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-300">{role}</p>

          {/* LinkedIn Button */}
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <button className="mt-2 bg-purple-600 p-2 rounded-full flex items-center justify-center w-10 h-10 cursor-pointer">
              <span className="text-white text-lg">in</span>
            </button>
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-400 text-center sm:text-left">
        {description}
      </p>

      {/* Padding Below Description */}
      <div className="mt-6">
        {/* Funding Info */}
        <p className="text-sm text-center sm:text-left">
          Initial Funding Offered:{" "}
          <span className="text-[#6e42ca] font-semibold">${funding}</span>
        </p>

        {/* Full-Width Button */}
        <button className="mt-4 bg-[#6e42ca] text-white py-2 w-full rounded-lg hover:bg-purple-700 transition cursor-pointer">
          View More Details
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
