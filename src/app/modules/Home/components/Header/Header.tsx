import ButtonComp from "@/components/Button/Button";
import { COLOR } from "@/constants/color";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import myPic from "../../../../../../public/shah-faisal.png";

const Header = () => {
  return (
    <Box
      bgcolor={COLOR.gray.dark}
      px={{ md: 7 }}
      py={{ md: 11, sm: 10, xs: 6 }}
      color={"white"}
    >
      <Grid
        container
        px={3}
        spacing={{ md: 4 }}
        pt={4.5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid item md={6}>
          <Box>
            <Typography
              component={"p"}
              fontSize={"small"}
              mb={1}
              p={0.5}
              textAlign={"center"}
              letterSpacing={1}
              bgcolor={"#ea434363"}
              width={"106px"}
              borderRadius={"3px"}
            >
              SHAH FAISAL
            </Typography>
            <Typography
              component={"h3"}
              fontSize={{ md: "2.3em" }}
              fontWeight={{ md: 700, sm: 600, xs: 600 }}
            >
              HEY I'M SHAH
            </Typography>
            <Typography
              component={"h1"}
              fontSize={{ md: "2.8em", sm: "2.3em", xs: "1.3em" }}
              color={COLOR.main.red}
              fontWeight={{ md: 800, sm: 700, xs: 600 }}
              lineHeight={"55px"}
              pt={1}
            >
              REACT JS <br /> <span style={{ color: "white" }}>DEVELOPER</span>
            </Typography>
            <Typography
              component={"h4"}
              fontSize={{ md: "1.3em", sm: "1.2em", xs: ".9em" }}
              my={{ md: 5, sm: 4, xs: 3 }}
              pl={2}
              borderLeft={`3px solid ${COLOR.main.red}`}
            >
              Collaboration allows us to accomplish far more than any individual
              could achieve on their own.
            </Typography>
          </Box>
          <Box width={"220px"} mt={1}>
            <ButtonComp title="Download Resume" />
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            position={"relative"}
            width={{ md: "450px" }}
            height={{ md: "450px" }}
            ml={"auto"}
            borderRadius={"50%"}
          >
            <Image
              fill
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                border: `2px solid ${COLOR.main.red}`,
              }}
              src={myPic}
              alt="Shah Faisal"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
