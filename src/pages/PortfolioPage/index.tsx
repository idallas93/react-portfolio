import "../page.css";
import { Box, Typography } from "@mui/material";
import { useNav } from "../../utilHooks/useNav";
import Grid from "@mui/material/Grid";
import PortfolioCard from "../../components/PortfoloCard";
import { portfolioData } from "../../utils/data"
import CodeIcon from '@mui/icons-material/Code';

const PortfolioPage = () => {
  const portfolioPageRef = useNav('Portfolio');

  return (
    <section ref={portfolioPageRef} id='portfolioPageContainer'>
      <Box
        sx={{ height: "20%", width: "100%" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <CodeIcon fontSize="large" sx={{ color: "primary.contrastText" }} />
          <Typography variant="h3" color="primary.main">
            Portfolio
          </Typography>
        </Grid>
      </Box>
      <Box sx={{ height: "80%", width: "100%", overflowY: "scroll" }}>
        <Grid container rowSpacing={1} columnSpacing={1} alignItems="stretch">
          {
            portfolioData.map((cardData, index) => {
              return (
                <PortfolioCard
                  key={cardData.id}
                  id={cardData.id}
                  cardText={cardData.cardText}
                  cardTitle={cardData.cardTitle}
                  githubLink={cardData.githubLink}
                  githubLinkText={cardData.githubLinkText}
                  imageAlt={cardData.imageAlt}
                  imageLink={cardData.imageLink}
                  technologies={cardData.technologies}
                  deployedLink={cardData.deployedLink}
                />
              )
            })
          }
        </Grid>
      </Box>
    </section>
  )
}

export default PortfolioPage;
