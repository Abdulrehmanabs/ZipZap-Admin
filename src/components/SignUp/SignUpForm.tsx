import React from "react";

const SignUpForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const checkUser = () => {
    console.log(email, password);
    const user = {
      email,
      password,
    };
    if (email && password.length > 4) {
      localStorage.setItem("user", JSON.stringify(user));
      window.location.reload();
    } else {
      alert(
        "Invalid credentials\n check your email and password\n password should be greater than 4 letters"
      );
    }
  };
  return (
    <div className="mt-6 flex flex-col gap-4">
      <label htmlFor="email" className="flex flex-col gap-2">
        Username
        <input
          id="email"
          type="email"
          value={email}
          className="border border-sidebar-green focus:outline-sidebar-green rounded-[8px] p-2"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password" className="flex flex-col gap-2">
        Enter your Password
        <input
          id="password"
          type="text"
          value={password}
          className="border border-sidebar-green focus:outline-sidebar-green rounded-[8px] p-2"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        onClick={checkUser}
        className="w-full bg-sidebar-green text-sidebar-white mt-10 rounded-[8px] p-2"
      >
        Sign in
      </button>
    </div>
  );
};

export default SignUpForm;
