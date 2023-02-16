import { SxProps } from "@mui/material";
import { CSSProperties } from "react";
import theme from "../../utils/theme";

const styles: {
  [key in "tabs_Container"]: CSSProperties & SxProps<typeof theme>;
} = {
  tabs_Container: {
    outline: "none",
  },
};

export default styles;
