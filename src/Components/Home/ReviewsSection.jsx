import {
    Box,
    Grid,
    IconButton,
    InputBase,
    Stack,
    Typography,
} from "@mui/material";
import robot from "../../assets/images/design/robot.png";
import RightArrowCircle from "../../assets/images/icons/RightArrowCircle.svg";
import Container from "../Utility/Container";
import Reviews from "./Reviews";
import SocialMedia from "../Utility/SocialMedia";
export default function ReviewsSection() {
    return (
        <>
            <Grid container sx={{ position: "relative" }}>
                <Grid item xs={12} xl={9} sx={{ bgcolor: "primary.main" }}>
                    <Container sx={{ my: 7, ml: { xs: 0, xl: "4%" } }}>
                        <Stack rowGap={7} sx={{ color: "white" }}>
                            <Typography
                                sx={{
                                    fontSize: 40,
                                    fontWeight: 700,
                                    maxWidth: 550,
                                }}
                            >
                                Here’s what our customers have to say about us,
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4} xl={5}>
                                    <Typography
                                        sx={{
                                            fontSize: 18,
                                            fontWeight: 400,
                                            maxWidth: { xs: "auto", xl: 500 },
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Reviews />
                                </Grid>
                            </Grid>
                        </Stack>
                    </Container>
                </Grid>
                <Grid
                    item
                    xs={0}
                    xl={3}
                    sx={{
                        display: { xs: "none", xl: "flex" },
                        width: "100%",
                        height: 700,
                    }}
                >
                    <Typography
                        component={"img"}
                        src={robot}
                        width={"100%"}
                        height={"100%"}
                        alt="bg-robot"
                    />
                </Grid>
            </Grid>
            <ContactUs />
        </>
    );
}
function ContactUs() {
    return (
        <Box sx={{ bgcolor: "myBlack.main", color: "white", py: 7 }}>
            <Container>
                <Grid columnSpacing={2} rowSpacing={3} container>
                    <Grid item xs={12} md={8} xl={9}>
                        <Stack>
                            <Typography
                                sx={{
                                    mb: 3,
                                    fontSize: 40,
                                    fontWeight: 700,
                                    maxWidth: 500,
                                    color: "white",
                                }}
                            >
                                Let’s build your business together
                            </Typography>
                            <Box
                                sx={{
                                    py: 1,
                                    px: 3,
                                    maxWidth: 770,
                                    bgcolor: "white",
                                    borderRadius: 5,
                                }}
                            >
                                <Stack
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                >
                                    <InputBase
                                        placeholder="Your Email"
                                        sx={{
                                            width: "100%",
                                            "::before": { border: "none" },
                                            ":hover::before": {
                                                borderBottom: "none",
                                            },
                                        }}
                                    />
                                    <IconButton>
                                        <Typography
                                            component={"img"}
                                            src={RightArrowCircle}
                                            width={58}
                                            alt="icon"
                                        />
                                    </IconButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4} xl={3}>
                        <Typography component={"div"}>
                            <Typography
                                component={"div"}
                                sx={{
                                    mb: 2,
                                    fontSize: 22,
                                    fontWeight: 400,
                                    color: "white",
                                }}
                            >
                                Follow us on
                            </Typography>
                            
                            <SocialMedia justifyContent="start" />
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}