import React from "react";
import s from "./PropertieCard.module.scss";
import Image from "next/image";
import image1 from "@/images/image 7.png";
import locationPin from "@/assets/locationPin.png";

const PropertieCard = () => {
  return (
    <article className={s.card}>
      <section className={s.imageContainer}>
        <Image src={image1} alt="casa tigre" />
      </section>
      <hr id={s.divider} />
      <section className={s.location}>
        <Image src={locationPin} alt="location pin" />
        <h3>Salta</h3>
      </section>
    </article>
  );
};

export default PropertieCard;
