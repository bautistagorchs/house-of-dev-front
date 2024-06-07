import React from "react";
import s from "./GridView.module.scss";
import Header from "@/commons/Header/Header";
import Image from "next/image";
import houseInterior1 from "@/assets/houseInterior1.jpg";
import PropertieCard from "@/commons/propertieCard/PropertieCard";
import arrowInCircle from "@/assets/arrowInCircle.png";

const GridView = () => {
  return (
    <div className={s.outerContainer}>
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
          <PropertieCard />
          <PropertieCard />
          <PropertieCard />
          <PropertieCard />
          <PropertieCard />
        </div>
      </div>
    </div>
  );
};

export default GridView;
