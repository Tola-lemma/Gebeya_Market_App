import { Box, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
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
import { DoubleArrow } from '@mui/icons-material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Collection  = () =>{
  const buttons = ["men", "women", "kids", "perfumes", "sports", "jewelry"];
  const row1Images = [col1, col2, col3, col4, col5, col6];
  const row2Images = [col7, col8, col9, col10, col11, col12]; 
  const labels = ["Shoes", "Bags", "Jackets", "Lingerie", "Belts", "Street wears"];
  const labels2 = ["Sunglasses", "Sun wear", "Hats", "Slippers", "Wigs", "Cosmetics"];
  const cardData = [
    [
      { title: "French Kiss Bag", brand: "ALDO", price: 500, imageSrc: frenchKissBag },
      { title: "Burberry Shine", brand: "FENDI", price: 150, imageSrc: KidsShoe },
      { title: "Alvero Gown", brand: "Divine", price: 300, imageSrc: WomenC },
    ],
    [
      { title: "Sun Glasses", brand: "Rolex", price: 100, imageSrc: col7 },
      { title: "Girls Shoes", brand: "Nike", price: 200, imageSrc: col1 },
      { title: "Leather Jacket", brand: "Zara", price: 400, imageSrc: col3 },
    ],
    [
      { title: "Handbag", brand: "Gucci", price: 800, imageSrc: col2 },
      { title: "Sunglasses", brand: "Ray-Ban", price: 180, imageSrc: col8 },
      { title: "Belts", brand: "Prada", price: 500, imageSrc: col5 },
    ],
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeButton, setActiveButton] = useState("women"); // Set default active button
  
  // Handle button click
  const handleButtonClick = (btn) => {
    setActiveButton(btn);
  };
  // Handle arrow clicks
  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

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
            <Box
          component="img"
          src={fr39} 
          width={40}
          height={40}
          onClick={handlePrevious}
          sx={{ cursor: "pointer" }} 
        />
          <Box
          component="img"
          src={fr38} 
          width={40}
          height={40}
          onClick={handleNext}
          sx={{ cursor: "pointer" }} 
        />
        </Box>
      </Box>
      {/* cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch", // Ensures cards stretch equally
          padding: "2px",
          // margin: "2.5rem",
          marginTop: "16px",
        }}
      >
         {cardData[currentSlide].map((card, index) => (
          <Card
            key={index}
            sx={{
              width: 430,
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
                gap: 35,
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
                width: "410px",
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
                src={card.imageSrc}
                alt={card.title}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: 270,
                left: 20,
                display: "flex",
                gap: 29,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  fontFamily: "Poppins",
                  borderRadius: "18px",
                  alignContent: "center",
                  width: "70px",
                  height: "40px",
                  textAlign: "center",
                  border:"0.5px solid #C1C1C1",
                  color:"#808080",
                  "&:hover": {
                    color:"#882BEC",
                    cursor:"pointer",
                    border:"none"
                  },
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
                 {card.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontFamily: "Poppins" }}
              >
                  {card.brand}
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
                  ${card.price}
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
          variant={btn === activeButton ? "contained" : "outlined"}
          onClick={() => handleButtonClick(btn)}
          sx={{
            borderRadius: "27px",
            textTransform: "capitalize", 
            padding: "8px 16px",
            backgroundColor: btn === activeButton ? "#FEA301" : "transparent",
            color: btn === activeButton ? "white" : "inherit",
            border: btn === activeButton ? "none" : "1px solid #C1C1C1",
            width: "190px",
            fontFamily: "Poppins",
            fontSize: "24px",
            "&:hover": {
              backgroundColor: btn === activeButton
                ? "#e68a00"
                : "rgba(0,0,0,0.04)",
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
    <Box sx={{display:"flex",justifyContent:"center"}} >
      <Button 
      sx={{
        borderRadius: "15px",
        textTransform: "capitalize",
        padding: "8px 16px",
        backgroundColor: "#882BEC",
        color: "white",
        width:"150px",
        fontFamily:"Poppins",
        fontSize:"16px",
        "&:hover": {
          backgroundColor:"#FEA301",
        },
      }} endIcon={<DoubleArrow/>} >See more</Button>
    </Box>
    </Box>
  );
}

export default Collection