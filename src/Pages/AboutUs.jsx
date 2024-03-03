import { Box, Grid, Stack, Typography } from "@mui/material";
import CustomSection from "../Components/Utility/CustomSection";
import Container from "../Components/Utility/Container";
import OurProducts from "../Components/About/OurProducts";
import { SecondaryButton } from "../Components/Utility/CustomButton";

export default function AboutUs() {
    return (
        <>
            <CustomSection title="About Us!" />
            <Container sx={{ my: 20 }}>
                <Stack gap={20}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={5} lg={4}>
                            <Stack alignItems={"start"}>
                                <Typography
                                    sx={{ fontSize: 30, fontWeight: 400 }}
                                >
                                    we <br /> are dev
                                </Typography>
                                <Box sx={{ mb: 5 }}>
                                    <East
                                        sx={{
                                            fontSize: 50,
                                            color: "secondary.main",
                                        }}
                                    />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: 40,
                                        fontWeight: 700,
                                        color: "secondary.main",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet sit amet
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 22, fontWeight: 400 }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={7} lg={8}>
                            <Typography
                                component={"img"}
                                src={about1}
                                width={"100%"}
                                height={"100%"}
                                sx={{
                                    borderStartEndRadius: 160,
                                    borderEndStartRadius: 160,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7} lg={8}>
                            <Typography
                                component={"img"}
                                src={about2}
                                width={"100%"}
                                height={"100%"}
                                sx={{
                                    borderStartStartRadius: 160,
                                    borderEndEndRadius: 160,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={5} lg={4}>
                            <Stack alignItems={"end"} sx={{ textAlign: "end" }}>
                                <Typography
                                    sx={{
                                        fontSize: 30,
                                        fontWeight: 400,
                                    }}
                                >
                                    we are
                                    <br /> Solution
                                </Typography>
                                <Box sx={{ mb: 5 }}>
                                    <West
                                        sx={{
                                            fontSize: 50,
                                            color: "secondary.main",
                                        }}
                                    />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: 40,
                                        fontWeight: 700,
                                        color: "secondary.main",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet sit amet
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 22, fontWeight: 400 }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Stack alignItems={"start"}>
                        <Typography sx={{ fontSize: 30, fontWeight: 400 }}>
                            Our
                            <br />
                            products
                        </Typography>
                        <Box sx={{ mb: 5 }}>
                            <East
                                sx={{
                                    fontSize: 50,
                                    color: "secondary.main",
                                }}
                            />
                        </Box>
                        <OurProducts products={products} />
                    </Stack>
                    <Stack alignItems={"center"} gap={3}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: 40,
                                color: "secondary.main",
                            }}
                        >
                            That Great?! Let’s work together!
                        </Typography>
                        <SecondaryButton
                            whiteImage={WhiteHireUs}
                            blackImage={BlackHireUs}
                        >
                            Let’s Hire Us
                        </SecondaryButton>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
import about1 from "../assets/images/design/about1.png";
import about2 from "../assets/images/design/about2.png";
import BlackHireUs from "../assets/images/icons/BlackHireUs.svg";
import WhiteHireUs from "../assets/images/icons/WhiteHireUs.svg";
import { East, West } from "@mui/icons-material";
import Travel from "../assets/images/design/Travel.png";
import ShopStore from "../assets/images/design/ShopStore.png";
const products = [
    {
        id: 1,
        image: Travel,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
        id: 2,
        image: ShopStore,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
];
