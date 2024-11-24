export default function Card({ img, onCardClick }) {
  return (
    <div className="col-md-6 col-lg-4 portfolio-card">
      <div className="relative overflow-hidden rounded-md">
        <img
          src={img.src}
          alt={img.alt}
          className="w-full object-contain cursor-pointer"
        />
        <div className="absolute inset-0 flex justify-center bg-main opacity-0 hover:opacity-90 transition-opacity duration-1000 ease-in-out" 
         onClick={() => onCardClick(img)}>
          <i className="text-white fa-solid fa-plus fa-6x opacity-100 my-auto"></i>
        </div>
      </div>
    </div>
  );
}
