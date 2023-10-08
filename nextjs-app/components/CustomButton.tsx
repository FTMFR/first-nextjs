"use client";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  clickHanlder,
  btnType
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn`}
      onClick={() => {}}
    >
      <span className={`flex-1`}>Title</span>
    </button>
  );
};

export default CustomButton;
