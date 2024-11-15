import Navbar from "../sections/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useQuestion } from "../contexts/questionContext";
import { FETCH_PAIN_QUESTIONS } from "../api/configure-apis";

const WeightAge = () => {
     const { answer, setWeightType, setAgeRange, setBodyPartQuestions } = useQuestion();
     const navigate = useNavigate();

     const onHandlePainPointClick = (painPoint) => {
          const getPainData = async () => {
               const response = await fetch(FETCH_PAIN_QUESTIONS);
               if (!response.ok) throw new Error('Failed to fetch data');
               const questionsData = await response.json();
               console.log(questionsData);
               setBodyPartQuestions( questionsData );
          }
          getPainData().catch(err => {
               console.log(err);
          });
     };

     return (
          <div className="bg-[url('/bg-light.png')] bg-no-repeat bg-cover  min-h-screen">
               <Navbar />
               <div className="padding">
                    <div className="xl:grid flex flex-col xl:grid-cols-3 gap-[33px] place-items-center padding">
                         {
                              answer.Gender && answer.Gender === "male" ? (<>
                                   <div>
                                        <img
                                             src="/male.png"
                                             alt="male body frontside"
                                             className="w-full max-w-[280px] h-[700px] flex-shrink-0 order-2 xl:order-none"
                                             useMap="#malefront"
                                        />
                                        <map name="malefront">
                                             <area className="cursor-pointer" shape="circle" coords="70,120,30" alt="shoulder" onClick={() => onHandlePainPointClick('shoulder')} />
                                        </map>
                                   </div>
                                   <img
                                        src="/maleback.png"
                                        alt="male body backside"
                                        className="w-full max-w-[280px] h-[700px] flex-shrink-0 order-3 xl:order-none"
                                   />
                              </>) : (
                                   <>
                                        <div>
                                             <img
                                                  src="/femalefront.png"
                                                  alt="female body frontside"
                                                  className="w-full max-w-[280px] h-[700px] flex-shrink-0 order-2 xl:order-none"
                                                  useMap="#femaleFront"
                                             />
                                             <map name="femaleFront">
                                                  <area className="cursor-pointer" shape="circle" coords="70,120,30" alt="shoulder" onClick={() => onHandlePainPointClick('shoulder')} />
                                             </map>
                                        </div>
                                        <img
                                             src="/femaleback.png"
                                             alt="female body backside"
                                             className="w-full max-w-[280px] h-[700px] flex-shrink-0 order-3 xl:order-none"
                                        />
                                   </>
                              )
                         }
                         <div className="flex flex-col justify-between h-full order-1 xl:order-none col-span-2 xl:col-auto w-full">
                              <div className="h-full grid w-full place-items-center">
                                   <div className="w-full ">
                                        <div
                                             className="bg-white/50 py-6 rounded-[46px] mb-20"
                                             style={{
                                                  background:
                                                       "linear-gradient(179.96deg, white 0.04%, #ECF6FF 130.08%)",
                                                  boxShadow: "0px 4px 4px 0px #00000040",
                                             }}
                                        >
                                             <p className="text-xl text-center text-[#4A4A4A] font-bold">
                                                  Click on exact pain location
                                             </p>
                                        </div>
                                        <div className="flex items-center gap-[18px]">
                                             <label className="whitespace-nowrap block font-medium text-xl text-[#4A4A4A] min-w-[120px]">
                                                  Age range
                                             </label>
                                             <div className="relative w-full">
                                                  <select onChange={(e) => setAgeRange(e.target.value)} defaultValue="select" className="w-full p-5 border-none text-black rounded-[10px] bg-white outline-none focus:outline-none ring-0 focus:ring-0 appearance-none pr-10">
                                                       <option value="select" disabled>
                                                            Select
                                                       </option>
                                                       <option value="0-9">0 - 9</option>
                                                       <option value="10-19">10 - 19</option>
                                                       <option value="20-29">20 - 29</option>
                                                       <option value="30-39">30 - 39</option>
                                                       <option value="40-49">40 - 49</option>
                                                       <option value="50-59">50 - 59</option>
                                                       <option value="60+">60+</option>
                                                  </select>
                                                  <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none">
                                                       <svg
                                                            width="20"
                                                            height="12"
                                                            viewBox="0 0 20 12"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                       >
                                                            <path
                                                                 d="M1.50905 0.5L10 11.1958L18.491 0.5H1.50905Z"
                                                                 fill="#D9D9D9"
                                                                 stroke="black"
                                                            />
                                                       </svg>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="flex mt-[35px] items-center gap-[18px]">
                                             <label className="whitespace-nowrap block font-medium text-xl text-[#4A4A4A] min-w-[120px]">
                                                  Weight type
                                             </label>
                                             <div className="relative w-full">
                                                  <select onChange={(e) => setWeightType(e.target.value)} defaultValue="select" className="w-full p-5 border-none text-black rounded-[10px] bg-white outline-none focus:outline-none ring-0 focus:ring-0 appearance-none pr-10">
                                                       <option value="select" disabled>
                                                            Select
                                                       </option>
                                                       <option value="underweight">UnderWeight</option>
                                                       <option value="average">Average</option>
                                                       <option value="overweight">Overweight</option>
                                                  </select>
                                                  <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none">
                                                       <svg
                                                            width="20"
                                                            height="12"
                                                            viewBox="0 0 20 12"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                       >
                                                            <path
                                                                 d="M1.50905 0.5L10 11.1958L18.491 0.5H1.50905Z"
                                                                 fill="#D9D9D9"
                                                                 stroke="black"
                                                            />
                                                       </svg>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="flex justify-between flex-wrap items-center gap-4 pb-5">
                         <button onClick={() => { navigate(-1) }}
                              className="text-black hover:text-primary-100"
                         >
                              Back
                         </button>

                         <div className="flex flex-wrap items-center gap-[10px]">
                              <Link style={!answer.bodyPartQuestions?.length || answer.AgeRange === "" || answer.WeightType === "" ? { pointerEvents: 'none' } : {}} to="/social-concern"
                                   className="py-3 px-[21.5px] bg-white hover:bg-primary-100 rounded-md font-semibold hover:text-white transition-all border border-[#1935CA]">Next Question</Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default WeightAge;
