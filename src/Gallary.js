import React, { useState, useMemo } from "react";
import { Box, Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const galleryData = [
  { 
    id: 1, 
    title: "Golden Wedding Bliss", 
    photographer: "Alice Johnson", 
    service: "Weddings", 
    description: "A beautiful wedding moment captured in golden light.", 
    cover: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&fit=crop&w=800" 
  },
  { 
    id: 2, 
    title: "Dramatic Portrait", 
    photographer: "Michael Lee", 
    service: "Portraits", 
    description: "A dramatic portrait showcasing raw emotion.", 
    cover: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&fit=crop&w=800" 
  },
  { 
    id: 3, 
    title: "Fashion Elegance", 
    photographer: "Samantha Carter", 
    service: "Commercial", 
    description: "A high-end fashion shoot for a brand campaign.", 
    cover: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&fit=crop&w=800" 
  },
  { 
    id: 4, 
    title: "Art of Editing", 
    photographer: "David Kim", 
    service: "Photo Editing", 
    description: "A stunning color-graded edit showcasing professional retouching.", 
    cover: "https://images.pexels.com/photos/209671/pexels-photo-209671.jpeg?auto=compress&fit=crop&w=800" 
  },
  { 
    id: 5, 
    title: "First Dance Love", 
    photographer: "Alice Johnson", 
    service: "Weddings", 
    description: "A newlywed couple sharing their first dance.", 
    cover: "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg?auto=compress&fit=crop&w=800" 
  },
  { 
    id: 6, 
    title: "Outdoor Glow", 
    photographer: "Michael Lee", 
    service: "Portraits", 
    description: "A soft, natural light portrait in an outdoor setting.", 
    cover: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&fit=crop&w=800" 
  },
  { 
    id: 7, 
    title: "Luxury Product Shoot", 
    photographer: "Samantha Carter", 
    service: "Commercial", 
    description: "Product photography for a premium lifestyle brand.", 
    cover: "https://images.pexels.com/photos/7562316/pexels-photo-7562316.jpeg?auto=compress&fit=crop&w=800" 
  },
  { 
    id: 8, 
    title: "Surreal Digital Art", 
    photographer: "David Kim", 
    service: "Photo Editing", 
    description: "A surreal digital composite created using advanced editing techniques.", 
    cover: "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&fit=crop&w=800" 
  },
  { 
    id: 9, 
    title: "Oceanfront Romance", 
    photographer: "Alice Johnson", 
    service: "Weddings", 
    description: "A breathtaking view of the bride and groom by the ocean.", 
    cover: "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&fit=crop&w=800" 
  },
  { 
    id: 10, 
    title: "Monochrome Emotions", 
    photographer: "Michael Lee", 
    service: "Portraits", 
    description: "An expressive black-and-white close-up portrait.", 
    cover: "https://images.pexels.com/photos/4587665/pexels-photo-4587665.jpeg?auto=compress&fit=crop&w=800" 
  },
];

const Gallery = () => {
  const navigate = useNavigate();
  const [filterService, setFilterService] = useState("");
  const [filterPhotographer, setFilterPhotographer] = useState("");

  // Memoized filtering to optimize performance
  const filteredGallery = useMemo(() => 
    galleryData.filter(
      (item) =>
        (filterService ? item.service === filterService : true) &&
        (filterPhotographer ? item.photographer === filterPhotographer : true)
    ), 
    [filterService, filterPhotographer]
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Featured Gallery
      </Typography>

      {/* Filters */}
      <Box display="flex" justifyContent="center" gap={2} sx={{ mb: 3 }}>
        <Select 
          value={filterService} 
          onChange={(e) => setFilterService(e.target.value)} 
          displayEmpty 
          variant="outlined"
        >
          <MenuItem value="">All Services</MenuItem>
          <MenuItem value="Portraits">Portraits</MenuItem>
          <MenuItem value="Commercial">Commercial</MenuItem>
          <MenuItem value="Weddings">Weddings</MenuItem>
          <MenuItem value="Photo Editing">Photo Editing</MenuItem>
        </Select>

        <Select 
          value={filterPhotographer} 
          onChange={(e) => setFilterPhotographer(e.target.value)} 
          displayEmpty 
          variant="outlined"
        >
          <MenuItem value="">All Photographers</MenuItem>
          <MenuItem value="Alice Johnson">Alice Johnson</MenuItem>
          <MenuItem value="Michael Lee">Michael Lee</MenuItem>
          <MenuItem value="Samantha Carter">Samantha Carter</MenuItem>
          <MenuItem value="David Kim">David Kim</MenuItem>
        </Select>
      </Box>

      {/* Gallery Grid */}
      <Grid container spacing={3}>
        {filteredGallery.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ boxShadow: 1, borderRadius: 2, position: "relative" }}>
              <CardActionArea onClick={() => navigate(`/shoot/${item.title}`)}>
                {/* Image with title overlay */}
                <Box sx={{ position: "relative" }}>
                  <CardMedia 
                    component="img" 
                    height="250" 
                    image={item.cover} 
                    alt={item.title} 
                    loading="lazy" 
                  />
                  <Box 
                    sx={{ 
                      position: "absolute", 
                      bottom: 0, 
                      left: 0, 
                      width: "100%", 
                      background: "rgba(0, 0, 0, 0.6)", 
                      color: "white", 
                      padding: "10px", 
                      textAlign: "center"
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      {item.title}
                    </Typography>
                  </Box>
                </Box>

                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {item.description}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                    📷 {item.photographer}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
