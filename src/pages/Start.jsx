import { Link } from "react-router-dom";
import { FETCH_PAIN_QUESTIONS } from "../api/configure-apis";

import {useQuestion} from "../contexts/questionContext";

const Start = () => {
  const Infos = [
    {
      text: "Select the location of your pain",
      numberColor: "#CC7981"
    },
    {
      text: "Answer the pain questions ",
      numberColor: "#B3A1FD"
    },
    {
      text: "Find your accurate pain diagnosis",
      numberColor: "#F2C9D8"
    }
  ];

  const {answer, setBodyPartQuestions, setLoading, loading} = useQuestion();

  const onHandlePainPointClick = (painPoint) => {
    setLoading(true);
    const getPainData = async()=>{
      const response  =  await fetch(FETCH_PAIN_QUESTIONS);
      if(!response.ok) throw new Error('Failed to fetch data');
      const questionsData = await response.json();
      console.log(questionsData);
      setBodyPartQuestions({[painPoint]:questionsData});
      setLoading(false);
    }
    getPainData().catch(err=>{
      setLoading(false);
      console.log(err);
    });
  };

  return (
    <section className="bg-[url('/bg-light-2.png')] bg-no-repeat bg-cover bg-center px-3 py-[30px] border-2 min-h-screen w-full">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[450px_auto] place-items-center gap-10 md:gap-20 lg:gap-0">
          <div className="w-full">
            <img src="/PainPal.png" alt="" className="w-full max-w-[300px] lg:hidden mx-auto" />
            {Infos.map((item, index) => (
              <div className="w-full" key={index}>
                <span
                  className="block text-center text-[30px] md:text-[64px] font-semibold -mb-[20px] md:-mb-[45px] z-[999]"
                  style={{ color: item.numberColor }}
                >
                  {index + 1}
                </span>
                <div className="h-full w-full rounded-[46px] p-3 md:p-[36px]  overflow-hidden border border-[#4A4A4A] bg-white/50  hover:scale-105 transition-all">
                  <p className="text-center text-xl md:text-2xl lg:text-[32px] lg:leading-[48px] text-black break-words ">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end">
            <div className="relative flex flex-col items-center">
              <img
                src="/PainPal.png"
                alt="painpal-brand"
                className="w-full max-w-[300px] hidden lg:block"
              />
              <p className="z-10 text-[#4A4A4A] font-medium text-2xl text-center my-5">
                Self help tool to identify pain in your body
              </p>
              <div className="flex container justify-end">
                <div className="relative">
                  <img
                    src="/femalefront.png"
                    alt="female-body"
                    className="max-w-[150px] md:max-w-[215px] mx-auto"
                  />
                  <button onClick={()=>onHandlePainPointClick('shoulder')} className="active:scale-[0.98] absolute top-14 md:top-[5.3rem] md:left-6 z-[20] scale-[0.7] md:scale-[0.8]">
                    <img src="/pain-point.png" alt="pain-point" />
                  </button>
                  <button className="absolute top-[10rem] left-2 md:top-[15rem] md:left-5 z-[20] scale-[0.7] md:scale-[0.8]">
                    <img src="/pain-point.png" alt="pain-point" />
                  </button>
                  <button className="absolute top-[22rem] left-4 md:top-[33rem] md:left-10 z-[20] scale-[0.7]  md:scale-[0.8]">
                    <img src="/pain-point.png" alt="pain-point" />
                  </button>
                </div>
                <div className="relative right-[4rem] md:right-[5.7rem]">
                  <img
                    src="/male.png"
                    alt="male-body"
                    className="max-w-[155px] md:max-w-[222px] mx-auto"
                  />
                  <button className="absolute top-[8rem] left-[8rem] md:top-[10rem] md:left-[11rem] z-10 scale-[1.5] md:scale-[1]">
                    <img src="/pain-point.png" alt="pain-point" />
                  </button>
                  <button className="absolute top-[17rem] left-[5.8rem] md:top-[25rem] md:left-[8rem] z-10  scale-[0.7] md:scale-[0.8]">
                    <img src="/pain-point.png" alt="pain-point" />
                  </button>
                </div>
              </div>
            </div>
            <Link
              style={loading ? {pointerEvents: 'none'}: {}}
              to="/gender"
              className="text-[45px] font-semibold text-center rounded-[25px]  px-[30px] py-1 h-fit mt-10 lg:mt-0 lg:-ml-[100px] text-primary-100 border-[#777777] border-[5px] cursor-pointer hover:scale-105 transition-all mb-10 z-[9999] bg-white"
            >
              START
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
