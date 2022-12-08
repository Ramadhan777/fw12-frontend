import React from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";

const FormUpdatePassword = () => {
  return (
    <div className="basis-12/12 lg:basis-5/12 grow pt-28 px-16">
      <p className="text-xl font-bold pb-3">Fill your complete email</p>
      <p className="text-lg text-slate-400">set your new password</p>

      <form>
        <div className="flx flex-col my-8">
          <FormInput name="Password" type="password" placeholder="Write your password" />
        </div>
        <div className="flx flex-col my-8">
          <label for="confirmPassword">Confirm Password</label>
          <input className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl" type="password" name="password" id="confirmPassword" placeholder="Write your confirm password" />
        </div>

        <div className="flex flex-col items-center">
            <FormButton buttonName="Submit" path="/sign-in" />
        </div>
      </form>
    </div>
  );
};

export default FormUpdatePassword;
