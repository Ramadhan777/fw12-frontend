import React from "react";
import Background from "../components/Background";
import FormSignIn from "../components/FormSignIn";

const SignIn = () => {
  return (
    <div className="flex h-screen">
      <Background />
      <FormSignIn />
    </div>
  );
};

export default SignIn;
