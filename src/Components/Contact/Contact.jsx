
function Contact() {
  return (
  <>
 
  <div className="min-h-screen">   
        <div className=" text-slate-700 mb-5 mt-9 text-center w-full mx-auto">
          <p className=" uppercase text-4xl font-bold">conatct section</p>
          <div className="flex align-middle justify-center mt-4">
            <div className="line w-[90px] h-[4px] mt-2 bg-slate-700"></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className="line w-[90px] h-[4px] mt-2 bg-slate-700"></div>
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-28">
        <div className="relative">
            <input type="text" id="filled_success" aria-describedby="filled_success_help" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
            <label htmlFor="filled_success" className="absolute text-sm font-semibold  dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:text-lg">UserName</label>
        </div>
        <div className="relative mt-10">
            <input type="text" id="filled_success" aria-describedby="filled_success_help" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
            <label htmlFor="filled_success" className="absolute text-sm font-semibold  dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:text-lg">UserAge</label>
        </div>
        <div className="relative mt-10">
            <input type="text" id="filled_success" aria-describedby="filled_success_help" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
            <label htmlFor="filled_success" className="absolute text-sm font-semibold  dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:text-lg">UserEmail</label>
        </div>
        <div className="relative mt-10">
            <input type="text" id="filled_success" aria-describedby="filled_success_help" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
            <label htmlFor="filled_success" className="absolute text-sm font-semibold  dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:text-lg">UserPassword</label>
        </div>
        <button type="button" className="mt-10 text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-teal-500 focus:outline-none">Send Message</button>
        </div>
    </div>
    
  </>
);
}
export default Contact;