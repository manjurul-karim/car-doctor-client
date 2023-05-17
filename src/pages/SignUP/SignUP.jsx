import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginpic from "../../../src/assets/images/login/login.svg";
import { AuthContext } from "../../providers/AuthProvider";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const SignUP = () => {
  const { createUser } = useContext(AuthContext);

  const handleSinUp = (event) => {
    event.preventDefault();
    const forms = event.target;
    const name = forms.name.value;
    const email = forms.email.value;
    const password = forms.password.value;
    console.log(name, email, password);
    forms.reset();
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero w-full min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-2/5 mr-14 ">
          <img src={loginpic} alt="" />
        </div>
        <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-md  text-center">Sign Up</h1>
            <form onSubmit={handleSinUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm  password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#FF3811] capitalize"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
          <div className="text-center mb-4">
            <h4>Or sign In With</h4>
            <div className="inline-flex gap-5  mt-4">
              <p>
                <FaFacebook></FaFacebook>
              </p>
              <p>
                <FaLinkedinIn></FaLinkedinIn>
              </p>
              <p>
                <FaGoogle></FaGoogle>
              </p>
            </div>
          </div>
          <div>
            <p className=" text-center font-md mb-5">
              Al ready Have An Account?
              <Link to="/login">
                <span className="text-[#FF3811] underline font-bold">SIgn</span>
                <span className="text-[#FF3811] underline font-bold pl-1">
                  In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
