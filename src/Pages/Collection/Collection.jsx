import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { StyledImage } from '../../Styles/styles'
import fr39 from "../../Assets/Frame 39.png"
import fr38 from "../../Assets/Frame 38.png"
import frenchKissBag from '../../Assets/kissBag.png'
import KidsShoe from '../../Assets/KidsShoe.png'
import WomenC from '../../Assets/WomenLibs.png'
const Collection  = () =>{
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Box>
          <Card sx={{ width: 350 ,borderRadius:"16px",border:"1px solid #C1C1C1"}}>
            <CardMedia
              sx={{ height: 258,width:227 }}
              image={frenchKissBag}
              title="Bag"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                French Kiss Bag
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                ALDO
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">$500</Button>
              <Button size="small" sx={{backgroundColor:"#FEA301",color:"white",alignItems:"center",textTransform: "none", }}>Add to cart</Button>
            </CardActions>
          </Card>
        </Box>
        <Box>
        <Card sx={{ width: 350 ,borderRadius:"16px",border:"1px solid #C1C1C1"}}>
            <CardMedia
               sx={{ height: 213,width:213 }}
              image={KidsShoe}
              title="Bag"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Burberry Shine
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                FENDI
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">$150</Button>
              <Button size="small" sx={{backgroundColor:"#FEA301",color:"white",alignItems:"center",textTransform: "none", }}>Add to cart</Button>
            </CardActions>
          </Card>
        </Box>
        <Box>
        <Card sx={{ width: 350 ,borderRadius:"16px",border:"1px solid #C1C1C1"}}>
            <CardMedia
              sx={{ height: 202,width:161 }}
              image={WomenC}
              title="Bag"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Alvero Gown
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Divine
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">$300</Button>
              <Button size="small" sx={{backgroundColor:"#FEA301",color:"white",alignItems:"center",textTransform: "none", }}>Add to cart</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default Collection