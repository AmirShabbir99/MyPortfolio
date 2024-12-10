import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fuuh5q",
        "template_uduy71k",
        e.target,
        "7nJVgsVNuINo2c3yt"
      )
      .then(
        (result) => {
          console.log("Email successfully sent! ", result.text);
          alert("Message Sent");
        },
        (error) => {
          console.log("Failed to send email: ", error.text);
        }
      );
  };

  return (
    <>
      <div className="about p-5 lg:p-32 pb-0 text-center">
        <div className="text-gray-500 text-lg">to</div>
        <div className="text-gray-900 text-5xl font-bold">Contact</div>

        <div className="flex justify-center items-center h-screen bg-white">
          <div className="ring-1 w-full max-w-md p-8 bg-white rounded shadow">
            <h2 className="text-lg text-gray-600 text-center mb-6">
              <span className="text-gray-800 font-semibold">Let's</span> Work
              Together
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className=" w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 "
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                className=" w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 "
              />
              <textarea
                name="message"
                placeholder="Enter Message"
                className=" w-full px-4 py-2 border rounded focus:outline-none focus:ring-2  h-24 resize-none"
              ></textarea>
              <div className=" bg-gray-200  rounded">
                <input
                  type="submit"
                  value="Send"
                  className="w-full py-2 hover:text-white  hover:bg-gray-600 cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex justify-center items-center p-5">
          <div className="ring-1 rounded-3xl p-5 flex gap-10 bg-gray-100">
            <div className="flex justify-center items-center">
              <img src="/email.png" className="h-5 lg:h-10" />
              <div className="hover:text-red-700 transition text-l lg:text-3xl text-semi-bold">
                m.amirshabbir99@gmail.com
              </div>
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/amir-shabbir-74404b280/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2BIpBlYrfQOWNIbKr%2BZzGPg%3D%3D",
                  "_blank"
                );
              }}
              className="flex justify-center items-center hover:bg-gray-200"
            >
              <img src="/linkedin.png" className="h-5 lg:h-7 mr-2" />
              <div className="hover:text-red-700 transition text-xl lg:text-3xl text-semi-bold">
                linkedin.com
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm lg:text-xl text-gray-600 p-10 lg:pb-20">
          Copyright <b>©</b> 2023 Muhammad Amir Shabbir. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Contact;
