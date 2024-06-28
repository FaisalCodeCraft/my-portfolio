import { COLOR } from "@/constants/color";
import { ChevronRight } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";

const ButtonComp = (props: any) => {
  const boxStyle = {
    border: `1px solid ${COLOR?.main.red}`,
    margin: "auto",
    textAlign: "center",
    borderRadius: "5px",
    width: props.width,
    p: 0.7,
    position: "relative",
    transition: "1s",
    "&:hover": {
      border: `1px solid ${COLOR?.main.lightRed}`,
    },
  };
  return (
    <Box sx={boxStyle}>
 
  <Button sx={btnSyle} endIcon={<ChevronRight sx={{bgcolor:"white", color: COLOR.main.red,borderRadius:"3px",}} />}>
        {props.title}
      </Button>
    </Box>
  );
};

export default ButtonComp;

const btnSyle = {
  backgroundColor: COLOR.main.red,
  color: "white",
  width: "100%",
  padding: "5px",
  transition: ".3s",
  "&:hover": {
    backgroundColor: "none",
    color:COLOR.main.lightRed
  },
};
