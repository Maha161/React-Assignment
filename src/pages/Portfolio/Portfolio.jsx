import { useState } from "react";
import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";
import img4 from "../../assets/images/poert1.png";
import img5 from "../../assets/images/port2.png";
import img6 from "../../assets/images/port3.png";
import Card from "../../components/Card/Card.jsx";
import ImgCard from "../../components/ImgCard/ImgCard.jsx";


export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null); 

  const imageList = [
    { id: 1, src: img1, alt: "Web 1" },
    { id: 2, src: img2, alt: "Mobile App 1" },
    { id: 3, src: img3, alt: "Mobile App 2" },
    { id: 4, src: img4, alt: "Web App 2" },
    { id: 5, src: img5, alt: "Web App 3" },
    { id: 6, src: img6, alt: "Web App 4" },
  ];

  const handleCardClick = (img) => {
    setSelectedImg(img); 
  };

  const closeModal = () => {
    setSelectedImg(null); 
  };

  return (
    <>   
     <div className="portfolio py-6 bg-gray-100 ">
     <div className="container  flex items-center flex-col justify-center h-screen mt-5">
        <div className="title text-center pt-5">
          <h2 className="text-4xl text-gray-800 font-extrabold uppercase mb-4">
            Portfolio Component
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imageList.map((img) => (
            <Card key={img.id} img={img} onCardClick={handleCardClick} />
          ))}
        </div>
     </div>
      {selectedImg && <ImgCard img={selectedImg} closeModal={closeModal} />}
     </div>
    </>
  );
}
