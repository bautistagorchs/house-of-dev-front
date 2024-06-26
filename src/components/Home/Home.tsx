"use client";

import React, { useState } from "react";
import s from "./Home.module.scss";
import Image from "next/image";
import SearchInCircle from "@/commons/searchInCircle/SearchInCircle";
import Link from "next/link";
import bigBackground from "@/assets/bigBackground.jpg";
import searchUndraw from "@/assets/searchUndraw.svg";
import curlyLineUndraw from "@/assets/curlyLineUndraw.svg";
import curlyLineUndrawUSD from "@/assets/curlyLineUndrawUSD.svg";
import ArrowBack from "@/commons/arrowBack/ArrowBack";

const Home = () => {
  const [showSearchLabel, setShowSearchLabel] = useState(true);
  return (
    <div className={s.outerContainer}>
      <div className={s.background}>
        <div className={s.left}>
          <Image
            src={curlyLineUndraw}
            alt="Line Undraw"
            width={90}
            id={s.line}
          />
          <Image src={searchUndraw} alt="Undraw image" id={s.search} />
        </div>
        <div className={s.right}>
          <Image src={bigBackground} alt="big background" />
        </div>
        <div className={s.floatingContent}>
          <div className={s.contentContainer}>
            <div className={s.lineContainer}>
              <Image
                src={curlyLineUndrawUSD}
                alt="orange curly line"
                width={140}
              />
            </div>
            <div className={s.arrowBackContainer}>
              <ArrowBack borderBottom="none" />
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
              <Link href={"/propiedades"}>
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
