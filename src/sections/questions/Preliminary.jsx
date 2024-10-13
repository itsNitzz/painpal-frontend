import { useState } from "react";
import Navbar from "../Navbar"; // Adjusted import path based on your project structure
import { Link } from "react-router-dom";

const Preliminary = () => {
  const [selected, setSelected] = useState("");

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="bg-[url('/bg-light.png')] bg-no-repeat bg-cover min-h-screen">
      <Navbar />
      <div className="padding"> {/* Adjusted padding */}
        {/* Existing Preliminary Content */}
        <div
          className="bg-white/50 py-[18px] rounded-[46px] border border-[#1935CA] my-10"
          style={{
            background:
              "linear-gradient(179.96deg, rgba(255, 255, 255, 0.25) 0.04%, rgba(87, 177, 255, 0) 130.08%)",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <p className="text-2xl text-center text-black font-medium">
            -------- Video Test
          </p>
        </div>
        <p className="text-center text-xl font-medium mb-5">
          Watch the video below and do the movement tests as shown. Answer the
          questions{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[auto_300px] gap-8">
          <div className="bg-white border-[#1935CA] border rounded-[10px] min-h-[400px] overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/DWmGArQBtFI?si=W-QCSqxmIkrNm2bW"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full aspect-video"
            ></iframe>
          </div>

          <div className="">
            <div className="bg-white border-[#1935CA] border p-3 rounded-[10px] text-lg">
              Do you feel the pain when you do this as shown in the video
            </div>
            <div></div>
            <div className="flex flex-col gap-4 mt-10">
              <button
                className={`px-10 py-3 rounded-lg text-lg whitespace-nowrap w-full border border-[#1935CA] ${
                  selected === "Yes"
                    ? "bg-primary-100 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => handleSelect("Yes")}
              >
                Yes
              </button>

              <button
                className={`px-10 py-3 rounded-lg text-lg whitespace-nowrap w-full border border-[#1935CA] ${
                  selected === "No"
                    ? "bg-primary-100 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => handleSelect("No")}
              >
                No
              </button>

              <button
                className={`px-10 py-3 rounded-lg text-lg whitespace-nowrap w-full border border-[#1935CA] ${
                  selected === "Not Sure"
                    ? "bg-primary-100 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => handleSelect("Not Sure")}
              >
                Not Sure
              </button>
            </div>
          </div>
        </div>

        {/* Submit Answer Button and Question Count */}
        <div className="flex justify-end items-center gap-4 mt-10">
          <Link to="/test-result">
            <button
              className="py-3 px-[21.5px] bg-primary-100 hover:bg-primary-100/50 rounded-md font-semibold text-white transition-all"
            >
              Submit Answer
            </button>
          </Link>
          <p className="text-black">
            Questions 1 / 1
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preliminary;
