import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ChangePasswordForm = () => {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full padding xl:px-0 xl:max-w-[620px]"
    >
      <div className="text-black">
        <h5 className="text-[30px] font-bold">Change Password</h5>
        <p>Please create a new password</p>
      </div>
      <div>
        <label htmlFor="currentEmail" className="mb-3 block text-black mt-4">
          Current Email
        </label>
        <input
          name="currentEmail"
          type="email"
          placeholder="youremail@email.com | 0123456789"
          className="white-input"
          autoComplete="off"
          {...register("currentEmail", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "This is not a valid email address",
            },
          })}
        />
      </div>

      <div>
        <label htmlFor="currentPassword" className="mb-3 block text-black mt-4">
          Current Password
        </label>
        <input
          name="currentPassword"
          type="text"
          placeholder="Enter Current Password"
          className="white-input"
          autoComplete="off"
          {...register("currentPassword", {
            required: "Password is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "This is not a valid password",
            },
          })}
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-3 block text-black mt-4">
          New Password
        </label>
        <input
          name="password"
          type="text"
          placeholder="Enter New Password"
          className="white-input"
          autoComplete="off"
          {...register("password", {
            required: "password is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "This is not a valid password",
            },
          })}
        />
      </div>
      <div>
        <label
          htmlFor="confirm password"
          className="mb-3 block text-black mt-4"
        >
          Confirm New password
        </label>
        <input
          name="confirm password"
          type="text"
          placeholder="Enter New confirm password"
          className="white-input"
          autoComplete="off"
          {...register("confirm password", {
            required: "confirm password is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "This is not a valid confirm password",
            },
          })}
        />
      </div>
      <button
        type="submit"
        className="w-full text-[19px] py-[16px] rounded-[10px] bg-primary-100 text-white mt-[37px]"
      >
        Change Password
      </button>

      <div className="flex items-center gap-2 text-[#F5F5F5]/50 my-4">
        <div className="w-full h-[1px] bg-[#F5F5F5]/50"></div>
        <span className="text-sm">Or</span>
        <div className="w-full h-[1px] bg-[#F5F5F5]/50"></div>
      </div>

      <Link
        to="/home"
        className="px-[27px] py-3 bg-white border border-black rounded-[10px] text-center w-full flex justify-center"
      >
        <p className="text-center">Back to Login</p>
      </Link>
    </form>
  );
};

export default ChangePasswordForm;
