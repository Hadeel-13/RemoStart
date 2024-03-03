import { Container as MUIContainer } from "@mui/material";
import PropTypes from "prop-types";

export default function Container({ children, sx }) {
    return (
        <MUIContainer sx={{ ...sx, color: "myBlack.main", maxWidth: "1420px !important" }}>
            {children}
        </MUIContainer>
    );
}
Container.propTypes = {
    children: PropTypes.any.isRequired,
    sx: PropTypes.object,
};
