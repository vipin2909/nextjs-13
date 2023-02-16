import { memo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import useHeader from "./useHeader";
import styles from "./styles";

const Box = dynamic(() => import("@mui/material/Box"));

const Header = () => {
  const { headerData } = useHeader();
  return (
    <Box component="header" className="top-header" sx={styles.navContainer}>
      <Box className="container" sx={styles.navInnerContainer}>
        <Box sx={styles.navContainerLeft}>Vie</Box>
        <Box sx={styles.navContainerRight}>
          <Box sx={styles.navHeader}>
            {headerData.map((item) => {
              return (
                <Box key={item.id} sx={styles.headerItem} className="activateCursor">
                  <Link href="#">{item.name}</Link>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const HeaderMemo = memo(Header);

export default HeaderMemo;
