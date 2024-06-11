import React from "react";
import s from "./OnBoarding.module.scss";
import Image from "next/image";
import logo from "../../assets/logo.png";
import vectorUndraw from "../../assets/vectorUndraw.svg";
import funArrowUndraw from "../../assets/funArrowUndraw.svg";
import Link from "next/link";

const OnBoarding = () => {
  return (
    <div className={s.outerContainer}>
      <div className={s.redBg}>
        <div className={s.logoContainer}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={s.vectorContainer}>
          <h3 className={s.slogan}>Tu nueva vivienda está aqui</h3>
          <Image src={vectorUndraw} alt="vector" height={85} />
        </div>
      </div>
      <div className={s.arrowsContainer}>
        <Image src={funArrowUndraw} alt="arrow" height={180} />
      </div>
      <div className={s.buttonContainer}>
        <button>
          <Link href={"/login"}>Comenzar</Link>
        </button>
      </div>
    </div>
  );
};

export default OnBoarding;
