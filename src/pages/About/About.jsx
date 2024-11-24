export default function About() {
  return (
    <>
      <div className="about bg-main h-calc-full">
        <div className="container flex flex-col items-center justify-center h-full">
            <h1 className="text-white text-3xl uppercase font-bold py-3">About Component</h1>
            <div className="star relative flex items-center justify-center pb-3">
            <div className="title-line bg-white w-16 h-[2px] mr-3"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className="title-line bg-white w-16 h-[2px] ml-3"></div>
            </div>
            <div className="about-content-text text-white text-xs flex gap-6 px-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
          </div>
        </div>
      </div>
    </>
  );
}

