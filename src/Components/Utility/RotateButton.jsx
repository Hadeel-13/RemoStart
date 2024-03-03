import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
export default function RotateButton({ children }) {
    return (
        <>
            <Box sx={{ height: 100 }}>
                <Box
                    sx={{
                        fontSize: 20,
                        fontWeight: 600,
                        border: "1px solid grey",
                        maxWidth: "fit-content",
                        maxHeight: "fit-content",
                        transformOrigin: "0 0",
                        borderRadius: 30,
                        transform: "rotate(2deg)",
                        transition: "all",
                        ":hover": {
                            // p:2
                        },
                    }}
                >
                    <StyledButton
                        variant="contained"
                        sx={{
                            px: 3,
                            py: 1.25,
                            textTransform: "unset",
                            transformOrigin: "10% 0%",
                            borderRadius: 30,
                            transform: "rotate(4deg)",
                            ":hover": {
                                py: 1.75,
                                px: 3.5,
                                boxShadow: "0px 4px 20px 0px #00000047",
                                bgcolor: "secondary.main",
                                transform: "rotate(-1deg)",
                            },
                        }}
                    >
                        {children}
                    </StyledButton>
                </Box>
            </Box>
        </>
    );
}
RotateButton.propTypes = {
    children: PropTypes.any.isRequired,
};

const StyledButton = styled(Button)`
    ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(["background-color", "transform"], {
        duration: theme.transitions.duration.standard,
    })};
    &:hover {
        background-color: ${theme.palette.secondary.main};
        transform: rotate(-1deg);
    }
    `}
`;
