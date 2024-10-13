import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUpForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
    // handle form submission
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-[13px]">
        <div className="grid grid-cols-[100px_auto_100px] items-center gap-4">
          <span className=" text-[#9EDBEF] ">First Name*</span>
          <div>
            <input
              type="text"
              placeholder="Enter your first name"
              className="blue-input"
              {...register("firstName", {
                required: "Please fill your first name",
              })}
            />
          </div>
          <p className="text-[#D8EEFD]">{errors.firstName?.message}</p>
        </div>

        <div className="grid grid-cols-[100px_auto_100px] items-center gap-4">
          <div className=" text-[#9EDBEF]">Last Name*</div>
          <div>
            <input
              type="text"
              placeholder="Enter your last name"
              className="blue-input"
              {...register("lastName", {
                required: "Please fill your last name",
              })}
            />
          </div>
          <p className="text-[#D8EEFD]">{errors.lastName?.message}</p>
        </div>

        <div className="grid grid-cols-[100px_auto_100px] items-center gap-4">
          <div className=" text-[#9EDBEF] ">Enter email address*</div>
          <div>
            <input
              type="text"
              placeholder="Enter your email address"
              className="blue-input"
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
          <p className="text-[#D8EEFD]">{errors.email?.message}</p>
        </div>

        <div className="grid grid-cols-[100px_auto_100px] items-center gap-4">
          <div className=" text-[#9EDBEF] ">Enter password*</div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter a unique password"
              className="blue-input"
              autoComplete="new-password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password should be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\W)/,
                  message:
                    "Password should contain 1 capital letter & 1 special character",
                },
              })}
            />
            <span
              onClick={togglePasswordVisibility}
              className="text-[#26C1FF] text-sm cursor-pointer absolute right-[32px] top-1/2 -translate-y-1/2"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <p className="text-[#D8EEFD]">{errors.password?.message}</p>
        </div>

        <div className="grid grid-cols-[100px_auto_100px] items-center gap-4">
          <div className=" text-[#9EDBEF] ">Confirm password*</div>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm the password"
              className="blue-input"
              autoComplete="new-password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="text-[#26C1FF] text-sm cursor-pointer absolute right-[32px] top-1/2 -translate-y-1/2"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </span>
          </div>
          <p className="text-[#D8EEFD]">{errors.confirmPassword?.message}</p>
        </div>
      </div>

      <div className="grid grid-cols-[100px_auto_100px] items-center gap-4 mt-5">
        <div></div>
        <button
          type="submit"
          className="w-full text-[19px] py-[16px] rounded-[10px] bg-primary-100 text-white"
        >
          Sign up
        </button>
        <div></div>
      </div>

      <div className="grid grid-cols-[100px_auto_100px] items-center gap-4 my-4">
        <div></div>
        <div className="flex items-center gap-2 text-[#F5F5F5]/50">
          <div className="w-full h-[1px] bg-[#F5F5F5]/50"></div>{" "}
          <span className="text-sm">Or</span>{" "}
          <div className="w-full h-[1px] bg-[#F5F5F5]/50"></div>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-[100px_auto_100px] items-center gap-4">
        <div className=""></div>
        <div className="flex max-w-[436px] px-[27px] py-3 bg-white rounded-[10px] justify-between  items-center">
          <p>Or sign up with</p>
          <div className="flex gap-2">
            <Link
              to=""
              className="p-3 rounded-full border hover:bg-gray-50 transition-all"
            >
              <img src="/google.png" alt="Google Sign Up" />
            </Link>
            <Link
              to=""
              className="p-3 rounded-full border hover:bg-gray-50 transition-all"
            >
              <img src="/fb.png" alt="Facebook Sign Up" />
            </Link>
            <Link
              to=""
              className="p-3 rounded-full border hover:bg-gray-50 transition-all"
            >
              <img src="/apple.png" alt="Apple Sign Up" />
            </Link>
          </div>
        </div>
        <div className=""></div>
      </div>
    </form>
  );
};

export default SignUpForms;
