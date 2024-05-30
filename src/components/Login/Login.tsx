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
import { authMeService, loginService } from "@/services/user.services";

const Login = () => {
  const [showEmailLabel, setShowEmailLabel] = useState(true);
  const [showPasswordLabel, setShowPasswordlLabel] = useState(true);
  const [showHidePassword, setShowHidePassord] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "email") {
      return e.target.value !== ""
        ? setShowEmailLabel(false)
        : setShowEmailLabel(true);
    } else {
      return e.target.value !== ""
        ? setShowPasswordlLabel(false)
        : setShowPasswordlLabel(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginService(credentials);
  };
  return (
    <div className={s.outerContainer}>
      <div className={s.redContainer}>
        <div className={s.logoContainer}>
          <Image src={logo} alt="logo" />
        </div>
        <button onClick={() => authMeService()}>/me</button>
      </div>
      <div className={s.contentContainer}>
        <div className={s.formContainer}>
          <form
            action="submit"
            method="post"
            onSubmit={handleSubmit}
            className={s.form}
          >
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
                autoFocus
                onChange={handleChange}
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
                onChange={handleChange}
              />
              <div
                className={s.eyeContainer}
                onClick={() => setShowHidePassord(!showHidePassword)}
              >
                {showHidePassword ? <ClosedEye /> : <OpenedEye />}
              </div>
            </div>
            <input type="submit" value={"Submit"} style={{ display: "none" }} />
          </form>
        </div>
        <Link href={"/recover-password"}>
          <p>¿Olvidaste tu contraseña?</p>
        </Link>
        <div className={s.buttonContainer}>
          <button onClick={handleSubmit}>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
