import React from "react";
import s from "./Appointments.module.scss";
import Header from "@/commons/Header/Header";
import AppointmentCard from "@/commons/AppointmentCard/AppointmentCard";

const Appointments = () => {
  const data = {
    date: "Jue 25, Jul 2002",
    time: "08:56",
    address: "Necochea 1922, Martinez, B1640BRW, Bs As",
    user: "Pepe Jimenezz",
    phone: "+54 9 11 2193 0482",
    email: "bautista.gorchs@gmail.com",
  };
  return (
    <div className={s.outerContainer}>
      <div className={s.contentContainer}>
        <header>
          <Header text="Proximas citas" hrWidth="200" />
        </header>
        <div className={s.appointments}>
          <AppointmentCard info={data} />
          <AppointmentCard info={data} />
          <AppointmentCard info={data} />
          <AppointmentCard info={data} />
          <AppointmentCard info={data} />
          <AppointmentCard info={data} />
          <AppointmentCard info={data} />
        </div>
      </div>
    </div>
  );
};

export default Appointments;
