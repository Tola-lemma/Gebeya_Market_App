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
import React, { useState } from "react";
import { StyledImage, StyledToolbar } from "../../Styles/styles";
import logoImg from "../../Assets/image-removebg-preview.png";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "../../Constants/constant";
import shopingIcon from "../../Assets/Frame 24.png";
import { KeyboardArrowDown, Person, Search } from "@mui/icons-material";
import UnitedKingdom from "../../Assets/united kingdom.png";
const style = {
  p: 0,
  width: '100%',
  borderColor: 'divider',
};
const HeaderPage = () => {
  const [moreAnchorEl, setMoreAnchorEl] = useState(null);

  // Handlers for "More" dropdown
  const handleOpenMoreMenu = (event) => {
    setMoreAnchorEl(event.currentTarget);
  };

  const handleCloseMoreMenu = () => {
    setMoreAnchorEl(null);
  };

  const moreMenuItems = ["Perfumes", "Jewelries", "Gym Wears","Vintage Wears","Sport Wears","Pyjamas","Slippers"];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: colors.background.pureWhite,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.01)",
        color: colors.background.black,
      }}
    >
      <StyledToolbar>
        {/* Logo */}
        <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <StyledImage src={logoImg} />

        {/* Register/Sign In */}
        <Box sx={{ display: "flex", alignItems: "center", ml: "auto", mr: 4 }}>
          <Person />
          <Typography ml={1} fontSize={16}>
            Register/Sign In
          </Typography>
          <KeyboardArrowDown sx={{ mr: 2 }} />
        </Box>
        {/* Horizontal Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", ml: 4 }}>
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
                  mx: 2,
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
                <ListItem>
                  <ListItemText primary= {item} />
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
            ml: 4,
          }}
        >
          <Box sx={{ padding: "0 8px", color: "#1E1E1E" }}>
            <Search />
          </Box>
          <InputBase
            placeholder="Search"
            sx={{
              flex: 1,
              fontSize: "16px",
              fontFamily: "sans-serif",
              padding: "4px 8px",
              color: "#1E1E1E",
            }}
          />
          <IconButton
            sx={{
              backgroundColor: colors.background.primary,
              color: "white",
              width: "78px",
              borderRadius: 0,
            }}
          >
            <Search />
          </IconButton>
        </Box>

        {/* Currency and Shopping Cart */}
        <Box sx={{ display: "flex", alignItems: "center", ml: 4 }}>
          <StyledImage src={UnitedKingdom} height={24} width={24} />
          <Typography ml={1} fontSize={16}>
            EN/Currency
          </Typography>
          <KeyboardArrowDown sx={{ mr: 2 }} />
          <Badge
            badgeContent={2}
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
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default HeaderPage;
