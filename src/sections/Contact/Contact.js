import React from "react";
import TranslucentContainer from "../../components/TranslucentContainer/TransluscentContainer";
import { TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FormContainer = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  maxWidth: "500px",
  margin: "0 auto",
}));

const Footer = styled("div")(({ theme }) => ({
  marginTop: "2rem",
  textAlign: "center",
  color: "#aaaeb6",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "0.5rem 1rem",
  borderRadius: "1rem",
}));

const Contact = () => {
  return (
    <TranslucentContainer
      $backgroundcolor="rgba(187, 191, 194, 0.6)"
      $fontcolor="#38393B"
      padding="2rem"
      flexdirection="column"
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <FormContainer>
        <TextField label="Name" variant="outlined" fullWidth required />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ backgroundColor: "#38393B", color: "#FFFFFF" }}
        >
          Send
        </Button>
      </FormContainer>
      <Footer>
        <Typography variant="body2">Made with love © Vishwas 2024</Typography>
      </Footer>
    </TranslucentContainer>
  );
};

export default Contact;
