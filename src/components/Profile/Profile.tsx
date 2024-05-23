"use client";

import React, { useState } from "react";
import s from "./Profile.module.scss";
import Header from "@/commons/Header/Header";
import Image from "next/image";
import ClosedEye from "@/assets/ClosedEye";
import OpenedEye from "@/assets/OpenedEye";
import profilepic from "@/assets/profilepic.jpg";
import edit from "@/assets/edit.png";

const Profile = () => {
  const [showHidePassword, setShowHidePassord] = useState(false);

  return (
    <div className={s.outerContainer}>
      <div className={s.contentContainer}>
        <header>
          <Header text="Mi perfil" hrWidth="215px" />
        </header>
        <div className={s.content}>
          <div className={s.imageContainer}>
            <Image src={profilepic} alt="Profile picture" />
          </div>
          <form action="" className={s.form}>
            <label htmlFor="name">Nombre</label>
            <input disabled type="text" placeholder="Bautista" name="name" />

            <label htmlFor="last_name">Apellido</label>
            <input disabled type="text" placeholder="Gorchs" name="last_name" />

            <label htmlFor="email">Email</label>
            <input
              disabled
              type="email"
              placeholder="bautista.gorchs1@gmail.com"
              name="email"
            />

            <label htmlFor="phone">Telefono</label>
            <input
              disabled
              type="number"
              placeholder="+54 9 11 2193 0482"
              name="phone"
            />
            <div className={s.password}>
              <label htmlFor="password">Contraseña</label>
              <input
                disabled
                type={showHidePassword ? "text" : "password"}
                placeholder="........."
                name="password"
              />
              <div
                className={s.eyeContainer}
                onClick={() => setShowHidePassord(!showHidePassword)}
              >
                {showHidePassword ? <ClosedEye /> : <OpenedEye />}
              </div>
            </div>
          </form>
          <div className={s.buttonContainer}>
            <button className={`${s.button} ${s.enabled}`}>
              <p>Editar</p>
              <Image src={edit} alt="edit icon" />
            </button>
            <button className={`${s.button} ${s.disabled}`}>
              <p>Guardar</p>
              <Image src={edit} alt="edit icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
