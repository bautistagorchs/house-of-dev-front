import React from "react";
import s from "./AppointmentCard.module.scss";
import Image from "next/image";
import house3 from "@/assets/house3.jpeg";
import locationpin from "@/assets/locationPin.png";
import { AppCardProps } from "@/types/types";

const AppointmentCard = (info: AppCardProps) => {
  return (
    <div className={s.appCard}>
      <div className={s.left}>
        <div className={s.imgContainer}>
          <Image src={house3} alt="House" />
        </div>
      </div>
      <div className={s.right}>
        <div className={s.list}>
          <div>
            <div id={s.date}>{info.info.date} </div>
            <div id={s.time}>{info.info.time} hs</div>
          </div>
          <div>
            <Image src={locationpin} alt="location pin" />
            <p> {info.info.address} </p>
          </div>
          <div>
            <h5>Usuario</h5> <p>{info.info.user} </p>
          </div>
          <div>
            <h5>Telefono</h5> <p>{info.info.phone} </p>
          </div>
          <div>
            <h5>Email</h5> <p>{info.info.email} </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
