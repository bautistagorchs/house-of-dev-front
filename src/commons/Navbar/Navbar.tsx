"use client";

import React, { useState } from "react";
import s from "./Navbar.module.scss";
import Hod from "../../assets/Hod.png";
import Image from "next/image";
import Link from "next/link";
import close from "@/assets/close.png";
import { Spin } from "hamburger-react";
import { logoutService } from "@/services/user.services";
import { AppDispatch, RootState } from "@/state/store.state";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "@/state/features/userSlice";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.user);

  const [showSearchAction, setShowSearchAction] = useState(false);
  const handleCloseDropdown = () => setShowSearchAction(false);
  const isActive = (path: string) => (pathname === path ? s.active : "");
  const handleLogout = async () => {
    if (!user) return navigate.push("/login");
    const response = await logoutService();
    if (response.status === 204) {
      dispatch(clearUser());
      navigate.push("/login");
    }
    return;
  };
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
          <li id={s.first}>
            <p>. . .</p>
            <Image src={close} alt="close" onClick={handleCloseDropdown} />
          </li>
          <li className={isActive("/login")}>
            <p onClick={handleLogout}>{user.email ? `Logout` : `Login`}</p>
          </li>
          <li className={isActive("")}>
            <Link href="">Barra</Link>
          </li>
          <li className={isActive("/gridView")}>
            <Link href="/gridView">GridView</Link>
          </li>
          <li className={isActive("/appointments")}>
            <Link href="/appointments">Appointments</Link>
          </li>
          <li className={isActive("/home")}>
            <Link href="/home">Home</Link>
          </li>
          <li className={isActive("/profile")}>
            <Link href="/profile">Mi perfil</Link>
          </li>
          <li className={isActive("/contacto")}>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
