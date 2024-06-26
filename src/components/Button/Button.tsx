import { COLOR } from "@/constants/color";
import { Box, Button } from "@mui/material";
import React from "react";

const ButtonComp = (props: any) => {
  const boxStyle = {
    border: `1px solid ${COLOR?.main.cyan}`,
    margin: "auto",
    textAlign: "center",
    borderRadius: "5px",
    width: props.width,
    p: 0.7,
    position: "relative",
    transition: "1s",
    "&:hover": {
      border: `1px solid ${COLOR?.main.electricblue}`,
    },
  };
  return (
    <Box sx={boxStyle}>
      <Button sx={btnSyle}>{props.title}</Button>
    </Box>
  );
};

export default ButtonComp;

const btnSyle = {
  backgroundColor: COLOR.main.electricblue,
  color: COLOR.gray.dark,
  width: "100%",
  padding: "5px",
  transition: ".3s",
  "&:hover": {
    backgroundColor: COLOR.main.cyan,
  },
};
