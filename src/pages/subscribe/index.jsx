"use client";

// import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";

export const SignUp = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  //   const navigate = useNavigate();
  //   const { userType } = useParams();
  const data = {
    FirstName: FirstName,
    LastName: LastName,
    email: Email,
    // userType: userType,
  };
  const onclick = () => {
    e.preventDefault();

    window.location.href =
      "/CreatePassword/" +
      data.FirstName +
      "/" +
      data.LastName +
      "/" +
      data.email +
      "/";
    //   data.userType;
  };

  function handleNavigate26() {
    // navigate("/");
  }
  function handleNavigateCreatePassword() {
    // navigate("/CreatePassword");
  }

  return (
    <div className="  min-h-screen -z-10  flex  justify-start mx-[auto]  bg-[#F9F8F8] relative landscape:py-8">
      <div className=" flex justify-arround -z-10 m-auto bg-white shadow-md rounded w-11/12  md:w-5/6   lg:w-2/5 landscape:flex landscape:flex-col  ">
        <form
          className=" flex flex-col justify-between w-11/12 -z-10 h-full m-auto md:py-8 mt-2 md:w-4/3 md:px-12 "
          onSubmit={onclick}
        >
          <h1 className="pb-8 text-4xl text-[#6D6E6F] text-center font-bold ">
            Sign Up
          </h1>
          <div className=" md:mb-0 flex flex-col z-0  landscape:gap-8 lg:mt-4 md:grow">
            <div className=" flex flex-col justify-around md:flex md:flex-row md:justify-around md:items-center ">
              <div className="w-full my-3 md:my-0 md:w-5/12">
                <label className="text-sm text-[#6D6E6F]">First Name</label>
                <input
                  className="px-2 rounded h-8  text-sm mt-2 w-full"
                  style={{ border: "solid 1px #CECBCB " }}
                  type="text"
                  placeholder="Johnny:"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="w-full my-3 md:my-0 md:w-5/12">
                <label className="text-sm text-[#6D6E6F]">Last Name</label>
                <input
                  className="px-2 rounded h-8 text-sm mt-2 w-full"
                  style={{ border: "solid 1px #CECBCB " }}
                  type="text"
                  placeholder="Appleseed"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                ></input>
              </div>
            </div>

            <div className=" flex flex-col justify-around md:flex md:flex-row md:justify-around md:items-center ">
              <div className="w-full my-3 md:my-0 md:w-5/12">
                <label className="text-sm text-[#6D6E6F]">Birthday</label>
                <input
                  className="px-2 rounded h-8  text-sm mt-2 w-full"
                  style={{ border: "solid 1px #CECBCB " }}
                  type="date"
                  placeholder="Johnny:"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="w-full my-3 md:my-0 md:w-5/12">
                <label className="text-sm text-[#6D6E6F]">CIN</label>
                <input
                  className="px-2 rounded h-8 text-sm mt-2 w-full"
                  style={{ border: "solid 1px #CECBCB " }}
                  type="text"
                  placeholder="W123442"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                ></input>
              </div>
            </div>

            <div className=" flex flex-col my-3 md:my-0 w-full md:w-11/12 md:mx-auto  ">
              <label className="text-sm text-[#6D6E6F]">Adress</label>
              <input
                className="px-2 rounded h-8 text-sm mt-2 "
                style={{ border: "solid 1px #CECBCB " }}
                type="email"
                placeholder="1234 Main St, Apartment, City, State, ZIP"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className=" flex flex-col my-3 md:my-0 w-full md:w-11/12 md:mx-auto  ">
              <label className="text-sm text-[#6D6E6F]">Email</label>
              <input
                className="px-2 rounded h-8 text-sm mt-2 "
                style={{ border: "solid 1px #CECBCB " }}
                type="email"
                placeholder="johnny.appleseed@email.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <p
              className="text-red-500 text-center mb-1 md:mb-5 "
              style={{
                color:
                  ErrorMessage === "A confirmation code was sent to your email"
                    ? "green"
                    : "red",
              }}
            >
              {ErrorMessage}
            </p>
          </div>
          <div className="py-6 landscape:py-0 md:py-0">
            <div className="text-center">
              <button
                className="font-normal text-center w-24 text-white bg-[#488488] p-3 rounded text-xs  "
                onClick={onclick}
              >
                Add User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
