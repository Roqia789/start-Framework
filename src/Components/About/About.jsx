
function About() {
  return (
    <>
    <div className="min-h-screen w-full mx-auto bg-mainColor center-div md:pt-0 bg-teal text-white">
            <div>
            <div className="mb-3 pt-80">
            <div className="text-center uppercase text-4xl font-extrabold">
            about component
              </div>
              <div className="flex align-middle justify-center mt-4">
            <div className="line w-[90px] h-[4px] bg-white mt-2"></div>
            <i className="fa-solid fa-star mx-3 text-white text-1xl"></i>
            <div className="line w-[90px] h-[4px] bg-white mt-2"></div>
          </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 w-[65%] m-auto">
              <p className="md:p-4">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="md:p-4">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            </div>
      </div>
  </>
  );
}
export default About;
