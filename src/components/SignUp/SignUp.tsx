import SignUpLogo from "@/svgs/SignUp/SignUpLogo";
import React from "react";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div className="flex min-h-screen max-h-screen overflow-auto">
      <div className="w-1/2 bg-[#0D8812] flex items-center justify-center">
        <span className="-translate-x-[30%] md:block hidden">
          <SignUpLogo />
        </span>
      </div>
      <div className="w-1/2 flex items-center">
        <span className="-translate-x-[50%] max-lg:min-w-[400px] min-w-[500px] bg-white p-10  rounded-[30px]">
          <h2>Welcome to ZipZap</h2>
          <h2 className="font-semibold text-[44px]">Sign in</h2>
          <SignUpForm />
        </span>
      </div>
    </div>
  );
};

export default SignUp;
