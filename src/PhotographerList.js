import React from "react";
import { Box, Container, Typography, Card, CardContent, Grid, Link, Avatar } from "@mui/material";
import "./Services.css";

const photographers = [
  {
    name: "Alice Johnson",
    description: "Specializes in wedding and portrait photography, capturing timeless moments.",
    email: "alice.johnson@example.com",
    phone: "+1 (555) 123-4567",
    image: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with real image
  },
  {
    name: "Michael Lee",
    description: "Nature and wildlife photographer with a passion for storytelling through images.",
    email: "michael.lee@example.com",
    phone: "+1 (555) 987-6543",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Samantha Carter",
    description: "Professional fashion and editorial photographer working with top brands.",
    email: "samantha.carter@example.com",
    phone: "+1 (555) 456-7890",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "David Kim",
    description: "Sports and action photographer known for capturing high-energy moments.",
    email: "david.kim@example.com",
    phone: "+1 (555) 222-3333",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
];

const PhotographerList = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Featured Photographers
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 4 }}>
        Discover talented photographers and their specialties. Contact them for bookings!
      </Typography>

      <Grid container spacing={4}>
        {photographers.map((photographer, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ display: "flex", alignItems: "center", p: 2, bgcolor: "#f5f5f5" }}>
              <Avatar
                src={photographer.image}
                alt={photographer.name}
                sx={{ width: 80, height: 80, mr: 2 }}
              />
              <CardContent>
                <Typography variant="h6">{photographer.name}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  {photographer.description}
                </Typography>
                <Typography variant="body2">
                  📧{" "}
                  <Link href={`mailto:${photographer.email}`} color="primary">
                    {photographer.email}
                  </Link>
                </Typography>
                <Typography variant="body2">📞 {photographer.phone}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PhotographerList;
