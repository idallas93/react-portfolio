import { useNav } from '../../utilHooks/useNav';
import { Box, Button, Grid, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import "../page.css";

const ContactPage = () => {
  const contactPageRef = useNav('Contact');

  return (
    <section ref={contactPageRef} id='contactPageContainer'>
      <Box
        sx={{ height: "10%", width: "100%" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button>
            <a href={"mailto: dallas.isaac1@gmail.com"} style={{ color: "#577399", fontWeight: "bold" }}>  <MailIcon fontSize="large" sx={{ padding: "2px", color: "primary.contrastText" }} /> </a>
          </Button>
          <Typography variant="h3" color="primary.main">
            Contact
          </Typography>
        </Grid>
      </Box>
      <Box
        sx={{ height: "90%", width: "100%" }}
      >
      </Box>
    </section>
  )
}

export default ContactPage;