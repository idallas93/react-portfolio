import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useNav } from '../../utilHooks/useNav';
import { imageData } from '../../utils/data';
import PetsIcon from '@mui/icons-material/Pets';
import "../page.css";

const StellaPage = () => {
  const stellaPageRef = useNav('Stella');
  return (
    <section ref={stellaPageRef} id='stellaPageContainer'>
      <Box
        sx={{ height: "10%", width: "100%" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <PetsIcon fontSize="large" sx={{ color: "primary.contrastText" }} />
          <Typography variant="h3" color="primary.light">
            Stella Photos
          </Typography>
        </Grid>
      </Box>
      <Box sx={{ height: "90%", width: "100%", overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8} sx={{ overflow: "scroll" }}>
          {imageData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </section>
  )
}
export default StellaPage;