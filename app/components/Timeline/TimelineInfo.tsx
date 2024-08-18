import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface TimelineInfoProps {
  index: number;
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}

const TimelineInfo: React.FC<TimelineInfoProps> = ({ index, title, description, isOpen, onToggle }) => {
  return (
    <div className="flex gap-x-5 ms-1 relative">
      <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
        <div className="relative z-10 size-8 flex justify-center items-center">
          <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-cyan-400 font-semibold text-xs uppercase rounded-full">
            {index + 1}
          </span>
        </div>
      </div>

      <div className="grow pt-0.5 pb-8 sm:pb-12">
        <div className="flex items-center cursor-pointer" onClick={onToggle}>
          <p className="text-sm lg:text-base text-neutral-400 flex-grow">
            <span className="text-white">{title}</span>
          </p>
          <span className="text-cyan-400 ml-2 transition-transform duration-300">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
        >
          <p className="text-sm lg:text-base text-neutral-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineInfo;