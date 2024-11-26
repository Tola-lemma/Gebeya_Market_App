import React from 'react'
import fr39 from "../../Assets/Frame 39.png"
import fr38 from "../../Assets/Frame 38.png"
import { Box, Card, CardContent, Typography } from '@mui/material'
import { StyledImage } from '../../Styles/styles'
import col1 from '../../Assets/category/images 5.png'
import col2 from '../../Assets/category/images 6.png'
import col3 from '../../Assets/category/images 7.png'
import col4 from '../../Assets/category/images 8.png'
const Category  = () =>{
  const images = [col1, col2, col3, col4];
  const labels = ["Casual Wear", "Vintage", "Beauty products", "Gym wears"];
  const sublabels = ["Over 20 categories in stock", "Over 31 categories in stock", "Over 24 categories in stock", "Over 64 categories in stock"];
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
        Browse by category
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
          alignItems: "stretch",
          padding: "6px",
          margin: "2.7rem",
          marginTop: "1.2rem",
        }}
      >
        {images.map((imageSrc, index) => (
          <Card
            key={index}
            sx={{
              width: 320,
              height: 270,
              borderRadius: "16px",
              border: "1px solid #C1C1C1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "16px",
            }}
          >
            {/* Image Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 190,
                width: "290px",
                backgroundColor: "#F2F2F2",
                borderRadius: "12px",
                marginTop: "12px",
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
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <Typography
                gutterBottom
                variant="h7"
                component="div"
                sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
              >
                {labels[index]}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontFamily: "Poppins" }}
              >
               {sublabels[index]}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
  </Box>
  )
}

export default Category