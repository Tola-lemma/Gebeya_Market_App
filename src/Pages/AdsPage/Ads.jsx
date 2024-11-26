import React from 'react'
import addsframe from '../../Assets/ads/Frame 65.png'
import { Box, Button, Typography } from '@mui/material'
import { StyledImage } from '../../Styles/styles'
const Ads  = () =>{
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "6rem",
    }}
  >
    <Box
      sx={{
        position: "relative", 
        display: "inline-block", 
      }}
    >
      <StyledImage
        width={1351}
        height={502}
        src={addsframe}
        sx={{
          display: "block", 
          borderRadius: "10px", 
        }}
      />
      <Typography sx={{
        position:"absolute",
        fontFamily: "Poppins",
        fontSize: "40px",
        fontWeight:"bold",
        color:"#882BEC",
         top: "20%", 
         left: "20%", 
         whiteSpace: "pre-wrap",
         margin: 0,
         transform: "translate(-50%, -50%)",
      }}>
      {`Our Curated Summer 
Collection`}
      </Typography>
      <Typography sx={{
        position:"absolute",
        fontFamily: "Poppins",
        fontSize: "28px",
        color:"#882BEC",
         top: "50%", 
         left: "29%", 
         whiteSpace: "pre-wrap",
         margin: 0,
         transform: "translate(-50%, -50%)",
      }}>
      {`Explore our curated summer collection
featuring trending styles, vibrant colors, 
and lightweight fabrics perfect for long days and 
nights.`}
      </Typography>
      <Button
        sx={{
          borderRadius: "10px",
          textTransform: "capitalize",
          padding: "8px 16px",
          backgroundColor: "#FEA301",
          color: "white",
          width: "250px",
          fontFamily: "Poppins",
          fontSize: "16px",
          position: "absolute", 
          top: "84%", 
          left: "12%", 
          transform: "translate(-50%, -50%)", // Adjust for button's dimensions
          "&:hover": {
            backgroundColor: "#882BEC",
          },
        }}
      >
        Explore Now
      </Button>
    </Box>
  </Box>
  
      )
}

export default Ads