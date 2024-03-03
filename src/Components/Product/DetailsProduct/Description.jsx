import { Box, Container, Grid, Stack, Typography } from "@mui/material";
export default function Description() {
    const description =
        "Discover the world with Us Travel easy via app and Exciting!";
    let words = description.split(" ");
    console.log(words);
    return (
        <>
            <Box sx={{ position: "relative" }}>
                <Typography sx={{ textAlign: "center" }}>
                    {words.map((word, i) => (
                        <Typography
                            key={i}
                            component={"span"}
                            sx={
                                i % 2 !== 0
                                    ? {
                                          fontSize: {
                                              xs: 50,
                                              sm: 100,
                                              md: 150,
                                          },
                                          fontWeight: 600,
                                          color: "#6C757D",
                                      }
                                    : {
                                          fontSize: {
                                              xs: 50,
                                              sm: 100,
                                              md: 150,
                                          },
                                          fontWeight: 600,
                                          color: "#343A40",
                                      }
                            }
                        >
                            {word}{" "}
                        </Typography>
                    ))}
                </Typography>
                <Typography
                    sx={{
                        position: "absolute",
                        right: "10%",
                        top: "21%",
                        justifySelf: "end",
                        width: 230,
                        height: 180,
                    }}
                    component={"img"}
                    src={description2}
                    alt="description2"
                />
                <Typography
                    sx={{
                        position: "absolute",
                        left: "10%",
                        bottom: "19%",
                        width: 230,
                        height: 180,
                        // borderRadius: 5,
                        // boxShadow: "4px 4px 10px 4px #00000061",
                    }}
                    component={"img"}
                    src={description1}
                    alt="description1"
                />
            </Box>
            <Container maxWidth="xl">
                <Stack sx={{ my: 3 }}>
                    <Typography
                        component={"img"}
                        src={Rectangl}
                        sx={{ my: 1, borderRadius: 15 }}
                    />
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                component={"img"}
                                src={Iceland}
                                width={"100%"}
                                sx={{ borderRadius: 15 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                component={"img"}
                                src={Italy}
                                width={"100%"}
                                sx={{ borderRadius: 15 }}
                            />
                        </Grid>
                    </Grid>
                </Stack>
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                >
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot
                                sx={{ width: 40, height: 40, bgcolor: "#000" }}
                            />
                            <TimelineConnector
                                sx={{ width: 6, bgcolor: "#000" }}
                            />
                        </TimelineSeparator>
                        <TimelineContent sx={{ mt: 3 }}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: { xs: 55, lg: 80 },
                                        fontWeight: 600,
                                        color: "#000",
                                    }}
                                >
                                    Thank You For Watching!
                                </Typography>
                                <Typography
                                    sx={{
                                        maxWidth: { xs: "100%", lg: 720 },
                                        fontSize: { xs: 40, lg: 60 },
                                        fontWeight: 600,
                                        color: "#6C757D",
                                    }}
                                >
                                    Write me now and we will discuss you project
                                </Typography>
                                {socialmedia.map((item, i) => (
                                    <Stack
                                        key={i}
                                        direction={"row"}
                                        alignItems={"center"}
                                    >
                                        <img
                                            src={item.icon}
                                            width={29}
                                            height={29}
                                            alt="icon"
                                        />
                                        <Typography
                                            sx={{
                                                ml: 1,
                                                fontSize: 30,
                                                fontWeight: 600,
                                                color: "#6C757D",
                                            }}
                                        >
                                            {" "}
                                            {item.link}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Container>
        </>
    );
}
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
//
import description1 from "../../../assets/images/design/description1.png";
import description2 from "../../../assets/images/design/description2.png";
import Rectangl from "../../../assets/images/design/Rectangl.png";
import Iceland from "../../../assets/images/design/Iceland.png";
import Italy from "../../../assets/images/design/Italy.png";
import instagram from "../../../assets/images/icons/instagram.svg";
import mail from "../../../assets/images/icons/mail-grey.svg";
import phone from "../../../assets/images/icons/phone-grey.svg";
const socialmedia = [
    {
        icon: instagram,
        link: "@ran_o_dev",
    },
    {
        icon: mail,
        link: "ranem.omarr@gmail.com",
    },
    {
        icon: phone,
        link: "+963 997 555 668",
    },
];
