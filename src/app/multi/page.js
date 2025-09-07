"use client";
import { useEffect, useState } from "react";
import { Page1 } from "./pageone";
import { Page2 } from "./pagetwo";
import { Page3 } from "./pagethree";

import { motion } from "motion/react";

const Home = () => {
  const [error, setError] = useState({});
  const [form, setForm] = useState({
    Firstname: "",
    Lastname: "",
    Username: "",
    Email: "",
    Phone: "",
    Password: "",
    Confirm: "",
    Date: "",
    image: "",
  });
  useEffect(() => {
    const localform = localStorage.getItem("My-fuckinform");
    if (localform) {
      setForm(JSON.parse(localform));
    }
  }, []);

  const [step, setStep] = useState("Page1");

  console.log(form);
  if (step === "Page1") {
    return (
      <div>
        <Page1
          form={form}
          setForm={setForm}
          error={error}
          setError={setError}
          setStep={setStep}
        ></Page1>
      </div>
    );
  }

  if (step === "Page2") {
    return (
      <div>
        <Page2
          form={form}
          setForm={setForm}
          error={error}
          setError={setError}
          setStep={setStep}
        ></Page2>
      </div>
    );
  }

  if (step === "Page3") {
    return (
      <div>
        <Page3
          form={form}
          setForm={setForm}
          setStep={setStep}
          error={error}
          setError={setError}
        ></Page3>
      </div>
    );
  }

  if (step === "Page4") {
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
          <div className="h-15 w-15 ">
            <img src="tasklogo.png"></img>
          </div>
          <div>
            <h1 className="text-[26px] font-semibold">You're All Set 🔥</h1>
          </div>
          <div className="text-[18px] text-[#8E8E8E] font-normal">
            {" "}
            We have received your submission. Thank you!
          </div>
          <button
            className="bg-white border border-black py-2 px-2 "
            onClick={() => {
              setStep("Page3");
            }}
          >
            Back
          </button>
        </div>
      </motion.div>
    );
  }
};

export default Home;
