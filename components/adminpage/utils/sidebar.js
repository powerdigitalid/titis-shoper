import Link from "next/link";
import React from "react";
import {useRouter} from 'next/router';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { removeCookie } from "../../../libs/cookie.lib";

export default function Sidebar() {
  const router = useRouter();
  const [user, setUser] = useState({});


  const handelLogout = () => {
    removeCookie("token");
    toast.success("Logout Success");
    router.push("/");
  };

  return (
    <div>
      <ul
        className="navbar-nav sidebar sidebar-light accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-text mx-3">Titis Shoper</div>
        </a>
        
        <li className="nav-item active">
          <a className="nav-link" href="/admin">
            <span>Dashboard</span>
            {/* <i className="icon-speedometer" /> */}
          </a>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="/admin/produk"
          >
            <span>Input Produk</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="/admin/user"
          >
            <span>User</span>
          </Link>
          <div
            id="collapseForm"
            className="collapse"
          ></div>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="/admin/pemesanan"
          >
            <span>Pemesanan</span>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/admin/history">
            <span>History Pemesanan</span>
          </a>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <a className="nav-link btn btn-outline-danger w-50 h-50 m-2 text-danger" onClick={handelLogout}>
            <span><i className="icon-arrow-left text-danger" /> Log Out </span>
          </a>
        </li>
        <hr className="sidebar-divider" />
      </ul>
    </div>
  );
}
