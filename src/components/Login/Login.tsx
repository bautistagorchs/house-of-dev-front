"use client";

import React, { useState } from "react";
import s from "./Login.module.scss";
import Image from "next/image";
import bigBackground from "@/assets/bigBackground.jpg";
import logo from "../../assets/logo.png";
import Link from "next/link";
import EmailInCircle from "@/commons/EmailInCircle/EmailInCircle";
import LockInCircle from "@/commons/lockInCircle/LockInCircle";
import OpenedEye from "@/assets/OpenedEye";
import ClosedEye from "@/assets/ClosedEye";
import signIn from "@/assets/signIn.svg";
import { loginService } from "@/services/user.services";
import { AppDispatch } from "@/state/store.state";
import { useDispatch } from "react-redux";
import { setUser } from "@/state/features/userSlice";
import { useRouter } from "next/navigation";

const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useRouter();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await loginService(credentials);
    if (!user) return;
    dispatch(setUser(user.data.user));
    return navigate.push("/home");
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
              <Image src={logo} alt="logo" />
            </div>
          </div>
          <div className={s.outerDiv}>
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
                      <span
                        style={{ display: showEmailLabel ? "block" : "none" }}
                      >
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="on"
                      autoFocus
                      onChange={handleChange}
                    />
                  </div>
                  <div className={s.inputContainer}>
                    <label htmlFor="password">
                      <LockInCircle />
                      <span
                        style={{
                          display: showPasswordLabel ? "block" : "none",
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
                  <input
                    type="submit"
                    value={"Submit"}
                    style={{ display: "none" }}
                  />
                </form>
              </div>
              <Link href={"/recover-password"}>
                <p>¿Olvidaste tu contraseña?</p>
              </Link>
              <div className={s.buttonContainer}>
                <button onClick={handleSubmit}>Log in</button>
              </div>
              <div className={s.dividerContainer} id={s.second}>
                <hr />
                Dont have an account?
                <hr />
              </div>
              <div className={s.goToLogin}>
                <button onClick={() => navigate.push("/register")}>
                  Go to register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
