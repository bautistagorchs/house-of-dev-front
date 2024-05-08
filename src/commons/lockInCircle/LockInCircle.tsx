import React from "react";
import s from "./LockInCircle.module.scss";
import Image from "next/image";
import lockIcon from "../../assets/lockIcon.png";
import orangeCircle from "../../assets/orangeCircle.png";

const LockInCircle = () => {
  return (
    <div className={s.imagesContainer}>
      <Image src={orangeCircle} alt="orange circle" className={s.circle} />
      <Image src={lockIcon} alt="password icon" className={s.icon} />
    </div>
  );
};

export default LockInCircle;
