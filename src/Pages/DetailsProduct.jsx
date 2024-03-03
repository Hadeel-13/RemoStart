import { Box, ThemeProvider, createTheme } from "@mui/material";
import FontFamily from "../Components/Product/DetailsProduct/FontFamily";
import Paradigm from "../Components/Product/DetailsProduct/Paradigm";
import Colors from "../Components/Product/DetailsProduct/Colors";
import Icons from "../Components/Product/DetailsProduct/Icons";
import Display from "../Components/Product/DetailsProduct/Display";
import Description from "../Components/Product/DetailsProduct/Description";

export default function DetailsProduct() {
    const theme1 = createTheme({
        typography: {
            fontFamily: "Figtree, 'Inter'",
        },
    });
    return (
        <>
            <ThemeProvider theme={theme1}>
                <Box
                    sx={{
                        fontFamily: 'Figtree, "Inter" !important',
                        color: "#343A40",
                    }}
                >
                    <Paradigm />
                    <FontFamily />
                    <Colors />
                    <Icons />
                    <Display />
                    <Description />
                </Box>
            </ThemeProvider>
        </>
    );
}
