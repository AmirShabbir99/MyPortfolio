function Experience() {
  return (
    <div
      className="experience text-center p-5 lg:p-32 gap-5 lg:gap-10 "
      id="skills"
    >
      <div className="text-gray-500 text-lg">Explore My</div>
      <div className="text-gray-900 text-5xl font-bold">Skills</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:space-y-0 lg:space-x-10 py-10">
        <div className="ring-1 p-10 rounded-3xl py-10 ">
          <div className="text-gray-900 p text-3xl font-bold mb-7">
            Frontend Development
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3">
            <div className="flex py-5">
              <img src="/checkmark.png" className="h-10" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">HTML</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src="/checkmark.png" className="h-10" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">CSS</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src="/checkmark.png" className="h-10" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">
                  JAVASCRIPT
                </div>
              </div>
            </div>
            <div className="flex py-5">
              <img src="/checkmark.png" className="h-10" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">REACT JS</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src="/checkmark.png" className="h-10" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">
                  Tailwind CSS
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ring-1 p-10 rounded-3xl py-10 ">
          <div className="text-gray-900 text-3xl font-bold mb-7">
            Backend Development
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3">
            <div className="flex py-5">
              <img src="/checkmark.png" className="h-10" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">Node Js</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src="/checkmark.png" className="h-10" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">
                  Express Js
                </div>
              </div>
            </div>
            <div className="flex py-5">
              <img src="/checkmark.png" className="h-10" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold"> MongoDB</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src="/checkmark.png" className="h-10" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">Redux </div>
              </div>
            </div>
            <div className="flex py-5">
              <img src="/checkmark.png" className="h-10" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">SQL</div>
              </div>
            </div>
            <div className="flex py-5">
              <img src="/checkmark.png" className="h-10" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-gray-900 text-md font-bold">Rest API</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
