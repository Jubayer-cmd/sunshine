import React from "react";
import { Button, Spinner } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "./../../firebase.init";

const Signin = () => {
  const [user] = useAuthState(auth);
  let ErrorOccur;
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, updating] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    ErrorOccur = <p className="text-danger">Error: {error?.message}</p>;
  }

  const signingoogle = () => {
    signInWithGoogle();
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const resetPassword = (event) => {
    const email = event.target.email.value;
    if (email) {
      sendPasswordResetEmail(email);
      toast("Email sent!");
    } else {
      toast("please enter your Email address!");
    }
  };
  return (
    <div
      className="d-flex justify-content-center m-5"
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="400"
    >
      <div className="card mb-3 shadow bg-white rounded">
        <div className="row no-gutters">
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration-enter-application-mobile-screen-user-login-form-website-page-interface-ui-new-profile-registration-email-account_335657-936.jpg?w=740"
              className="img-fluid w-100"
              alt="..."
            />
          </div>
          <div
            style={{ backgroundColor: "#DEE0FF" }}
            className="col-md-6 d-flex align-items-center border-start"
          >
            <div className="card-body">
              <form className="text-center m-2" onSubmit={handleLogin}>
                <h1 className="text-primary">Login</h1>
                <input
                  className=" w-100 mb-2 p-2"
                  type="email"
                  name="email"
                  id=""
                  placeholder="E-mail"
                  required
                />{" "}
                <br />
                <input
                  className=" w-100 mb-2 p-2"
                  type="Password"
                  name="password"
                  id=""
                  placeholder="Password"
                  required
                />{" "}
                <br />
                <input
                  className=" w-100 mb-2 bg-primary text-white border-0 p-2 rounded "
                  type="submit"
                  value="Login"
                />
                {ErrorOccur}
                {loading && (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
                {updating && (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">updating...</span>
                  </Spinner>
                )}
                <p>OR</p>
                <Button onClick={signingoogle} className="btn btn-info mb-2">
                  <i className="bi bi-google m-2"></i>SignIn
                </Button>
                <p>
                  New user here? <Link to={"/register"}>Register</Link>
                </p>
              </form>
              <p>
                Forget Password?{" "}
                <button
                  className="btn btn-link text-primary pe-auto text-decoration-none"
                  onClick={resetPassword}
                >
                  Reset Password
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
