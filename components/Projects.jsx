function Projects() {
  const github = () => {
    window.location.href = "https://github.com/AmirShabbir99";
  };
  return (
    <div className="p-5 lg:p-32 text-center ">
      <div className="text-gray-500 text-lg">Browse my recent</div>
      <div className="text-gray-900 text-5xl font-bold">Projects</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-10 lg:py-10 space-y-5 lg:space-y-0 lg:space-x-5 ">
        <div className="ring-1 rounded-3xl p-5 lg:p-5 flex gap-3 lg:gap-10 flex-col">
          <img src="/job.webp" className="rounded-3xl lg:h-[250px]" />
          <div className="text-gray-900 text-2xl lg:text-3xl font-bold ">
            Career Compass
          </div>
          <div className="flex gap-2 lg:ml-7">
            <button
              onClick={() => {
                window.open(
                  "https://github.com/AmirShabbir99/Career",
                  "_blank"
                );
              }}
              className="ring-1 rounded-full p-2  text-md lg:text-xl hover:text-white hover:bg-gray-800 transition"
            >
              Githube
            </button>
            <button
              onClick={() => {
                window.open("https://careercompass-seven.vercel.app", "_blank");
              }}
              className="ring-1 rounded-full p-2   text-md lg:text-xl hover:text-white hover:bg-gray-800 transition"
            >
              Live Demo
            </button>
          </div>
        </div>
        <div className="ring-1 rounded-3xl p-5 lg:p-5 flex gap-3 lg:gap-10 flex-col">
          <img src="/auction.jpeg" className="rounded-3xl" />
          <div className="text-gray-900 text-2xl lg:text-3xl font-bold">
            Prime Bid
          </div>
          <div className="flex gap-2 lg:ml-7">
            <button
              onClick={() => {
                window.open(
                  "https://github.com/AmirShabbir99/Auction_Portal",
                  "_blank"
                );
              }}
              className="ring-1 rounded-full p-2  text-md lg:text-xl hover:text-white hover:bg-gray-800 transition"
            >
              Githube
            </button>
            <button
              onClick={() => {
                window.open("https://auction-portal-bamd.vercel.app", "_blank");
              }}
              className="ring-1 rounded-full p-2   text-md lg:text-xl hover:text-white hover:bg-gray-800 transition"
            >
              Live Demo
            </button>
          </div>
        </div>

        <div className="ring-1 rounded-3xl p-5 lg:p-5 flex gap-3 lg:gap-10 flex-col">
          <img
            src="/foods.png"
            className="rounded-xl lg:h-[200px] lg:w-[500px] mt-5"
          />
          <div className="text-gray-900 text-2xl lg:text-3xl font-bold lg:mt-7">
            Food Recipe
          </div>
          <div className="flex gap-2 lg:ml-7">
            <button
              onClick={() => {
                window.open(
                  "https://github.com/AmirShabbir99/Food_Recipe",
                  "_blank"
                );
              }}
              className="ring-1 rounded-full p-2  text-md lg:text-xl hover:text-white hover:bg-gray-800 transition"
            >
              Githube
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://bejewelled-travesseiro-7fdaa9.netlify.app",
                  "_blank"
                );
              }}
              className="ring-1 rounded-full p-2   text-md lg:text-xl hover:text-white hover:bg-gray-800 transition"
            >
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
