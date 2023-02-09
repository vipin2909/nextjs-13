import React from 'react';
import styles from './layout.module.css';
import dynamic from 'next/dynamic';

export default function Layout({ children }) {
  const HomePage = dynamic(() => import('../pages/home'));

  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <div className={styles.header}>From layout</div>
        <div className={styles.children}>{children}</div>
        {/* <HomePage /> */}
      </body>
    </html>
  );
}
