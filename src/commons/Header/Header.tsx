import React from "react";
import s from "./Header.module.scss";
import { HeaderProps } from "@/types/types";

const Header = (prop: HeaderProps) => {
  return (
    <div className={s.headerContainer}>
      <div className={s.content}>
        <div className={s.h3Container}>
          <h3>{prop.text}</h3>
        </div>
        <hr style={{ width: prop.hrWidth }} />
      </div>
    </div>
  );
};

export default Header;
