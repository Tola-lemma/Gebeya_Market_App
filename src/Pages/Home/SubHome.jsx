import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { colors } from '../../Constants/constant';
import homePerPic from '../../Assets/Ellipse 3.png';

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
        <Box mt={-50}>
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

        {/* Third Box */}
        <Box
          sx={{
            textAlign: "left",
            maxWidth: "400px",
            borderRadius: "10px",
            padding: "20px",
          }}
          mt={-22}
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
        </Box>
      </Box>
    </Box>
  );
};

export default SubHome;
