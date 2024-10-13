import { Link } from "react-router-dom";
import facebook from "../assets/icons/facebook.svg";
import microsoft from "../assets/icons/microsoft.svg";
import google from "../assets/icons/google.svg";
import apple from "../assets/icons/apple.svg";

const SignUpWithSocialMediaTab = () => {
  return (
    <div className="padding flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 mb-6 w-full">
        <div class=" w-[25%]">
          <Link>
            <div className="border border-1 border-blue text-darkGray flex justify-center items-center gap-2 font-medium text-20 rounded-10 py-3">
                <img src={google} /> <span>Sign in with Google</span>
            </div>
          </Link>
        </div>
        <div class=" w-[25%]">
          <Link>
            <div className="border border-1 border-blue text-darkGray flex justify-center items-center gap-2 font-medium text-20 rounded-10 py-3">
                <img src={microsoft} /> <span>Sign in with Microsoft</span>
            </div>
          </Link>
        </div>

        <div class=" w-[25%]">
          <Link>
            <div className="border border-1 border-blue text-darkGray flex justify-center items-center gap-2 font-medium text-20 rounded-10 py-3">
                <img src={facebook} /> <span>Sign in with Facebook</span>
            </div>
          </Link>
        </div>


        <div class=" w-[25%]">
          <Link>
            <div className="border border-1 border-blue text-darkGray flex justify-center items-center gap-2 font-medium text-20 rounded-10 py-3">
                <img src={apple} /> <span>Sign in with Apple</span>
            </div>
          </Link>
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
              to=""
              className=""
            >
              <h5 class="text-center text-darkGray text-24 leading-30 font-500">
              Diagnosis diagnosis 
              </h5>
            </Link>
          </div>

          <div className="flex items-center justify-center border border-1 border-blue rounded-10 h-[140px] w-1/3">
            <Link
              to=""
              className=""
            >
              <h5 class="text-center text-darkGray text-24 leading-30 font-500">
              Diagnosis diagnosis 
              </h5>
            </Link>
          </div>

          <div className="flex items-center justify-center border border-1 border-blue rounded-10 h-[140px] w-1/3">
            <Link
              to=""
              className=""
            >
              <h5 class="text-center text-darkGray text-24 leading-30 font-500">
              Diagnosis diagnosis 
              </h5>
            </Link>
          </div>

        </div>
        <div className="px-8 mt-4">
        <input
            type="button"
            id="submit"
            value="Click on the above diagnosis for confirmatory examination video tests"
            className=" w-full bg-primary-100 border-none outline-0 text-white text-20 font-[500] rounded-lg px-8 py-2 h-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpWithSocialMediaTab;
