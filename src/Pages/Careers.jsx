import EmployeeCard from "../Components/Employee/EmployeeCard";
import { Grid, Stack, Typography } from "@mui/material";
import Container from "../Components/Utility/Container";

import { BlackButton } from "../Components/Utility/CustomButton";
export default function Careers() {
    return (
        <Container>
            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                gap={3}
                sx={{ my: 7 }}
            >
                <Title>Meet Our Team</Title>
                <Typography sx={{ textAlign: "center", maxWidth: 500 }}>
                    We help build and manage a team of world-class developers to
                    bring your vision to life
                </Typography>
                <Link to={"/join-us"}>
                    <BlackButton>Join Us</BlackButton>
                </Link>
                <Grid
                    container
                    rowSpacing={5}
                    columnSpacing={5}
                    sx={{ mx: { xs: "auto", sm: "0" } }}
                >
                    {data?.map((employeeData, i) => (
                        <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                            <EmployeeCard data={employeeData} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Container>
    );
}

import user1 from "../assets/images/users/user1.png";
import user2 from "../assets/images/users/user2.png";
import user3 from "../assets/images/users/user3.png";
import user4 from "../assets/images/users/user4.png";
import Title from "../Components/Utility/Title";
import { Link } from "react-router-dom";
const data = [
    {
        image: user1,
        name: "Eng.Nawar ali",
        subTitle: "Ceo,Remo start",
        roles: ["web", "leader"],
    },
    {
        image: user2,
        name: "Eng.Mohammad",
        subTitle: "programing,Remo start",
        roles: ["gaming"],
    },
    {
        image: user3,
        name: "Eng.Ranim omar",
        subTitle: "UI/UX, Remo start",
        roles: ["ui-ux"],
    },
    {
        image: user4,
        name: "Eng.sarya",
        subTitle: "UI/UX, Remo start",
        roles: ["ui-ux"],
    },
    {
        image: user4,
        name: "Eng.sarya",
        subTitle: "UI/UX, Remo start",
        roles: ["ui-ux"],
    },
];
