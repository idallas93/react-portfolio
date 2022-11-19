import { Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNav } from '../../utilHooks/useNav';
import "../page.css";

const HomePage = () => {
  const homePageRef = useNav('Home');

  return (
    <section ref={homePageRef} id='homeContainer'>
      <Box
     display="flex"
     justifyContent="center"
     alignItems="center"
     minHeight="100vh"
      >
      <Grid
      >
        <Grid>
          <Typography variant="h5" color="primary.contrastText">
            Hi, my name is
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h1" color="primary.main">
            Isaac Dallas
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h2" color="secondary.main">
            A creative and driven creator, problem solver, and team player.
          </Typography>
        </Grid>
        <Grid marginTop={"25px"}>
          <Typography variant="h6" color="secondary.contrastText">
            I'm a software engineer who loves to build easy to use web applications that look great with professional experience at Shibumi, Flatiron Health, and KPMG
          </Typography>
        </Grid>
        <Grid>
          <Button href="https://docs.google.com/document/d/1w246fbyEnRXwblKnXAp3FVq-Gg3bwIMik8gCqOwu754/edit?usp=sharing" variant="contained" size="large" sx={{
            marginTop: "25px"
          }}>
            <Typography color="neutral.main">
              Check out my resume
            </Typography>
          </Button>
        </Grid>
      </Grid>
      </Box>
    </section>
  )
}

export default HomePage;

<Button>
</Button>