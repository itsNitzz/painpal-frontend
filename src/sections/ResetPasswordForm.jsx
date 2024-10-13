import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ResetPasswordForm = ({ type }) => {
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="text-[#4A4A4A]">
        <h5 className="text-[30px] font-bold">Reset Password</h5>
        <p>Kindly enter you Email Address</p>
      </div>
      <div>
        {type === "email" ? (
          <>
            <label htmlFor="email" className="mb-3 block text-[#4A4A4A] mt-4">
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
          </>
        ) : (
          <>
            <label htmlFor="email" className="mb-3 block text-[#4A4A4A] mt-4">
              Phone Number
            </label>
            <input
              name="email"
              type="text"
              placeholder="Enter Phone Number"
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
          </>
        )}
      </div>
      <button
        type="submit"
        className="w-full text-[19px] py-[16px] rounded-[10px] bg-primary-100 text-white mt-[37px] mb-10"
      >
        {type === "email" ? "Reset" : "Get OTP to Reset Password"}
      </button>

      <Link
        to="/home"
        className=" px-[27px] py-3 bg-white rounded-[10px] text-center w-full flex justify-center border border-black"
      >
        <p className="text-center">Back to Login</p>
      </Link>
    </form>
  );
};

export default ResetPasswordForm;
