import Box from "@mui/material/Box";
import ContentItem from "./ContentItem";
import image1 from "../assets/1.jpg";
import image2 from "../assets/3.jpg";
import image3 from "../assets/2.jpg";

const contentArr = [
  {
    title: "Get Things Done ",
    description:
      "A lightweight, efficient, and powerful source code editor designed to streamline your development workflow, providing you with the tools and features needed for seamless coding and increased productivity.",
    image: image1,
  },
  {
    title: "Productivity Is Brilient ",
    description:
      "Achieve brilliant productivity with our innovative source code editor, designed to empower developers and enhance their coding experience, enabling efficient and effective project management while fostering creativity and collaboration.",
    image: image2,
  },
  {
    title: "Fast development ",
    description:
      "Experience swift and efficient development with our advanced source code editor, engineered to accelerate your coding processes. Streamlined workflows, smart features, and optimal performance come together to propel your projects forward, ensuring rapid and hassle-free development.",
    image: image3,
  },
];

const Content = () => {
  return (
    <Box
      sx={{
        bgcolor: "#FBF2F2",
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "10%",
      }}
    >
      {contentArr.map((item, index) => (
        <ContentItem
          title={item.title}
          description={item.description}
          image={item.image}
          key={index}
          swap={index % 2 == 0}
        />
      ))}
    </Box>
  );
};

export default Content;
