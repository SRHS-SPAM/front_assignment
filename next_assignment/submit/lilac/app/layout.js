"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Arrow />
        <div className="navbar">
          <Link href="/">home</Link>
          <Link href="/button">button</Link>
          <Link href="/object">object</Link>
          <Link href="/mongo">mongo</Link>
          <Link href="/login">Sign in</Link>
        </div>
        <Fab />
        {children}
      </body>
    </html>
  );
}

function Arrow() {
  return (
    <Link href="/">
      <div className="arrow">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
    </Link>
  );
}

function Fab() {
  let [isIn, setisIn] = useState(0);
  let linkList = ["object", "button", "main"];
  return (
    <>
      <div
        className="menubar"
        style={isIn % 2 == 1 ? { display: "inline-flex" } : { display: "none" }}
      >
        <div className="menu_top" />
        <div className="menu_bottom">
          {linkList.map((ai, i) => {
            return (
              <Link href={ai === "main" ? "/" : "/" + ai} key={i}>
                <div className="menu_column">{ai}</div>
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className="fab"
        style={isIn % 2 == 1 ? { "background-color": "#00fff2" } : {}}
        onClick={() => {
          setisIn(isIn + 1);
        }}
      />
    </>
  );
}
