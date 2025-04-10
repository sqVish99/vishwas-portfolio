import React from "react";
import { motion } from "framer-motion";
import TranslucentContainer from "../../components/TranslucentContainer/TransluscentContainer";
import DisplayColumn from "../../components/DisplayColumn/DisplayColumn";
import {
  Button,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import resume from "../../assets/files/Vishwas-Resume.pdf";
import SchoolIcon from '@mui/icons-material/School';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TranslucentContainer
      $backgroundcolor="rgba(58, 64, 52, 0.85)"
      $fontcolor="#81ACDC"
    >
      <DisplayColumn>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box
            sx={{
              textAlign: "center",
              padding: isMobile ? "1rem" : "3rem",
              borderRadius: "16px",
              maxWidth: "800px",
              margin: "0 auto",
              width: isMobile ? "95%" : "auto",
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant={isMobile ? "h6" : "h5"}
                sx={{
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                  color: "rgba(129, 172, 220, 0.9)",
                  letterSpacing: "0.1em",
                }}
              >
                I am Vishwas
              </Typography>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                sx={{
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  background: "linear-gradient(45deg, #81ACDC, #4A7CAA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.2,
                  fontSize: isMobile ? "1.5rem" : "auto",
                }}
              >
                Innovative Developer, Creative Designer, and AI Enthusiast
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                variant="contained"
                color="primary"
                href={resume}
                download = "Vishwas-Resume.pdf"
                fullWidth={isMobile}
                sx={{
                  marginBottom: "1.5rem",
                  transition: "transform 0.3s ease",
                  maxWidth: isMobile ? "100%" : "auto",
                  borderRadius: "8px",
                  backgroundColor: "rgba(125, 140, 151, 0.75)",
                  color: "rgba(255, 255, 255, 0.8)",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "rgba(129, 182, 220, 0.75)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  },
                }}
              >
                My Resume
              </Button>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: isMobile ? "0.5rem" : "1rem",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: "center",
                }}
              >
                {[
                  {
                    icon: <GitHubIcon />,
                    label: "GitHub",
                    href: "https://github.com/sqVish99",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  {
                    icon: <LinkIcon />,
                    label: "Blog",
                    href: "https://sqvish99.github.io/thoughtfulreveries/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  {
                    icon: <DescriptionIcon />,
                    label: "Letter Writer",
                    href: "https://sqvish99.github.io/ai-letter-writer/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  {
                    icon: <LinkedInIcon />,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/vishwas-m-h/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  {
                    icon: <SchoolIcon />,
                    label: "Learn Kana",
                    href: "https://sqvish99.github.io/learn-kana/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                ].map((link, index) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.6 + index * 0.2,
                        duration: 0.5,
                      },
                    }}
                    style={{ width: isMobile ? "100%" : "auto" }}
                  >
                    <Button
                      variant="outlined"
                      color="inherit"
                      href={link.href}
                      startIcon={link.icon}
                      fullWidth={isMobile}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        margin: isMobile ? "0.25rem 0" : "0.5rem",
                        borderColor: "#81ACDC",
                        color: "#81ACDC",
                        width: isMobile ? "100%" : "auto",
                        "&:hover": {
                          backgroundColor: "rgba(129, 172, 220, 0.1)",
                          borderColor: "#4A7CAA",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </DisplayColumn>
    </TranslucentContainer>
  );
};

export default Home;
