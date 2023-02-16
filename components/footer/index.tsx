import React from "react";
import dynamic from "next/dynamic";
import styles from "./styles";
const Box = dynamic(() => import("@mui/material/Box"));
const InputBase = dynamic(() => import("@mui/material/InputBase"));
const IconButton = dynamic(() => import("@mui/material/IconButton"));
const Typography = dynamic(() => import("@mui/material/Typography"));
const Button = dynamic(() => import("@mui/material/Button"));
const Paper = dynamic(() => import("@mui/material/Paper"));
const SendIcon = dynamic(() => import("@mui/icons-material/Send"));
const LocationOnIcon = dynamic(() => import("@mui/icons-material/LocationOn"));
const MailOutlineIcon = dynamic(
  () => import("@mui/icons-material/MailOutline")
);
const CallIcon = dynamic(() => import("@mui/icons-material/Call"));
const FacebookIcon = dynamic(() => import("@mui/icons-material/Facebook"));
const TwitterIcon = dynamic(() => import("@mui/icons-material/Twitter"));
const InstagramIcon = dynamic(() => import("@mui/icons-material/Instagram"));
const YouTubeIcon = dynamic(() => import("@mui/icons-material/YouTube"));

const Footer = () => {
  return (
    <Box sx={styles.footer_Container}>
      <Box sx={styles.footer_List}>
        <Box sx={styles.footer_Heading}>
          <Typography sx={styles.heading_Text}>Contact Us</Typography>
          <Box sx={styles.contact_Wrapper}>
            <LocationOnIcon />
            <Box>
              <Typography sx={styles.contents}>Official Address</Typography>
              <Typography sx={styles.main_Text}>
                504 White St . Dawsonville, GA 30534 , New York
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.contact_Wrapper}>
            <MailOutlineIcon />
            <Box>
              <Typography sx={styles.contents}>Email</Typography>
              <Typography sx={styles.main_Text}>support@gmail.com</Typography>
            </Box>
          </Box>
          <Box sx={styles.contact_Wrapper}>
            <CallIcon />
            <Box>
              <Typography sx={styles.contents}>Official Address</Typography>
              <Typography sx={styles.main_Text}>+87986451666 </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.footer_Heading}>
          <Typography sx={styles.heading_Text}>Recent News</Typography>
          <Box sx={styles.news_Container}>
            <Box>
              <Typography sx={styles.news_Text}>
                The Start-Up Ultimate Guide to Make Your WordPress Journal.
              </Typography>
              <Typography sx={styles.date_Text}>14 Sept 2022</Typography>
              <Typography sx={styles.news_Text}>
                The Start-Up Ultimate Guide to Make Your WordPress Journal.
              </Typography>
              <Typography sx={styles.date_Text}>14 Sept 2022</Typography>
            </Box>
          </Box>

          <Paper component="form" sx={styles.search_Field}>
            <InputBase
              sx={{ ml: 1, flex: 1, color: "white" }}
              placeholder="Type your Email"
              inputProps={{ "aria-label": "TYpe your Email" }}
            />
            <IconButton aria-label="directions" sx={{ p: 0 }}>
              <SendIcon sx={styles.sendIcon} />
            </IconButton>
          </Paper>
        </Box>
        <Box sx={styles.footer_Heading}>
          <Typography sx={styles.heading_Text}>Phone</Typography>
          <Box sx={styles.icon_Wrapper}>
            <Box sx={styles.icon_Container}>
              <FacebookIcon />
            </Box>
            <Box sx={styles.icon_Container}>
              <TwitterIcon />
            </Box>
            <Box sx={styles.icon_Container}>
              <InstagramIcon />
            </Box>
            <Box sx={styles.icon_Container}>
              <YouTubeIcon />
            </Box>
          </Box>
          <Typography sx={styles.ending_Text}>
            © 2022, VIE TEMPLATE. MADE WITH PASSION BYTHEMESCAMP
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
