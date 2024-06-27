import React from "react";
import s from "./ArrowBack.module.scss";
import { VscArrowLeft } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { ArrowBackProps } from "@/types/types";

const ArrowBack = (props: ArrowBackProps) => {
  const navigate = useRouter();
  return (
    <div
      className={s.arrowBack}
      onClick={() => navigate.back()}
      style={{ border: `1px solid ${props.borderColor || "#0fa968"}` }}
    >
      <p
        style={{
          color: `${props.fontColor || "#0fa968"}`,
          padding: props.padding || "5px 8px",
          borderBottom: props.borderBottom ? "none" : "1px solid white",
        }}
      >
        {" "}
        <VscArrowLeft /> Volver
      </p>
    </div>
  );
};

export default ArrowBack;
