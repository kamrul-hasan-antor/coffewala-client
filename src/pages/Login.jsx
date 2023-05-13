import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { googleProvider, logInUser } = useContext(AuthContext);
  const googleNewProvider = new GoogleAuthProvider();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();

        navigate(from, { replace: true });
      })
      .catch((err) => setLoginError(err.message));
  };

  const handleGoogleSignIn = () => {
    googleProvider(googleNewProvider)
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
      })

      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="mx-auto  py-5">
      <div className="container mx-auto">
        <div className="row mt-3">
          <div className="col-md-6  mx-auto">
            <form onSubmit={handleLogin} className="border p-3">
              <h3 className="text-center border-bottom pb-3 mb-4">Login Now</h3>
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
                New in Tech Guru? Please{" "}
                <Link to="/register">Register Now</Link> or Login with
                <span
                  onClick={handleGoogleSignIn}
                  className="text-primary ms-1 text-decoration-underline google_btn"
                >
                  Google
                </span>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
