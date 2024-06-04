"use client";

import React, { useState } from "react";
import s from "./Home.module.scss";
import blueLine from "../../assets/blueLine.png";
import Image from "next/image";
import SearchInCircle from "@/commons/searchInCircle/SearchInCircle";
import Link from "next/link";
import bigBackground from "@/assets/bigBackground.jpg";

const Home = () => {
  const [showSearchLabel, setShowSearchLabel] = useState(true);
  return (
    <div className={s.outerContainer}>
      <div className={s.background}>
        <div className={s.left}></div>
        <div className={s.right}>
          <Image src={bigBackground} alt="big background" />
        </div>
        <div className={s.floatingContent}>
          <div className={s.contentContainer}>
            <div className={s.lineContainer}>
              <Image src={blueLine} alt="blue line" />
            </div>

            <div className={s.box}>
              <div className={s.header}>
                <div className={s.titleContainer}>
                  <h3>¿Que estas buscando?</h3>
                </div>
                <div className={s.hrContainer}>
                  <hr className={s.shortHr} />
                </div>
              </div>
              <hr id={s.first} />
              <div className={s.rent}>
                <input
                  type="radio"
                  name="radio"
                  id="radio1"
                  placeholder="Alquilar"
                />
                <label htmlFor="radio1">Alquilar</label>
              </div>
              <hr />
              <div className={s.buy}>
                <input
                  type="radio"
                  name="radio"
                  id="radio2"
                  placeholder="Comprar"
                />
                <label htmlFor="radio2">Comprar</label>
              </div>
            </div>
            <div className={s.searchContainer}>
              <input
                type="search"
                name="location"
                id="location"
                onChange={(e) => {
                  return e.target.value !== ""
                    ? setShowSearchLabel(false)
                    : setShowSearchLabel(true);
                }}
              />
              <label htmlFor="location" id="location">
                <SearchInCircle />
                <span style={{ display: showSearchLabel ? "block" : "none" }}>
                  Ubicacion
                </span>
              </label>
            </div>
            <div className={s.buttonContainer}>
              <Link href={"/gridView"}>
                <button>Ver propiedades</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
