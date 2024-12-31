import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-1">
      <div className="flex justify-between mb-1">
        <span className="md:text-sm text-xs font-medium text-masala">{skill}</span>
        <span className="md:text-sm text-xs font-medium text-masala">{percentage}%</span>
      </div>
      <div className="w-full bg-iron rounded-full h-1">
        <motion.div
          className="bg-masala h-1 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
