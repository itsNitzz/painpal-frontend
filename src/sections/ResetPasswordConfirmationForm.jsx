import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ResetPasswordConfirmationForm = ({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [ showPassword, setShowPassword ] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-[#4A4A4A]">
        <h5 className="text-[30px] font-bold">Reset Password</h5>
      </div>
      <div>
        {type === "email" ? (
          <>
            <label className="mb-3 block text-[#4A4A4A] mt-4" htmlFor="email">
              Enter the email you want to reset password for:
            </label>
            <input
              autoComplete="off"
              className="white-input"
              name="email"
              placeholder="youremail@email.com"
              type="text"
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
            <label className="mb-3 block text-[#4A4A4A] mt-4" htmlFor="otp">
              Enter the OTP you received
            </label>
            <input
              autoComplete="off"
              className="white-input"
              name="otp"
              placeholder="Enter OTP"
              type="text"
              {...register("otp", {
                required: "OTP is required",
              })}
            />
          </>
        )}
      </div>
      <div>
        <label
          className="mb-3 block text-[#4A4A4A] mt-4"
          htmlFor="new-password"
        >
          New Password
        </label>
        <input
          autoComplete="off"
          className="white-input"
          name="new-password"
          placeholder="Enter New Password"
          type="text"
          {...register("new-password", {
            required: "New Password is required",
          })}
        />
      </div>
      <div>
        <label
          className="mb-3 block text-[#4A4A4A] mt-4"
          htmlFor="confirm-new-password"
        >
          Confirm New Password
        </label>
        <input
          autoComplete="off"
          className="white-input"
          name="confirm-new-password"
          placeholder="Enter Confirm New Password"
          type="text"
          {...register("confirm-new-password", {
            required: "Confirm New Password is required",
          })}
        />
      </div>
      <button
        className="w-full text-[19px] py-[16px] rounded-[10px] bg-primary-100 text-white mt-[37px] mb-10"
        type="submit"
      >
        Change Password
      </button>

      <Link
        className=" px-[27px] py-3 bg-white rounded-[10px] text-center w-full flex justify-center border border-black"
        to="/home"
      >
        <p className="text-center">Back to Login</p>
      </Link>
    </form>
  );
};

export default ResetPasswordConfirmationForm;
