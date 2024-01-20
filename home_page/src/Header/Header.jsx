import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import ApiIcon from "@mui/icons-material/Api";
import Box from "@mui/material/Box";
import DrawerComponent from "./DrawerComponent";
import { CustomizedTypography } from "../Styled/Styled";

const Links = ["products", "pricing", "contact"];
const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  console.log(isMatch);
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: "0", position: "sticky" }}>
      {isMatch ? (
        <Box display="flex">
          <ApiIcon sx={{ color: "black", padding: 1 }} />
          <CustomizedTypography
            variant="h6"
            fontFamily="fantasy"
            sx={{ padding: 0.5, color: "black" }}
          >
            CodeEnv
          </CustomizedTypography>
          <DrawerComponent links={Links} />
        </Box>
      ) : (
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
            }}
          >
            <ApiIcon sx={{ color: "black" }} />
            <Box>
              <Tabs sx={{ textDecoration: "none" }} component={Link}>
                {Links.map((item, index) => (
                  <Tab
                    key={index}
                    label={item}
                    sx={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      ":hover": {
                        textDecoration: "underline",
                        textUnderlineOffset: "5px",
                      },
                    }}
                  />
                ))}
              </Tabs>
            </Box>

            <Box
              sx={{
                display: "flex",
                marginLeft: "auto",
              }}
            >
              <Button variant="outlined" sx={{ mr: 2 }}>
                TALK TO US
              </Button>
              <Button variant="contained" sx={{ ml: 2 }}>
                tRY IT
              </Button>
            </Box>
          </Box>
        </Toolbar>
      )}
      <Box width="100%" height="100vh">
        <video
          width={"100%"}
          height="70%"
          autoPlay
          loop
          muted
          playsInline
          src="/video.mp4"
        ></video>
        <Box width="100%">
          <CustomizedTypography
            fontSize={{ lg: 30, md: 24, sm: 18, xs: 18 }}
            margin="auto"
            variant="h3"
            color="black"
            textAlign="center"
            fontWeight="600"
          >
            Build your softwere for free with top notch quality
          </CustomizedTypography>
        </Box>
        <Box
          width="100%"
          display="flex"
          sx={{
            justifyContent: "center",
            margin: "auto",
            marginTop: "45px",
          }}
        >
          <Button variant="outlined" endIcon={<EmailIcon />} sx={{ mr: 2 }}>
            Sign UP
          </Button>
          <Button
            color="error"
            variant="contained"
            sx={{ ml: 2 }}
            endIcon={<GoogleIcon />}
          >
            SIGN UP
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
