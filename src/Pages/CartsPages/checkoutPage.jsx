import React, { useEffect, useState } from "react";
import { Box, Typography, Button,Card,  Divider, FormControl,  TextField } from "@mui/material";
import HeaderPage from "../Header/Header";
import Footer from "../Footer/Footer";
import Stack from "@mui/material/Stack";
import {  Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
const CheckOutPage = ()=>{
   
        const [formData, setFormData] = useState({
          name: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
        });
        const location = useLocation();
  const { title, brand, price, imageSrc } = location.state || {};
      
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
      const randomShipping = Math.floor(Math.random() * 16) + 5; 
    const tax = price?(Number(price)  + randomShipping) * 0.05:5;
    const computedTotal = price ? ((Number(price)  + randomShipping + tax).toFixed(2)) : 0; 
    
    setShipping(randomShipping);
    setTotal(computedTotal);
  }, [price]);
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
          };
      return (
        <>
          <HeaderPage />
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            mt={3}
            mb={2}
          >
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#fff",
                marginLeft: "6px",
                border: "1px solid #C1C1C1",
                borderRadius: "12px",
              }}
              ml={6}
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
                    width: 550,
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
                  <Typography
                    variant="h6"
                    sx={{ marginBottom: "16px", fontFamily: "Poppins" }}
                  >
                    Shipping Address
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "12px",
                    }}
                  >
                    <FormControl fullWidth sx={{ padding: "16px" }}>
                      {/* Name Field */}
                      <TextField
                        fullWidth
                        label="Name"
                        placeholder="First & Second Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        sx={{ marginBottom: "16px" }}
                      />

                      {/* Address 1 Field */}
                      <TextField
                        fullWidth
                        label="Address 1"
                        placeholder="Enter your address"
                        name="address1"
                        value={formData.address1}
                        onChange={handleChange}
                        sx={{ marginBottom: "16px" }}
                      />

                      {/* Address 2 Field */}
                      <TextField
                        fullWidth
                        label="Address 2"
                        placeholder="Apartment, suite, etc. (optional)"
                        name="address2"
                        value={formData.address2}
                        onChange={handleChange}
                        sx={{ marginBottom: "16px" }}
                      />

                      {/* City, State, ZIP Grid */}
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                          <TextField
                            fullWidth
                            label="City"
                            placeholder="Enter city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={6} sm={3} md={4}>
                          <TextField
                            fullWidth
                            label="State"
                            placeholder="Enter state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={6} sm={3} md={4}>
                          <TextField
                            fullWidth
                            label="ZIP"
                            placeholder="Enter ZIP code"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Box>
                </Card>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #C1C1C1",
                borderRadius: "12px",
              }}
              mr={6}
            >
              <Card
                variant="outlined"
                sx={{ width: 500, borderRadius: "12px" }}
              >
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
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      ml={6}
                    >
                      Order Summary
                    </Typography>
                  </Stack>
                </Box>
                <Divider />
                <Box p={2} display={"flex"} justifyContent={"space-evenly"}>
                  <img
                    src={imageSrc&&imageSrc}
                    alt="images source"
                    width={60}
                    height={60}
                    style={{marginRight:"20px",backgroundColor: "#F2F2F2",}}
                  />
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="left"
                    mr={15}
                  >
                    <Typography
                      variant="body1"
                      color="initial"
                      fontFamily={"Poppins"}
                      fontWeight={"bold"}
                    >
                      {title && title}
                    </Typography>
                    <Typography variant="body2" color="initial">
                      {brand && brand}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ padding: "16px", maxWidth: "400px", margin: "0 auto" }}
                >
                  {/* Subtotal */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <Typography
                      sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                    >
                      Subtotal
                    </Typography>
                    <Typography>${price && price}</Typography>
                  </Box>

                  {/* Shipping */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <Typography
                      sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                    >
                      Shipping
                    </Typography>
                    <Typography>${shipping.toFixed(2)}</Typography>
                  </Box>

                  {/* Tax */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <Typography
                      sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                    >
                      Tax (5%)
                    </Typography>
                    <Typography>${price?((Number(price) + shipping) * 0.05).toFixed(2):5}</Typography>
                  </Box>

                  {/* Divider */}
                  <Divider sx={{ margin: "16px 0" }} />

                  {/* Total */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Total
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                    ${total}
                    </Typography>
                  </Box>

                  {/* Order Button */}
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundColor: "#FEA301",
                      color: "white",
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      padding: "12px",
                      fontSize: "16px",
                      borderRadius: "10px",
                      "&:hover": {
                        backgroundColor: "#E89001",
                      },
                    }}
                  >
                    Place Order
                  </Button>
                </Box>
              </Card>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              backgroundColor: "#fff",
              marginLeft: "6px",
              border: "1px solid #C1C1C1",
              borderRadius: "12px",
              width: "600px",
            }}
            ml={6}
            mb={3}
          >
            <Card
              // key={index}
              sx={{
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                boxShadow: "none",
                alignItems: "center",
                marginBottom: "14px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ marginBottom: "16px", fontFamily: "Poppins" }}
              >
                Payment Method
              </Typography>
              <Box display={"flex"} justifyContent={"space-between"} gap={3}>
                <Button
                  sx={{
                    backgroundColor: "#FEA301",
                    color: "white",
                    width: "160px",
                    height: "104px",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    border: "1px solid #C1C1C1",
                    padding: "12px",
                    fontSize: "16px",
                    borderRadius: "10px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E89001",
                    },
                  }}
                >
                  Card
                </Button>
                <Button
                  sx={{
                    // backgroundColor: "#FEA301",
                    color: "black",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    width: "160px",
                    height: "104px",
                    border: "1px solid #C1C1C1",
                    padding: "12px",
                    fontSize: "16px",
                    borderRadius: "10px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E89001",
                    },
                  }}
                >
                  Wallet
                </Button>
                <Button
                  sx={{
                    // backgroundColor: "#FEA301",
                    color: "black",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    border: "1px solid #C1C1C1",
                    width: "160px",
                    height: "104px",
                    padding: "12px",
                    fontSize: "16px",
                    borderRadius: "10px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E89001",
                    },
                  }}
                >
                  Bank Tansfer
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                }}
              >
                <FormControl fullWidth sx={{ padding: "16px" }}>
                  {/* Name Field */}
                  <TextField
                    fullWidth
                    label="Name On Card"
                    placeholder="First & Second Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{ marginBottom: "16px" }}
                  />

                  {/* Address 1 Field */}
                  <TextField
                    fullWidth
                    label="Card Number"
                    placeholder="000 000 00000 00000 0"
                    name="card"
                    value={formData.address1}
                    onChange={handleChange}
                    sx={{ marginBottom: "16px" }}
                  />

                  {/* Ex cvv */}
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                      <TextField
                        fullWidth
                        label="MM"
                        placeholder="MM"
                        name="MM"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={4}>
                      <TextField
                        fullWidth
                        label="YYY"
                        placeholder="YYY"
                        name="YYY"
                        value={formData.state}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={4}>
                      <TextField
                        fullWidth
                        label="CVV"
                        placeholder="CVV"
                        name="CVV"
                        value={formData.zip}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </FormControl>
              </Box>
            </Card>
          </Box>
          <Footer />
        </>
      );}
      export default CheckOutPage