import { Box } from "@mui/material";
import useHeader from "./useHeader";

const Header = () => {
  const { headerData } = useHeader();
  return (
    <Box>
      <Box>
        {headerData.map((item) => {
          return item.name;
        })}
      </Box>
    </Box>
  );
};

export default Header;
