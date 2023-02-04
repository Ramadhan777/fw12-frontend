import React, { useState } from "react";
import { forgotPasswordAction } from "../../redux/actions/resetPassword";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../assets/images/Tiku.svg";
import { ImSpinner2 } from "react-icons/im";
import { Formik, Form, Field } from "formik";
import YupPassword from "yup-password";
import * as Yup from "yup";
YupPassword(Yup);

const resetpasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const FormResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const forgotPassword = async (value) => {
    setLoading(true);
    const cb = () => {
      navigate("/update-password");
    };

    const data = await dispatch(forgotPasswordAction({ ...value, cb }));
    setLoading(false);
    if (data.payload.startsWith("Req")) {
      setErrMessage(data.payload);
    }

    setTimeout(() => {
      setErrMessage('')
    }, 5000)
  };

  return (
    <div className="basis-12/12 lg:basis-5/12 grow pt-16 lg:pt-28 px-16">
      <div>
        <img className="block lg:hidden mb-3 w-[200px]" src={logo} alt="logo tickitz" />
      </div>
      <p className="text-xl font-bold pb-3">Fill your complete email</p>
      <p className="text-lg text-slate-400">we'll send a link to your email shortly</p>

      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={resetpasswordSchema}
        onSubmit={forgotPassword}
      >
        {({ errors, touched }) => (
          <Form>
            {errMessage ? <div className="mt-3 bg-[#ED2E7E] py-3 pl-3 font-semibold rounded-md tracking-wider text-center">{errMessage}</div> : null}

            <div className="flx flex-col my-5">
              <label for="email">Email</label>
              <Field type="email" name="email" className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded mt-3" placeholder="Write your email" />
              {errors.email && touched.email ? <div className="text-red-500 text-sm">{errors?.email}</div> : null}
            </div>

            <div className="flex flex-col items-center">
              {loading && (
                <div className="flex items-center justify-center my-3">
                  <ImSpinner2 className="animate-spin mr-3" />
                  <p className="font-bold">Loading...</p>
                </div>
              )}

              <button className="bg-[#1b30cf] w-full py-4 rounded text-white text-center" type="submit">
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormResetPassword;
