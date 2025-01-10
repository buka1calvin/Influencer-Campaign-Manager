import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CampaignCard: React.FC<Campaign> = ({
  id,
  name,
  description,
  deadline,
  status,
  createdBy,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        rotateX: 3,
        rotateY: -3,
        boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative w-full max-w-[300px] h-[200px] rounded-lg shadow-md bg-gradient-to-br from-white/80 via-gray-50 to-gray-100 p-4 flex flex-col gap-4 backdrop-blur-md border border-gray-200 overflow-hidden"
    >


      <div className="flex items-center justify-between">
        <h3 className="text-md font-semibold text-gray-800">{name}</h3>
        <span
          className={`px-2 py-1 text-xs font-medium rounded ${
            status === "Ongoing"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-gray-500"
          }`}
        >
          {status}
        </span>
      </div>

      <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

      <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
        <span>Deadline: {deadline}</span>
        <span>Created By: {createdBy}</span>
      </div>

    </motion.div>
  );
};

export default CampaignCard;
