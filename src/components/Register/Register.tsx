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
import { registerService } from "@/services/user.services";
import { AxiosError } from "axios";

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
    name: "",
    last_name: "",
    phone_number: 0,
    email: "",
    password: "",
    confirm_password: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, last_name, phone_number, email, password, confirm_password } =
      credentials;
    if (
      !name ||
      !last_name ||
      !phone_number ||
      !email ||
      !password ||
      !confirm_password
    )
      return console.error("COMPLETA TODOS LOS CAMPOS LPM!");
    if (password !== confirm_password)
      return console.error("LAS CONTRASEÑAS NO COINCIDEN");
    else {
      try {
        const response = await registerService(credentials);
        console.log(response);
      } catch (error) {
        console.error((error as AxiosError).response?.data);
      }
    }
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
                <form
                  action="submit"
                  method="post"
                  className={s.form}
                  onSubmit={handleSubmit}
                >
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
                      autoComplete="on"
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
                      autoComplete="on"
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
                      autoComplete="on"
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
                      name="confirm_password"
                      autoComplete="on"
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
                <button onClick={handleSubmit}>Register</button>
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
