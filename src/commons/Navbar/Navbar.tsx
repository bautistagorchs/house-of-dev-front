"use client";

import React, { useState } from "react";
import s from "./Navbar.module.scss";
import Hod from "../../assets/Hod.png";
import Image from "next/image";
import Link from "next/link";
import close from "@/assets/close.png";
import { Spin } from "hamburger-react";
import { logoutService } from "@/services/user.services";

const Navbar = () => {
  const [showSearchAction, setShowSearchAction] = useState(false);
  const handleCloseDropdown = () => setShowSearchAction(false);
  return (
    <nav className={s.navbarContainer}>
      <div className={s.contentContainer}>
        <Link href={"/home"}>
          <Image src={Hod} alt="Logo" className={s.logo} />
        </Link>
        <div
          className={s.menuContainer}
          onClick={() => setShowSearchAction(true)}
        >
          <Spin
            color="#f7f3ee"
            size={30}
            rounded
            toggled={showSearchAction}
            toggle={setShowSearchAction}
          />
        </div>
        <ul
          id="search-actions"
          className={`${s.dropdownMenu} ${!showSearchAction && s.noShow}`}
          onClick={handleCloseDropdown}
        >
          <li>
            <Link href={"*"}>. . .</Link>{" "}
            <Image src={close} alt="close" onClick={handleCloseDropdown} />
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/gridView">GridView</Link>
          </li>
          <li>
            <Link href="/appointments">Appointments</Link>
          </li>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/profile">Mi perfil</Link>
          </li>
          <li>
            <Link href="/">Barra</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
          <li>
            <p onClick={() => logoutService()}>Logout</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
