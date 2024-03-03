import { Stack, Typography } from "@mui/material";
export default function SocialMedia({ justifyContent }) {
    return (
        <Stack
            gap={2}
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={justifyContent}
            alignItems={"center"}
        >
            {icons?.map((icon, i) => (
                <Typography key={i} component={"img"} src={icon} alt="icon" />
            ))}
        </Stack>
    );
}
import PropTypes from "prop-types";
SocialMedia.propTypes = {
    justifyContent: PropTypes.oneOf(["start", "center"]).isRequired,
};
import Behance from "../../assets/images/icons/Behance.svg";
import Linkedin from "../../assets/images/icons/Linkedin.svg";
import Facebook from "../../assets/images/icons/Facebook.svg";
import Github from "../../assets/images/icons/Github.svg";
import Threads from "../../assets/images/icons/Threads.svg";
const icons = [Behance, Linkedin, Facebook, Github, Threads];
