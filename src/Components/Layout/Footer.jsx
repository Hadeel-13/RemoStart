import { Box, Divider, Stack, Typography } from "@mui/material";
import Container from "../Utility/Container";
export default function Footer() {
    const Title = (title) => (
        <Typography
            component={"div"}
            sx={{
                fontWeight: 500,
                fontSize: 24,
                mb: 2,
            }}
        >
            {title}
        </Typography>
    );
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "myBlack.main",
                    pb: 3,
                }}
            >
                <Container>
                    <Stack
                        gap={3}
                        sx={{ py: 3,color: "#fff", }}
                        direction={"row"}
                        flexWrap={"wrap"}
                        alignItems={"start"}
                        justifyContent={"space-between"}
                        
                    >
                        {informations?.map((info, i) => (
                            <div key={i}>
                                {Title(info.title)}
                                {info.links?.map((link, index) => (
                                    <Typography
                                        key={index}
                                        component={"div"}
                                        sx={{ mb: 0.7 }}
                                    >
                                        {link}
                                    </Typography>
                                ))}
                            </div>
                        ))}
                        <div>
                            {Title("Contact info")}
                            <ContactInfo />
                        </div>
                    </Stack>
                </Container>
                <Divider sx={{ mb: 3, bgcolor: "myGrey.main" }} />
                <Container maxWidth={"xl"}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        flexWrap={"wrap"}
                        gap={2}
                    >
                        <Typography component={"div"}>
                            <Stack
                                alignSelf={"end"}
                                direction={"row"}
                                alignItems={"end"}
                            >
                                <Typography
                                    component={"img"}
                                    src={logoGray}
                                    alt="logo"
                                ></Typography>
                            </Stack>
                        </Typography>
                        <Typography
                            component={"div"}
                            sx={{ fontWeight: 400, fontSize: 14 }}
                        >
                            Copyright © Travel 2023 All rights reserved
                        </Typography>
                        <div></div>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
import logoGray from "../../assets/images/icons/Logo.svg";
import ContactInfo from "../Utility/ContactInfo";
const informations = [
    {
        title: "Menu",
        links: ["Home", "Our Projects", "Our Process", "Careers", "About us"],
    },
    {
        title: "Information",
        links: ["Supports", "Chat live", "Terms & Conditions", "Privacy"],
    },
    {
        title: "Our Services",
        links: [
            "Software engineering",
            "MVP Development",
            "Web development",
            "Devops services",
            "UI/UX designer",
        ],
    },
    {
        title: "Our Services",
        links: ["Databases", "Branding"],
    },
];
