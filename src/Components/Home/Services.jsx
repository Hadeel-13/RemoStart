import { Box, Stack } from "@mui/material";
import Container from "../Utility/Container";
import Title from "../Utility/Title";
import { SecondaryButton, WhiteButton } from "../Utility/CustomButton";
export default function Services() {
    return (
        <Box sx={{ background: "#19A5FF12", py: 9 }}>
            <Container>
                <Stack gap={9}>
                    <Title>Services</Title>
                    <Stack
                        direction={"row"}
                        justifyContent={"center"}
                        columnGap={3}
                        rowGap={5}
                        flexWrap={"wrap"}
                        sx={{ justifyContent: { xs: "center", xl: "start" } }}
                    >
                        {services?.map((service) => (
                            <WhiteButton
                                key={service.icon}
                                image={service.icon}
                            >
                                {service.title}
                            </WhiteButton>
                        ))}
                        <SecondaryButton
                            whiteImage={WhiteHireUs}
                            blackImage={BlackHireUs}
                        >
                            Let’s Hire Us
                        </SecondaryButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
import BlackHireUs from "../../assets/images/icons/BlackHireUs.svg";
import WhiteHireUs from "../../assets/images/icons/WhiteHireUs.svg";
import globe from "../../assets/images/icons/globe.svg";
import settings from "../../assets/images/icons/settings.svg";
import figma from "../../assets/images/icons/figma.svg";
import web from "../../assets/images/icons/web.svg";
import server from "../../assets/images/icons/server.svg";
import git from "../../assets/images/icons/git-merge.svg";
import mobil from "../../assets/images/icons/mobil.svg";
import database from "../../assets/images/icons/database.svg";
const services = [
    { title: "Software engineering", icon: globe },
    { title: "DEVops service", icon: settings },
    { title: "UI / UX Design", icon: figma },
    { title: "Web Development", icon: web },
    { title: "MVP Development", icon: server },
    { title: "Branding Design", icon: git },
    { title: "Mobile Development", icon: mobil },
    { title: "Databases", icon: database },
];
