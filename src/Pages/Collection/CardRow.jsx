import { Box, Card, CardContent, Typography } from "@mui/material";

const CardRow = ({ images, labels,marginT }) => (
      <Box
        sx={{
          display: {xs:"block",sm:"block",md:"flex",lg:"flex",xl:"flex"},
          justifyContent: "space-between",
          alignItems: "stretch",
          padding: "6px",
          margin: "1.8rem",
          marginTop: marginT,
        }}
      >
        {images.map((imageSrc, index) => (
          <Card
            key={index}
            sx={{
              width: 205,
              height: 210,
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
                height: 150,
                width: "180px",
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
                {labels[index] || "Street wears"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontFamily: "Poppins" }}
              >
                {index === 0 ? "See all collections" : "Explore"}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
    export default CardRow