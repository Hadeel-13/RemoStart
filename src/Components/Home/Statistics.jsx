import samsung from "../../assets/images/icons/samsung.svg";
import windows from "../../assets/images/icons/windows.svg";
import google from "../../assets/images/icons/google.svg";
import amazon from "../../assets/images/icons/amazon.svg";
import { Box, Stack, Typography } from "@mui/material";
import Container from "../Utility/Container";
export default function Statistics() {
    const Statistic = (name, value) => (
        <Stack direction={"column"} gap={2}>
            <Typography
                sx={{
                    fontSize: { xs: 40, sm: 50 },
                    fontWeight: 700,
                }}
            >
                {value}
            </Typography>
            <Typography
                sx={{
                    fontSize: 22,
                    fontWeight: 500,
                }}
            >
                {name}
            </Typography>
        </Stack>
    );
    return (
        <Box
            sx={{
                py: 5,
                backgroundImage:
                    "linear-gradient( to top left,#6587FF4D,#FFFFFF4D)",
            }}
        >
            <Container>
                <Stack gap={9}>
                    <Stack
                        gap={7}
                        direction={"row"}
                        // justifyContent={"center"}
                        flexWrap={"wrap"}
                        sx={{justifyContent:{xs:"start",md:"center"}}}
                    >
                        {Statistic("Successful projects", "+500")}
                        {Statistic("Satisfied Clients", "98%")}
                        {Statistic("Handled Countries", "35+")}
                    </Stack>
                    <Stack
                        gap={5}
                        flexWrap={"wrap"}
                        direction={"row"}
                        justifyContent={"space-between"}
                        sx={{justifyContent:{xs:"start",sm:"space-between"}}}
                    >
                        <img src={samsung} />
                        <img src={google} />
                        <img src={amazon} />
                        <img src={windows} />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
