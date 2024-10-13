import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
    // handle login logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-[13px]">
        <div className="grid grid-cols-[100px_auto_100px] items-center gap-4">
          <div></div>
          <div className="text-[#9FE4FE]">
            <h5 className="text-[30px] font-bold">Login to your Account</h5>
            <p>with your registered Email Address</p>
          </div>
          <div></div>
        </div>

        <div className="grid grid-cols-[100px_auto_100px] items-center gap-4">
          <div></div>
          <div>
            <label htmlFor="email" className="mb-3 block text-[#98DFE9] mt-4">
              Email address*
            </label>
            <input
              name="email"
              type="text"
              placeholder="Enter email address*"
              className="white-input"
              autoComplete="off"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "This is not a valid email",
                },
              })}
            />
          </div>
          <p className="text-[#D8EEFD] mt-10">{errors.email?.message}</p>
        </div>

        <div className="grid grid-cols-[100px_auto_100px] items-center gap-4">
          <div></div>
          <div>
            <label htmlFor="password" className="mb-3 block text-[#98DFE9]">
              Enter Password*
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="white-input"
                autoComplete="new-password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <span
                onClick={togglePasswordVisibility}
                className="text-[#26C1FF] text-sm cursor-pointer absolute right-[32px] top-1/2 -translate-y-1/2"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>
          <p className="text-[#D8EEFD] mt-10">{errors.password?.message}</p>
        </div>

        <div className="grid grid-cols-[100px_auto_100px] items-center gap-4">
          <div></div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="block text-[#98DFE9]">
              Remember my password
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[100px_auto_100px] items-center gap-4 mt-5">
        <div></div>
        <button
          type="submit"
          className="w-full text-[19px] py-[16px] rounded-[10px] bg-primary-100 text-white"
        >
          Login
        </button>
        <div></div>
      </div>

      <div className="grid grid-cols-[100px_auto_100px] items-center gap-4 my-4">
        <div></div>
        <div className="flex items-center gap-2 text-[#F5F5F5]/50">
          <div className="w-full h-[1px] bg-[#F5F5F5]/50"></div>
          <span className="text-sm">Or</span>
          <div className="w-full h-[1px] bg-[#F5F5F5]/50"></div>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-[100px_auto_100px] items-center gap-4">
        <div className=""></div>
        <div>
          <div className="flex max-w-[436px] px-[27px] py-3 bg-white rounded-[10px] justify-between  items-center">
            <p>Or sign in with</p>
            <div className="flex gap-2">
              <Link
                to=""
                className="p-3 rounded-full border hover:bg-gray-50 transition-all"
              >
                <img src="/google.png" alt="Google Sign In" />
              </Link>
              <Link
                to=""
                className="p-3 rounded-full border hover:bg-gray-50 transition-all"
              >
                <img src="/fb.png" alt="Facebook Sign In" />
              </Link>
              <Link
                to=""
                className="p-3 rounded-full border hover:bg-gray-50 transition-all"
              >
                <img src="/apple.png" alt="Apple Sign In" />
              </Link>
            </div>
          </div>
          <Link
            className="text-white text-center flex justify-center mt-2 font-medium"
            to="/reset-password"
          >
            Forgot Password?
          </Link>
        </div>
        <div className=""></div>
      </div>
    </form>
  );
};

export default LoginForms;
