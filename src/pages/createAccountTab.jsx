import { useState } from "react";
import { Link } from "react-router-dom";

import { disabledBtnStyle } from "@/utils/comon-style";
import { detectIsEmailOrPhone, toastMessage } from "@/utils/helpers";
import LoaderSubmitBtn from "@/utils/LoaderSubmitBtn";

const CreateAccountTab = () => {

  const [ userInfo, setUserInfo ] = useState({ email_or_phone: "", confirm_email_or_phone: "",  password: "" });
  console.log("userInfo: ", userInfo);
  const [ isBtnSubmitting, setIsSubmitting ] = useState(false);

  const onChangeHandler = (event) => {
    const isEmailOrPhone = detectIsEmailOrPhone(event.target.value);
    if (isEmailOrPhone === "email")
      setUserInfo((prevData) => ({ ...prevData, email: event.target.value }));
    else if (isEmailOrPhone === "phone")
      setUserInfo((prevData) => ({ ...prevData, phone_number: event.target.value }));
  };

  const isDisableSubmitBtn = () => !userInfo?.email_or_phone || !userInfo.confirm_email_or_phone || isBtnSubmitting;

  return (
    <div className="padding flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 mb-6 w-full">
        <div className=" w-[45%]">
          <label
            className="block mb-2 text-18 font-500 leading-30 text-black"
            htmlFor="success"
          >
            Email/Phone number with country code <span className="text-red">*</span>
          </label>
          <input
            className="h-[50px] outline-none rounded-10 block w-full p-2.5 border border-1 border-blue placeholder-darkGray"
            id="success"
            name="email_or_phone"
            placeholder="Enter your email or phone number"
            type="text"
            onChange={onChangeHandler}
          />
          {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500">
            <span class="font-medium">Well done!</span> Some success message.
          </p> */}
        </div>
        <div className="w-[45%]">
          <label
            className="block mb-2 text-18 font-500 leading-30 text-black"
            htmlFor="error"
          >
            Confirm Email/Phone number with country code <span className="text-red">*</span>
          </label>
          <input
            className="h-[50px] outline-none rounded-10 block w-full p-2.5 border border-1 border-blue placeholder-darkGray"
            id="error"
            name="confirm_email_or_phone"
            placeholder="Confirm your email or phone number"
            type="text"
            onChange={onChangeHandler}
          />
          {/* <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            <span class="font-medium">Oh, snapp!</span> Some error message.
          </p> */}
        </div>

        <div className="w-[10%]">
          <label
            className=" opacity-0 text-18 font-500 leading-30 text-black"
            htmlFor="error"
          >
            C
          </label>
          <button
            className={`${isDisableSubmitBtn() ? disabledBtnStyle : ""} bg-primary-100 mt-2 border-none outline-0 text-white text-20 font-[500] rounded-lg px-4 py-2 w-32 h-[50px]`}
            disabled={isDisableSubmitBtn()}
            type="button"
          >
            {isBtnSubmitting ? <LoaderSubmitBtn customClass="flex" /> : "Submit"}
          </button>
          {/* <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh, snapp!</span> Some error message.</p> */}
        </div>
      </div>

      <div className="w-full text-left">
        <h3 className="text-20 leading-30 text-black font-normal">
          Login details will be sent to this email/phone number
        </h3>
      </div>


      <h4 className="text-red text-20 font-normal leading-30 pt-4">To view the diagnosis enter your Email address/ Phone number / Sign up or Log in !</h4>
      <div className=" w-full min-h-[350px] bg-backgroundGradient border border-[#1935CA] rounded-20 mt-4 py-8 px-4">
        <p className=" font-500 text-24 text-black text-center block">
          Based on your answers to video tests, the pain is most likely to be:
        </p>
        <div className="cards flex px-8 py-4 sm:gap-2 md:gap-4 lg:gap-12 xl:gap-16">
          <div className="flex items-center justify-center border border-1 border-blue rounded-10 h-[140px] w-1/3">
            <Link
              className=""
              to=""
            >
              <h5 className="text-center text-darkGray text-24 leading-30 font-500">
              Diagnosis diagnosis
              </h5>
            </Link>
          </div>

          <div className="flex items-center justify-center border border-1 border-blue rounded-10 h-[140px] w-1/3">
            <Link
              className=""
              to=""
            >
              <h5 className="text-center text-darkGray text-24 leading-30 font-500">
              Diagnosis diagnosis
              </h5>
            </Link>
          </div>

          <div className="flex items-center justify-center border border-1 border-blue rounded-10 h-[140px] w-1/3">
            <Link
              className=""
              to=""
            >
              <h5 className="text-center text-darkGray text-24 leading-30 font-500">
              Diagnosis diagnosis
              </h5>
            </Link>
          </div>

        </div>
        <div className="px-8 mt-4">
          <input
            className=" w-full bg-primary-100 border-none outline-0 text-white text-20 font-[500] rounded-lg px-8 py-2 h-[50px]"
            id="submit"
            type="button"
            value="Click on the above diagnosis for confirmatory examination video tests"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateAccountTab;
