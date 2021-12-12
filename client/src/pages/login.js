import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApi } from "../api/index";
const Login = () => {
  let navigate = useNavigate();
  const [loginState, setloginState] = useState({
    signup: false,
    email: "",
    password: "",
    confPass: "",
  });

  const loginButtonClick = () => {
    const user = Object.assign({ amount: 0 }, loginState);
    localStorage.setItem("user", JSON.stringify(user));
    getApi(`${loginState.signup ? "signup" : "login"}`, loginState).then(
      (data) => {
        if (data && data.status) {
          loginState.signup &&
            localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/chatHome");
        }
      }
    );
  };

  return (
    <div className="rounded bg-slate-50 ">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="Email"
          >
            Email
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="email"
            onChange={(e) =>
              setloginState({ ...loginState, email: e.target.value })
            }
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-grey-darker"
            id="password"
            type="password"
            placeholder="***********"
            onChange={(e) =>
              setloginState({ ...loginState, password: e.target.value })
            }
          />
        </div>
        {loginState && loginState.signup && (
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Confirm Password
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-grey-darker"
              id="cpassword"
              type="password"
              placeholder="***********"
            />
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            className="text-white bg-red-500 font-bold py-2 px-4 rounded"
            type="button"
            onClick={loginButtonClick}
          >
            Sign {loginState && !loginState.signup ? " In" : " Up"}
          </button>
          {loginState && !loginState.signup && (
            <p className="underline text-xs cursor-pointer italic">
              Forgot Password?
            </p>
          )}
        </div>

        <div className="flex flex-col text-center">
          <p
            className="underline text-lg cursor-pointer"
            onClick={() =>
              setloginState({ ...loginState, signup: !loginState.signup })
            }
          >
            Sign {loginState && loginState.signup ? " In" : " Up"}?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
