import { Box, Grid, Stack, Typography } from "@mui/material";
import code from "../../assets/images/design/code.png";
import bgcode from "../../assets/images/design/bgcode.svg";
import dot from "../../assets/images/icons/dot.svg";
import PropTypes from "prop-types";
export default function AboutUs() {
    const Title = (title) => (
        <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"start"}
        >
            <Typography
                sx={{
                    fontSize: 40,
                    fontWeight: 700,
                }}
            >
                {title}
            </Typography>
            <Box
                sx={{
                    width: 100,
                    height: 3,
                    bgcolor: "primary.main",
                }}
            />
        </Stack>
    );
    return (
        <Grid container spacing={2} sx={{ my: 9 }}>
            <Grid item xs={12} lg={6}>
                <Stack
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"start"}
                    rowGap={7}
                >
                    <div>
                        {Title("About Us")}
                        <Typography
                            sx={{
                                mt: 1.5,
                                textAlign: "justify",
                                fontSize: 12,
                                fontWeight: 400,
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                        </Typography>
                    </div>
                    <div>
                        <Typography sx={{ fontSize: 30, fontWeight: 400 }}>
                            Your Solutions
                        </Typography>
                        <Timeline
                            sx={{
                                p: 0,
                                [`& .${timelineItemClasses.root}:before`]: {
                                    flex: 0,
                                    padding: 0,
                                    margin: 0,
                                },
                            }}
                        >
                            {steps?.map((step) => (
                                <TimeLineItem
                                    key={step.title}
                                    title={step.title}
                                    content={step.content}
                                />
                            ))}
                        </Timeline>
                    </div>
                </Stack>
            </Grid>
            <Grid
                item
                xs={12}
                lg={6}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: { xs: "center", lg: "end" },
                    alignItems: "center",
                }}
            >
                <Box sx={{ position: "relative" }}>
                    <Typography
                        component={"img"}
                        src={code}
                        alt="code"
                        sx={{
                            position: "absolute",
                            right: { xs: 25, sm: 50 },
                            width: { xs: 250, lg: 450 },
                            height: { xs: 250, lg: 450 },
                            zIndex: 1,
                        }}
                    />
                    <Typography
                        component={"img"}
                        src={bgcode}
                        alt="bg-code"
                        sx={{
                            width: { xs: 250, lg: 450 },
                            height: { xs: 250, lg: 450 },
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
function TimeLineItem({ title, content }) {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "transparent", my: 0 }}>
                    <img src={dot} />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ textAlign: "justify" }}>
                <Typography sx={{ mb: 1.5, fontSize: 18, fontWeight: 400 }}>
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 12, fontWeight: 400 }}>
                    {content}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
}
TimeLineItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
const steps = [
    {
        title: "Start with your Ideas",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
    },
    {
        title: "Transform Idea To Reality",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
    },
    {
        title: "Build and development your mobile and web application  ",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
    },
];
