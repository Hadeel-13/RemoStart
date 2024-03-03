import { Box, Stack } from "@mui/material";
import Title from "../Utility/Title";
import Products from "./Products";

export default function OurProducts() {
    return (
        <Box sx={{ py: 9 }}>
            <Stack gap={5}>
                <Title>Our Projects</Title>
                <Products products={products} />
            </Stack>
        </Box>
    );
}
import ShopStore from "../../assets/images/design/ShopStore.png";
import Travel from "../../assets/images/design/Travel.png";

const products = [
    {
        primaryColor: "#B5838D",
        secondaryColor: "#F5F0ED",
        title: "Shop Store",
        subTitle: "Case Study- App Store",
        image: ShopStore,
        content:
            "Uwang Corporation, a leading provider of financial services, was struggling to keep up with the demands of its growing business.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
    },
    {
        primaryColor: "#EDDEC4",
        secondaryColor: "#353546",
        title: "Travel",
        subTitle: "Case Study- Travel",
        image: Travel,
        content:
            "Uwang Corporation, a leading provider of financial services, was struggling to keep up with the demands of its growing business.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
    },
];
