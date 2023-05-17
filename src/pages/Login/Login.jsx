import React from "react";
import loginpic from "../../../src/assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    event.preventDefault();
    const forms = event.target;
    const email = forms.email.value;
    const password = forms.password.value;
    console.log(email, password);
    forms.reset();
    signIn(email, password)
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
            <h1 className="text-3xl font-md  text-center">Login</h1>
            <form onSubmit={handleLogin}>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#FF3811] capitalize"
                  type="submit"
                  value="Sigin"
                />
              </div>
            </form>

            <div className="text-center my-3">
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
              <p className=" text-center font-md">
                New to Cars Doctor?
                <Link to="/signup">
                  <span className="text-[#FF3811] underline font-bold">
                    Sign
                  </span>
                  <span className="text-[#FF3811] underline font-bold pl-1">
                    Up
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
