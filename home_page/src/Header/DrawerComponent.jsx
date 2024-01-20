/* eslint-disable react/prop-types */
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const DrawerComponent = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <List>
          {links.map((item, index) => (
            <ListItemButton
              onClick={() => {
                setOpen(false);
              }}
              key={index}
            >
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
