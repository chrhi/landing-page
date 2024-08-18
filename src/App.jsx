function App() {
  return (
    <>
      <div className="w-full h-[40px] flex items-center justify-center bg-[#FFD700]">
        <span className="text-lg font-bold text-black">
          we have discount on all products
        </span>
      </div>

      <div className="w-full h-[70px] border-b shadow ">
        <div className="w-full h-full flex items-center justify-between max-w-5xl mx-auto">
          <div className="w-fit h-full flex items-center justify-start gap-x-4">
            <span className="font-bold text-3xl">EasyTrade</span>

            <span>Home</span>
            <span>Products</span>
            <span>contact us</span>
          </div>
          <div className="w-[300px] h-full flex items-center justify-end">
            <button className=" bg-[#FFD700] hover:bg-[#c9b12a] hover:scale-105 transition-all duration-200 font-bold text-xl text-black  w-[150px] h-[50px] rounded-2xl cursor-pointer">
              sign in
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[calc(100vh-110px)] grid grid-cols-2  max-w-5xl mx-auto    py-12">
        <div className="w-full h-full flex flex-col gap-y-8">
          <h2 className="text-5xl font-bold text-start">
            Start Making money right away just give us 1000$ and in 3 days we
            will give you 1M $
          </h2>

          <span className="text-xl text-gray-500 text-start">
            and we are not scummers
          </span>

          <button className=" bg-[#FFD700] hover:bg-[#c9b12a] hover:scale-105 transition-all duration-200 font-bold text-xl text-black  w-[250px] h-[50px] rounded-2xl cursor-pointer">
            start trading now
          </button>
        </div>
        <div className="w-full h-full">
          <img
            alt="big image"
            src={"../images/tailwind-css.png"}
            className="w-full  object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default App;
