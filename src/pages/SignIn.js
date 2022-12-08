import React from "react";
import Background from "../components/background/Background";
import FormSignIn from "../components/form/FormSignIn";

const SignIn = () => {
  return (
    <div className="flex h-screen">
      <Background />
      <FormSignIn />
    </div>
  );
};

export default SignIn;
