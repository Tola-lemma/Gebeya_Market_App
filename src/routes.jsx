import { lazy, Suspense } from "react";
import {Route, Routes } from "react-router-dom";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { colors, NAME } from "./Constants/constant";
import { ErrorProvider } from "./Components/ToastError/ErrorContext";
const CartDetails = lazy(()=>import('./Pages/CartsPages/CartDetailedPages'))
const Home = lazy(()=>import('./Pages/MainHome/Home'))
const containerStyle = {
      position: "fixed",
      zIndex: 10000,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: colors.background.pureWhite,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    };
    
    export const LoadingPage = () => {
      return (
        <Box style={containerStyle}>
          <Box
            sx={{
              display: "flex",
              fontFamily: "Campton",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CircularProgress />
    
            <Box sx={{ ml: 3 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Campton",
                  letterSpacing: "1px",
                  color: colors.background.primary
                }}
              >
                {NAME}
              </Typography>
              <Typography
                fontFamily="Campton"
                variant="p"
                sx={{ mt: 1 ,color: colors.background.secondary}}
              >
                Hold on, We are preparing your content...
              </Typography>
            </Box>
          </Box>
        </Box>
      );
    };

    export const route = [
      {
        path: "/",
        exact: true,
        element: <Home />,
      },
      {
        path:'/cart/:cartId',
        exact:true,
        element:<CartDetails/>

      },
      // {
      //   path:'/change_password/:token',
      //   exact:true,
      //   element:<ChangePassword/>

      // },
    ];
    
    const AllRoute = ()=>{
      return (
        <>
          <Suspense fallback={<LoadingPage />}>
            <ErrorProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/cart/:cartId" element={<CartDetails />} />
            </Routes>
            </ErrorProvider>
          </Suspense>
        </>
      );
    }
export default AllRoute