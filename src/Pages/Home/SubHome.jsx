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
        height: {lg:"769px",xl:"769px",md:"769px",sm:"500px",xs:"500px"},
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
        ml={{lg:-20,xl:-20,md:-22,xs:-8,sm:-8}}
      >
        {/* First Box */}
        <Box mt={{lg:-10,xl:-10,md:-10,sm:-50,xs:-50}}>
          <Typography
            sx={{
              fontFamily: "Alfa Slab One",
              color: colors.background.pureWhite,
              fontSize: {lg:"128px",xl:"128px",md:"128px",sm:"32px",xs:"32px"},
              marginLeft: "20px",
              display:{xs:"none",sm:"none",lg:"block",md:"block",xl:"block"}
            }}
          >
            Gebeya
          </Typography>
          <Typography
            sx={{
              fontFamily: "Alfa Slab One",
              color: colors.background.pureWhite,
              fontSize: {lg:"128px",xl:"128px",md:"128px",sm:"32px",xs:"32px"},
              marginLeft: "20px",
              display:{lg:"none",xl:"none",md:"none"}
            }}
          >
            TIMBU
          </Typography>
          <Avatar
            alt="Home page Pic"
            src={homePerPic2}
            sx={{
              marginLeft:"70px",
              marginTop:"50px",
              display:{xs:"none",sm:"none",lg:"block",md:"block",xl:"block"},
              width: "260px",
              height:"260px" ,
            }}
          />
        </Box>

        {/* Second Box */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}  mt={{lg:-40,md:-40,xl:-40,sm:-45,xs:-45}} ml={{lg:2,xl:2,xs:0,sm:5}}>
          <Avatar
            alt="Home page Pic"
            src={homePerPic}
            sx={{
              width: {lg:"300px",xl:"300px",md:"300px",xs:"120px",sm:"120px"},
              height:{lg:"300px",xl:"300px",md:"300px",xs:"120px",sm:"120px"},
            }}
          />
        </Box>
        <Box bgcolor={"#FEA301"} sx={{padding:"10px",borderRadius:"8px",display:{lg:"block",md:"block",xl:"block",sm:"none",xs:"none"}}} mt={40} ml={-45}>
          <Button sx={{width:"366px",height:"46px",fontSize:"14px",fontWeight:"bold",fontFamily:"Poppins",color:"black",textTransform:"none"}}>
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
          ml={{xl:7,lg:7,md:7,sm:0,xs:-32}}
          
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: colors.background.pureWhite,
              fontSize: {xl:"20px",lg:"20px",md:"20px",xs:"12px",sm:"12px"},
              lineHeight: "1.6",
              display:{md:"none",xs:"block",sm:"block",lg:"block",xl:"block"}
            }}
            ml={{sm:-28,xs:0,xl:0,md:-15,lg:0}}

          >
            Discover a world of convenience with our user-friendly platform, 
            curated collections, and exceptional customer service.
          </Typography>
          <p></p>
          <Box  ml={{sm:-28,xs:0,xl:0,lg:0,md:0}} bgcolor={"#FEA301"} sx={{padding:"10px",borderRadius:"8px",textAlign:"center",display:{lg:"none",md:"none",xl:"none",sm:"block",xs:"block"}}}>
          <Button sx={{height:"46px",fontSize:"14px",fontWeight:"bold",fontFamily:"Poppins",color:"black",textTransform:"none"}}>
            Explore Now
          </Button>
          </Box>
          <Typography
            sx={{
              fontFamily: "Alfa Slab One",
              color: colors.background.pureWhite,
              fontSize:{lg:"128px",xl:"128px",md:"128px",sm:"32px",xs:"32px"} ,
              textAlign: "center",
              marginTop: {lg:"30px",xl:"30px",md:"100px",xs:"-255px",sm:"-260px"},
            }}
            ml={{xs:25,sm:-36,lg:0,xl:0,md:-40}}
          >
            SHOP
          </Typography>
          <Avatar
            alt="Home page Pic"
            src={homePerPic3}
            sx={{
              marginLeft:"50px",
              display:{xs:"none",sm:"none",lg:"block",xl:"block",md:"none"},
              width: "223px",
              height:"223px" ,
            }}/>
        </Box>
      </Box>
    </Box>
  );
};

export default SubHome;
