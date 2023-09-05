import { useState } from "react";
import AuthComponent from "../../components/authComponent";
import { Navbar } from "../../layouts/navbar";
import styles from "./landingpage.module.scss";

export default function LandingPage() {
  return (
    <div>
      <div className={`${styles.main} w-full h-screen flex justify-end  pr-10`}>
        <div className="mr-32 mt-32" >
          <AuthComponent />
        </div>
      </div>
      <Navbar />
    </div>
  );
}
