/* eslint-disable no-unused-vars */
import React from "react";

const BannerTextAndButton = () => {
  return (
    <div>
      <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
        <div className="text-white space-y-7 pl-12 w-1/2">
          <h2 className="text-6xl font-bold  ">
            Affordable Price For Car Servicing
          </h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="mt-8">
            <button className="btn bg-orange-600 mr-4 capitalize">
              Discover More
            </button>
            <button className="btn btn-outline text-white capitalize">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTextAndButton;
