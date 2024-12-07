import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { keyframes } from "@mui/material";

const bobble = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const Navbar = () => {
  const [isBobbing, setIsBobbing] = useState(false);

  const handleClick = () => {
    setIsBobbing(true);
    setTimeout(() => {
        setIsBobbing(false);
        window.location.reload();
    }, 500);
};

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  const drawerList = () => (
    <Box
      sx={{ width: "13.5rem", padding: "0rem 1rem" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component="a"
            href={item.href}
            sx={{ padding: "0.75rem" }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ fontWeight: "bold" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="absolute"
      sx={{ backgroundColor: "black", opacity: "0.75" }}
    >
      <Toolbar>
        <Typography
          onClick={handleClick}
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "1000",
            fontSize: "1.5rem",
            letterSpacing: "0.1rem",
            color: "#fff",
            cursor: "pointer",
            animation: isBobbing ? `${bobble} 0.5s` : "none",
          }}
        >
          &lt;VMH&gt;
        </Typography>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              href={item.href}
              sx={{ fontWeight: "bold", fontSize: "1rem" }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              width: "auto",
              transition: "width 0.3s",
              borderRadius: "1rem 0 0 1rem",
              color: "#fff",
            },
          }}
        >
          {drawerList()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
