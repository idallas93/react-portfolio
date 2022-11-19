import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PetsIcon from '@mui/icons-material/Pets';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HikingIcon from '@mui/icons-material/Hiking';
import NavLink from './NavLink';
import { navLinks } from './NavLinks';
import "./style.css";
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';

const Nav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <EmailIcon color={"primary"} />
                Email
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <LinkedInIcon color={"primary"} />
                LinkedIn
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <GitHubIcon color={"primary"} />
                GitHub
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <HikingIcon color={"primary"} />
                Experience
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {navLinks.map(({ navLinkId, scrollToId }, idx) => (
                <MenuItem>
                    <IconButton size="large">
                        {idx === 0 &&
                            <>
                                <Badge>
                                    <AssignmentIndIcon sx={{color: "primary.contrastText"}} />
                                </Badge>
                                <p style={{ marginBottom: 0 }}><NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} /></p>
                            </>
                        }
                           {idx === 1 &&
                            <>
                                <Badge>
                                    <HikingIcon sx={{color: "primary.contrastText"}} />
                                </Badge>
                                <p style={{ marginBottom: 0 }}><NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} /></p>
                            </>
                        }
                           {idx === 2 &&
                            <>
                                <Badge>
                                    <CodeIcon sx={{color: "primary.contrastText"}} />
                                </Badge>
                                <p style={{ marginBottom: 0 }}><NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} /></p>
                            </>
                        }
                           {idx === 3 &&
                            <>
                                <Badge>
                                    <PetsIcon sx={{color: "primary.contrastText"}} />
                                </Badge>
                                <p style={{ marginBottom: 0 }}><NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} /></p>
                            </>
                        }
                           {idx === 4 &&
                            <>
                                <Badge>
                                    <MailIcon sx={{color: "primary.contrastText"}} />
                                </Badge>
                                <p style={{ marginBottom: 0 }}><NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} /></p>
                            </>
                        }
                    </IconButton>
                </MenuItem>
            ))}
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <Avatar alt="Stella" src="https://ih1.redbubble.net/image.2447542830.1689/st,small,507x507-pad,600x600,f8f8f8.jpg" />
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navLinks.map(({ navLinkId, scrollToId }, idx) => (
                            <Button
                                sx={{ my: 2, color: 'primary.light', display: 'block' }}
                            >
                                {idx === 0 &&
                                    <>
                                        <AssignmentIndIcon sx={{ color: "primary.contrastText" }} />
                                        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
                                    </>
                                }
                                {idx === 1 &&
                                    <>
                                        <HikingIcon sx={{ color: "primary.contrastText" }} />
                                        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
                                    </>
                                }
                                {idx === 2 &&
                                    <>
                                        <CodeIcon sx={{ color: "primary.contrastText" }} />
                                        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
                                    </>
                                }
                                {idx === 3 &&
                                    <>
                                        <PetsIcon sx={{ color: "primary.contrastText" }} />
                                        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
                                    </>
                                }
                                {idx === 4 &&
                                    <>
                                        <MailIcon sx={{ color: "primary.contrastText" }} />
                                        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
                                    </>
                                }
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}

export default Nav


