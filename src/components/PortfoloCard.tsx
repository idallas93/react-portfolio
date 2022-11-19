import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import LinkOffIcon from '@mui/icons-material/LinkOff';

export interface PortfolioCardProps {
    id: number,
    imageLink: string,
    githubLink: string,
    githubLinkText: string,
    cardTitle: string,
    cardText: string,
    imageAlt: string,
    technologies: string,
    deployedLink: string
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ imageLink, cardTitle, cardText, imageAlt, githubLink, githubLinkText, id, technologies, deployedLink }) => {
    return (
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", bgcolor: 'secondary.light', borderStyle: "solid", borderWidth: "5px", borderColor: "primary.main" }}>
                <Grid item xs={12}>
                    <CardMedia
                        component="img"
                        height="150px"
                        width="100%"
                        image={imageLink}
                        alt={imageAlt}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CardContent>
                        <Grid container direction="column">
                            <Typography gutterBottom variant="h5" component="div" color="secondary.main" sx={{ padding: "5px" }}>
                                {cardTitle}
                            </Typography>
                            <Typography color="primary.main" variant="body1" sx={{ padding: "10px" }}>
                                {cardText}
                            </Typography>
                            <Typography color="primary.dark" variant="subtitle2" sx={{ fontFamily: 'BlinkMacSystemFont' }}>
                                {technologies}
                            </Typography>
                            <CardActions >
                                <Grid container direction="row" >
                                    <Grid >
                                        <Button>
                                            <a className={githubLinkText} href={githubLink} style={{ color: "#577399", fontWeight: "bold" }}> <GitHubIcon fontSize="large" sx={{ padding: "2px", color: "primary.contrastText" }} /> </a>
                                        </Button>
                                    </Grid>
                                    <Grid>
                                        <Button>
                                            <a className={githubLinkText} href={deployedLink} style={{ color: "#577399", fontWeight: "bold" }}> {id === 0 && <LinkIcon fontSize="large" sx={{ padding: "2px", color: "primary.contrastText" }} />} {id !== 0 && <LinkOffIcon fontSize="large" sx={{ padding: "2px", color: "primary.dark" }} />} </a>
                                        </Button>

                                    </Grid>

                                </Grid>
                            </CardActions>
                        </Grid>
                    </CardContent>
                </Grid>
            </Card>
        </Grid>
    )
}

export default PortfolioCard