import { Avatar, Button, Rating, Stack, Typography } from "@mui/material";
import Title from "../Utility/Title";
import EmployeeCard from "../Employee/EmployeeCard";
export default function OurTeam() {
    return (
        <>
            <Stack gap={7} sx={{ my: 7 }}>
                <div>
                    <Title>Meet Our Team</Title>
                    <Stack
                        direction={"row"}
                        justifyContent={"center"}
                        sx={{ mt: 1.5 }}
                    >
                        <Typography sx={{ textAlign: "center", maxWidth: 500 }}>
                            We help build and manage a team of world-class
                            developers to bring your vision to life
                        </Typography>
                    </Stack>
                </div>
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    flexWrap={"wrap"}
                    sx={{
                        justifyContent: {
                            xs: "center",
                            md: "space-evenly",
                            // lg: "start",
                        },
                    }}
                    columnGap={3}
                    rowGap={5}
                >
                    {data?.slice(0, 4)?.map((employeeData, i) => (
                        <EmployeeCard key={i} data={employeeData} />
                    ))}
                </Stack>
            </Stack>
            <BestEmployee />
        </>
    );
}

import user1 from "../../assets/images/users/user1.png";
import user2 from "../../assets/images/users/user2.png";
import user3 from "../../assets/images/users/user3.png";
import user4 from "../../assets/images/users/user4.png";
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
];
function BestEmployee() {
    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={7}
            sx={{
                py: { xs: 7, md: 0 },
                px: 7,
                flexDirection: { xs: "column", md: "row" },
                minHeight: 250,
                borderRadius: 5,
                color: "white",
                bgcolor: "myBlack.main",
            }}
        >
            <Typography
                sx={{
                    fontSize: { xs: 30, sm: 40 },
                    fontWeight: 700,
                    maxWidth: 251,
                }}
            >
                Hire the best employee!
            </Typography>
            <Stack justifyContent={"center"} alignItems={"center"} gap={1}>
                <Avatar
                    alt="Remy Sharp"
                    src={user5}
                    sx={{ width: 100, height: 100 }}
                />
                <Rating
                    readOnly
                    name="size-medium"
                    defaultValue={5}
                    precision={1}
                    icon={
                        <Typography
                            component={"img"}
                            width={20}
                            height={20}
                            src={Star}
                        />
                    }
                    emptyIcon={
                        <EmptyStar
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                        />
                    }
                />
                <div style={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                        Majd hasan
                    </Typography>
                    <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                        Software Engineer
                    </Typography>
                </div>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"} gap={3}>
                <Typography
                    component={"img"}
                    width={120}
                    height={30}
                    src={lightTop}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        background:
                            "linear-gradient( to bottom right,#19A5FF,#406AFF00)",
                    }}
                >
                    See other our team
                </Button>
                <Typography
                    component={"img"}
                    width={120}
                    height={30}
                    src={lightbottom}
                />
            </Stack>
        </Stack>
    );
}
import EmptyStar from "@mui/icons-material/Star";
import Star from "../../assets/images/icons/star.svg";
import lightTop from "../../assets/images/icons/lightTopButton.svg";
import lightbottom from "../../assets/images/icons/lightbottomButton.svg";
import user5 from "../../assets/images/users/user5.png";
