import React from "react";
import s from "./EmailinCircle.module.scss";
import Image from "next/image";
import emailIcon from "../../assets/emailIcon.png";
import orangeCircle from "../../assets/orangeCircle.png";

const EmailInCircle = () => {
  return (
    <div className={s.imagesContainer}>
      <Image src={orangeCircle} alt="orange circle" className={s.circle} />
      <Image src={emailIcon} alt="email icon" className={s.icon} />
    </div>
  );
};

export default EmailInCircle;
