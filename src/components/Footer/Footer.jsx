
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="upper-footer bg-slate-700 py-10">
          <div className="container flex items-start py-5 text-white justify-between gap-10">
            {/* Location Part */}
            <div className="part-1 flex flex-col items-center">
              <h3 className="uppercase text-xl pb-1">Location</h3>
              <p className="text-xs pb-4">2215 John Daniel Drive</p>
              <p className="text-xs">Clark, MO 65243</p>
            </div>

            {/* Around The Web Part */}
            <div className="part-2 flex flex-col items-center">
              <h3 className="uppercase text-xl pb-2">Around The Web</h3>
              <ul className="flex gap-2">
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="fa-brands fa-facebook p-2 text-xs border border-white rounded-full"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <i className="fa-brands fa-twitter p-2 text-xs border border-white rounded-full"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <i className="fa-brands fa-linkedin p-2 text-xs border border-white rounded-full"></i>
                  </a>
                </li>
                <li>
                  <a href="https://globle-game.com/">
                    <i className="fa-solid fa-globe p-2 text-xs border border-white rounded-full"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* About Freelancer Part */}
            <div className="part-3 flex flex-col items-center">
              <h3 className="uppercase text-xl pb-1">About Freelancer</h3>
              <p className="text-xs">
                Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>
          </div>
        </div>
        <div className="down-footer bg-darkGray text-center py-4">
          <p className="text-white text-xs">Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
}
