import React from "react";

import { Container, Typography, Grid, Card, CardMedia, CardContent, Avatar, Box, Paper } from "@mui/material";
import { useParams } from "react-router-dom";

// Real shoot data with actual images and testimonials
const shootData = {
  1: {
    title: "Elegant Wedding Moments (Sample Shoot for website demo)",
    images: [
      "https://michaelwillphotography.com/wp-content/uploads/2016/01/best-wedding-photos-pittsburgh-172-1.jpg",
      "https://th.bing.com/th/id/OIP.Kdfv3NaZ6bf_LC6RCCtEQAAAAA?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/R.df0d11a92bc2a45e187cc978a17dc843?rik=u2uCOWVdyFNdPA&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f54bd63f8e4b0ac034b30994b%2f54f0899de4b0d8c8cde06469%2f619e7271963727514b316f0f%2f1637775431612%2fPittsburgh-Wedding-Photographer-Pittsburgh-Senior-Photographer_2018.jpg%3fformat%3d1500w&ehk=D2x%2bT%2f9qU%2fSG9MRfqGX38%2bGVDqCojzwqvfLkor5X2uo%3d&risl=&pid=ImgRaw&r=0",
      "https://www.greatdestinationweddings.com.au/wp-content/uploads/2018/09/destination-wedding-hairstyles-7.jpg",
    ],
    testimonial: {
      text: "Absolutely breathtaking! The photos perfectly captured the magic of our wedding day. We couldn't be happier!",
      client: "Sarah & James",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  },
  2: {
    title: "Mountain Adventure",
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "https://images.unsplash.com/photo-1502210210349-57fe166cac70",
    ],
    testimonial: {
      text: "These photos are stunning! Every shot feels so alive and brings back the adventure. Highly recommend!",
      client: "Alex M.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  3: {
    title: "Fashion Editorial",
    images: [
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
      "https://images.unsplash.com/photo-1536924430914-91f9e2041b42",
      "https://images.unsplash.com/photo-1516728778615-2d590ea18597",
      "https://images.unsplash.com/photo-1495121605193-b116b5b9c51b",
    ],
    testimonial: {
      text: "Incredible work! The photos look like they belong in a high-end magazine. So professional and creative!",
      client: "Olivia R.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  },
  4: {
    title: "Sports Photography",
    images: [
      "https://images.unsplash.com/photo-1517445312881-4016de7b6c48",
      "https://images.unsplash.com/photo-1546514355-7fdc90ccbd36",
      "https://images.unsplash.com/photo-1508780709619-79562169bc64",
      "https://images.unsplash.com/photo-1521413272234-5a2703772547",
    ],
    testimonial: {
      text: "Every action shot is captured perfectly! The energy and excitement of the game really shine through.",
      client: "Coach Michael",
      avatar: "https://randomuser.me/api/portraits/men/74.jpg",
    },
  },
};

const ShootPage = () => {
    const { id } = useParams();
    const shoot = shootData[id];
  
    if (!shoot) {
      return (
        <Container maxWidth="md" sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="h5" color="error">
            Shoot not found
          </Typography>
          <Typography variant="body1">
            The requested shoot does not exist. Please select a valid shoot.
          </Typography>
        </Container>
      );
    }
  
    return (
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, bgcolor: "white" }}>
          {/* Shoot Title */}
          <Typography variant="h4" align="center" gutterBottom>
            {shoot.title}
          </Typography>
  
          {/* Image Gallery */}
          <Grid container spacing={3}>
            {shoot.images.map((img, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ boxShadow: 2 }}>
                  <CardMedia component="img" height="250" image={img} alt={shoot.title} loading="lazy" />
                </Card>
              </Grid>
            ))}
          </Grid>
  
          {/* Client Testimonial Section */}
          <Box sx={{ mt: 5, p: 3, bgcolor: "#f9f9f9", borderRadius: "10px", textAlign: "center", boxShadow: 1 }}>
            <Avatar src={shoot.testimonial.avatar} sx={{ width: 70, height: 70, mx: "auto", mb: 2 }} />
            <Typography variant="h6" sx={{ fontStyle: "italic" }}>
              "{shoot.testimonial.text}"
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 1 }}>
              - {shoot.testimonial.client}
            </Typography>
          </Box>
        </Paper>
      </Container>
    );
  };
  
  export default ShootPage;