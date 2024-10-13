import React from "react";
import { Tabs } from "antd";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";

import CreateAccountTab from "@/pages/createAccountTab.jsx";
import LoginTab from "@/pages/LoginTab";
import SignUpWithSocialMediaTab from "@/pages/SignUpSocialMediaTab";
import Navbar from "@/sections/Navbar";

const AuthPage = () => {
  const tabItems = [
    {
      key: 1,
      label: <p className="text-darkGray text-20 leading-16 font-500">Enter email or phone number</p>,
      children: <CreateAccountTab />
    },
    {
      key: 2,
      label: <p className="text-darkGray text-20 leading-16 font-500">Login to your account</p>,
      children: <LoginTab />
    },
    {
      key: 3,
      label:  <p className="text-darkGray text-20 leading-16 font-500">Sign up with</p>,
      children: <SignUpWithSocialMediaTab />
    }
  ];
  return (
    <>
      <div className=" w-full h-screen bg-[url('/bg-light-2.png')] bg-no-repeat bg-cover">
        <Navbar />
        <div className="container">
          <h2 className="text-darkGray text-center font-bold text-24 mb-4">Your Diagnosis</h2>
          <Tabs
            centered
            className="auth-tab"
            defaultActiveKey="1"
            items={tabItems}
            size="large"
            tabBarGutter={250}
          />
          <div className="mt-6">
            <Link className="flex gap-1"><ArrowLeft /><h3 className="text-black">Back</h3></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
