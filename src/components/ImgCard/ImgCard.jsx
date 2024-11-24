export default function ImgCard({ img, closeModal }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 " onClick={closeModal}>
          <img
            src={img.src}
            alt={img.alt}
            className="w-96 object-contain rounded-md"
          />
        </div>
  
    );
  }
  