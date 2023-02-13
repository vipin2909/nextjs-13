import { Colors } from "@utils/constants";
import COLORS from "@utils/constants/colors";

const styles = {
  navContainer: {
    width: "100%",
    padding: "1rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    background: "transparent",
    position: "sticky",
  },

  navInnerContainer: {
    display: "flex",
    alignItems: "center",
  },
  navContainerLeft: {
    width: "50%",
    color: Colors.vieWhite,
    textAlign: "left",
  },
  navContainerRight: {
    width: "50%",
  },

  navHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerItem: {
    fontSize: "0.8vw",
    fontWeight: 500,
    color: COLORS.vieWhite,
    cursor: "pointer",
  },
};

export default styles;
