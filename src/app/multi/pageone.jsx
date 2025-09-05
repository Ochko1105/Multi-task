"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Input } from "./input";
import { Button } from "./button";
import { Header } from "./header";

export const Page1 = ({ form, setForm, error, setError, setStep }) => {
  useEffect(() => {
    const newerror = {};
    const nameRegex = /^[A-Za-z]+([-' ][A-Za-z]+)*$/;
    if (nameRegex.test(form.Firstname)) {
      newerror.Firstname = null;
    } else {
      newerror.Firstname =
        "First name cannot contain special characters or numbers";
    }
    setError({ ...error, newerror });
  }, [form.Firstname]);
  useEffect(() => {
    const newerror = {};
    const nameRegex = /^[A-Za-z]+([-' ][A-Za-z]+)*$/;
    if (nameRegex.test(form.Lastname)) {
      newerror.Lastname = null;
    } else {
      newerror.Lastname =
        "Last name cannot contain special characters or numbers";
    }
    setError({ ...error, newerror });
  }, [form.Lastname]);
  useEffect(() => {
    const newerror = {};
    const usernameregex = /^[a-zA-Z0-9_]{3,16}$/;
    if (usernameregex.test(form.Username)) {
      newerror.Username = null;
    } else {
      newerror.Username =
        "This username is already taken. Please choose another one.";
    }
    setError({ ...error, newerror });
  }, [form.Username]);
  const handleonclick = () => {
    const newerror = {};
    const nameRegex = /^[A-Za-z]+([-' ][A-Za-z]+)*$/;
    const usernameregex = /^[a-zA-Z0-9_]{3,16}$/;
    if (nameRegex.test(form.Firstname)) {
      newerror.Firstname = null;
    } else {
      newerror.Firstname =
        "First name cannot contain special characters or numbers";
    }
    if (nameRegex.test(form.Lastname)) {
      newerror.Lastname = null;
    } else {
      newerror.Lastname =
        "Last name cannot contain special characters or numbers";
    }
    if (usernameregex.test(form.Username)) {
      newerror.Username = null;
    } else {
      newerror.Username =
        "This username is already taken. Please choose another one.";
    }

    if (!newerror.Firstname && !newerror.Lastname && !newerror.Username) {
      setStep("Page2");
      localStorage.setItem("My-fuckinform", JSON.stringify(form));
    }
    setError(newerror);

    console.log("darlaa");
  };

  return (
    <motion.div
      className="mt-100 ml-100 relative"
      initial={{ opacity: 0, bottom: -300 }}
      animate={{
        opacity: 1,
        bottom: 0,

        transition: { duration: 1 },
      }}
    >
      <div className="h-fit w-fit bg-white p-[32px] text-black flex flex-col gap-4 rounded-md">
        {" "}
        <Header></Header>
        <div>
          <div>
            <Input
              value={form.Firstname}
              onChange={(e) => {
                setForm({ ...form, Firstname: e.target.value });
              }}
              type={"text"}
              error={error.Firstname}
              placeholder={"First name"}
            ></Input>
          </div>
        </div>
        <div>
          <div>
            <Input
              value={form.Lastname}
              onChange={(e) => {
                setForm({ ...form, Lastname: e.target.value });
              }}
              type={"text"}
              error={error.Lastname}
              placeholder={"Last name"}
            ></Input>
          </div>
        </div>
        <div>
          <div>
            <Input
              value={form.Username}
              onChange={(e) => {
                setForm({ ...form, Username: e.target.value });
              }}
              type={"text"}
              error={error.Username}
              placeholder={"User name"}
            ></Input>
          </div>
        </div>
        <div>
          <div>
            {" "}
            <Button
              onClick={handleonclick}
              buttontext={"Continue 1/3"}
              primary={true}
            ></Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
