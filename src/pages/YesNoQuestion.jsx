import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useQuestion } from "../contexts/questionContext";
import Navbar from "../sections/Navbar";

const YesNoQuestion = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [active, setActive] = useState(false);
  const { answer } = useQuestion();
  const navigate = useNavigate();

  const handleClick = (index, answer) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [index]: answer
    }));
  };

  const questions = [
    "None of my business, let somebody else take care of it",
    "Ask the person to leave the facility",
    "Escort the person to the security and raise a security incident",
    "Raise a security incident and go back doing your work",
    "Raise a security incident and go back doing your work",
    "Raise a security incident and go back doing your work",
    "Escort the person to the security and raise a security incident",
    "Raise a security incident and go back doing your work",
    "Raise a security incident and go back doing your work",
    "Escort the person to the security and raise a security incident"
  ];

  useEffect(() => {
    if (answer.SocialConcerned !== "") setActive(true);
  }, [answer]);

  return (
    <div className="bg-[url('/bg-light.png')] bg-no-repeat bg-cover  min-h-screen">
      <Navbar />
      <div className="padding">
        <section className="container items-center pb-5 max-w-[1100px]">
          <div
            className="bg-white/50 py-[18px] rounded-[46px] border border-[#1935CA] my-10"
            style={{
              background:
                "linear-gradient(179.96deg, rgba(255, 255, 255, 0.25) 0.04%, rgba(87, 177, 255, 0) 130.08%)",
              boxShadow: "0px 4px 4px 0px #00000040"
            }}
          >
            <p className="text-2xl text-center text-black font-medium">
              4. Answer these questions about your symptoms
            </p>
          </div>

          <div className="custom-scrollbar flex flex-col gap-[13px] max-h-[60vh] overflow-auto px-10">
            {questions.map((text, index) => (
              <div
                key={index}
                className="bg-white text-[#4A4A4A] hover:bg-white/80 py-[10px] px-[61px] rounded-lg border-[0.5px] border-primary-100 transition-all flex items-center justify-between"
              >
                {text}
                <div className="flex items-center gap-10">
                  <div
                    className={`text-xl rounded-full px-5 border-[3px] cursor-pointer ${
                      selectedAnswers[index] === "yes"
                        ? "border-primary-100 text-primary-100"
                        : "border-[#4A4A4A]"
                    }`}
                    onClick={() => handleClick(index, "yes")}
                  >
                    Yes
                  </div>
                  <div
                    className={`text-xl rounded-full px-5 border-[3px] cursor-pointer ${
                      selectedAnswers[index] === "no"
                        ? "border-primary-100 text-primary-100"
                        : "border-[#4A4A4A]"
                    }`}
                    onClick={() => handleClick(index, "no")}
                  >
                    No
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-between flex-wrap items-center gap-4 pb-5">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="text-black hover:text-primary-100"
          >
            Back
          </button>

          <div className="flex flex-wrap items-center gap-[10px]">
            {active ? (
              <Link
                to="/yes-no"
                className="py-3 px-[21.5px] bg-white hover:bg-primary-100 rounded-md font-semibold hover:text-white transition-all border border-[#1935CA]"
              >
                Next Question
              </Link>
            ) : (
              <button
                disabled
                className="py-3 px-[21.5px] bg-white rounded-md font-semibold border border-[#1935CA]"
              >
                Next Question
              </button>
            )}
            <p className="text-black">Questions 3/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YesNoQuestion;
