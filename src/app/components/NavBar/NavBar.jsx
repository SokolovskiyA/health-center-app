import React from "react";
import styles from "./NavBar.scss";
import globalStyles from "../../styles/global.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "/Users/alexandersokolovskiy/Developer/health-center-app/public/logos/Logo.svg";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link className="NavBar__link" href="/">
        Home
      </Link>
      <Link className="NavBar__link" href="/who-we-are">
        Who We Are
      </Link>
      <Link className="NavBar__link" href="/what-we-offer">
        What We Offer
      </Link>
      <Link className="NavBar__link" href="/">
        <Image
          className={globalStyles.a}
          src={logo}
          alt="Tsakwa'lutan Healing Center"
          layout="responsive"
          width={100}
          height={50}
        />
      </Link>
      <Link className="NavBar__link" href="/resources">
        Resources
      </Link>
      <Link className="NavBar__link" href="/for-loved-ones">
        For Loved Ones
      </Link>
      <Link className="NavBar__link" href="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;
