import { Box, Container, Divider, Stack, Typography } from "@mui/material";

export default function Display() {
    return (
        <>
            <Container maxWidth="xl">
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"end"}
                    flexWrap={"wrap"}
                    sx={{ width: "100%", px: { xs: 3, lg: 15 } }}
                    gap={3}
                >
                    <Typography
                        sx={{ fontSize: { xs: 35, lg: 70 }, fontWeight: 600 }}
                    >
                        Display
                    </Typography>
                </Stack>
                <Divider />
            </Container>

            <Stack
                alignItems={"center"}
                sx={{
                    width: "100%",
                    height: "1500",
                    position: "relative",
                    my: { xs: 9, lg: 0 },
                }}
            >
                <Stack
                    gap={17}
                    sx={{
                        zIndex: 1,
                        width: "100%",
                        justifyContent: { xs: "center", lg: "start" },
                        flexDirection: { xs: "row", lg: "column" },
                        flexWrap: { xs: "wrap", lg: "nowrap" },
                        gap: { xs: 9, lg: 17 },
                    }}
                >
                    <Typography
                        component={"img"}
                        src={arrow2}
                        sx={{ display: { xs: "none", lg: "block" } }}
                        alt="arrow"
                    />
                    <Typography
                        component={"img"}
                        src={Travel1}
                        sx={{
                            width: { xs: 300, lg: 870 },
                            height: { xs: "100%", lg: 900 },
                            position: { xs: "unset", lg: "absolute" },
                            display: { xs: "none", lg: "block" },
                            top: 180,
                        }}
                        alt="Travel"
                    />
                    <Typography
                        component={"img"}
                        src={Travel2}
                        sx={{
                            width: { xs: 250, sm: 350, lg: 400 },
                            height: { xs: "100%", sm: 800, lg: 700 },
                            position: { xs: "unset", lg: "absolute" },
                            left: 500,
                            top: 230,
                        }}
                        alt="Travel"
                    />
                    <Box sx={{ position: "relative" }}>
                        <Typography
                            component={"img"}
                            src={Travel3}
                            sx={{
                                alignSelf: "end",
                                width: { xs: 250, sm: 350, lg: 400 },
                                height: { xs: "100%", lg: 800 },
                                position: { xs: "unset", lg: "absolute" },
                                left: 90,
                                top: 500,
                                zIndex:1,
                            }}
                            alt="Travel"
                        />
                    </Box>
                    <Typography
                        component={"img"}
                        src={arrow3}
                        sx={{
                            alignSelf: "end",
                            display: { xs: "none", lg: "block" },
                            // width:1300,
                        }}
                        alt="arrow"
                    />
                    <Box sx={{ position: "relative" }}>
                        <Typography
                            component={"img"}
                            src={Travel4}
                            sx={{
                                alignSelf: "end",
                                width: { xs: 250, sm: 350, lg: 400 },
                                height: { xs: "100%", lg: 800 },
                                position: { xs: "unset", lg: "absolute" },
                                left: 840,
                                // top:500,
                                zIndex:1,
                            }}
                            alt="Travel"
                        />
                    </Box>
                    <Typography
                        component={"img"}
                        src={arrow4}
                        width={370}
                        sx={{
                            position: "relative",
                            left: 450,
                            display: { xs: "none", lg: "block" },
                        }}
                        alt="arrow"
                    />
                    {/* <Typography
                        component={"img"}
                        src={Travel5}
                        sx={{
                            alignSelf: "start",
                            width: { xs: 250, sm: 350, lg: 400 },
                            height: { xs: "100%", lg: 800 },
                            position: { xs: "unset", lg: "relative" },
                            left: 300,
                            top: -500,
                        }}
                        alt="Travel"
                    /> */}
                    <Typography
                        component={"img"}
                        src={arrow5}
                        sx={{
                            alignSelf: "end",
                            display: { xs: "none", lg: "block" },
                            position:"relative",
                        }}
                        alt="arrow"
                    />
                    <Typography
                        component={"img"}
                        src={Travel5}
                        sx={{
                            alignSelf: "start",
                            width: { xs: 250, sm: 350, lg: 400 },
                            height: { xs: "100%", lg: 800 },
                            position: { xs: "unset", lg: "relative" },
                            left: 260,
                            top: -500,
                            zIndex:1,
                        }}
                        alt="Travel"
                    />
                </Stack>
                <Typography
                    component={"img"}
                    src={bgDisplay}
                    sx={{
                        maxWidth: 1517,
                        position: { xs: "unset", lg: "absolute" },
                        top: "13%",
                        display: { xs: "none", lg: "block" },
                    }}
                    alt="bg"
                />
            </Stack>
        </>
    );
}
import bgDisplay from "../../../assets/images/design/unsplash.png";
import arrow2 from "../../../assets/images/icons/arrow2.svg";
import arrow3 from "../../../assets/images/icons/arrow3.svg";
import arrow4 from "../../../assets/images/icons/arrow4.svg";
import arrow5 from "../../../assets/images/icons/arrow5.svg";
import Travel1 from "../../../assets/images/design/Travel1.png";
import Travel2 from "../../../assets/images/design/Travel2.png";
import Travel3 from "../../../assets/images/design/Travel3.png";
import Travel4 from "../../../assets/images/design/Travel4.png";
import Travel5 from "../../../assets/images/design/Travel5.png";
