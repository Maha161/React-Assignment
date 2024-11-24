import MainPhoto from "../../assets/images/avataaars.svg"
export default function Home() {
  return (
    <>
      <div className="home bg-main  h-calc-full">
        <div className="container flex flex-col items-center justify-center h-full text-center">
          <img className="w-48 mx-auto mb-8" src={MainPhoto} alt="" />
          <h1 className="text-white text-3xl my-0 uppercase font-bold">Start Framework</h1>
          <div className="star relative flex items-center justify-center my-2">
          <div className="title-line bg-white w-16 h-[2px] mr-3"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className="title-line bg-white w-16 h-[2px] ml-3"></div>
          </div>
          <p className="text-white text-xs">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}


