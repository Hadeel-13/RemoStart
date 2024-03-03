import { Box, Grow, Slide, Stack, Typography } from "@mui/material";
import RotateButton from "../Utility/RotateButton";
import { useRef, useState } from "react";
import Container from "../Utility/Container";
export default function Welcome() {
    const containerRef = useRef(null);
    const [appear, setAppear] = useState(false);
    setTimeout(() => {
        setAppear(true);
    }, 1500);
    return (
        <>
            <Container>
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    sx={{
                        my: 5,
                        gap: { xs: 3, lg: 0.5 },
                        justifyContent: { xs: "center", xl: "space-between" },
                    }}
                >
                    <Stack
                        gap={5}
                        sx={{ maxWidth: "720px" }}
                    >
                        <div>
                            <Box sx={{ overflow: "hidden" }} ref={containerRef}>
                                <Slide
                                    direction="up"
                                    in={true}
                                    timeout={500}
                                    container={containerRef.current}
                                    mountOnEnter
                                    unmountOnExit
                                    // style={{ transformOrigin: "50% 100%" }}
                                    // {...(checked ? { timeout: 1000 } : {})}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: 50,
                                                sm: 60,
                                                md: 70,
                                            },
                                        }}
                                    >
                                        Great{" "}
                                        <Typography
                                            component={"span"}
                                            sx={{
                                                fontSize: "inherit",
                                                fontWeight: 800,
                                                backgroundClip: "text",
                                                color: "transparent",
                                                backgroundImage:
                                                    "linear-gradient( to bottom right,#19A5FF,#0D1C9F33)",
                                            }}
                                        >
                                            Product
                                        </Typography>{" "}
                                        is
                                    </Typography>
                                </Slide>
                            </Box>
                            <Box sx={{ overflow: "hidden" }} ref={containerRef}>
                                <Slide
                                    direction="up"
                                    in={true}
                                    timeout={1000}
                                    container={containerRef.current}
                                    mountOnEnter
                                    unmountOnExit
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: 50,
                                                sm: 60,
                                                md: 70,
                                            },
                                            fontWeight: 800,
                                        }}
                                    >
                                        Build by great{" "}
                                        <Typography
                                            component={"span"}
                                            sx={{
                                                fontSize: "inherit",
                                                fontWeight: 800,
                                                backgroundClip: "text",
                                                color: "transparent",
                                                backgroundImage:
                                                    "linear-gradient( to bottom right,#19A5FF,#406AFF)",
                                            }}
                                        >
                                            teams
                                        </Typography>
                                    </Typography>
                                </Slide>
                            </Box>
                        </div>
                        <Box sx={{ overflow: "hidden" }} ref={containerRef}>
                            <Slide
                                direction="up"
                                in={true}
                                timeout={1500}
                                container={containerRef.current}
                            >
                                <Typography>
                                    We are a team of 150+{" "}
                                    <b>software engineers & Designers </b>
                                    ready to Build & maintenance your mobile and
                                    web application.
                                </Typography>
                            </Slide>
                        </Box>
                        <Grow in={appear}>
                            <div>
                                <RotateButton>
                                    Price Your Project
                                    <Typography
                                        component={"img"}
                                        sx={{ ml: 2 }}
                                        src={Arrow}
                                        alt="icon"
                                    />
                                </RotateButton>
                            </div>
                        </Grow>
                    </Stack>
                    <Grow in={appear}>
                        <Typography component={"div"}>
                            <Typography
                                component={"img"}
                                src={laptop}
                                sx={{
                                    width: { xs: "100%", lg: 600 },
                                    height: { xs: "auto", lg: 500 },
                                }}
                                alt="laptop"
                            />
                        </Typography>
                    </Grow>
                </Stack>
            </Container>
        </>
    );
}
import laptop from "../../assets/images/design/laptop-program.svg";
import Arrow from "../../assets/images/icons/Arrow.svg";