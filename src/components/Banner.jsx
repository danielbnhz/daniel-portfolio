import React from "react";
import bannerImg from "../assets/nexus.png";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <img src={bannerImg} alt="Banner" className={styles['banner-img']} />
      <div className={styles['banner-overlay']}>
        <h1 className="text-white text-4xl font-bold">
          Welcome to My Portfolio
        </h1>
      </div>
    </section>
  );
}
