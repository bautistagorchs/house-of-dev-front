import React from "react";
import s from "./ArrowInCircle.module.scss";
import Image from "next/image";
import orangeCircle from "../../assets/orangeCircle.png";
import arrowRight from "../../assets/arrowRight.png";

const ArrowInCircle = () => {
  return (
    <div className={s.imagesContainer}>
      <Image src={orangeCircle} alt="orange circle" />
      <Image src={arrowRight} alt="email icon" className={s.icon} />
    </div>
  );
};

export default ArrowInCircle;
