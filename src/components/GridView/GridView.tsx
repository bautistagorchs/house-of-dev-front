import React from "react";
import s from "./GridView.module.scss";
import Header from "@/commons/Header/Header";
import Image from "next/image";
import ArrowInCircle from "@/commons/arrowInCircle/ArrowInCircle";
import PropertieCard from "@/commons/propertieCard/PropertieCard";

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
              src={
                "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width={315}
              height={189}
              alt="Main image"
              className={s.imgHouse}
            />
            <div className={s.textContainer}>
              <h2>
                Aca va un poco de <br /> texto que quiera <br /> la inmobiliaria
              </h2>
            </div>
            <div className={s.buttonContainer}>
              <button>
                <p>Inmobiliaria</p> <ArrowInCircle />
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
