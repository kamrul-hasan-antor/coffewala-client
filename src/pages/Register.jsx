import React, { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;

    const registerUser = {
      fullName,
      email,
    };

    createUser(email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: fullName,
        });
        const user = res.user;
        // fetch("https://laptop-mart-server-rho.vercel.app/addUsers", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(loggedInUser),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     form.reset();
        //   });
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-auto  py-5">
      <div className="container mx-auto">
        <div className="row mt-3">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleRegister} className="border p-3">
              <h3 className="text-center border-bottom pb-3 mb-4">
                Register Now
              </h3>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputName"
                  className="form-label fw-semibold"
                >
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-semibold"
                >
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label fw-semibold"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>

              <div className="mb-3 text-center">
                Already have account ? Please <Link to="/login">Login Now</Link>{" "}
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
