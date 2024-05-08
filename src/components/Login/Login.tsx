"use client";

import React, { useState } from "react";
import s from "./Login.module.scss";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import EmailInCircle from "@/commons/EmailInCircle/EmailInCircle";
import LockInCircle from "@/commons/lockInCircle/LockInCircle";
import OpenedEye from "@/assets/OpenedEye";
import ClosedEye from "@/assets/ClosedEye";

const Login = () => {
  const [showEmailLabel, setShowEmailLabel] = useState(true);
  const [showPasswordLabel, setShowPasswordlLabel] = useState(true);
  const [showHidePassword, setShowHidePassord] = useState(false);
  return (
    <div className={s.outerContainer}>
      <div className={s.redContainer}>
        <div className={s.logoContainer}>
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <div className={s.contentContainer}>
        <div className={s.formContainer}>
          <form className={s.form}>
            <div className={s.inputContainer}>
              <label htmlFor="email">
                <EmailInCircle />
                <span style={{ display: showEmailLabel ? "block" : "none" }}>
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  return e.target.value !== ""
                    ? setShowEmailLabel(false)
                    : setShowEmailLabel(true);
                }}
              />
            </div>
            <div className={s.inputContainer}>
              <label htmlFor="password">
                <LockInCircle />
                <span style={{ display: showPasswordLabel ? "block" : "none" }}>
                  Password
                </span>
              </label>
              <input
                type={showHidePassword ? "text" : "password"}
                name="password"
                onChange={(e) => {
                  return e.target.value !== ""
                    ? setShowPasswordlLabel(false)
                    : setShowPasswordlLabel(true);
                }}
              />
              <div
                className={s.eyeContainer}
                onClick={() => setShowHidePassord(!showHidePassword)}
              >
                {showHidePassword ? <ClosedEye /> : <OpenedEye />}
              </div>
            </div>
          </form>
        </div>
        <Link href={"/recover-password"}>
          <p>¿Olvidaste tu contraseña?</p>
        </Link>
        <div className={s.buttonContainer}>
          <button>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
