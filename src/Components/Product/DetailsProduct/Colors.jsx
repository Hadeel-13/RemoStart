import { Box, Container, Divider, Stack, Typography } from "@mui/material";

export default function Colors() {
    const GroupNameTitle = (title) => (
        <Typography sx={{ fontSize: { xs: 25, lg: 40 }, fontWeight: 40 }}>
            {title}
        </Typography>
    );
    const GroupColor = (title, colors) => (
        <Stack alignItems={"center"}>
            {GroupNameTitle(title)}
            <Stack>
                {colors?.map((bgcolor, i) => (
                    <Box
                        key={i}
                        sx={{
                            height: 150,
                            width: 250,
                            bgcolor: bgcolor,
                        }}
                    />
                ))}
            </Stack>
        </Stack>
    );
    return (
        <>
            <Stack sx={{ position: "relative", left: -50 }}>
                <Typography
                    component={"img"}
                    sx={{
                        width: { xs: "250px", sm: 340, xl: 340 },
                        display: { xs: "none", lg: "flex" },
                        height: 340,
                        ml: 1,
                    }}
                    src={arrow1}
                    alt="icon"
                />
            </Stack>
            <Stack direction={"row"} sx={{ position: "relative" }}>
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
                            sx={{
                                fontSize: { xs: 35, lg: 70 },
                                fontWeight: 600,
                            }}
                        >
                            Color
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: 25, lg: 50 },
                                fontWeight: 300,
                                mr: 25,
                            }}
                        >
                            Hex
                        </Typography>
                    </Stack>
                    <Divider />
                </Container>
                <Typography
                    component={"img"}
                    sx={{
                        position: "absolute",
                        right: 0,
                        top: -150,
                        height: 600,
                        width: { xs: "250px", sm: 550, xl: 170 },
                        display: { xs: "none", xl: "flex" },
                    }}
                    src={halfMobileScreen}
                    alt="icon"
                />
            </Stack>
            <Stack
                gap={5}
                direction={"row"}
                flexWrap={"wrap"}
                justifyContent={"start"}
                sx={{ px: { xs: 3, lg: 15 }, my: 11 }}
            >
                {GroupColor("Natural", NaturalColor)}
                {GroupColor("Primary", PrimarylColor)}
                {GroupColor("Other", OtherlColor)}
            </Stack>
        </>
    );
}
import arrow1 from "../../../assets/images/icons/arrow1.svg";
import halfMobileScreen from "../../../assets/images/icons/halfMobileScreen.svg";
const NaturalColor = ["#6C757D", "#C4C4C4", "#D6D6D6", "#D9D9D9"];
const PrimarylColor = ["#343A40", "#DFC362", "#F2DE94", "#F6EDCA"];
const OtherlColor = ["#0D8BFF"];
