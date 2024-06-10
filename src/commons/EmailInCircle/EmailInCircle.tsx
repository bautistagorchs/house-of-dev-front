import React from "react";
import s from "./EmailinCircle.module.scss";
// import Image from "next/image";
import { CiUser } from "react-icons/ci";
// import emailIcon from "../../assets/emailIcon.png";
// import orangeCircle from "../../assets/orangeCircle.png";
// import User from "@/assets/User.svg";

const EmailInCircle = () => {
  return (
    <div className={s.imagesContainer}>
      {/* <Image src={orangeCircle} alt="orange circle" />
      <Image
        src={User}
        width={17}
        alt="arrow icon"
        className={s.icon}
      /> */}
      <CiUser color="#073a4d" size={15} />
    </div>
  );
};

export default EmailInCircle;
