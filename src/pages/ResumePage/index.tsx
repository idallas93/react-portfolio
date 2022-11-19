import ResumeTabs from '../../components/ResumeTabs';
import { useNav } from '../../utilHooks/useNav';
import { Box, Grid, Typography } from "@mui/material";
import HikingIcon from '@mui/icons-material/Hiking';
import "../page.css";

const ResumePage = () => {
  const contactPageRef = useNav('Resume');

  return (
    <section ref={contactPageRef} id='resumePageContainer'>
      <Box
        sx={{ height: "10%", width: "100%" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <HikingIcon fontSize="large" sx={{ color: "primary.contrastText" }} />
          <Typography variant="h3" color="primary.light">
            Experience
          </Typography>
        </Grid>
      </Box>
      <Box sx={{ height: "90%", width: "100%", overflowY: "scroll" }}>
        <ResumeTabs />
      </Box>
    </section>
  )
}

export default ResumePage;