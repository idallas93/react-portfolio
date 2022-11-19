import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./style.css";
import { ColumbiaIcon, FlatironIcon, KpmgIcon, ShibumiIcon, JavaIcon, GraphQlIcon, SqlIcon, MongoIcon, TypeScriptIcon, ReactIcon, NodeIcon } from '../../utils/svgIcons';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ListItemText } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TerminalIcon from '@mui/icons-material/Terminal';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PhpIcon from '@mui/icons-material/Php';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: "75%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const ResumeTabs = () => {
  const [value, setValue] = React.useState(0);
  const [isMobile, setMobile] = React.useState(false);


  React.useEffect(() => {
    if (window.innerWidth < 550) {
      setMobile(true)
    } else {
      setMobile(false)
    }

    const updateMedia = () => {
      if (window.innerWidth < 550) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      elevation={3}
      variant="outlined"
      sx={{
        flexGrow: 1, display: 'flex', minHeight: "50%"
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', overflow: "scroll", minWidth: "150px", maxWidth: "150px" }}
      >
        <Tab icon={<ShibumiIcon />} label="Shibumi" {...a11yProps(0)} />
        <Tab icon={<ColumbiaIcon />} label="Columbia University" {...a11yProps(1)} />
        <Tab icon={<FlatironIcon />} label="Flatiron Health" {...a11yProps(2)} />
        <Tab icon={<KpmgIcon />} label="KPMG" {...a11yProps(3)} />
        <Tab icon={<TerminalIcon />} label="Technologies" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid
          container
          direction={{ xs: "column", md: "row", lg: "row" }}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="h5" color="primary.main" sx={{ padding: "10px" }}>
            Software Engineer @ Shibumi
          </Typography>
          <ShibumiIcon />
        </Grid>
        <Grid
          container
          direction={{ xs: "column", md: "row", lg: "row" }}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="body1" color="secondary.main" sx={{ padding: "10px" }}>
            June 2021 - Present
          </Typography>
        </Grid>
        {!isMobile &&
          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon fontSize={"large"} />
              </ListItemIcon>
              <ListItemText
                primary="Write modern, performant, maintainable code for a diverse array of client and internal projects."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon fontSize={"large"} />
              </ListItemIcon>
              <ListItemText
                primary="Develop user interfaces and experiences for strategic portfolio management software leveraging Typescript, React.js, GraphQL, AWS, Jenkins, Java and other modern web frameworks and technologies."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon fontSize={"large"} />
              </ListItemIcon>
              <ListItemText
                primary="Manage stakeholders and communicate with multi-disciplinary teams of engineers, designers, and product owners."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon fontSize={"large"} />
              </ListItemIcon>
              <ListItemText
                primary="Build integrations between third-party applications like Azure DevOps and the Shibumi API using the Tray.io platform."
              />
            </ListItem>
          </List>
        }
        <TabPanel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid
          container
          direction={{ xs: "column", md: "row", lg: "row" }}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="h5" color="primary.main" sx={{ padding: "10px" }}>
            Student @ Columbia University
          </Typography>
          <ColumbiaIcon />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="body1" color="secondary.main" sx={{ padding: "10px" }}>
            September 2020 - February 2021
          </Typography>
        </Grid>
        {!isMobile &&
          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon fontSize={"large"} />
              </ListItemIcon>
              <ListItemText
                primary="Graduated from a 24-week intensive boot camp program focused on gaining technical programming and market-driven skills that covered a variety of front-end and back-end technologies."
              />
            </ListItem>
          </List>
        }
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid
          container
          direction={{ xs: "column", md: "row", lg: "row" }}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="h5" color="primary.main" sx={{ padding: "10px" }}>
            Clinical Trial Management @ Flatiron Health
          </Typography>
          <FlatironIcon />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="body1" color="secondary.main" sx={{ padding: "10px" }}>
            August 2018 - September 2020
          </Typography>
        </Grid>
        {!isMobile &&
          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon fontSize={"large"} />
              </ListItemIcon>
              <ListItemText
                primary="Scoped, managed, and provided operational support for clinical trials leveraging Flatiron's OncoEMR software."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon fontSize={"large"} />
              </ListItemIcon>
              <ListItemText
                primary="Worked with a cross-functional team to develop a clinical trial matching product using Flatiron Health
              OncoEMR and OncoTrials software."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon fontSize={"large"} />
              </ListItemIcon>
              <ListItemText
                primary="Defined a training program for the research team at Flatiron to support its Quality Management System and
              implemented this training program through the Docebo software."
              />

            </ListItem>
          </List>
        }
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid
          container
          direction={{ xs: "column", md: "row", lg: "row" }}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="h5" color="primary.main" sx={{ padding: "10px" }}>
            Advisory Associate @ KPMG
          </Typography>
          <KpmgIcon />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="body1" color="secondary.main" sx={{ padding: "10px" }}>
            July 2016 - August 2018
          </Typography>
        </Grid>
        {!isMobile &&
          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon fontSize={"large"} />
              </ListItemIcon>
              <ListItemText
                primary=" Acted as regional lead for a statewide Rapid Cycle Continuous Improvement (RCCI) healthcare delivery
              system transformation project focused on improving care for High Utilizers."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon fontSize={"large"} />
              </ListItemIcon>
              <ListItemText
                primary="Assessed a State Department of Health's surcharges remitted by large health insurers by testing their financial
              records and understanding their IT systems and controls. This was performed through the audit software IDEA to validate insurers' and hospitals' processed claims, enrollment records, and payment amounts."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon fontSize={"large"} />
              </ListItemIcon>
              <ListItemText
                primary="Assisted the State Department of Health to analyze the financial health of public and private New York State hospitals using Disproportionate Share Hospital data, audited financial statements, and institutional cost reports.
              "
              />
            </ListItem>
          </List>
        }
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid
          container
          direction={{ xs: "column", md: "row", lg: "row" }}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="h5" color="primary.main" sx={{ padding: "10px" }}>
            Recent Technologies Used
          </Typography>
          < TerminalIcon />
        </Grid>
        <List sx={{
          columns: "3",
          webkitColumns: "3",
          mozcColumns: "3"
        }}>
          <ListItem>
            <ListItemIcon>
              <ReactIcon />
            </ListItemIcon>
            <ListItemText
              primary="React.js"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TypeScriptIcon fontSize={"large"} />
            </ListItemIcon>
            <ListItemText
              primary="TypeScript"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <JavascriptIcon fontSize={"large"} />
            </ListItemIcon>
            <ListItemText
              primary="JavaScript (ES6+)"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <NodeIcon fontSize={"large"} />
            </ListItemIcon>
            <ListItemText
              primary="Node.js"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <JavaIcon fontSize={"large"} />
            </ListItemIcon>
            <ListItemText
              primary="Java"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GraphQlIcon fontSize={"large"} />
            </ListItemIcon>
            <ListItemText
              primary="GraphQL"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhpIcon fontSize={"large"} />
            </ListItemIcon>
            <ListItemText
              primary="PHP"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SqlIcon fontSize={"large"} />
            </ListItemIcon>
            <ListItemText
              primary="SQL"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MongoIcon fontSize={"large"} />
            </ListItemIcon>
            <ListItemText
              primary="MongoDB"
            />
          </ListItem>
        </List>
      </TabPanel>
    </Paper>
  );
}

export default ResumeTabs