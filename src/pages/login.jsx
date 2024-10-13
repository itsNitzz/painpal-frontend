import { useEffect, useState } from "react";
import { EyeOff, Eye } from "react-feather";
import { Link, useNavigate } from "react-router-dom";




const LoginView = () => {

    const isDesktop = true;
    const authErrorMsg = false;

    const  pending = false;

  const [showPassword, setShowPassword] = useState(false);

  const [looginCredential, setLoginCredential] = useState({});
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setLoginCredential((prevData) => ({ ...prevData, [event.target.name]: event.target.value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

//   useEffect(() => {
//     if (isAuthenticated) navigate("/");
//   }, [isAuthenticated]);

  return (
    <div className="flex w-full">
      <div className="w-full">
        {/* bg-slate-100 */}
        <div className={`${isDesktop ? "min-h-screen" : " min-h-[100svh]"} items-center justify-center grid grid-cols-8 rounded-lg`}>
          <div className="col-start-1 col-span-8 min-[640px]:col-start-2 min-[640px]:col-span-6 min-[1024px]:col-start-3 min-[1024px]:col-end-7 min-[1024px]:col-span-2 ">
            <div className="max-w-xl mx-auto bg-none bg-opacity-0">
              <div className={`rounded-lg py-10 ${isDesktop ? "px-12 w-[42rem]" : "px-7 w-full"}`}>
                <div className="inline-block text-white-primary rounded-md p-1">
                  {/* <MainLogoLight width={150} height={80}/> */}
                  <img
                    src="/PainPal.png"
                    alt="logo"
                    className="block w-40 mb-2 "
                />
                  <h2 className={`font-semibold font-custom text-[#000000] leading-[45px] ${isDesktop ? "text-[38px]" : "text-[22px]"}`}>Welcome back</h2>
                </div>
                <form onSubmit={onSubmitHandler}>
                  <div className="mb-6 mt-6 w-full">
                    {/* <h1 className="text-[32px] font-bold text-black-primary">Sign in</h1> */}
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-[16px] font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={onChangeHandler}
                      className=" outline-0 bg-gray-50 pl-[15px] font-custom common-input-field border input-field-border text-gray-900 text-[16px] rounded-2xl focus:ring-blue-500 focus:border-purple-primary block w-full p-2.5"
                      placeholder="someone@company.com"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="input-group-1"
                      className="block mb-2 text-[16px] font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="relative mb-6">
                      <div className="absolute  inset-y-0 right-3 flex items-center pl-3.5" role="button" tabIndex="-1" onClick={() => setShowPassword(!showPassword)}>
                        {
                          showPassword ? (<Eye className="text-[#969ba5]" />) : (<EyeOff className="text-[#969ba5]" />)
                        }
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="input-group-1"
                        onChange={onChangeHandler}
                        className="outline-0 bg-gray-50 pl-[15px] font-custom common-input-field border input-field-border text-gray-900 text-[16px] rounded-2xl focus:ring-blue-500 focus:border-purple-primary block w-full p-2.5"
                        placeholder="•••••••••"
                      />
                    </div>
                    {authErrorMsg && (
                      <p className="text-red mb-2">
                        Wrong email/password! Try with right credential
                      </p>
                    )}

                    <p className="text-textGray font-normal text-sm text-right">
                      <Link to="/forgot-password" className="underline font-custom font-medium text-[14px] leading-4 text-[#969BA5]">Forgot Password</Link>
                    </p>
                  </div>

                  <button
                    type="submit"
                    id="confirm_password"
                    disabled={pending}
                    className="flex items-center common-input-field text-[#FFFFFF] leading-6 text-center justify-center disabled:opacity-[0.5] text-[16px] font-medium rounded-2xl cursor-pointer bg-primary-100 border border-gray-200 text-sm focus:ring-blue-500 focus:border-purple-primary w-full p-2.5"
                    placeholder="•••••••••"
                    required
                  >
                    <span>{pending ? "Request processing..." : "Sign in"}</span>
                  </button>
                </form>
                <p className="text-center pt-5 text-sm">
                  <span className="text-[#969BA5] leading-5 text-[14px] font-custom font-medium">Don't have an account?</span>{" "}
                  <Link to="/sign-up" className="text-purple-primary underline">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
