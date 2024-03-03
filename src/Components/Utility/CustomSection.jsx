import { Stack, Typography } from "@mui/material";
import Title from "./Title";

export default function CustomSection({ title }) {
    return (
        <Stack
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
            sx={{
                backgroundImage: `url(${bgSection})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100%",
                py: 10,
                pb: 14,
            }}
        >
            <Title>{title}</Title>
            <Typography sx={{ textAlign: "center", maxWidth: 500 }}>
                We help build and manage a team of world-class developers to
                bring your vision to life
            </Typography>
        </Stack>
    );
}
import bgSection from "../../assets/images/design/bgSection.svg";
import PropTypes from "prop-types";
CustomSection.propTypes = {
    title: PropTypes.string.isRequired,
};
