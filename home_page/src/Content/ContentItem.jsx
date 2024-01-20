/* eslint-disable react/prop-types */
import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { CustomizedTypography } from "../Styled/Styled";

const ContentItem = ({ title, description, image, swap }) => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <Box
      padding={isMatch ? 4 : 10}
      display="flex"
      flexDirection={isMatch ? (swap ? "column" : "column-reverse") : "row"}
      justifyContent="space-between"
      alignItems="center"
      bgcolor={!swap && "#fff"}
    >
      {swap ? (
        <>
          <Box>
            <CustomizedTypography
              padding={3}
              variant="h3"
              color="#734950"
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              fontWeight="600"
            >
              {title}
            </CustomizedTypography>
            <CustomizedTypography
              padding={3}
              variant="h5"
              fontSize={{ lg: 24, md: 20, sm: 18, xs: 14 }}
              fontWeight="500"
            >
              {description}
            </CustomizedTypography>
          </Box>
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={isMatch ? "100%" : "50%"}
            style={{
              boxShadow: "10px 10px 10px #ccc",
              borderRadius: 20,
              marginLeft: "10%",
              marginRight: "10%",
            }}
            height={isMatch ? "320px" : "300px"}
          />
        </>
      ) : (
        <>
          {" "}
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={isMatch ? "100%" : "50%"}
            style={{
              boxShadow: "10px 10px 10px #ccc",
              borderRadius: 20,
              marginRight: "10%",
              marginLeft: "10%",
            }}
            height={isMatch ? "320px" : "300px"}
          />
          <Box>
            <CustomizedTypography
              padding={3}
              variant="h3"
              color="#734950"
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              fontWeight="600"
            >
              {title}
            </CustomizedTypography>
            <CustomizedTypography
              padding={3}
              variant="h5"
              fontSize={{ lg: 24, md: 20, sm: 18, xs: 14 }}
              fontWeight="500"
            >
              {description}
            </CustomizedTypography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContentItem;
