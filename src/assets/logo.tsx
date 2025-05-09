import React from 'react';
import { Eye } from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Eye className="w-8 h-8 text-[#07ef5c]" />
      <span className="font-bold text-xl text-white">VISION<span className="text-[#07ef5c]">CORE</span></span>
    </div>
  );
};

export default Logo;