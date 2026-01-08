
"use client"
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import "../../styles/globals.css";
import { Metadata } from "next";

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};




type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => {
    const subject = encodeURIComponent(formdata.subject || "");
    const body = encodeURIComponent(
      `Hi, my name is ${formdata.name || ""}\n\n${formdata.message || ""}\n\n${formdata.email || ""}`
    );

    window.location.href = `mailto:zohaibhyd321@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center md:flex-row md:space-x-5 md:text-left">
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Contact {""}
          <span className="decoration-[#0A7DFF]/50 underline ">Us</span>
        </h4>
        <div className="space-y-10">
           <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#0A7DFF] h-7 w-7 animate-pulse " />
            <p className="text-2xl text-center " >USA</p>
        </div>
          </div>
          <div className="flex items-center space-x-5 justify-center max-w-600px w-fit ">
  <p className="text-2xl text-center md:text-left space-y-4 text-[#0A7DFF] animate-pulse">
    Let us know if you have any questions or any 
    suggestion say to us.<br/> We would love to hear from you!
  </p>
</div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit max-w-600px">
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <input {...register('name')} placeholder="First Name" className="contactInput" type="text" />
            <input {...register('name')} placeholder="Last Name" className="contactInput" type="text" />
            <input  {...register('email')}  placeholder="Email" className="contactInput" type="email" />
          </div>
          <input  {...register('subject')}  placeholder="Subject" className="contactInput" type="text" />

          <textarea  {...register('message')}  placeholder="Message" className="contactInput" />

          <button type="submit" className="bg-[#0A7DFF] py-5 px-10 rounded-md  font-bold text-ls relative flex h-[65px] w-100 items-center justify-center text-white " >
            Submits
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactMe;