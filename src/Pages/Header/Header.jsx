import {
  AppBar,
  InputBase,
  Box,
  Typography,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Divider,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { StyledImage, StyledToolbar } from "../../Styles/styles";
import logoImg from "../../Assets/image-removebg-preview.png";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "../../Constants/constant";
import shopingIcon from "../../Assets/Frame 24.png";
import { KeyboardArrowDown, Person, Search, Close } from "@mui/icons-material";
import UnitedKingdom from "../../Assets/united kingdom.png";
import { CartContext } from "../CartsPages/CartContext";
import { useNavigate } from "react-router-dom";
const style = {
  p: 0,
  width: "100%",
  borderColor: "divider",
};
const HeaderPage = () => {
  const [moreAnchorEl, setMoreAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  console.log("cart item",cartItems);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Handlers for "More" dropdown
  const handleOpenMoreMenu = (event) => {
    setMoreAnchorEl(event.currentTarget);
  };

  const handleCloseMoreMenu = () => {
    setMoreAnchorEl(null);
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const moreMenuItems = [
    "Perfumes",
    "Jewelries",
    "Gym Wears",
    "Vintage Wears",
    "Sport Wears",
    "Pyjamas",
    "Slippers",
  ];
// register and sign in 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: colors.background.pureWhite,
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.01)",
        color: colors.background.black,
      }}
    >
      <StyledToolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: menuOpen ? "1px solid #E0E0E0" : "none",
          }}
        >
          <IconButton
            onClick={toggleMenu}
            sx={{
              display: { xs: "block", sm: "block", lg: "none", md: "block" },
            }}
          >
            {menuOpen ? <Close /> : <MenuIcon />}
          </IconButton>
          {/* Logo */}
          <StyledImage src={logoImg} />
        </Box>

        {/* Register/Sign In */}
        <Box
          // sx={{ display: "flex", alignItems: "center", ml: "auto", mr: 4 }}
          sx={{
            ml: { lg: 2 },
            display: { xs: "none", lg: "flex", xl: "flex" },
            flexDirection: { xs: "row", sm: "row" },
            alignItems: { lg: "center", sm: "flex-start", xs: "flex-start" },
            // gap: { xs: 2, sm: 0 },
          }}
        >
          <Person />
          <Typography ml={{ lg: 1 }} fontSize={{ lg: 16 }}>
            Register/SignIn
          </Typography>
          <IconButton onClick={handleClick}>
            <KeyboardArrowDown sx={{ mr: { lg: 1 },color:"black",fontWeight:"bold" }} />
          </IconButton>
        </Box>
         {/* Dropdown Menu  for sign in and register pages*/}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <MenuItem
          onClick={() => {
            navigate("/");
            handleClose();
          }}
        >
          Register
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/");
            handleClose();
          }}
        >
          Sign In
        </MenuItem>
      </Menu>
        {/* Horizontal Navigation */}
        <Box
          sx={{
            // ml: 4,
            display: {
              xs: "none",
              // sm: menuOpen &&"flex",
              lg: "flex",
              xl: "flex",
            },
            flexDirection: { xs: "column", sm: "column", lg: "row", md: "row" },
            alignItems: { lg: "center", sm: "flex-start", xs: "flex-start" },
            gap: { xs: 1, sm: 0, md: 0 },
          }}
        >
          {/* Pages */}
          {["Home", "Men", "Women", "Kids", "Accessories"].map(
            (page, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  cursor: "pointer",
                  fontWeight: page === "Home" ? "bold" : "normal", // Highlight current page
                  color:
                    page === "Home"
                      ? colors.background.black
                      : colors.background.black,
                  mx: 1.5,
                }}
                onClick={() => (window.location.href = "/")}
              >
                {page}
              </Typography>
            )
          )}

          {/* "More" Dropdown */}
          <Typography
            variant="body1"
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              mx: 2,
            }}
            onMouseEnter={handleOpenMoreMenu}
          >
            More
            <KeyboardArrowDown />
          </Typography>

          {/* Dropdown Menu for "More" */}
          <Menu
            anchorEl={moreAnchorEl}
            open={Boolean(moreAnchorEl)}
            onClose={handleCloseMoreMenu}
            MenuListProps={{
              onMouseLeave: handleCloseMoreMenu,
            }}
            PaperProps={{
              elevation: 3,
              sx: { mt: 1 },
            }}
          >
            {moreMenuItems.map((item, index) => (
              <MenuItem key={index} onClick={handleCloseMoreMenu}>
                <List sx={style}>
                  <ListItem onClick={() => (window.location.href = "/")}>
                    <ListItemText primary={item} />
                  </ListItem>
                  <Divider component="li" />
                </List>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #C6C6C6",
            borderRadius: "50px",
            overflow: "hidden",
            // ml: { lg: 2 },
          }}
        >
          <Box sx={{ padding: "0 6px", color: "#1E1E1E" }}>
            <Search />
          </Box>
          <InputBase
            placeholder="Search"
            sx={{
              flex: 1,
              fontSize: "16px",
              fontFamily: "Poppins",
              padding: "4px 8px",
              color: "#1E1E1E",
            }}
          />
          <IconButton
            sx={{
              backgroundColor: colors.background.primary,
              color: "white",
              width: "65px",
              borderRadius: 0,
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: colors.background.primary,
                transform: "scale(1.1)",
              },
            }}
          >
            <Search />
          </IconButton>
        </Box>

        {/* Currency and Shopping Cart */}
        <Box sx={{ display: "flex", alignItems: "center", ml: 4 }}>
          <Box
            sx={{
              ml: 4,
              display: { xs: "none", lg: "flex", xl: "flex" },
              flexDirection: { xs: "row", sm: "row" },
              alignItems: { lg: "center", sm: "flex-start", xs: "flex-start" },
              gap: { xs: 2, sm: 0 },
            }}
          >
            <StyledImage src={UnitedKingdom} height={24} width={24} />
            <Typography ml={1} fontSize={16}>
              EN/Currency
            </Typography>
            <KeyboardArrowDown sx={{ mr: 2 }} />
          </Box>
          <IconButton onClick={() => setShowDropdown(!showDropdown)}>
            <Badge
              badgeContent={cartItems.length}
              sx={{
                "& .MuiBadge-badge": {
                  color: colors.background.white,
                  backgroundColor: colors.background.error,
                  right: 1,
                  top: 5,
                },
              }}
            >
              <StyledImage src={shopingIcon} height={44} width={44} />
            </Badge>
          </IconButton>
          {showDropdown && (
            <Box
              sx={{
                position: "absolute",
                top: "60px",
                right: "0",
                width: "300px",
                backgroundColor: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                zIndex: 10,
              }}
            >
              {cartItems.length === 0 ? (
                <Typography sx={{ padding: "16px" }}>
                  Your cart is empty
                </Typography>
              ) : (
                cartItems.map((item) => (
                  <Box
                    key={item.cartId}
                    sx={{
                      padding: "16px",
                      borderBottom: "1px solid #ccc",
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#f4f4f4" },
                    }}
                    onClick={() => {
                      setShowDropdown(false);
                      navigate(`/cart/${item.cartId}`);
                    }}
                  >
                    <Typography>{item.title}</Typography>
                  </Box>
                ))
              )}
            </Box>
          )}
        </Box>
      </StyledToolbar>
      {/* Mobile Menu Section: Expands Only When Toggled */}
      {menuOpen && (
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            flexDirection: "column",
            alignItems: "flex-start",
            backgroundColor: colors.background.pureWhite,
            width: "100%",
            padding: 2,
          }}
        >
          {/* Register/Sign In */}
          <Box
            // sx={{ display: "flex", alignItems: "center", ml: "auto", mr: 4 }}
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "row" },
              borderBottom: "2px solid #E0E0E0",
              alignItems: { lg: "center", sm: "flex-start", xs: "flex-start" },
              // gap: { xs: 2, sm: 0 },
            }}
          >
            <Person />
            <Typography ml={{ lg: 1 }} fontSize={{ lg: 16 }}>
              Register/Sign In
            </Typography>
            <KeyboardArrowDown sx={{ mr: { lg: 1 } }} />
            <hr />
          </Box>
          {["Our Categories", "Men", "Women", "Kids", "Accessories"].map(
            (page, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: colors.background.black,
                  padding: "2px 0",
                }}
              >
                {page}
              </Typography>
            )
          )}

          {/* "More" Dropdown */}
          <Typography
            variant="body1"
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={handleOpenMoreMenu}
          >
            More
            <KeyboardArrowDown sx={{ marginLeft: "5px" }} />
          </Typography>

          {/* Dropdown Menu for "More" */}
          <Menu
            anchorEl={moreAnchorEl}
            open={Boolean(moreAnchorEl)}
            onClose={handleCloseMoreMenu}
            MenuListProps={{
              onMouseLeave: handleCloseMoreMenu,
            }}
            PaperProps={{
              elevation: 3,
              sx: { mt: 1 },
            }}
          >
            {moreMenuItems.map((item, index) => (
              <MenuItem key={index} onClick={handleCloseMoreMenu}>
                <List sx={style}>
                  <ListItem>
                    <ListItemText primary={item} />
                  </ListItem>
                  <Divider component="li" />
                </List>
              </MenuItem>
            ))}
          </Menu>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "row" },
              alignItems: { sm: "flex-start", xs: "flex-start" },
              borderTop: "2px solid #E0E0E0",
              // gap: { xs: 2, sm: 0 },
            }}
          >
            <StyledImage src={UnitedKingdom} height={24} width={24} />
            <Typography fontSize={16}>EN/Currency</Typography>
            <KeyboardArrowDown />
          </Box>
        </Box>
      )}
    </AppBar>
  );
};

export default HeaderPage;
