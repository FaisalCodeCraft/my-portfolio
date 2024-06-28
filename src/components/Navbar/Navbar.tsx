"use client";
import { COLOR } from "@/constants/color";
import { Box,  Typography } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import Image from "next/image";
import hamburger from "../../../public/hamburger.svg"

const Navbar = () => {
  // console.log(cartLenght)
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [navShadow, setNavShadow] = React.useState(false);
  const [color, setColor] = React.useState(false);

  const changeBgColor = () => {
    if (window.scrollY >= 5) {
      setNavShadow(true);
      setColor(true);
    } else {
      setNavShadow(false);
      setColor(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBgColor);
  }

  const pathname = usePathname();

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  const drawer = (
    // toggle for small screen
    <Box
      onClick={() => handleDrawerToggle()}
      style={{ textAlign: "center" }}
      px={3}
    >
      <List>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/" ? COLOR.main.red : "black",
                textDecoration: "none",
                "&:hover": {
                  color: COLOR.main.red,
                },
              },
            }}
          >
            <Link href={"/"}> Home </Link>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/About" ? COLOR.main.red : "black",
                textDecoration: "none",
                "&:hover": {
                  color: COLOR.main.red,
                },
              },
            }}
          >
            <Link href={"/About"}> About </Link>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Expertise" ? COLOR.main.red : "black",
                textDecoration: "none",
                "&:hover": {
                  color: COLOR.main.red,
                },
              },
            }}
          >
            <Link href={"/Expertise"}> Expertise </Link>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Projects" ? COLOR.main.red : "black",
                textDecoration: "none",
                "&:hover": {
                  color: COLOR.main.red,
                },
              },
            }}
          >
            <Link href={"/Projects"}> Projects </Link>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Services" ? COLOR.main.red : "black",
                textDecoration: "none",
                "&:hover": {
                  color: COLOR.main.red,
                },
              },
            }}
          >
            <Link href={"/Services"}> Services </Link>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Contact" ? COLOR.main.red : "black ",
                textDecoration: "none",
                "&:hover": {
                  color: COLOR.main.red,
                },
              },
            }}
          >
            <Link href={"/Contact"}> Contact</Link>
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box position={{md:"absolute"}} width={"100%"}>
      <AppBar
        component="nav"
        sx={{
          boxShadow: "none",
          transition: "all .3s ease",
          backgroundColor: {md:color ? "white" : "transparent",xs:"white"},
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: color ? "1px 1px 8px gray" : "none",
            px: { md: 10 },
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            sx={{
              display: { sm: "flex", md: "none" },
              color: {md:color ? "black" : "white",xs:"black"},
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <List>
            <ListItem disableGutters>
              <Box
                sx={{
                  "& a": {
                    color: {md:color ? "black" : "white",xs:"black"},
                    textDecoration: "none",
                    "&:hover": {
                      color: COLOR.main.red,
                    },
                  },
                  fontSize: "1.5em",
                  fontWeight: 700,
                }}
              >
                <Link href={""}> Shah Faisal </Link>
              </Box>
            </ListItem>
          </List>
          <List
            disablePadding
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              justifyContent: "space-evenly",
            }}
          >
            <ListItem>
              <Box
                className={styles.link}
                sx={{
                  "& a": {
                    color: color ? "black" : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: COLOR.main.red,
                    },
                  },
                }}
              >
                <Link href={"/"}> Home </Link>
              </Box>
            </ListItem>
            <ListItem disableGutters>
              <Box
                className={styles.link}
                sx={{
                  "& a": {
                    color:
                      pathname === "/About"
                        ? COLOR.main.red
                        : color
                        ? "black"
                        : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: COLOR.main.red,
                    },
                  },
                }}
              >
                <Link href={"/About"}> About </Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box
                className={styles.link}
                sx={{
                  "& a": {
                    color:
                      pathname === "/Expertise"
                        ? COLOR.main.red
                        : color
                        ? "black"
                        : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: COLOR.main.red,
                    },
                  },
                }}
              >
                <Link href={"/Expertise"}> Expertise </Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box
                className={styles.link}
                sx={{
                  "& a": {
                    color:
                      pathname === "/Projects"
                        ? COLOR.main.red
                        : color
                        ? "black"
                        : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: COLOR.main.red,
                    },
                  },
                }}
              >
                <Link href={"/Projects"}> Projects </Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box
                className={styles.link}
                sx={{
                  "& a": {
                    color:
                      pathname === "/Services"
                        ? COLOR.main.red
                        : color
                        ? "black"
                        : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: COLOR.main.red,
                    },
                  },
                }}
              >
                <Link href={"/Services"}> Services </Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box
                className={styles.link}
                sx={{
                  "& a": {
                    color:
                      pathname === "/Contact"
                        ? COLOR.main.red
                        : color
                        ? "black"
                        : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: COLOR.main.red,
                    },
                  },
                }}
              >
                <Link href={"/Contact"}> Contact</Link>
              </Box>
            </ListItem>
          </List>

          <Box >
            <Typography>
              <img   src={hamburger} alt="hamburger" />
            </Typography>
           
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          style={{
            display: "block",

            // "& .MuiDrawer-paper": {
            //   boxSizing: "border-box",
            //   width: drawerWidth,
            // },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
};
export default Navbar;

const drawerWidth = 200;
