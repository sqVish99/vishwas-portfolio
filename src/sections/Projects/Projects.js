import React from "react";
import { styled } from "@mui/material/styles";
import TranslucentContainer from "../../components/TranslucentContainer/TransluscentContainer";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./Projects.css";

const projects = [
  {
    title: "Problematic Internet Usage",
    date: "November 2024",
    description:
      "Used Data Mining techniques to develop a predictive model for analyzing children's physical activity data to detect early indicators of problematic internet and technology use.",
  },
  {
    title: "AI Letter Writer",
    date: "August 2024",
    description:
      "Employed OpenAI APIs with tailored prompts and a React.js Frontend to create a letter writing assistant.",
  },
  {
    title: "Ant Behaviour Modelling",
    date: "April 2024",
    description:
      "Implemented a spatial agent-based model to study decision making and allocation of resources in ants.",
  },
  {
    title: "Negative Survey Analysis",
    date: "March 2024",
    description:
      "Utilized negative survey responses and statistical methods to map disease prevalence across cities using Python-based visualizations and heatmaps.",
  },
  {
    title: "RL4LMs",
    date: "December 2023",
    description:
      "Developed RL model with a bespoke reward function to improve logical reasoning capabilities of LLMs.",
  },
  {
    title: "Food Decoder",
    date: "January 2020",
    description:
      "Created a Multi-Modal Deep Learning model to generate recipes from images with an accuracy of 80%.",
  },
];

const ProjectCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  },
}));

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <TranslucentContainer
      $backgroundcolor="rgba(204, 217, 231, 0.6)"
      $fontcolor="#5D5955"
      flexdirection="column"
      padding={isMobile ? "1.5rem" : "2rem"}
    >
      <div className="projects-column">
        <Typography variant="h4" component="h1" paddingBottom="2rem">
          Projects
        </Typography>
        <Grid
          container
          spacing={isMobile ? 1 : 3}
          sx={{ height: "-webkit-fill-available" }}
        >
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "1rem",
                  backgroundColor: "rgba(220, 220, 240, 0.8)",
                }}
              >
                <CardContent>
                  <Typography
                    variant={isMobile ? "h7" : "h6"}
                    component="h2"
                    sx={{
                      fontWeight: 600,
                      marginBottom: isMobile ? "0rem" : "1rem",
                      color: "#5D5955",
                    }}
                  >
                    {project.title}
                  </Typography>
                  {!isMobile && (
                    <>
                      <Typography variant="body1" sx={{ color: "#5D5955" }}>
                        {project.description}
                      </Typography>
                    </>
                  )}
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </div>
    </TranslucentContainer>
  );
};

export default Projects;
