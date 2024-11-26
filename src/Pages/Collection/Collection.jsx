import { Box, Rating, Typography } from '@mui/material'
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
import col1 from '../../Assets/collection/images 1.png'
import col2 from '../../Assets/collection/images 2.png'
import col3 from '../../Assets/collection/3.png'
import col4 from '../../Assets/collection/images 3.png'
import col5 from '../../Assets/collection/download 1.png'
import col6 from '../../Assets/collection/images 4.png'
import CardRow from './CardRow';
import col7 from '../../Assets/collection2/1.png'
import col8 from '../../Assets/collection2/2.png'
import col9 from '../../Assets/collection2/3.png'
import col10 from '../../Assets/collection2/4.png'
import col11 from '../../Assets/collection2/5.png'
import col12 from '../../Assets/collection2/6.png'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Collection  = () =>{
  const buttons = ["men", "women", "kids", "perfumes", "sports", "jewelry"];
  const row1Images = [col1, col2, col3, col4, col5, col6];
  const row2Images = [col7, col8, col9, col10, col11, col12]; 
  const labels = ["Shoes", "Bags", "Jackets", "Lingerie", "Belts", "Street wears"];
  const labels2 = ["Sunglasses", "Sun wear", "Hats", "Slippers", "Wigs", "Cosmetics"];
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
      {/* cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch", // Ensures cards stretch equally
          padding: "6px",
          margin: "2.5rem",
          marginTop: "16px",
        }}
      >
        {[frenchKissBag, KidsShoe, WomenC].map((imageSrc, index) => (
          <Card
            key={index}
            sx={{
              width: 450,
              height: 450,
              borderRadius: "16px",
              border: "1px solid #C1C1C1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "16px",
              position: "relative",
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
                  fontFamily: "Poppins",
                  borderRadius: "17px",
                  alignContent: "center",
                  width: "70px",
                  height: "40px",
                  textAlign: "center",
                }}
              >
                {" "}
                In Stock
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
            <Box
              sx={{
                position: "absolute",
                top: 270,
                left: 20,
                display: "flex",
                gap: 30,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  fontFamily: "Poppins",
                  borderRadius: "20px",
                  alignContent: "center",
                  width: "70px",
                  height: "40px",
                  textAlign: "center",
                  border:"0.5px solid #C1C1C1",
                  color:"#808080"
                }}
              >
                {index === 0 ? "women" : index === 1 ? "kids" : "women"}
              </Box>
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  fontFamily: "Poppins",
                  borderRadius: "15px",
                  alignContent: "center",
                  width: "100px",
                  height: "40px",
                  fontSize:"16px",
                  textAlign: "center",
                }}
              >
                {index === 0 ? (
                  <>
                    <Rating
                      name="size-small"
                      defaultValue={1}
                      size="small"
                      max={1}
                    />
                    2k+ rating
                  </>
                ) : index === 1 ? (
                  <>
                    <Rating
                      name="size-small"
                      defaultValue={1}
                      size="small"
                      max={1}
                    />
                    1k+ rating
                  </>
                ) : (
                  <>
                    <Rating
                      name="size-small"
                      defaultValue={1}
                      size="small"
                      max={1}
                    />
                    5k+ rating
                  </>
                )}
              </Box>
            </Box>
            {/* Card Content */}
            <CardContent
              sx={{
                width: "100%",
                textAlign: "left",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: "1.7rem",
                marginTop: "1rem",
                flexGrow: 1, // Makes content take up available space
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
              >
                {index === 0
                  ? "French Kiss Bag"
                  : index === 1
                  ? "Burberry Shine"
                  : "Alvero Gown"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontFamily: "Poppins" }}
              >
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
              <Button
                size="24px"
                sx={{
                  textTransform: "none",
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                }}
              >
                ${index === 0 ? 500 : index === 1 ? 150 : 300}
              </Button>
              <Button
                size="large"
                sx={{
                  backgroundColor: "#FEA301",
                  color: "white",
                  textTransform: "none",
                  marginRight: "20px",
                }}
              >
                Add to cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      {/* buttons  */}
      <Box sx={{ display: "flex", gap:2,marginTop:"4rem" ,justifyContent:"space-evenly"}}>
      {buttons.map((btn, index) => (
        <Button
          key={index}
          variant={btn === "women" ? "contained" : "outlined"}
          sx={{
            borderRadius: "27px",
            textTransform: "capitalize", // Keeps button text as-is (not uppercase)
            padding: "8px 16px",
            backgroundColor: btn === "women" ? "#FEA301" : "transparent",
            color: btn === "women" ? "white" : "inherit",
            border: btn === "women" ? "none" : "1px solid #C1C1C1",
            width:"190px",
            fontFamily:"Poppins",
            fontSize:"24px",
            "&:hover": {
              backgroundColor: btn === "women" ? "#e68a00" : "rgba(0,0,0,0.04)",
            },
          }}
        >
          {btn}
        </Button>
      ))}
    </Box>
    {/* optimized card row */}
    <CardRow images={row1Images} labels={labels} marginT="3rem" />
    <CardRow images={row2Images} labels={labels2} marginT="0.5rem"/>
    </Box>
  );
}

export default Collection