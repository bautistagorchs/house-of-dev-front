import React from "react";
import s from "./PropertieCard.module.scss";
import Image from "next/image";
import image1 from "@/images/image 7.png";
import locationPin from "@/assets/locationPin.png";
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

const PropertieCard = () => {
  return (
    <>
      <article className={s.mobileCard}>
        <section className={s.imageContainer}>
          <Image src={image1} alt="casa tigre" />
        </section>
        <hr id={s.divider} />
        <section className={s.location}>
          <Image src={locationPin} alt="location pin" />
          <h3>Salta</h3>
        </section>
      </article>
      <article className={s.fullCard}>
        <section className={s.imageContainer}>
          <Image src={image1} alt="casa tigre" />
        </section>
        <section className={s.info}>
          <div>
            <div id={s.priceContainer}>
              <p>
                <span>$</span> 100.000
              </p>
            </div>
            <div id={s.locationContainer}>
              <SlLocationPin />
              <p> Tigre</p>
            </div>
          </div>
          <div className={s.specifics}>
            <div>
              <p>115 m2</p>
            </div>
            <div>
              <p>3 dorm.</p>
            </div>
            <div>
              <p>2 baños</p>
            </div>
          </div>
          <div className={s.description}>
            <p>
              Casa ilumidad cercana a la estacion de tren Marina Nueva. Perfecta
              para familia numerosa
            </p>
          </div>
          <div className={s.buttonsContainer}>
            <button className="button">
              <CiHeart size={24} />
            </button>
            <button id={s.call}>
              <FiPhoneCall size={17} />
            </button>
            <button>Ver mas</button>
          </div>
        </section>
      </article>
    </>
  );
};

export default PropertieCard;
