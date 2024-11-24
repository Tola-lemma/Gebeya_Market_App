import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { StyledImage } from '../../Styles/styles'
import fr39 from "../../Assets/Frame 39.png"
import fr38 from "../../Assets/Frame 38.png"
import frenchKissBag from '../../Assets/kissBag.png'
import KidsShoe from '../../Assets/KidsShoe.png'
import WomenC from '../../Assets/WomenLibs.png'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Collection  = () =>{
  return (
    <Box mt={6}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box ml={8}>
          <Typography
            color="initial"
            sx={{ fontFamily: "Poppins", fontSize: "40px" }}
          >
            Latest Collections
          </Typography>
        </Box>
        <Box
          mr={12}
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ gap: 3 }}
        >
          <StyledImage src={fr39} width={40} height={40} />
          <StyledImage src={fr38} width={40} height={40} />
        </Box>
      </Box>
      <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch", // Ensures cards stretch equally
    padding: "6px",
    margin:"2.5rem",
    marginTop:"16px"
  }}
>
  {[frenchKissBag, KidsShoe, WomenC].map((imageSrc, index) => (
    <Card
      key={index}
      sx={{
        width: 450,
        height: 400, 
        borderRadius: "16px",
        border: "1px solid #C1C1C1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", 
        alignItems: "center",
        paddingBottom: "16px",
        position:"relative"
      }}
    >
<Box
    sx={{
      position: "absolute",
      top: 20,
      left: 20, 
      display: "flex",
      gap: 37, 
    }}
  >
    <Checkbox
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "50%", // Optional: Makes the checkbox background circular
      }}
      {...label}
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}
    />
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        fontFamily:"Poppins",
        borderRadius: "17px",
        alignContent:"center",
        width:"70px",
        height: "40px",
        textAlign:"center"
      }}
    > In Stock
    </Box>
  </Box>
   {/* Image Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 258, // Fixed height for image area
          width: "420px",
          backgroundColor: "#F2F2F2",
          borderRadius: "12px",
          marginTop: "10px",
        }}
      >
        <img
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            borderRadius: "12px",
          }}
          src={imageSrc}
          alt={`Card ${index + 1}`}
        />
      </Box>

      {/* Card Content */}
      <CardContent
        sx={{
          width: "100%",
          textAlign: "left",
          marginLeft: "1.5rem",
          flexGrow: 1, // Makes content take up available space
        }}
      >
        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"Poppins",fontWeight:"bold"}}>
          {index === 0 ? "French Kiss Bag" : index === 1 ? "Burberry Shine" : "Alvero Gown"}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary",fontFamily:"Poppins" }}>
          {index === 0 ? "ALDO" : index === 1 ? "FENDI" : "Divine"}
        </Typography>
      </CardContent>

      {/* Card Actions */}
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 16px",
        }}
      >
        <Button size="24px" sx={{ textTransform: "none",color:"black",fontWeight:"bold",fontFamily:"Poppins" }}>
          ${index === 0 ? 500 : index === 1 ? 150 : 300}
        </Button>
        <Button
          size="large"
          sx={{
            backgroundColor: "#FEA301",
            color: "white",
            textTransform: "none",
            marginRight:"20px"
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  ))}
</Box>

    </Box>
  );
}

export default Collection