"use client";

import ClosedEye from "@/assets/ClosedEye";
import OpenedEye from "@/assets/OpenedEye";
import bigBackground from "@/assets/bigBackground.jpg";
import signIn from "@/assets/signIn.svg";
import EmailInCircle from "@/commons/EmailInCircle/EmailInCircle";
import LockInCircle from "@/commons/lockInCircle/LockInCircle";
import Image from "next/image";
import React, { useState } from "react";
import s from "./register.module.scss";
import { useRouter } from "next/navigation";

const Register = () => {
  const navigate = useRouter();
  const [showHidePassword, setShowHidePassord] = useState(false);
  const [showHideConfirmPassword, setShowHideConfirmPassord] = useState(false);
  const [showLabels, setShowLabels] = useState({
    email: true,
    name: true,
    last_name: true,
    phone_number: true,
    password: true,
    confirm_password: true,
  });
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });

    setShowLabels((prev) => ({
      ...prev,
      [name]: value === "",
    }));
  };

  return (
    <div className={s.outerContainer}>
      <div className={s.background}>
        <div className={s.left}>
          <div className={s.svgContainer}>
            <Image src={signIn} alt="Undraw Svg" id={s.signIn} />
          </div>
        </div>
        <div className={s.right}>
          <Image src={bigBackground} alt="big background" />
        </div>
        <div className={s.floatingContent}>
          <div className={s.mainColorContainer}>
            <div className={s.logoContainer}>
              <h1>Sign Up</h1>
            </div>
          </div>
          <div className={s.outerDiv}>
            <div className={s.contentContainer}>
              <div className={s.formContainer}>
                <form action="submit" method="post" className={s.form}>
                  <div className={s.inputContainer}>
                    <label htmlFor="name">
                      <EmailInCircle />
                      <span
                        style={{ display: showLabels.name ? "block" : "none" }}
                      >
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      autoFocus
                      onChange={handleChange}
                    />
                  </div>
                  <div className={s.inputContainer}>
                    <label htmlFor="last_name">
                      <EmailInCircle />
                      <span
                        style={{
                          display: showLabels.last_name ? "block" : "none",
                        }}
                      >
                        Last name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      autoFocus
                      onChange={handleChange}
                    />
                  </div>
                  <div className={s.inputContainer}>
                    <label htmlFor="phone_number">
                      <EmailInCircle />
                      <span
                        style={{
                          display: showLabels.phone_number ? "block" : "none",
                        }}
                      >
                        Phone number
                      </span>
                    </label>
                    <input
                      type="number"
                      name="phone_number"
                      autoFocus
                      onChange={handleChange}
                    />
                  </div>
                  <div className={s.inputContainer}>
                    <label htmlFor="email">
                      <EmailInCircle />
                      <span
                        style={{ display: showLabels.email ? "block" : "none" }}
                      >
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
                      <span
                        style={{
                          display: showLabels.password ? "block" : "none",
                        }}
                      >
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
                  <div className={s.inputContainer}>
                    <label htmlFor="confirm_password">
                      <LockInCircle />
                      <span
                        style={{
                          display: showLabels.confirm_password
                            ? "block"
                            : "none",
                        }}
                      >
                        Confirm password
                      </span>
                    </label>
                    <input
                      type={showHideConfirmPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                    />
                    <div
                      className={s.eyeContainer}
                      onClick={() =>
                        setShowHideConfirmPassord(!showHideConfirmPassword)
                      }
                    >
                      {showHideConfirmPassword ? <ClosedEye /> : <OpenedEye />}
                    </div>
                  </div>
                  <input
                    type="submit"
                    value={"Submit"}
                    style={{ display: "none" }}
                  />
                </form>
              </div>
              <div className={s.dividerContainer}>
                <hr />
                o
                <hr />
              </div>
              <div className={s.buttonContainer}>
                <button>Register</button>
              </div>
              <div className={s.dividerContainer} id={s.second}>
                <hr />
                Have an account?
                <hr />
              </div>
              <div className={s.goToLogin}>
                <button onClick={() => navigate.push("/login")}>
                  Go to login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
