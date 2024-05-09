import React from "react";
import s from "./SearchInCircle.module.scss";
import orangeCircle from "../../assets/orangeCircle.png";
import search from "../../assets/search.png";
import Image from "next/image";

const SearchInCircle = () => {
  return (
    <div className={s.container}>
      <Image src={orangeCircle} alt="organe circle" />
      <Image src={search} alt="search" className={s.icon} />
    </div>
  );
};

export default SearchInCircle;
