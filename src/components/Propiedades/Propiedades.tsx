"use client";

import React, { useEffect, useState } from "react";
import s from "./Propiedades.module.scss";
import Header from "@/commons/Header/Header";
import Image from "next/image";
import houseInterior1 from "@/assets/houseInterior1.jpg";
import PropertieCard from "@/commons/propertieCard/PropertieCard";
import arrowInCircle from "@/assets/arrowInCircle.png";
import { getAllProperties } from "@/services/propertie.service";
import { PropertieDataType } from "@/types/types";
import ArrowBack from "@/commons/arrowBack/ArrowBack";

const Propiedades = () => {
  const [properties, setproperties] = useState<PropertieDataType[]>([]);

  useEffect(() => {
    getAllProperties()
      .then((properties) => {
        if (properties.data) return setproperties(properties.data);
        return console.log("No se encontraron propiedades para mostrar");
      })
      .catch(() => {});
  }, []);
  return (
    <div className={s.outerContainer}>
      <div className={s.arrowBackContainer}>
        <ArrowBack fontColor="#ffff" padding="5px 0px 0px 0px" />
      </div>
      <header className={s.headerContainer}>
        <Header text="Propiedades en alquiler" hrWidth="170px" />
      </header>
      <div className={s.gridContainer}>
        <main>
          <div className={s.imageContainer}>
            <Image
              src={houseInterior1}
              alt="Main image"
              className={s.imgHouse}
            />
            <div className={s.textContainer}>
              <h2 id={s.mobileWidthH2}>
                Aca va un poco de <br /> texto que quiera <br /> la inmobiliaria
              </h2>
              <h2 id={s.fullWidthH2}>
                Aca va un poco de texto que <br /> quiera la inmobiliaria.{" "}
                <br /> Un poco mas largo
              </h2>
            </div>
            <div className={s.buttonContainer}>
              <button>
                <p>Inmobiliaria</p>
                <Image src={arrowInCircle} alt="Arrow in circle" />
              </button>
            </div>
          </div>
        </main>
        <hr id={s.mainSeparator} />
        <div className={s.cardsContainer}>
          {properties &&
            properties.map((propertie: PropertieDataType, i: number) => (
              <React.Fragment key={i}>
                <PropertieCard propertieInfo={propertie} />
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Propiedades;
