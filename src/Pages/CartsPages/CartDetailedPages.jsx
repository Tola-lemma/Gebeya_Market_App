import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import { Box, Typography, Button, styled, Card, CardContent, Rating, Divider, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import HeaderPage from "../Header/Header";
import Footer from "../Footer/Footer";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import { NavigateNext, Remove,Add, ShoppingBag, WhatsApp, Instagram, X, LocalShipping, EventRepeat } from "@mui/icons-material";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
const CartDetails = () => {
  const { cartId } = useParams();
  const { cartItems, removeFromCart } = useContext(CartContext);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const item = cartItems.find((item) => item.cartId === cartId);
  const [quantity, setQuantity] = useState(1); 
  const [location, setLocation] = useState('');
  const [sublocation, setSublocation] = useState('');
  const totalPrice = item?.price * quantity;
  const discountedPrice = totalPrice * 0.5;
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
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
      {item?.brand}
    </Link>,
    <Typography key="4" sx={{ color: "text.primary" }}>
      {item?.title}
    </Typography>,
  ];

  const handleLChange = (event) => {
    setLocation(event.target.value);
  };
  const handleSChange = (event) => {
      setSublocation(event.target.value);
  };

  return (
    <>
      <HeaderPage />
      <Box sx={{ backgroundColor: "#E8E8E8" }} mb={6} p={6}>
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
        {/* sample */}
        <Box sx={{ padding: "16px" }}>
          {/* <Typography variant="h4">{item?.title}</Typography>
          <Typography>Brand: {item?.brand}</Typography>
          <Typography>Price: ${item?.price}</Typography>
          <img
            src={item?.imageSrc}
            alt={item?.title}
            style={{ width: "100%", maxHeight: "300px" }}
          /> */}
          {/* <Button
            onClick={() => {
              removeFromCart(item?.cartId);
            }}
            sx={{ marginTop: "16px", backgroundColor: "red", color: "white" }}
          >
            Remove from Cart
          </Button> */}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#fff",
              marginLeft: "6px",
              border: "1px solid #C1C1C1",
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "stretch", // Ensures cards stretch equally
                padding: "2px",
                marginTop: "16px",
              }}
            >
              <Card
                // key={index}
                sx={{
                  width: 430,
                  height: 450,
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "none",
                  alignItems: "center",
                  marginBottom: "14px",
                }}
              >
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
                    src={item?.imageSrc}
                    alt={item?.title}
                  />
                </Box>
                <Box
                  sx={{
                    borderRadius: "18px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px", // Space between images
                    padding: "8px",
                    color: "#808080",
                    marginLeft: "-95px",
                    "&:hover": {
                      color: "#882BEC",
                      cursor: "pointer",
                    },
                  }}
                >
                  <img
                    src={item?.imageSrc}
                    alt="sub image1"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      backgroundColor: "#F2F2F2",
                    }}
                  />
                  <img
                    src={item?.imageSrc}
                    alt="sub image2"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      backgroundColor: "#F2F2F2",
                    }}
                  />
                  <img
                    src={item?.imageSrc}
                    alt="sub image3"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      backgroundColor: "#F2F2F2",
                    }}
                  />
                  <img
                    src={item?.imageSrc}
                    alt="sub image4"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      backgroundColor: "#F2F2F2",
                    }}
                  />
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
                    variant="body2"
                    sx={{ color: "text.secondary", fontFamily: "Poppins" }}
                  >
                    Share this product
                  </Typography>
                  <Typography>
                    <WhatsApp /> <Instagram /> <X />
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "2px",
                marginTop: "16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: 36,
                  }}
                >
                  {item?.title}
                </Typography>

                <Checkbox
                  sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "50%",
                  }}
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </Box>
              <Typography
                variant="body2"
                color="initial"
                sx={{ marginLeft: "4px" }}
              >
                Brand: {item?.brand}
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginRight: "8px",
                  }}
                >
                  {/* ${item?.price} */}${discountedPrice.toFixed(2)}
                </span>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#808080",
                    fontSize: "16px",
                    marginRight: "8px",
                  }}
                >
                  ${totalPrice.toFixed(2)}
                </span>

                {/* Discount */}
                <span
                  style={{
                    backgroundColor: "#D4EDDA",
                    color: "#28A745",
                    fontSize: "14px",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  -50%
                </span>
              </Typography>
              <Typography style={{ color: "#808080", padding: 1 }}>
                40 units left
              </Typography>
              <Typography style={{ color: "#808080", padding: 1 }}>
                {" "}
                + Shipping fee may vary from location to location
              </Typography>
              <Typography style={{ color: "#808080", padding: 1 }}>
                <Rating
                  name="size-small"
                  defaultValue={1}
                  size="small"
                  max={1}
                />
                1k+ rating
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                >
                  Quantity:
                </Typography>
                <Button
                  style={{
                    borderRadius: "8px",
                    width: "180px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 14px",
                    marginLeft: "8px", // Optional: Adds space between the text and the button
                  }}
                  startIcon={
                    <Remove
                      onClick={handleDecrease}
                      sx={{
                        backgroundColor: "#FEA301",
                        color: "white",
                        width: "60px",
                      }}
                    />
                  }
                  endIcon={
                    <Add
                      onClick={handleIncrease}
                      sx={{
                        backgroundColor: "#FEA301",
                        color: "white",
                        width: "60px",
                      }}
                    />
                  }
                >
                  {quantity}
                </Button>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }} mt={2}>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                >
                  Size:
                </Typography>
                <Button
                  style={{
                    borderRadius: "8px",
                    border: "1px solid black",
                    width: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 14px",
                    marginLeft: "8px", // Optional: Adds space between the text and the button
                  }}
                >
                  25
                </Button>
                <Button
                  style={{
                    borderRadius: "8px",
                    border: "1px solid black",
                    width: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 14px",
                    marginLeft: "8px", // Optional: Adds space between the text and the button
                  }}
                >
                  32
                </Button>
                <Button
                  style={{
                    borderRadius: "8px",
                    border: "1px solid black",
                    width: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 14px",
                    marginLeft: "8px", // Optional: Adds space between the text and the button
                  }}
                >
                  37
                </Button>
                <Button
                  style={{
                    borderRadius: "8px",
                    border: "1px solid black",
                    width: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 14px",
                    marginLeft: "8px", // Optional: Adds space between the text and the button
                  }}
                >
                  40
                </Button>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }} mt={2}>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                >
                  Color:
                </Typography>
                <Button
                  style={{
                    borderRadius: "6px",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0",
                    marginLeft: "8px",
                    backgroundColor: "transparent",
                    border: "1px solid #ccc",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      //   borderRadius: "50%",
                      backgroundColor: "#EBCDD5",
                      cursor: "pointer",
                    }}
                  ></span>
                </Button>
                <Button
                  style={{
                    borderRadius: "6px",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0",
                    marginLeft: "8px",
                    backgroundColor: "transparent",
                    border: "1px solid #ccc",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      //   borderRadius: "50%",#EBCDD
                      backgroundColor: "#4444FF",
                      cursor: "pointer",
                    }}
                  ></span>
                </Button>
                <Button
                  style={{
                    borderRadius: "6px",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0",
                    marginLeft: "8px",
                    backgroundColor: "transparent",
                    border: "1px solid #ccc",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      //   borderRadius: "50%",
                      backgroundColor: "#FF4646",
                      cursor: "pointer",
                    }}
                  ></span>
                </Button>
                <Button
                  style={{
                    borderRadius: "6px",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0",
                    marginLeft: "8px",
                    backgroundColor: "transparent",
                    border: "1px solid #ccc",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      //   borderRadius: "50%",
                      backgroundColor: "#1E1E1E",
                      cursor: "pointer",
                    }}
                  ></span>
                </Button>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }} mt={4}>
                <Button
                  style={{
                    borderRadius: "8px",
                    width: "150px",
                    height: "50px",
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 14px",
                    marginLeft: "8px", // Optional: Adds space between the text and the button
                  }}
                  startIcon={<ShoppingBag />}
                >
                  Add to cart
                </Button>
                <Button
                  style={{
                    borderRadius: "8px",
                    width: "130px",
                    display: "flex",
                    height: "50px",
                    backgroundColor: "#FEA301",
                    textTransform: "none",
                    color: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 14px",
                    marginLeft: "8px", // Optional: Adds space between the text and the button
                  }}
                >
                  Buy Now
                </Button>
              </Box>
              <p
                style={{
                  textAlign: "center",
                  color: "#006200",
                  fontSize: 18,
                  fontFamily: "Poppins",
                }}
              >
                Pickup & Pay on collection available
              </p>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #C1C1C1",
              borderRadius: "12px",
            }}
          >
            <Card variant="outlined" sx={{ width: 400, borderRadius: "12px" }}>
              <Box sx={{ p: 2 }}>
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                  }}
                >
                  <Typography gutterBottom variant="h4" component="div" ml={6}>
                    Delivery & Returns
                  </Typography>
                </Stack>
              </Box>
              <Divider />
              <Box p={5}>
                <Typography
                  variant="body1"
                  color="initial"
                  style={{ fontFamily: "Poppins" }}
                >
                  location
                </Typography>
                <p></p>
                <FormControl fullWidth>
                  <InputLabel id="location-label">Location</InputLabel>
                  <Select
                    labelId="location-label"
                    id="locat"
                    value={location}
                    label="Location"
                    onChange={handleLChange}
                  >
                    <MenuItem value="Addis Ababa">Addis Ababa</MenuItem>
                    <MenuItem value="Bishoftu">Bishoftu</MenuItem>
                    <MenuItem value="Adama">Adama</MenuItem>
                    <MenuItem value="Gonder">Gonder</MenuItem>
                    <MenuItem value="Hawasa">Hawasa</MenuItem>
                  </Select>
                </FormControl>
                <p></p>
                <FormControl fullWidth>
                  <InputLabel id="sublocation">Sub-Location</InputLabel>
                  <Select
                    labelId="sublocation"
                    id="sublocat"
                    value={sublocation}
                    label="Sub-Location"
                    onChange={handleSChange}
                  >
                    <MenuItem value={"Lideta"}>Lideta</MenuItem>
                    <MenuItem value={"Kurkura"}>Kurkura</MenuItem>
                    <MenuItem value={"Bole"}>Bole</MenuItem>
                    <MenuItem value={"Lasta"}>Lasta</MenuItem>
                    <MenuItem value={"Kirkos"}>Kirkos</MenuItem>
                    <MenuItem value={"4 kilo"}>4 kilo</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                p={1}
              >
                <LocalShipping /> <span>Delivery</span>
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "Poppins" }} p={2}>
                <strong>Estimated delivery time:</strong> 1-12 business days{" "}
                <br />
                <strong>For Same-Day-Delivery:</strong> Please place your order
                before 12pm <br />
                <strong>Next-Day-Delivery:</strong> Orders placed after 12pm
                will be delivered the next day. <br />
                <strong>Note:</strong> Availability may vary by location
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                p={1}
              >
                <EventRepeat /> <span>Return Policy</span>
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "Poppins" }} p={2}>
                <strong>Guaranteed 7-day return policy:</strong> <br />
                For details about return shipping options, please visit our
                Contact page
              </Typography>
            </Card>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default CartDetails;
