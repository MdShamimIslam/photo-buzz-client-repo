import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../assets/log.png";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";
import UseTitle from "../../../Title/UseTitle";
const Login = () => {
  const [error, setError] = useState("");
  // const [userEmail, setUserEmail] = useState('');
  UseTitle("Login");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from.pathname || "/";
  const { user, signin, googleSignin, loading, setLoading } =
    useContext(AuthContext);
  // console.log(user);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password should be 6 characters or more.");
      return;
    }

    console.log(email, password);

    signin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        const currentUser = { email: user.email };
        console.log(currentUser);
        fetch(`https://photo-buzz-server.vercel.app/jwt`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token-jwt", data.token);
            console.log(data);
          });

        console.log(user);
        navigate(from, { replace: true });
        navigate("/");
        toast.success("Login Successfully..");
        form.reset();
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  };
  if (error.includes("wrong-password")) {
    setError("Wrong password");
  }

  const handleGoogleSignIn = () => {
    googleSignin()
      .then((result) => {
        navigate(from, { replace: true });

        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
        // ...
      });
  };
  return (
    <div>
      {loading && (
        <div className="w-16 h-16 my-[25%] mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      )}
      <div
        className="hero min-h-screen 
       bg-base-200 mt-20"
      >
        <div className="hero-content flex-col lg:flex-row-reverse mx-20">
          <div className="text-center lg:text-left">
            <img src={img} className="w-[80%]" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleForm}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="flex justify-between">
                  <Link to="#" className=" link link-hover">
                    <small>Forgot password?</small>
                  </Link>
                  <div to="#" className="">
                    <small>If you hav'nt Account?</small>{" "}
                    <Link to="/signup">SignUp</Link>{" "}
                  </div>
                </div>
                <div className="text-red-400">{error}</div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              {/*  */}
              <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                <p className="px-3 text-sm dark:text-gray-400">
                  Login with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              </div>
              <div
                onClick={handleGoogleSignIn}
                className="flex cursor-pointer justify-center bg-gray-500 rounded-md space-x-4"
              >
                <button
                  aria-label="Log in with Google"
                  className="p-3 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 text-white h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
