import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen flex justify-center items-center bg-[#0a192f] p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/ecadd84e-5729-47a8-9e31-62b59594c279"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            # Submit the form bellow or shoot me an{" "}
            <a
              rel="noreferrer"
              href="mailto:gabedavalevan31@gmail.com"
              className="text-blue-400"
            >
              email
            </a>
          </p>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
        </div>
        <input
          className="bg-[#ccd6f6]  my-4 p-2 "
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6]  p-2 "
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center ">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
