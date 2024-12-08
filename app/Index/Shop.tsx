

import Navbar from "../components/Navbar";


const Shop = () => {
    return (
        <Navbar />
    )
    // Array of image data
    const images = [
      { src: "/S1.png", alt: "SHOP", height: 316 },
      { src: "/S2.png", alt: "Picture 2", height: 100 },
      { src: "/S3.png", alt: "Picture 3", height: 1808 },
      { src: "/S4.png", alt: "Picture 4", height: 300 },
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

    export default Shop;


