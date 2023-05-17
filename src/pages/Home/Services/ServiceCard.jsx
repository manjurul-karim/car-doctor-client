/* eslint-disable no-unused-vars */
import React from "react";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-2">
      <figure>
        <img className="rounded-lg" src={img} alt="" />
      </figure>
      <div className="card-body ">
        <div className="flex justify-between">
        <div className="">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-600 font-semibold">Price: ${price}</p>
        </div>
        <div className="">
          <button className="btn btn-primary">Buy Now</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
