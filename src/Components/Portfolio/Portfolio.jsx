import poet1 from "../../assets/imgs/portfolio/poert1.png"
import poet2 from "../../assets/imgs/portfolio/port2.png"
import poet3 from "../../assets/imgs/portfolio/port3.png"
import { useState } from "react";

function Portfolio() {

  const [show, setShow] =useState(false);
  const [src, setSrc] =useState("");

  return (
 <>
    <div className="min-h-screen w-10/12 mx-auto">   
        <div className="w-full mx-auto text-slate-700 mb-5 text-center mt-9">
          <p className=" uppercase text-4xl font-bold">portfolio component</p>
          <div className="flex align-middle justify-center mt-4">
            <div className="line w-[90px] h-[4px] mt-2 bg-slate-700"></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className="line w-[90px] h-[4px] mt-2 bg-slate-700"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 w-[85%] mx-auto lg:grid-cols-3 gap-8">
          <div
            onClick={() => {
              setShow(true);
              setSrc(poet1);
            }}
            className="rounded-lg overflow-hidden relative cursor-pointer mb-3 me-3"
          >
            <img src={poet1} className="w-full" alt="poet"/>
            <div className="overlay absolute top-0 left-0 w-full h-full bg-mainColor flex justify-center items-center opacity-0 duration-500 hover:opacity-85 hover:bg-emerald-600">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(poet2);
            }}
            className="rounded-lg overflow-hidden relative cursor-pointer mb-3 me-3"
          >
            <img src={poet2} className="w-full" alt="poet"/>
            <div className="overlay absolute top-0 left-0 w-full h-full bg-mainColor flex justify-center items-center opacity-0 duration-500 hover:opacity-85 hover:bg-emerald-600">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(poet3);
            }}
            className="rounded-lg overflow-hidden relative cursor-pointer mb-3 me-3"
          >
            <img src={poet3} className="w-full" alt="poet"/>
            <div className="overlay absolute top-0 left-0 w-full h-full bg-mainColor flex justify-center items-center opacity-0 duration-500 hover:opacity-85 hover:bg-emerald-600">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(poet1);
            }}
            className="rounded-lg overflow-hidden relative cursor-pointer mt-3 me-3"
          >
            <img src={poet1} className="w-full" alt="poet"/>
            <div className="overlay absolute top-0 left-0 w-full h-full bg-mainColor flex justify-center items-center opacity-0 duration-500 hover:opacity-85 hover:bg-emerald-600">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(poet2);
            }}
            className="rounded-lg overflow-hidden relative cursor-pointer mt-3 me-3"
          >
            <img src={poet2} className="w-full" alt="poet"/>
            <div className="overlay absolute top-0 left-0 w-full h-full bg-mainColor flex justify-center items-center opacity-0 duration-500 hover:opacity-85 hover:bg-emerald-600">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(poet3);
            }}
            className="rounded-lg overflow-hidden relative cursor-pointer mt-3 me-3"
          >
            <img src={poet3} className="w-full" alt="poet" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-mainColor flex justify-center items-center opacity-0 duration-500 hover:opacity-85 hover:bg-emerald-600">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div
            onClick={(e) => e.target.id == "screen" && setShow(false)}
            id="screen"
            className={`screen bg-navColor/25 fixed top-0 left-0 h-full w-full flex justify-center items-center z-50 ${
              show ? "" : "hidden"
            }`}
          >
            <img src={src} className=" w-3/4 md:w-2/5" alt="" />
          </div>
        </div>
    </div>
 </>
);
}
export default Portfolio;