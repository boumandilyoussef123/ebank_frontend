"use client";

// import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
// import messages from "../data/messages";
// import {
//   ProfileType,
//   User,
//   UserContext as UserCtx,
//   ProfileContext as ProfileCtx
// } from '../../Types'
// import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
// import { UserContext } from '../../contexts/UserContext'
// import Loader from '../../components/loader/Loader'
// import { ProfileContext } from '../../contexts/ProfileContext'
// import { GET_PROFILE_BY_EMAIL, Get_USER_BY_EMAIL } from '../../Graphql/Queries'
// import { ADD_STATS } from '../../Graphql/Mutations'

export const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [identity, setIdentity] = useState("Client");
  const [errorMessage, setErrorMessage] = useState();
  //   const { user, setUser }: UserCtx = useContext(UserContext)
  //   const { setProfile }: ProfileCtx = useContext(ProfileContext)
  const [loaderDisplay, setLoaderDisplay] = useState("hidden");

  //   const navigate = useNavigate();

  function handleNavigateSignUp() {
    // navigate(`/Signup/${identity}`);
  }
  function handleNavigateForgotPassword() {
    // navigate("/ForgotPassword");
  }
  const data = {
    email: email,
    password: Password,
    identity: identity,
  };

  //   const [prof, setProf] = useState<ProfileType>()

  //   const [getUser, obj1] =useLazyQuery (Get_USER_BY_EMAIL, {
  //     variables: { email: email },
  //   });
  //   const [insertStats, statsValues] = {};

  //   const [getProfile, profiles] = useLazyQuery(GET_PROFILE_BY_EMAIL);

  //   useEffect(() => {
  //     if (profiles.data) {
  //       setProf(profiles.data.ProfileOne);
  //     }
  //   }, [profiles]);

  useEffect(() => {
    // getProfile();
    localStorage.clear();
  }, []);

  const login = () => {
    // setLoaderDisplay("visible");
    // setErrorMessage("");

    // fetch(
    //   "/api/get_user/10",

    //   {
    //     method: "POST",
    //     // body: JSON.stringify(data), // mode:'cors',
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Headers":
    //         "Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Origin,Access-Control-Allow-Methods",
    //       "Access-Control-Allow-Methods": "OPTIONS,POST",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   }
    // ).then((response) => {
    //   console.log("response", response);

    //   return response.json();
    // });
    //   .then(async (result) => {
    //     console.log("result", result);
    //     result = JSON.parse(result.body);

    //     if (result.statusCode === 200) {
    //       await getProfile({
    //         variables: { email: email },
    //       }).then(async (profiles) => {
    //         console.log("profiles", profiles);
    //         setLoaderDisplay("hidden");
    //         await getUser().then(async (result) => {
    //           setUser(result.data.UserOne);
    //           await insertStats({
    //             variables: {
    //               stats: {
    //                 UserId: result.data.UserOne._id,
    //                 logedInAt: new Date().toJSON(),
    //               },
    //             },
    //           });
    //           if (result.data.UserOne.userType === "Client") {
    //             if (profiles.data.ProfileOne !== null) {
    //               console.log("result:null");

    //               window.location.href = "/CLIENTFilterPage";
    //             } else {
    //               window.location.href = "/ProfileSetupIntro";
    //             }
    //           } else if (result.data.UserOne) {
    //             window.location.href = "/FirmMainFeed";
    //           }
    //         });
    //       });
    //       setUser((prevUser) => ({ ...prevUser, email: email }));
    //       !!prof && setProfile(prof);
    //     } else {
    //       console.log(result?.body);

    //       setErrorMessage(result.message);
    //       setLoaderDisplay("hidden");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    localStorage.setItem("email", email);
  };

  return (
    <>
      {" "}
      <div className=" flex min-h-screen justify-start mx-auto w-full bg-[#F9F8F8]">
        {" "}
        <div className="m-auto w-11/12 md:w-10/12 xl:w-6/12 bg-white shadow-md rounded-sm flex flex-col justify-start items-center ">
          {" "}
          <div className="flex grow w-full border-b-2 ">
            {" "}
            <h1
              className={`cursor-pointer font-bold  border-primary w-2/4 text-center py-4 text-3xl ${
                show === false ? `border-b-4 text-primary` : ""
              }`}
              style={{ borderColor: "#488488" }}
              onClick={() => {
                setShow(false);
                setIdentity("Client");
              }}
            >
              Client
            </h1>
            <h1
              className={`cursor-pointer font-bold  border-primary w-2/4 text-center py-4 text-3xl ${
                show === true ? `border-b-4 text-primary` : ""
              }`}
              style={{ borderColor: "#488488" }}
              onClick={() => {
                setShow(true);
                setIdentity("AGENT_GUICHET");
              }}
            >
              AGENT_GUICHET
            </h1>
          </div>
          <div className=" mx-auto w-10/12">
            <h1 className="mt-16 text-4xl text-[#6D6E6F] text-center font-Metropoli">
              Welcome Back
            </h1>
            <form>
              {" "}
              <div className="py-4 mx-auto">
                {" "}
                <div className=" flex flex-col w-full ">
                  <label className="text-sm text-[#6D6E6F] text-left">
                    Identifiant
                  </label>
                  <input
                    onChange={(event) => setEmail(event.target.value)}
                    className="px-2 rounded h-8 text-sm mt-2 "
                    style={{ border: "solid 1px #CECBCB " }}
                    type="text"
                    placeholder="A19273672"
                  ></input>
                </div>
                <div className=" flex flex-col w-full pt-4">
                  <div className=" flex justify-between">
                    <label className="text-sm text-[#6D6E6F]">Password</label>
                    <label
                      className="cursor-pointer font-bold text-xs text-[#478488cc] underline "
                      onClick={() => {
                        handleNavigateForgotPassword();
                      }}
                    >
                      Forgot Password?
                    </label>
                  </div>
                  <input
                    onChange={(event) => setPassword(event.target.value)}
                    style={{ border: "solid 1px #CECBCB " }}
                    className="px-2 rounded h-8 text-sm mt-2 "
                    type="Password"
                    placeholder="Password"
                  ></input>
                </div>
              </div>
              <h5 className="text-center text-xs text-red-500 pb-4">
                {errorMessage}
              </h5>
            </form>
            <div className="text-center flex flex-col-reverse gap-4 justify-center items-center mt-8">
              <div className={`w-10 h-10 ${loaderDisplay}`}>
                {/* <Loader /> */}
              </div>
              <button
                type="submit"
                className="font-normal text-center w-24 text-white bg-primary p-3 rounded text-xs "
                onClick={login}
              >
                Log In
              </button>
            </div>
            <div className=" flex justify-center py-12">
              {show ? (
                <h3
                  className="cursor-pointer font-bold text-xs text-[#478488cc] underline ml-2"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                ></h3>
              ) : (
                <>
                  <h3 className="font-normal text-xs ">
                    Don’t have an account?
                  </h3>
                  <h3
                    className="cursor-pointer font-bold text-xs text-[#478488cc] underline ml-2"
                    onClick={() => {
                      handleNavigateSignUp();
                    }}
                  >
                    Sign Up
                  </h3>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
