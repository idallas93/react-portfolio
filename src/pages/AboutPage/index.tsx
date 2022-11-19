import { Box, Grid, Paper, Typography } from "@mui/material";
import { useNav } from "../../utilHooks/useNav";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import "../page.css";

const AboutPage = () => {
  const aboutPageRef = useNav('About');
  return (
    <section ref={aboutPageRef} id='aboutPageContainer'>
       <Box
       sx={{height: "10%", width: "100%"}}
        >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <AssignmentIndIcon fontSize="large" sx={{ color: "primary.contrastText" }} />
          <Typography variant="h3" color="primary.main">
            About Me
          </Typography>
        </Grid>
        </Box>
   <Box sx={{height: "90%", width: "100%", overflowY: "scroll" }}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              bgcolor="primary.main"
              color="neutral"
              sx={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                padding: "15px",
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid black',
                borderRadius: '5px',
                textAlign: 'center',
              }}>
              <Typography variant="h6" color="primary.light">
                Hello and welcome to my website. I'm Isaac and I love to solve problems as a full-stack software engineer. My path to software development was a bit circuitous, I worked as a consultant and product manager before finding my passion for building software. 
              </Typography>
              <Typography variant="h6" color="primary.light">
                Most recently, I've had the privilege of working at a strategic portfolio management company called Shibumi where I build elegant UI experiences for a variety of clients using modern web development frameworks. 
              </Typography>
              <Typography variant="h6" color="primary.light">
                I also just started working on my website and side projects again after about two years of inactivity. Check back soon and you'll be sure to see a ton of progress.
               </Typography>
               <Typography variant="h6" color="primary.light">
                Here are some of the technologies that I work with almost every day:
               </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid black',
                borderRadius: '5px',
                textAlign: 'center',
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                filter: "grayscale(100%)",
                "&:hover": {
                  filter: "grayscale(0)",
                  cursor: "default"
                }
              }}
              alt="about-image."
              src="https://i.imgur.com/jf3QqoT.jpg"
            />
          </Grid>

        </Grid>
      {/* </Grid> */}
      </Box>
    </section>
  )
}

export default AboutPage