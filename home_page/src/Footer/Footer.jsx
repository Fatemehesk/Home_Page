import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { CustomizedTypography } from "../Styled/Styled";
const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CustomizedTypography
        textAlign="center"
        variant="h3"
        paddingTop={10}
        fontSize={{ lg: 30, md: 24, sm: 18, xs: 18 }}
        fontWeight={600}
      >
        Ready for ant team size
      </CustomizedTypography>
      <CustomizedTypography
        textAlign="center"
        variant="viv"
        padding={4}
        fontSize={{ lg: 24, md: 20, sm: 18, xs: 16 }}
      >
        Optimized for any team size
      </CustomizedTypography>
      <Box
        display="flex"
        margin="auto"
        justifyContent="center"
        padding={5}
        flexDirection="row"
      >
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          fontSize={{ lg: 24, md: 20, sm: 18, xs: 16 }}
        >
          Try CodeEnv For Free
        </Button>
        <Button
          variant="outlined"
          sx={{ ml: 2 }}
          fontSize={{ lg: 24, md: 20, sm: 18, xs: 16 }}
        >
          Talk To Sales
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
