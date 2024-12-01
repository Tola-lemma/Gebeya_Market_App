import React, { useState } from 'react';
import fr39 from "../../Assets/Frame 39.png";
import fr38 from "../../Assets/Frame 38.png";
import frenchKissBag from '../../Assets/kissBag.png'
import KidsShoe from '../../Assets/KidsShoe.png'
import { Box, Card, CardContent, Typography } from '@mui/material';
import col1 from '../../Assets/category/images 5.png';
import col2 from '../../Assets/category/images 6.png';
import col3 from '../../Assets/category/images 7.png';
import col4 from '../../Assets/category/images 8.png';

const Category = () => {
  // Categories data
  const categoryData = [
    [
      { imageSrc: col1, label: "Casual Wear", subLabel: "Over 20 categories in stock" },
      { imageSrc: col2, label: "Vintage", subLabel: "Over 31 categories in stock" },
      { imageSrc: col3, label: "Beauty products", subLabel: "Over 24 categories in stock" },
      { imageSrc: col4, label: "Gym wears", subLabel: "Over 64 categories in stock" },
    ],
    [
      { imageSrc: col3, label: "Beauty products", subLabel: "Over 15 categories in stock" },
      { imageSrc: KidsShoe, label: "Footwear", subLabel: "Over 50 categories in stock" },
      { imageSrc: frenchKissBag, label: "Handbags", subLabel: "Over 32 categories in stock" },
      { imageSrc: col2, label: "Winter Wear", subLabel: "Over 10 categories in stock" },
    ],
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle arrow clicks
  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? categoryData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === categoryData.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box mt={6}>
      {/* Header and Controls */}
      <Box
        sx={{
          display: {xs:"block",sm:"block",md:"flex",lg:"flex",xl:'flex'},
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box ml={{lg:8,md:8,xl:8,xs:4,sm:4}}>
          <Typography
            color="initial"
            sx={{ fontFamily: "Poppins", fontSize: {lg:"40px",md:"40px",xl:"40px",sm:"20px",xs:"20px"} }}
          >
            Browse by category
          </Typography>
        </Box>
        <Box
          mr={{lg:12,xl:12,md:12,xs:2,sm:2}}
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ gap: 3 }}
        >
          {/* Backward Arrow */}
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

      {/* Category Cards */}
      <Box
        sx={{
          display: {lg:"flex",xl:"flex",md:"flex",xs:"block",sm:"block"},
          justifyContent: "space-between",
          alignItems: "stretch",
          padding: "6px",
          margin: "2.7rem",
          marginTop: "1.2rem",
        }}
      >
        {categoryData[currentSlide].map((category, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              height: 270,
              borderRadius: "16px",
              border: "1px solid #C1C1C1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "16px",
              marginBottom:"6px"
            }}
          >
            {/* Image Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 190,
                width: "280px",
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
                src={category.imageSrc}
                alt={category.label}
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
                {category.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontFamily: "Poppins" }}
              >
                {category.subLabel}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Category;
