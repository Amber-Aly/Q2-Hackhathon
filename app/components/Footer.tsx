import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
      <div className="container mx-auto flex flex-col items-center">
        {/* Add Image */}
        <Image
          src="/G7.png"
          alt="Footer Logo"
          width={1440} 
          height={555} 
          className="rounded-lg object-cover"
        />

        {/* Footer Text */}
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>

  );
};

export default Footer;