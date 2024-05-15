import React from "react";
import s from "./EmailinCircle.module.scss";
import Image from "next/image";
import emailIcon from "../../assets/emailIcon.png";
import orangeCircle from "../../assets/orangeCircle.png";

const EmailInCircle = () => {
  return (
    <div className={s.imagesContainer}>
      <Image src={orangeCircle} alt="orange circle" />
      <Image src={emailIcon} alt="arrow icon" className={s.icon} />
    </div>
  );
};

export default EmailInCircle;
