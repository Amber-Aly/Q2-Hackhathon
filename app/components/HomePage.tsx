import React from 'react';

const HomePage = () => {
  
  // Array of image data
  const images = [
    { src: "/G1.png", alt: "Rocket single seater", height: 1000 },
    { src: "/G2.png", alt: "Picture 2", height: 672 },
    { src: "/G3.png", alt: "Picture 3", height: 777 },
    { src: "/G4.png", alt: "Picture 4", height: 799 },
    { src: "/G5.png", alt: "Picture 5", height: 944 },
    { src: "/G6.png", alt: "Picture 6", height: 450 },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`w-[1440px] h-[${image.height}px] rounded-lg object-cover`}
        />
        
      ))}
    </div>
    
  );
};

export default HomePage;
