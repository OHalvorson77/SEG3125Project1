import React from "react";
import { Container, Typography, Grid, Card, CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";

const shootImages = {
  1: ["https://source.unsplash.com/400x300/?bride", "https://source.unsplash.com/400x300/?weddingrings"],
  2: ["https://source.unsplash.com/400x300/?forest", "https://source.unsplash.com/400x300/?mountain"],
  3: ["https://source.unsplash.com/400x300/?model", "https://source.unsplash.com/400x300/?fashion"],
  4: ["https://source.unsplash.com/400x300/?basketball", "https://source.unsplash.com/400x300/?stadium"],
};

const ShootPage = () => {
  const { id } = useParams();
  const images = shootImages[id] || [];

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Photos from {id}
      </Typography>
      <Grid container spacing={3}>
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" height="200" image={img} alt={`Shoot ${id}`} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShootPage;
