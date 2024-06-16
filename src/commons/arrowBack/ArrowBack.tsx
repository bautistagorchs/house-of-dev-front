import React from "react";
import s from "./ArrowBack.module.scss";
import { VscArrowLeft } from "react-icons/vsc";
import { useRouter } from "next/navigation";

const ArrowBack = () => {
  const navigate = useRouter();
  return (
    <div className={s.arrowBack} onClick={() => navigate.back()}>
      <p>
        {" "}
        <VscArrowLeft /> Volver
      </p>
    </div>
  );
};

export default ArrowBack;
