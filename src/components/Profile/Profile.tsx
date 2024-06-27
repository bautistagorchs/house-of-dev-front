"use client";

import React, { useState } from "react";
import s from "./Profile.module.scss";
import Header from "@/commons/Header/Header";
import Image from "next/image";
import ClosedEye from "@/assets/ClosedEye";
import OpenedEye from "@/assets/OpenedEye";
import profilepic from "@/assets/profilepic.jpg";
import edit from "@/assets/edit.png";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store.state";
import { VscEdit } from "react-icons/vsc";
import ArrowBack from "@/commons/arrowBack/ArrowBack";

const Profile = () => {
  const [showHidePassword, setShowHidePassord] = useState(false);
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className={s.outerContainer}>
      <div className={s.arrowBackContainer}>
        <ArrowBack borderColor="#ffff" fontColor="#ffff" borderBottom="none" />
      </div>
      <div className={s.contentContainer}>
        <header>
          <Header text="Mi perfil" hrWidth="315px" />
        </header>
        <div className={s.content}>
          <div className={s.imageContainer}>
            <Image src={profilepic} alt="Profile picture" />
          </div>
          <form action="" className={s.form}>
            <label htmlFor="name">Nombre</label>
            <input disabled type="text" placeholder={user.name} name="name" />

            <label htmlFor="last_name">Apellido</label>
            <input
              disabled
              type="text"
              placeholder={user.last_name}
              name="last_name"
            />

            <label htmlFor="email">Email</label>
            <input
              disabled
              type="email"
              placeholder={user.email}
              name="email"
            />

            <label htmlFor="phone">Telefono</label>
            <input
              disabled
              type="number"
              placeholder={
                user.phone_number
                  ? user.phone_number.toString()
                  : "No hay informacion"
              }
              name="phone"
            />
            <div className={s.password}>
              <label htmlFor="password">Contraseña</label>
              <input
                disabled
                type={showHidePassword ? "text" : "password"}
                placeholder={user.email ? "........." : ""}
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
            <button className={`${s.button} ${s.enabled}`}>
              <p>Guardar</p>
              {/* <Image src={edit} alt="edit icon" /> */}
              <VscEdit size={19} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
