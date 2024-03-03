import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../Utility/Container";
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    Typography,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
} from "@mui/material";
export default function NavBar() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location]);
    // console.log(location.pathname);
    const pages = [
        { title: "Home", link: "/", icon: <Home /> },
        { title: "Our Projects", link: "/our-projects", icon: <Inventory2 /> },
        { title: "Our Process", link: "/our-process", icon: <AccountTree /> },
        { title: "Careers", link: "/careers", icon: <Work /> },
        { title: "About Us", link: "/about-us", icon: <Info /> },
    ];
    const TypographyImg = (
        <Link to={"/"} style={{ textDecoration: "none" }}>
            <Stack flexDirection={"column"} alignItems={"start"}>
                <Typography sx={{ fontSize: 15, color: "secondary.main" }}>
                    Arab Team
                </Typography>
                <Typography
                    component={"img"}
                    width={133}
                    height={58}
                    src={logo}
                    alt="logo"
                />
            </Stack>
        </Link>
    );
    const [state, setState] = useState(false);
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState(open);
    };
    const list = (anchor) => (
        <Box
            sx={{
                height: "100%",
                width: 250,
                bgcolor: "white",
                color: "myBlack.main",
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {pages.map((_, index) => (
                    <div key={index}>
                        <Link to={_.link} style={{ textDecoration: "none" }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon
                                        sx={{ color: "secondary.main" }}
                                    >
                                        {_.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        sx={{ color: "myBlack.main" }}
                                        primary={_.title}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Divider className="bg-white" />
                    </div>
                ))}
            </List>
            <Box
                sx={{
                    my: 1,
                    display: { xs: "flex", sm: "none" },
                    justifyContent: "center",
                }}
            >
                <PrimaryButton variant="contained">{hireText}</PrimaryButton>
            </Box>
        </Box>
    );
    const hireText = (
        <>
            <Typography
                component={"img"}
                src={message}
                sx={{ mr: 2 }}
                alt="icon"
            />
            Hire Us
        </>
    );
    return (
        <>
            <AppBar position="fixed" color="inherit">
                <Container maxWidth={"xl"}>
                    <Toolbar disableGutters sx={{ height: 100, my: "auto" }}>
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            {TypographyImg}
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <Button
                                sx={{ color: "white" }}
                                onClick={toggleDrawer("left", true)}
                            >
                                <Subject
                                    color="secondary"
                                    sx={{ fontSize: "2rem" }}
                                />
                            </Button>
                            <Drawer
                                variant="temporary"
                                anchor={"left"}
                                open={state}
                                onClose={toggleDrawer("left", false)}
                            >
                                {list("left")}
                            </Drawer>
                        </Box>
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            {TypographyImg}
                        </Box>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page) => (
                                <Link
                                    key={page.link}
                                    to={`${page.link}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button
                                        key={page.title}
                                        sx={
                                            location.pathname !== page.link
                                                ? {
                                                      ...styleButton,
                                                      color: "myBlack.main",
                                                      backgroundClip: "text",
                                                      ":hover": {
                                                          color: "transparent",
                                                          backgroundImage:
                                                              "linear-gradient( to bottom right,#19A5FF,#406AFF33)",
                                                      },
                                                      "::after": {
                                                          ...styleButton_after,
                                                          width: 0,
                                                      },
                                                      ":hover::after": {
                                                          width: "75%",
                                                      },
                                                  }
                                                : {
                                                      ...styleButton,
                                                      color: "transparent",
                                                      backgroundClip: "text",
                                                      backgroundImage:
                                                          "linear-gradient( to bottom right,#19A5FF,#406AFF33)",
                                                      ":hover": {
                                                          backgroundColor:
                                                              "transparent",
                                                      },
                                                      "::after": {
                                                          ...styleButton_after,
                                                          width: "70%",
                                                      },
                                                  }
                                        }
                                    >
                                        {page.title}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 0,
                                display: { xs: "none", sm: "flex" },
                            }}
                        >
                            <Link
                                to={"/#contactus"}
                                // onClick={() => {
                                // setTimeout(() => {
                                //     document
                                //         .getElementById(`contact-us`)
                                //         .scrollIntoView({
                                //             behavior: "smooth",
                                //             block: "center",
                                //         });
                                // }, 0.1);}}
                            >
                                <PrimaryButton variant="contained">
                                    {hireText}
                                </PrimaryButton>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar disableGutters sx={{ height: 100 }} />
        </>
    );
}
const styleButton = {
    ml: 2,
    my: 2,
    pb: "3px",
    fontWeight: 400,
    display: "block",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    position: "relative",
    textTransform: "unset",
    transition: "all 0.3s linear",
};
const styleButton_after = {
    content: '""',
    height: 2.25,
    left: "10px",
    bottom: "-3px",
    transition: "0.3s",
    position: "absolute",
    background: "linear-gradient( to right,#19A5FF,#406AFF00)",
};
import logo from "../../assets/images/icons/RomeStart.svg";
import message from "../../assets/images/icons/message-square.svg";
import {
    AccountTree,
    Home,
    Info,
    Inventory2,
    Subject,
    Work,
} from "@mui/icons-material";
import { PrimaryButton } from "../Utility/CustomButton";
