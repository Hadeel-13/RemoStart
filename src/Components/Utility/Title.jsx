import { Box, Stack, Typography } from "@mui/material";
export default function Title({ children }) {
    return (
        <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Typography
                sx={{
                    fontSize: { xs: 30, sm: 40 },
                    fontWeight: 700,
                }}
            >
                {children}
            </Typography>
            <Box
                sx={{
                    height: 3,
                    width: 100,
                    bgcolor: "primary.main",
                }}
            />
        </Stack>
    );
}
import PropTypes from "prop-types";
Title.propTypes = {
    children: PropTypes.string.isRequired,
};
