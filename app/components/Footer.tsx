import React from 'react';

const Footer = () => {
  return (
      <div className="container mx-auto flex flex-col items-center">
        {/* Add Image */}
        <img
          src="/G7.png"
          alt="Footer Logo"
          className="`w-(1440px) h-(555px) rounded-lg object-cover"
        />

        {/* Footer Text */}
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>

  );
};

export default Footer;