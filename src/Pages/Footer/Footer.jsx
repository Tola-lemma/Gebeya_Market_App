import React from 'react'
import footerImg from '../../Assets/footer/fotor logo.png'
import { Box, Typography } from '@mui/material'
import { Instagram, WhatsApp, X } from '@mui/icons-material'
const Footer  = () =>{
  const sections = [
    {
      title: 'About',
      links: [
        { label: 'About Us', href: '/' },
        { label: 'News & Blogs', href: '/' },
        { label: 'Locations', href: '/' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'Pricing', href: '/' },
        { label: 'Store', href: '/' },
        { label: 'Features', href: '/' },
      ],
    },
    {
      title: 'Discover',
      links: [
        { label: 'Contact Us', href: '/' },
        { label: 'Customers', href: '/' },
        { label: 'Affiliates', href: '/' },
      ],
    },
  ];
  
  return (
    <Box sx={{backgroundColor:"#882BEC",height:400,display:"flex",justifyContent:"space-between"}}>
      <Box>
         <img src={footerImg} alt='footer images' width={221} height={223} style={{marginLeft:"4rem",marginTop:"3.5rem",cursor:"pointer"}} onClick={() => (window.location.href = "/")}/>
         <Box sx={{display:"flex",justifyContent:"space-evenly",color:"white",marginLeft:"4rem", cursor: 'pointer'}}>
          <Instagram onClick={() => (window.location.href = "/")}/>
          <WhatsApp onClick={() => (window.location.href = "/")}/>
          <X onClick={() => (window.location.href = "/")}/>
         </Box>
      </Box>
      <Box
      sx={{
        display: 'flex',
        gap: 8,
        marginRight: 10,
        marginTop: '5rem',
      }}
    >
      {sections.map((section, sectionIndex) => (
        <Box key={sectionIndex}>
          {/* Section Title */}
          <Typography
            variant="body1"
            color="white"
            sx={{
              fontFamily: 'Poppins',
              fontSize: 28,
              fontWeight: 'bold',
              marginBottom: 2,
            }}
          >
            {section.title}
          </Typography>

          {/* Section Links */}
          {section.links.map((link, linkIndex) => (
            <Typography
              key={linkIndex}
              variant="body2"
              color="white"
              sx={{
                fontFamily: 'Poppins',
                fontSize: 22,
                padding: 1,
                cursor: 'pointer', 
                transition: 'color 0.3s', 
                '&:hover': {
                  color: '#FEA301', 
                },
              }}
              onClick={() => (window.location.href = link.href)} 
            >
              {link.label}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
    </Box>
  )
}

export default Footer