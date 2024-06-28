"use client";

import React, { useState } from "react";
import s from "./Navbar.module.scss";
import Hod from "../../assets/Hod.png";
import Image from "next/image";
import Link from "next/link";
import close from "@/assets/close.png";
import { Spin } from "hamburger-react";
import { Tooltip } from "react-tooltip";
import { logoutService } from "@/services/user.services";
import { AppDispatch, RootState } from "@/state/store.state";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "@/state/features/userSlice";
import { usePathname, useRouter } from "next/navigation";
import { CiLogin, CiLogout } from "react-icons/ci";

const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.user);

  const [showSearchAction, setShowSearchAction] = useState(false);
  const handleCloseDropdown = () => setShowSearchAction(false);
  const isActive = (path: string) => {
    return pathname === path ? s.isActive : undefined;
  };

  const handleLogout = async () => {
    if (!user.email) return navigate.push("/login");
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
        <Link href={"/"}>
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

          <li>
            <Link className={isActive("/propiedades")} href="/propiedades">
              Propiedades
            </Link>
          </li>
          <li style={{ display: !user.is_admin ? "none" : "block" }}>
            <Link
              className={isActive("/admin/appointments")}
              href="/admin/appointments"
            >
              Appointments
            </Link>
          </li>
          <li style={{ display: !user.is_admin ? "none" : "block" }}>
            <Link
              className={isActive("/admin/new-propertie")}
              href="/admin/new-propertie"
            >
              New Propertie
            </Link>
          </li>
          <li>
            <Link className={isActive("/home")} href="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className={isActive("/profile")} href="/profile">
              Mi perfil
            </Link>
          </li>
          <li>
            <Link className={isActive("/contacto")} href="/contacto">
              Contacto
            </Link>
          </li>
          {/* <li style={{ display: user.email ? "none" : "block" }}>
            <Link className={isActive("/login")} href="/login">
              Login
            </Link>
          </li> */}
          <li style={{ display: user.email ? "none" : "block" }}>
            <Link className={isActive("/register")} href="/register">
              Register
            </Link>
          </li>
          <li
            data-tooltip-id="log-tooltip"
            data-tooltip-variant="light"
            data-tooltip-place="top"
            data-tooltip-delay-hide={200}
            data-tooltip-content={user.email ? "Logout" : "Login"}
            onClick={handleLogout}
          >
            {user.email ? (
              <CiLogout color="white" size={25} />
            ) : (
              <CiLogin color="white" size={25} />
            )}
          </li>
        </ul>
      </div>
      <Tooltip
        id="log-tooltip"
        noArrow={true}
        style={{
          padding: "8px 15px",
          color: "#0fa968",
          fontWeight: "500",
          fontSize: "15.6px",
        }}
      />
    </nav>
  );
};

export default Navbar;
