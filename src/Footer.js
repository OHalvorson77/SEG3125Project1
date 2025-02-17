import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "30px 0",
        textAlign: "center",
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Company Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Byward Photography</Typography>
            <Typography variant="body2">
              For all of your occastions.
            </Typography>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body2">📍 123 Tech Street, City, Country</Typography>
            <Typography variant="body2">📞 +1 (234) 567-8901</Typography>
            <Typography variant="body2">
              ✉️ <Link href="mailto:support@yourcompany.com" color="inherit">support@yourcompany.com</Link>
            </Typography>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Useful Links</Typography>
            <Box>
              <Link href="/about" color="inherit" sx={{ display: "block", mb: 0.5 }}>
                About Us
              </Link>
              <Link href="/services" color="inherit" sx={{ display: "block", mb: 0.5 }}>
                Services
              </Link>
              <Link href="/faq" color="inherit" sx={{ display: "block", mb: 0.5 }}>
                FAQ
              </Link>
              <Link href="/blog" color="inherit" sx={{ display: "block" }}>
                Blog
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Footer */}
        <Box sx={{ mt: 3, pt: 2, borderTop: "1px solid #444" }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
