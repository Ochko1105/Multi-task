"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Input } from "./input";
import { Button } from "./button";
import { Header } from "./header";
export const Page2 = ({ form, setForm, error, setError, setStep }) => {
  useEffect(() => {
    const newerror2 = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(form.Email)) {
      newerror2.Email = null;
    } else {
      newerror2.Email = "Please provide a valid email address.";
    }
    setError({ ...error, newerror2 });
  }, [form.Email]);
  useEffect(() => {
    const newerror2 = {};
    const phoneregex = /^\d{8}$/;
    if (phoneregex.test(form.Phone)) {
      newerror2.Phone = null;
    } else {
      newerror2.Phone = "Please enter a valid phone number.";
    }
    setError({ ...error, newerror2 });
  }, [form.Phone]);
  useEffect(() => {
    const newerror2 = {};
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]).{8,}$/;
    if (passwordRegex.test(form.Password)) {
      newerror2.Password = null;
    } else {
      newerror2.Password = "Password must include letters and numbers.";
    }
    setError({ ...error, newerror2 });
  }, [form.Password]);
  useEffect(() => {
    const newerror2 = {};
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]).{8,}$/;
    if (form.Password === form.Confirm && passwordRegex.test(form.Password)) {
      newerror2.Confirm = null;
    } else {
      newerror2.Confirm = "Passwords do not match. Please try again.";
    }
    setError({ ...error, newerror2 });
  }, [form.Confirm]);
  const handleonclick2 = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneregex = /^\d{8}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]).{8,}$/;
    const newerror2 = {};

    if (emailRegex.test(form.Email)) {
      newerror2.Email = null;
    } else {
      newerror2.Email = "Please provide a valid email address.";
    }
    if (phoneregex.test(form.Phone)) {
      newerror2.Phone = null;
    } else {
      newerror2.Phone = "Please enter a valid phone number.";
    }
    if (passwordRegex.test(form.Password)) {
      newerror2.Password = null;
    } else {
      newerror2.Password = "Password must include letters and numbers.";
    }
    if (form.Password === form.Confirm && passwordRegex.test(form.Password)) {
      newerror2.Confirm = null;
    } else {
      newerror2.Confirm = "Passwords do not match. Please try again.";
    }

    if (
      !newerror2.Email &&
      !newerror2.Phone &&
      !newerror2.Password &&
      !newerror2.Confirm
    ) {
      localStorage.setItem("My-fuckinform", JSON.stringify(form));
      setStep("Page3");
    }

    setError(newerror2);
  };

  const handleonback = () => {
    setStep("Page1");
  };

  return (
    <motion.div
      className="mt-100 ml-100 relative"
      initial={{ opacity: 0, top: -300 }}
      animate={{
        opacity: 1,
        top: 0,

        transition: { duration: 1 },
      }}
    >
      <div className="h-fit w-fit bg-white p-[32px] text-black flex flex-col gap-4 rounded-md">
        <Header></Header>

        <div>
          <Input
            value={form.Email}
            onChange={(e) => {
              setForm({ ...form, Email: e.target.value });
            }}
            type={"text"}
            error={error.Email}
            placeholder={"Email"}
          ></Input>
        </div>

        <div>
          {" "}
          <Input
            value={form.Phone}
            onChange={(e) => {
              setForm({ ...form, Phone: e.target.value });
            }}
            type={"text"}
            error={error.Phone}
            placeholder={"Phone number"}
          ></Input>
        </div>

        <div>
          {" "}
          <Input
            value={form.Password}
            onChange={(e) => {
              setForm({ ...form, Password: e.target.value });
            }}
            type={"Password"}
            error={error.Password}
            placeholder={"Password"}
          ></Input>
        </div>

        <div>
          {" "}
          <Input
            value={form.Confirm}
            onChange={(e) => {
              setForm({ ...form, Confirm: e.target.value });
            }}
            type={"Password"}
            error={error.Confirm}
            placeholder={"Confirm password"}
          ></Input>
        </div>

        <div className="flex gap-4">
          {" "}
          <Button onClick={handleonback} primary={false}></Button>
          <Button
            onClick={handleonclick2}
            buttontext={"Continue 2/3"}
            primary={true}
            classNameplus={" !w-[380px]"}
          ></Button>
        </div>
      </div>
    </motion.div>
  );
};
