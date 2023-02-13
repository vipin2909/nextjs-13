import React from "react";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next js Practice</title>
      </head>
      <body>
        <div className={styles.header}>{children}</div>
      </body>
    </html>
  );
}
