import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import SpinnerLoader from "@/components/SpinnerLoader";
import Toast from "@/components/Toast";

export default function GetInTouch() {
  // Use useState to keep track of whether or not to display the spinner loader and toast
  const [loader, setLoader] = useState(false);
  const [toast, setToast] = useState(false);

  // Use useEffect to automatically hide the toast notification after 3 seconds
  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast(false);
      }, [3000]);
    }
  }, [toast]);

  // Create a Yup validation schema for the form
  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required("This field is required"),
    email: Yup.string()
      .trim()
      .email()
      .required("This field is required")
      .matches(/@[^.]*\./),
    msg: Yup.string()
      .trim()
      .required("This field is required")
      .matches(/.{5,}/, "Message should contain at least 5 characters"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        msg: "",
      }}
      // Pass the validation schema to Formik
      validationSchema={validationSchema}
      onSubmit={(values, props) => {
        let { name, email, msg } = values;
        // Show the spinner loader
        props.setSubmitting(true);
        setLoader(true);
        setLoader(false);
        setToast(true);
        props.setSubmitting(false);
        props.resetForm();
      }}
    >
      {({
        errors,
        touched,
        handleSubmit,
        isSubmitting,
        values,
        handleChange,
        handleBlur,
        setFieldValue,
        resetForm,
      }) => (
        <section className="">
          <div className="mx-auto bg-slate-100">
            <div className="grid container md:grid-cols-2 gap-8">
              <div>
                <div className=" bg-white  border border-white-200 rounded p-4 sm:p-9 max-w-[450px] my-8 md:mx-0 ">
                  <p className="text-3xl lg:text-[40px] font-bold mb-6">
                    Get in touch
                  </p>
                  <div className="mb-5 max-w-[378px]">
                    <p className="text-base font-bold text-neutral-700 mb-2">
                      Your name
                    </p>
                    <input
                      type="text"
                      className="text-black outline-none px-4 py-2 rounded focus:outline-none border border-secondary-300 w-full focus:border-warning-500 transition-all"
                      placeholder="Full name"
                      value={values.name}
                      onChange={(e) => {
                        setFieldValue("name", e.target.value);
                      }}
                    />
                    {errors.name && touched.name ? (
                      <div className="mt-2 ml-1 text-xs text-red-500 text-left">
                        {errors.name}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-5">
                    <p className="text-base font-bold text-neutral-700 mb-2">
                      Your email
                    </p>
                    <input
                      type="text"
                      className="text-black outline-none px-4 py-2 rounded focus:outline-none border border-secondary-300 w-full focus:border-warning-500 transition-all"
                      placeholder="youremail@email.com"
                      value={values.email}
                      onChange={(e) => {
                        setFieldValue("email", e.target.value);
                      }}
                    />
                    {errors.email && touched.email ? (
                      <div className="mt-2 ml-1 text-xs text-red-500 text-left">
                        {errors.email}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-8">
                    <p className="text-base font-bold text-neutral-700 mb-2">
                      How can we help?
                    </p>
                    <textarea
                      rows="4"
                      className="text-black outline-none px-4 py-2 rounded focus:outline-none border border-secondary-300 w-full focus:border-warning-500 transition-all "
                      value={values.msg}
                      onChange={(e) => {
                        setFieldValue("msg", e.target.value);
                      }}
                    ></textarea>
                    {errors.msg && touched.msg ? (
                      <div className="mt-2 ml-1 text-xs text-red-500 text-left">
                        {errors.msg}
                      </div>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    onClick={() => {
                      handleSubmit();
                    }}
                    disabled={isSubmitting}
                    className={`text-black text-lg px-10 py-3 rounded w-full border border-warning-500 bg-yellow-300 hover:bg-yellow-400 transition-all flex  items-center justify-center cursor-pointer`}
                  >
                    {loader ? <SpinnerLoader /> : "Send my message"}
                  </button>
                  <div className="mt-3">
                    {toast && (
                      <Toast
                        variant={"success"}
                        onClick={() => setToast(false)}
                        msg="Thank you."
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="w-[600px] bg-red  shadow-l">
                <img
                  src="/assets/contact.jpg"
                  alt=""
                  className=" h-full w-full"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
}
