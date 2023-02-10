import { SxProps } from "@mui/material";
import { CSSProperties } from "react";
import theme from "../../../utils/theme";
import Images from "../../../utils/constants/images";

const styles: {
  [key in
    | "contactContainer"
    | "headingTitle"
    | "nameEmailContainer"
    | "nameTextField"
    | "emailTextField"
    | "messageTextField"
    | "buttonContainer"]: CSSProperties & SxProps<typeof theme>;
} = {
  contactContainer: {
    width: "100%",
    marginTop: "72px",
    padding: "16px",
    backgroundImage: `url(${Images.BACKGROUND_IMAGE})`,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      color: "white !important",
    },
  },
  headingTitle: {
    fontSize: "70px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textAlign: "center",
    fontFamily: "khand, sansSerif",
    fontWeight: 500,
    marginBottom: "80px",
    color: "white",
  },

  nameEmailContainer: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
  },
  nameTextField: {
    width: "48%",
  },
  emailTextField: {
    width: "48%",
  },
  messageTextField: {
    width: "90%",
    marginTop: "60px",
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      height: "3.45rem",
    },
  },
  buttonContainer: {
    marginTop: "80px",
    width: "90%",
    backgroundColor: "white",
    color: "#aaa",
    padding: "16px 24px 16px 24px",
    border: "none",
    marginButtom: "60px",
  },
};

export default styles;
