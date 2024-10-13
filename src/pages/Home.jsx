import { useState } from "react";

import LoginForms from "../sections/LoginForms";
import SignUpForms from "../sections/SignUpForms";
import SimpleNavbar from "../sections/SimpleNavbar";

const Home = () => {
  const [currentState, setCurrentState] = useState("sign-up");

  return (
    <section className="bg-[url('/bg.png')] bg-no-repeat bg-cover ">
      <SimpleNavbar />

      <div className="py-[60px] padding min-h-screen">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-[14px] place-items-center">
            <div className="flex flex-col items-center">
              <img src="/login.png" alt="login-image" className="w-full max-w-[563px]" />
            </div>

            <div>
              <div className="grid grid-cols-[100px_auto_100px] items-center gap-4 mb-6">
                <div></div>
                <div className="flex px-[18px] py-3 bg-white rounded-[10px] justify-center gap-3">
                  <button
                    className={`px-[70px] text-sm py-[10px] rounded-[10px]  ${
                      currentState === "login"
                        ? "bg-primary-100 text-white"
                        : "text-primary-100 hover:bg-primary-100/10 transition-all"
                    }`}
                    onClick={() => setCurrentState("login")}
                  >
                    Log in
                  </button>
                  <button
                    className={`px-[70px] text-sm py-[10px] rounded-[10px] ${
                      currentState === "sign-up"
                        ? "bg-primary-100 text-white"
                        : "text-primary-100 hover:bg-primary-100/10 transition-all"
                    }`}
                    onClick={() => setCurrentState("sign-up")}
                  >
                    Sign up
                  </button>
                </div>
                <div></div>
              </div>

              {currentState === "sign-up" && <SignUpForms />}
              {currentState === "login" && <LoginForms />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
