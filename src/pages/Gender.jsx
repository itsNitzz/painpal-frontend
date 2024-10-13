import { useNavigate } from "react-router-dom";

import { useQuestion } from "../contexts/questionContext";
import Navbar from "../sections/Navbar";

const Gender = () => {
  const { setGender } = useQuestion();
  const navigate = useNavigate();

  const handleClick = (value) => {
    setGender(value);
    navigate("/weight-age");
  };

  return (
    <div className="bg-[url('/bg-light.png')] bg-no-repeat bg-cover  min-h-screen">
      <Navbar />
      <section className="container pb-4 pt-8 padding">
        <div
          className="bg-white/50 py-[18px] rounded-[46px] border-t-[1px] border-l-[1px] border-white/50 mb-10"
          style={{
            background:
              "linear-gradient(179.96deg, rgba(255, 255, 255, 0.25) 0.04%, rgba(87, 177, 255, 0) 130.08%)",
            boxShadow: "0px 4px 4px 0px #00000040"
          }}
        >
          <p className="text-2xl text-center text-[#4A4A4A] font-bold">Select your gender</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="relative flex flex-col items-center">
            <img alt="" className="w-full max-w-[229px] h-[667px] z-0" src="/male.png" />
            <button
              className="flex justify-center border-none bg-primary-100 hover:bg-primary-100/70 px-[105px] py-[12px]  border-[1px] rounded-[6px] transition-all mt-4"
              onClick={() => {
                handleClick("male");
              }}
            >
              <p className="text-center font-semibold text-xl text-white">Male</p>
            </button>
          </div>
          <div className="relative flex flex-col items-center">
            <img
              alt=""
              className="mt-6 w-full max-w-[229px] h-[657px] z-0"
              src="/femalefront.png"
            />
            <button
              className="flex justify-center border-none bg-primary-100 hover:bg-primary-100/70 px-[105px] py-[12px]  border-[1px] rounded-[6px] transition-all mt-4"
              onClick={() => {
                handleClick("female");
              }}
            >
              <p className="text-center font-semibold text-xl text-white">Female</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gender;
