"use client";
import { COLOR } from "@/constants/color";
import {
  AccountCircleOutlined,
  LoginOutlined,
  PersonAddOutlined,
} from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
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
                color: pathname === "/" ? "red" : "black",
                textDecoration: pathname === "/" ? "underline" : "none",
                "&:hover": {
                  color: "red",
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
                color: pathname === "/About" ? "red" : "black",
                textDecoration: "none",
                "&:hover": {
                  color: "red",
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
                color: pathname === "/Projects" ? "red" : "black",
                textDecoration: "none",
                "&:hover": {
                  color: "red",
                },
              },
            }}
          >
            <Link href={"/Projects"}> Latest&nbsp;Profile </Link>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Services" ? "red" : "black",
                textDecoration: "none",
                "&:hover": {
                  color: "red",
                },
              },
            }}
          >
            <Link href={"/Services"}> Featured&nbsp;Profile </Link>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Contact" ? "red" : "black",
                textDecoration: "none",
                "&:hover": {
                  color: "red",
                },
              },
            }}
          >
            <Link href={"/Contact"}> Success&nbsp;Stories </Link>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              "& a": {
                color: pathname === "/Donate" ? "red" : "black",
                textDecoration: "none",
                "&:hover": {
                  color: "red",
                },
              },
            }}
          >
            <Link href={"/Donate"}> Donate </Link>
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box position={"relative"}>
      <AppBar
        component="nav"
        style={{
          boxShadow: "none",
          transition: "all .3s ease",
          backgroundColor: color ? "white" : "black",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: color ? "1px 1px 8px gray" : "none",
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            sx={{
              display: { sm: "flex", md: "none" },
              color: color ? "black" : "white",
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
                    color: color ? "black" : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: "red",
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
            sx={{ display: { md: "flex", sm: "none", xs: "none" } }}
          >
            <ListItem disableGutters>
              <Box
                className={styles.link}
                sx={{
                  "& a": {
                    color: pathname === "/" ? "red" : color ? "black" : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: "red",
                    },
                  },
                }}
              >
                <Link href={"/"}> Home </Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box
              className={styles.link}
                sx={{
                  "& a": {
                    color:
                      pathname === "/About" ? "red" : color ? "black" : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: "red",
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
                      pathname === "/Projects"
                        ? "red"
                        : color
                        ? "black"
                        : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: "red",
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
                        ? "red"
                        : color
                        ? "black"
                        : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: "red",
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
                        ? "red"
                        : color
                        ? "black"
                        : "white",
                    textDecoration:"none",
                    "&:hover": {
                      color: "red",
                    },
                  },
                }}
              >
                <Link href={"/Contact"}> Contact</Link>
              </Box>
            </ListItem>
            {/* <ListItem disableGutters>
              <Box
                sx={{
                  "& a": {
                    color:
                      pathname === "/Donate"
                        ? "red"
                        : color
                        ? "black"
                        : "white",
                    textDecoration:
                      pathname === "/Donate" ? "underline" : "none",
                    "&:hover": {
                      color: "red",
                      textDecoration: "underline",
                    },
                  },
                }}
              >
                <Link href={"/Donate"}> Donate </Link>
              </Box>
            </ListItem> */}
          </List>

          <List className={styles.dropdown}>
            <Typography>
              <AccountCircleOutlined
                sx={{ color: color ? "black" : "white" }}
              />
            </Typography>
            <Box className={styles.dropdownContent}>
              <Link href={"/Login"}>
                <ListItem sx={{ py: 1 }}>
                  <Box
                    border={`1.5px solid ${COLOR.main.cyan}`}
                    borderRadius={"50%"}
                    width={"48px"}
                    height={"48px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    mr={1}
                    p={2}
                  >
                    <LoginOutlined
                      fontSize="large"
                      sx={{
                        bgcolor: COLOR.main.cyan,
                        p: 0.7,
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  LOGIN
                </ListItem>
              </Link>
              <Divider />
              <Link href={"/Register"}>
                <ListItem sx={{ py: 1 }}>
                  <Box
                    border={`1.5px solid ${COLOR.main.cyan}`}
                    borderRadius={"50%"}
                    width={"48px"}
                    height={"48px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    mr={1}
                    p={2}
                  >
                    <PersonAddOutlined
                      fontSize="large"
                      sx={{
                        bgcolor: COLOR.main.cyan,
                        p: 0.7,
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  REGISTER
                </ListItem>
              </Link>
            </Box>
          </List>
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
