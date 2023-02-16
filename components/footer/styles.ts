import { SxProps } from "@mui/material";
import { CSSProperties } from "react";
import theme from "../../utils/theme";
import Images from "../../utils/constants/images";

const styles: {
  [key in
    | "footer_Container"
    | "footer_List"
    | "footer_Heading"
    | "heading_Text"
    | "contents"
    | "contact_Wrapper"
    | "main_Text"
    | "icon_Container"
    | "icon_Wrapper"
    | "ending_Text"
    | "search_Field"
    | "sendIcon"
    | "news_Container"
    | "news_Text"
    | "date_Text"]: CSSProperties & SxProps<typeof theme>;
} = {
  footer_Container: {
    width: "100%",
    // position: "absolute",
    // bottom: "0",
    // left: "0",
    minHeight: "25rem",
    marginTop: "72px",
    padding: "16px",
    background: "black",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  footer_List: {
    color: "white !important",
    display: "flex",
    justifyContent: "space-around",
    width: "80%",
  },
  footer_Heading: {
    margin: "4rem",
  },
  heading_Text: {
    fontSize: "2rem",
    textAlign: "left",
  },
  contents: {
    fontSize: "1rem",
    fontWeight: 400,
    textAlign: "left",
    marginLeft: "1rem",
  },
  contact_Wrapper: {
    display: "flex",
    margin: "1rem 0.2rem 1rem 0.2rem",
  },
  main_Text: {
    fontSize: "0.8rem",
    textAlign: "left",
    marginLeft: "1rem",
    color: "#999",
  },
  icon_Container: {
    width: "3rem",
    height: "3rem",
    border: "1px white solid",
    borderRadius: "50%",
    margin: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  icon_Wrapper: {
    display: "flex",
  },
  ending_Text: {
    color: "#999",
    textAlign: "left",
    margin: "1rem",
    width: "85%",
  },
  search_Field: {
    display: "flex",
    alignItems: "center",
    width: 400,
    height: "3rem",
    borderRadius: "30px",
    background: "transparent",
    border: "1px #999 solid",
    padding: "0px !important",
    marginTop: "1rem",
  },
  sendIcon: {
    backgroundColor: "#c5a47e",
    color: "black",
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    padding: "8px !important",
    // transform: "skewY(-30deg)",
  },
  news_Container: {
    display: "flex",
  },
  news_Text: {
    fontSize: "0.9rem",
    textAlign: "left",
    color: "#999",
    width: "68%",
    marginTop: "1rem",
  },
  date_Text: {
    color: "#c5a47e",
    fontSize: "0.9rem",
    textAlign: "left",
  },
};

export default styles;
