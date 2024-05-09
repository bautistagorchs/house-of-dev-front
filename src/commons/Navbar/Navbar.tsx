import React from "react";
import s from "./Navbar.module.scss";
import Hod from "../../assets/Hod.png";
import Image from "next/image";
import Link from "next/link";
import Menu from "../../assets/menu.png";

const Navbar = () => {
  return (
    <nav className={s.navbarContainer}>
      <div className={s.contentContainer}>
        <Link href={"/home"}>
          <Image src={Hod} alt="Logo" className={s.logo} />
        </Link>
        <div className={s.menuContainer}>
          <Image src={Menu} alt="Menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
