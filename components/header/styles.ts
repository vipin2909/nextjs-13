import COLORS from "@utils/constants/colors";

const styles = {
  navContainer: {
    width: "100%",
    // background: "#000",
    display: "flex",
    position: "sticky",
  },
  navContainerLeft: {
    width: "50%",
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
