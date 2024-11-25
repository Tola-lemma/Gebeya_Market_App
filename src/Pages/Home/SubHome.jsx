import { Avatar, Box, Typography, Button } from '@mui/material';
import React from 'react';
import { colors } from '../../Constants/constant';
import homePerPic from '../../Assets/Ellipse 3.png';
import homePerPic2 from '../../Assets/Ellipse 5.png';
import homePerPic3 from '../../Assets/Ellipse 4.png';

const SubHome = () => {
  return (
    <Box
      sx={{
        height: "769px",
        backgroundColor: colors.background.primary,
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%", // Ensure consistent alignment
          maxWidth: "1200px",
        }}
        ml={-20}
      >
        {/* First Box */}
        <Box mt={-10}>
          <Typography
            sx={{
              fontFamily: "Alfa Slab One",
              color: colors.background.pureWhite,
              fontSize: "128px",
              marginLeft: "20px",
            }}
          >
            Gebeya
          </Typography>
          <Avatar
            alt="Home page Pic"
            src={homePerPic2}
            sx={{
              marginLeft:"70px",
              marginTop:"50px",
              width: "260px",
              height:"260px" ,
            }}
          />
        </Box>

        {/* Second Box */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}  mt={-40} ml={2}>
          <Avatar
            alt="Home page Pic"
            src={homePerPic}
            sx={{
              width: "300px",
              height:"300px" ,
            }}
          />
        </Box>
        <Box bgcolor={"#FEA301"} sx={{padding:"10px",borderRadius:"8px"}} mt={40} ml={-45}>
          <Button sx={{width:"366px",height:"46px",fontSize:"14px",fontFamily:"Poppins",color:"black"}}>
            Explore Now
          </Button>
        </Box>
        {/* Third Box */}
        <Box
          sx={{
            textAlign: "left",
            maxWidth: "400px",
            borderRadius: "10px",
            padding: "20px",
          }}
          mt={-2}
          ml={7}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: colors.background.pureWhite,
              fontSize: "20px",
              lineHeight: "1.6",
            }}
          >
            Discover a world of convenience with our user-friendly platform, 
            curated collections, and exceptional customer service.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Alfa Slab One",
              color: colors.background.pureWhite,
              fontSize:"128px" ,
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            SHOP
          </Typography>
          <Avatar
            alt="Home page Pic"
            src={homePerPic3}
            sx={{
              marginLeft:"50px",
              width: "223px",
              height:"223px" ,
            }}/>
        </Box>
      </Box>
    </Box>
  );
};

export default SubHome;
