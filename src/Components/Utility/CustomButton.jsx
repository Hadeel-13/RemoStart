import { Box, Button, Stack } from "@mui/material";
import PropTypes from "prop-types";

import { useState } from "react";

export function WhiteButton({ image, children }) {
    // console.log("WhiteButton");
    return (
        <Button
            disableRipple={true}
            sx={{
                ...styleButton,
                color: "secondary.main",
                bgcolor: "white",
                ":hover": {
                    background:
                        "linear-gradient( to right,#FFFFFF1A,#6587FF1A)",
                },
            }}
        >
            <Stack
                sx={{ width: "100%" }}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={1}
                // flexWrap={"wrap"}
            >
                <img src={image} />
                <div>{children}</div>
                <KeyboardDoubleArrowRightIcon color="myBlack.main" />
            </Stack>
        </Button>
    );
}
WhiteButton.propTypes = {
    image: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

export function SecondaryButton({ whiteImage, blackImage, children }) {
    // console.log("SecondaryButton");
    const [isHover, setIsHover] = useState(false);
    const handleIsHover = () => {
        setIsHover(true);
    };
    const handleIsNotHover = () => {
        setIsHover(false);
    };
    return (
        <Button
            disableRipple={true}
            sx={{
                ...styleButton,
                color: "white",
                bgcolor: "secondary.main",
                ":hover": {
                    color: "myBlack.main",
                    bgcolor: "myGrey.main",
                },
            }}
            onMouseOver={() => {
                // console.log(isHover);
                handleIsHover();
            }}
            onMouseLeave={() => {
                // console.log(isHover);
                handleIsNotHover(false);
            }}
        >
            <Stack
                sx={{ width: "100%" }}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <img src={isHover ? blackImage : whiteImage} alt="icon" />
                <div>{children}</div>
                <KeyboardDoubleArrowRightIcon />
            </Stack>
        </Button>
    );
}
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
SecondaryButton.propTypes = {
    whiteImage: PropTypes.string.isRequired,
    blackImage: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};
const styleButton = {
    px: 5.3,
    width: 440,
    height: 85,
    borderRadius: 35,
    boxShadow: "0px 4px 10px 0px #00000021",
};
export function BlackButton({ children }) {
    return (
        <Box sx={{ position: "relative", mx: "auto", mb: "7px" }}>
            <Box
                sx={{
                    width: "100%",
                    top: 7,
                    left: 7,
                    position: "absolute",
                }}
            >
                <Button
                    variant="outlined"
                    disabled
                    sx={{
                        px: 2,
                        width: "100%",
                        ":disabled": { borderColor: "transparent" },
                        outline: "2px solid #353546 !important",
                    }}
                >
                    {children}
                </Button>
            </Box>
            <Button
                variant="contained"
                sx={{
                    px: 3,
                    bgcolor: "myBlack.main",
                    ":hover": {
                        bgcolor: "myBlack.main",
                    },
                }}
            >
                {children}
            </Button>
        </Box>
    );
}
BlackButton.propTypes = {
    children: PropTypes.string.isRequired,
};
export function PrimaryButton({ variant, children, sx, onClick }) {
    return (
        <Button
            variant={variant}
            color="primary"
            onClick={onClick}
            sx={{
                ...sx,
                borderRadius: 10,
                py: 1.25,
                px: 3.5,
                textTransform: "unset",
                width: "max-content",
            }}
        >
            {children}
        </Button>
    );
}
PrimaryButton.propTypes = {
    sx: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired,
    variant: PropTypes.oneOf(["outlined", "contained", "text"]).isRequired,
};
