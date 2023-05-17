
import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={parts} className="absolute w-64 border-8 border-white right-24 h-72 top-1/2 rounded-lg shadow-2xl" />
          </div>
          <div className="lg:w-1/2 pr-4">
            <p className="text-orange-700 text-xl font-semibold">About us</p>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn bg-orange-600 capitalize my-4">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
