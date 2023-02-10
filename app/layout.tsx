import React from 'react';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Vie</title>
      </head>
      <body>
        <div className={styles.header}>From layout</div>
        <div className={styles.children}>{children}</div>
      </body>
    </html>
  );
}
