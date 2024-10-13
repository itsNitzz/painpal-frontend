import Navbar from "../sections/Navbar";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "../contexts/questionContext";
import { useEffect, useState, useRef } from "react";
import useQuestionsHook from "../hooks/questions";
import { FETCH_PAIN_RESULT } from "../api/configure-apis";
const SocialConcern = () => {
     const [selectedOptions, setSelectedOptions] = useState([]);
     const { answer, setSocialConcerned, setLoading, loading } = useQuestion();
     const navigate = useNavigate();

     const {
          setActiveQuestionIndex,
          activeQuestionIndex,
          activeQuestion,
          choices,
          isCompleted,
          totalQuestions,
          setQuestions
     } = useQuestionsHook();

     const finalAnswers = useRef({});

     useEffect(() => {
          setQuestions(answer.bodyPartQuestions['shoulder']);
     }, [answer])

     const handleClick = (option, text) => {
          setSocialConcerned(text);
          setSelectedOptions(prevOptions => {
               if (prevOptions.includes(option)) {
                    return prevOptions.filter(item => item !== option);
               }
               return [...prevOptions, option];
          });

     };

     const nextQuestionHandler = () => {
          finalAnswers.current[activeQuestion] = answer.SocialConcerned;
          if (isCompleted) {
               finalAnswers.current.gender = answer.Gender;
               finalAnswers.current.ageRange = answer.AgeRange;
               finalAnswers.current.weightType = answer.WeightType;
               console.log(finalAnswers.current);
               setLoading(true);

               const getPainData = async () => {
                    const response = await fetch(FETCH_PAIN_RESULT, {
                         method: 'POST',
                         body: JSON.stringify(finalAnswers.current),
                         headers: {
                              'Content-Type': 'application/json'
                         }
                    });

                    if (!response.ok) throw new Error('Failed to fetch data');

                    const data = await response.json();
                    setLoading(false);
                    console.log(data);

                    setSelectedOptions([]);
                    setSocialConcerned([]);
                    navigate('/your-diagnosis');

               }
               getPainData().catch(err => {
                    setLoading(false);
                    console.log(err);
               });

               return;
          }
          setActiveQuestionIndex(activeQuestionIndex + 1);
          setSelectedOptions([]);
          setSocialConcerned([]);

     }

     const onPreviousQUestionHandler = () => {
          if (activeQuestionIndex <= 0) {
               navigate(-1);
               return;
          }
          setActiveQuestionIndex(activeQuestionIndex - 1);
     }

     return (
          <div className="bg-[url('/bg-light.png')] bg-no-repeat bg-cover  min-h-screen">
               <Navbar />
               <div className="padding">
                    <section className="container items-center pb-5 max-w-[1100px] ">
                         <div
                              className="bg-white/50 py-[18px] rounded-[46px] border border-[#1935CA] my-10"
                              style={{
                                   background:
                                        "linear-gradient(179.96deg, rgba(255, 255, 255, 0.25) 0.04%, rgba(87, 177, 255, 0) 130.08%)",
                                   boxShadow: "0px 4px 4px 0px #00000040",
                              }}
                         >
                              <p className="text-2xl text-center text-black font-medium">
                                   {activeQuestion}
                              </p>
                         </div>

                         <div className="custom-scrollbar flex flex-col gap-[13px] max-h-[60vh] overflow-auto px-10 w-full">
                              {choices && choices.map((text, index) => (
                                   <button
                                        key={text}
                                        className={`${selectedOptions.includes(`option${index + 1}`)
                                             ? "bg-primary-100 text-white"
                                             : "bg-white text-[#4A4A4A] hover:bg-white/80"
                                             } py-[10px] px-[61px] rounded-lg border-[0.5px] border-primary-100 transition-all`}
                                        onClick={() => handleClick(`option${index + 1}`, text)}
                                   >
                                        {text}
                                   </button>
                              ))}
                         </div>
                    </section>
                    <div className="flex justify-between flex-wrap items-center gap-4 pb-5">
                         <button onClick={onPreviousQUestionHandler}
                              className="text-black hover:text-primary-100"
                         >
                              Back
                         </button>

                         <div className="flex flex-wrap items-center">
                              {<button disabled={loading}
                                   onClick={nextQuestionHandler}
                                   className={`active:bg-[#00C0FF] active:border-none active:text-white py-3 px-[21.5px] ${activeQuestionIndex + 1 === totalQuestions ? 'bg-[#00C0FF] text-white border-none mr-10' : 'bg-white text-black  border border-[#1935CA]'} rounded-md font-semibold`}>{activeQuestionIndex + 1 === totalQuestions ? 'Submit Answers' : 'Next Question'}</button>}
                              <p>
                                   {activeQuestionIndex + 1 === totalQuestions ? '' : `Questions ${activeQuestionIndex + 1}/${totalQuestions}`}
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SocialConcern;
