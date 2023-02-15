"use client";
import "../styles/globals.css";
import dynamic from "next/dynamic";

const Cursor = dynamic(() => import("@components/cursor"));
const Header = dynamic(() => import("@components/header"));
const HomePage = dynamic(() => import("@pages/homepage"));
const Footer = dynamic(() => import("@components/footer"));

export default function Page() {
  return (
    <div style={{ width: "100%" }}>
      <Cursor />
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
