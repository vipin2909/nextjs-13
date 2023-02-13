import React from 'react';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next js Practice</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Bigelow+Rules&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <div className={styles.header}>{children}</div>
      </body>
    </html>
  );
}
