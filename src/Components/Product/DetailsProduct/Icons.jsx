import { Container, Divider, Stack, Typography } from "@mui/material";

export default function Icons() {
    return (
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
                    Icons
                </Typography>
            </Stack>
            <Divider />
            <Stack alignItems={"start"} sx={{ my: 13, px: { xs: 3, lg: 15 } }}>
                <Stack
                    columnGap={5}
                    rowGap={5}
                    direction={"row"}
                    flexWrap={"wrap"}
                    sx={{
                        p: 3,
                        maxWidth: 900,
                        bgcolor: "#6C757D",
                        borderRadius: 5,
                    }}
                >
                    {icons.map((icon, i) => (
                        <img
                            key={i}
                            src={icon}
                            alt="icon"
                            width={35}
                            height={35}
                        />
                    ))}
                </Stack>
            </Stack>
        </Container>
    );
}
import bell from "../../../assets/images/icons/travel/bell.svg";
import compass from "../../../assets/images/icons/travel/compass.svg";
import home from "../../../assets/images/icons/travel/home.svg";
import hotel from "../../../assets/images/icons/travel/hotel.svg";
import location from "../../../assets/images/icons/travel/location.svg";
import date from "../../../assets/images/icons/travel/date.svg";
import person from "../../../assets/images/icons/travel/person.svg";
import Vector from "../../../assets/images/icons/travel/Vector.svg";
import Vector1 from "../../../assets/images/icons/travel/Vector1.svg";
import Vector2 from "../../../assets/images/icons/travel/Vector2.svg";
import Vector3 from "../../../assets/images/icons/travel/Vector3.svg";
import Vector4 from "../../../assets/images/icons/travel/Vector4.svg";
import Vector5 from "../../../assets/images/icons/travel/Vector5.svg";
import Vector6 from "../../../assets/images/icons/travel/Vector6.svg";
import Vector7 from "../../../assets/images/icons/travel/Vector7.svg";
import voice from "../../../assets/images/icons/travel/voice.svg";
const icons = [
    bell,
    compass,
    home,
    hotel,
    location,
    date,
    person,
    Vector,
    Vector1,
    Vector2,
    Vector3,
    Vector4,
    Vector5,
    Vector6,
    Vector7,
    voice,
];
