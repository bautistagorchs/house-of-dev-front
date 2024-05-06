import React from "react";
import s from "./OnBoarding.module.scss";
import Image from "next/image";
import logo from "../../assets/logo.png";
import vector from "../../assets/Vector.png";
import arrow from "../../assets/Arrow 14.png";
import Link from "next/link";

const OnBoarding = () => {
  return (
    <Link href={"/login"}>
      <div className={s.outerContainer}>
        <div className={s.redBg}>
          <div className={s.logoContainer}>
            <Image src={logo} alt="logo" />
          </div>
          <div className={s.vectorContainer}>
            <Image src={vector} alt="vector" />
            <h3 className={s.slogan}>Tu nueva vivienda está aqui</h3>
          </div>
        </div>
        <div className={s.arrowsContainer}>
          <Image src={arrow} alt="arrow" />
          <Image src={arrow} alt="arrow" />
          <Image src={arrow} alt="arrow" />
        </div>
      </div>
    </Link>
  );
};

export default OnBoarding;
