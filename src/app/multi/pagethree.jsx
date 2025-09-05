"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Input } from "./input";
import { Button } from "./button";
import { Header } from "./header";

export const Page3 = ({ form, setForm, setStep, error, setError }) => {
  const [pev, setPev] = useState("");
  const handleonclick3 = () => {
    const newerror3 = {};
    if (form.Date) {
      newerror3.Date = null;
    } else {
      newerror3.Date = "Bitch tursun uduruu oruulach";
    }
    if (form.image) {
      newerror3.image = null;
    } else {
      newerror3.image = "Image cannot be blank";
    }
    setError(newerror3);
    if (!newerror3.Date && !newerror3.image) {
      localStorage.setItem("My-fuckinform", JSON.stringify(form));
      setStep("Page4");
    }
  };
  const handleonimage = (e) => {
    const file = e.target.files[0];
    const filepev = URL.createObjectURL(file);
    setPev(filepev);
  };
  const handleonback = () => {
    setStep("Page2");
  };

  return (
    <motion.div
      className="mt-100 ml-100 relative"
      initial={{ opacity: 0, top: 300 }}
      animate={{
        opacity: 1,
        top: 0,

        transition: { duration: 1 },
      }}
    >
      <div className="h-fit w-fit bg-white p-[32px] text-black flex flex-col gap-4  rounded-md">
        <Header></Header>

        <div>
          <Input
            value={form.Date}
            onChange={(e) => {
              setForm({ ...form, Date: e.target.value });
            }}
            type={"Date"}
            placeholder={"Date of birth"}
            classnameplus={" !w-[416px]"}
            error={error.Date}
          ></Input>
        </div>

        <div>
          Profile image <span className="text-red-700">*</span>
        </div>
        <div className="w-[416px] h-[180px] bg-gray-200 text-center flex justify-center items-center relative  ">
          Add image
          {pev && (
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={pev}
            />
          )}
          <input
            type="file"
            className="flex justify-center ml-30  inset-0 absolute opacity-0"
            onChange={(e) => {
              handleonimage(e);
              setForm({ ...form, image: e.target.value });
            }}
          ></input>
        </div>
        {error.image && <div className="text-red-600">{error.image}</div>}
        <div className="flex gap-4">
          <Button onClick={handleonback} primary={false}></Button>

          <Button
            onClick={handleonclick3}
            buttontext={"Submit 3/3"}
            primary={true}
            classNameplus={" !w-[300px] "}
          ></Button>
        </div>
      </div>
    </motion.div>
  );
};
