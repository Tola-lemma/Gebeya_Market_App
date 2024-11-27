import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import { Box, Typography, Button, styled } from "@mui/material";
import HeaderPage from "../Header/Header";
import Footer from "../Footer/Footer";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import { NavigateNext } from "@mui/icons-material";
const CartDetails = () => {
  const { cartId } = useParams();
  const { cartItems, removeFromCart } = useContext(CartContext);

  const item = cartItems.find((item) => item.cartId === cartId);
  const CenteredBox = styled(Box)({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70vh", 
      textAlign: "center",
    });
    
    if (!item) {
      return (
        <>
          <HeaderPage />
          <CenteredBox>
            <Typography 
              variant="h4" 
              sx={{ 
                fontFamily: "Alfa Slab One", 
                color: "gray" 
              }}>
              No item found in cart.
            </Typography>
          </CenteredBox>
          <Footer />
        </>
      );
    }
  
  const handleClick = (event) => {
    event.preventDefault();
  };
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Collection
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      {item.brand}
    </Link>,
    <Typography key="4" sx={{ color: "text.primary" }}>
      {item.title}
    </Typography>,
  ];
  return (
    <>
      <HeaderPage />
      <Box sx={{backgroundColor:"#E8E8E8"}}>
      <Box>
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Box>
      <Box sx={{ padding: "16px" }}>
        <Typography variant="h4">{item.title}</Typography>
        <Typography>Brand: {item.brand}</Typography>
        <Typography>Price: ${item.price}</Typography>
        <img
          src={item.imageSrc}
          alt={item.title}
          style={{ width: "100%", maxHeight: "300px" }}
        />
        <Button
          onClick={() => {
            removeFromCart(item.cartId);
          }}
          sx={{ marginTop: "16px", backgroundColor: "red", color: "white" }}
        >
          Remove from Cart
        </Button>
      </Box>
      </Box>
      <Footer />
    </>
  );
};

export default CartDetails;
