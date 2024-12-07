import React from "react";
import TranslucentContainer from "../../components/TranslucentContainer/TransluscentContainer";
import { Chrono } from "react-chrono";
import { Typography } from "@mui/material";
import "./About.css";

const About = () => {
  const isMobile = window.innerWidth <= 578;
  const cardWidth = isMobile ? 200 : 450;

  const items = [
    {
      title: "February 1999",
      cardTitle: "Hubli, India",
      cardSubtitle: "Birth!",
    },
    {
      title: "May 2014",
      cardTitle: "Shivamogga, India",
      cardSubtitle:
        "Achieved State Rank 24 in the National Talent Search Examination",
    },
    {
      title: "February 2015",
      cardTitle: "Shivamogga, India",
      cardSubtitle:
        "Ranked top 1% in the National Standard Examination in Biology",
    },
    {
      title: "August 2016",
      cardTitle: "Sir MVIT, Bengaluru, India",
      cardSubtitle: "Started my Bachelor's in Computer Science and Engineering",
    },
    {
      title: "August 2017",
      cardTitle: "Abhikalpana Trust",
      cardSubtitle: "Joined as a Teching volunteer",
    },
    {
      title: "July 2019",
      cardTitle: "Samartha Infosolutions, Bengaluru, India",
      cardSubtitle: "Worked as a Software Developer Intern for 2 months",
    },
    {
      title: "August 2019",
      cardTitle: "Abhikalpana Trust",
      cardSubtitle: "Promoted to Board Member",
    },
    {
      title: "July 2020",
      cardTitle: "Sir MVIT, Bengaluru, India",
      cardSubtitle: "Graduated with a Bachelor's degree",
    },
    {
      title: "December 2020",
      cardTitle: "Accenture, Bengaluru, India",
      cardSubtitle: "Got my first job as an Associate Software Engineer",
    },
    {
      title: "February 2021",
      cardTitle: "BOTS, Bengaluru, India",
      cardSubtitle: "Bought my first new Bicycle",
    },
    {
      title: "September 2021",
      cardTitle: "Piktorlabs, Bengaluru, India",
      cardSubtitle: "Joined a startup as a Software Developer",
    },
    {
      title: "January 2023",
      cardTitle: "UST, Bengaluru, India",
      cardSubtitle: "Acquired by UST, Promoted to Software Developer III",
    },
    {
      title: "August 2023",
      cardTitle: "Arizona State University, Tempe, Arizona",
      cardSubtitle:
        "Started my Master's in Computer Science (Current GPA: 4.0)",
    },
    {
      title: "March 2023",
      cardTitle: "Scottsdale, Arizona",
      cardSubtitle: "Completed my first 100 mile ride!",
    },
  ];

  return (
    <TranslucentContainer
      $backgroundcolor="rgba(215, 164, 91, 0.85)"
      $fontcolor="#524A42"
      flexdirection="column"
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ paddingBottom: "2rem" }}
      >
        About Me
      </Typography>
      <Chrono
        className="my-timeline"
        items={items}
        mode="HORIZONTAL"
        slideShow
        slideItemDuration={2500}
        cardWidth={cardWidth}
        cardHeight={200}
        contentDetailsHeight={100}
        fontSizes={{
          title: "1rem",
        }}
        theme={{
          primary: "#524A42",
          secondary: "#D7A45B",
          cardBgColor: "rgba(215, 164, 91, 0.8)",
          cardDetailsBackGround: "rgba(215, 164, 91, 0.8)",
          cardDetailsColor: "#524A42",
          cardMediaBgColor: "#D7A45B",
          cardSubtitleColor: "#524A42",
          cardTitleColor: "#524A42",
          detailsColor: "#524A42",
          iconBackgroundColor: "#D7A45B",
          nestedCardBgColor: "rgba(215, 164, 91, 0.8)",
          nestedCardDetailsBackGround: "rgba(215, 164, 91, 0.8)",
          nestedCardDetailsColor: "#524A42",
          nestedCardSubtitleColor: "#524A42",
          nestedCardTitleColor: "#524A42",
          titleColor: "#524A42",
          titleColorActive: "#524A42",
          toolbarBgColor: "#524A42",
          toolbarBtnBgColor: "#D7A45B",
          toolbarTextColor: "#524A42",
        }}
        classNames={{
          card: "my-card",
          cardMedia: "my-card-media",
          cardSubTitle: "my-card-subtitle",
          cardText: "my-card-text",
          cardTitle: "my-card-title",
          controls: "my-controls",
          title: "my-title",
        }}
      />
    </TranslucentContainer>
  );
};

export default About;
