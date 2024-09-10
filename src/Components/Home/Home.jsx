import avatar from "../../assets/imgs/avataaars.svg";

function Home() {
  return (
    <>
      <div className="bg-teal h-screen">
        <div className="py-56">
          <img src={avatar} alt="avatar" className="size-64 mx-auto" />
          <h1 className="text-center text-5xl font-bold text-white uppercase mt-5">start Framework</h1>
          <div className="flex align-middle justify-center mt-4">
            <div className="line w-[90px] h-[4px] bg-white mt-2"></div>
            <i className="fa-solid fa-star mx-3 text-white text-1xl"></i>
            <div className="line w-[90px] h-[4px] bg-white mt-2"></div>
          </div>
          <p className="text-center text-white mt-5">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
export default Home;
