import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import ChangePasswordForm from "../sections/ChangePasswordForm";
import Navbar from "../sections/Navbar";

const Profile = () => {
  const [changePasswordOpen, setChangePasswordOpen] = useState();

  const closeChangePassword = () => {
    setChangePasswordOpen(false);
  };

  return (
    <div className="bg-[url('/bg-light-2.png')] bg-no-repeat bg-cover min-h-screen relative">
      <Navbar />
      <div className="container">
        <div
          className="bg-white/50 py-[18px] rounded-[46px] border border-[#1935CA] my-10"
          style={{
            background:
              "linear-gradient(179.96deg, rgba(255, 255, 255, 0.25) 0.04%, rgba(87, 177, 255, 0) 130.08%)",
            boxShadow: "0px 4px 4px 0px #00000040"
          }}
        >
          <p className="text-2xl text-center text-black font-medium">My Profile</p>
        </div>
        <div className="flex justify-between text-xl font-medium flex-wrap gap-3">
          <p>Registered Email address : email@email.com</p>
          <p className="cursor-pointer" onClick={() => setChangePasswordOpen(true)}>
            Change Password
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <span className="font-medium text-xl">Test ID</span>
            <div className="bg-white rounded-xl p-4 border border-[#1935CA] mt-3">Name</div>
            <div className="bg-white rounded-xl p-4 border border-[#1935CA] mt-3">Name</div>
          </div>

          <div>
            <span className="font-medium text-xl">Diagnosis</span>
            <div className="flex items-center gap-10 mt-3">
              <div className="bg-white w-full rounded-xl p-4 border border-[#1935CA]">Name</div>
              <span className="font-medium text-xl cursor-pointer">Manage</span>
            </div>
            <div className="flex items-center gap-10 mt-3">
              <div className="bg-white w-full rounded-xl p-4 border border-[#1935CA]">Name</div>
              <span className="font-medium text-xl cursor-pointer">Manage</span>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/test-result" // Navigate to the test-results page
        className="absolute bottom-5 left-5 text-xl font-medium text-black"
      >
        Back
      </Link>

      {changePasswordOpen && <ChangePasswordModal closeChangePassword={closeChangePassword} />}
    </div>
  );
};

const ChangePasswordModal = ({ closeChangePassword }) => {
  return (
    <div className="inset-0 absolute min-h-screen grid place-items-center">
      <div className="relative bg-primary-100/30 backdrop-blur-sm w-full max-w-[620px] p-4 rounded-xl">
        <span
          className="font-bold text-white text-3xl absolute right-3 top-3 cursor-pointer"
          onClick={closeChangePassword}
        >
          X
        </span>
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default Profile;
