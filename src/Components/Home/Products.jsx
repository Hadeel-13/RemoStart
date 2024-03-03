// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Stack, Typography } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Products.css";
// import required modules
import { Navigation } from "swiper/modules";
import { PrimaryButton } from "../Utility/CustomButton";
import { Link } from "react-router-dom";
export default function Products({ products }) {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                className="mySwiper2"
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: { xs: "unset", sm: "relative" },
                        top: { xs: -720, sm: -605 },
                        left: { xs: 0, lg: 275 },
                    }}
                >
                    <Box sx={{ mr: 5 }} className="swiper-button-prev">
                        <KeyboardArrowLeft />
                    </Box>
                    <Box className="swiper-button-next left-0">
                        <KeyboardArrowRight />
                    </Box>
                </Box>
                {products?.map((product, i) => (
                    <SwiperSlide key={i}>
                        <Stack sx={{ position: "relative", my: 15 }}>
                            <Stack
                                sx={{
                                    zIndex: 1,
                                    flexWrap: { xs: "wrap", lg: "nowrap" },
                                }}
                                direction={"row"}
                                justifyContent={"start"}
                                columnGap={3}
                                rowGap={0}
                            >
                                <Stack
                                    direction={"column"}
                                    sx={{
                                        position: "relative",
                                        width: "100%",
                                        alignItems: {
                                            xs: "center",
                                            lg: "start",
                                        },
                                        justifyContent: {
                                            xs: "center",
                                            lg: "start",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: {
                                                xs: "relative",
                                                lg: "absolute",
                                            },
                                            top: { xs: 10, lg: -25 },
                                            left: { xs: -40, lg: 90 },
                                            width: 200,
                                            height: 200,
                                            borderRadius: "50%",
                                            bgcolor: "myBlack.main",
                                            opacity: "30%",
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: {
                                                xs: "relative",
                                                lg: "absolute",
                                            },
                                            top: { xs: -50, lg: -50 },
                                            left: { xs: 50, lg: 250 },
                                            width: 150,
                                            height: 150,
                                            borderRadius: "50%",
                                            bgcolor: `${product.primaryColor}`,
                                            opacity: "30%",
                                        }}
                                    />
                                    <Typography
                                        component={"img"}
                                        src={product.image}
                                        sx={{
                                            position: {
                                                xs: "relative",
                                                lg: "absolute",
                                            },
                                            top: { xs: -225, lg: 100 },
                                            left: { xs: 0, lg: 100 },
                                            width: { xs: 300, lg: 500 },
                                            height: { xs: 300, lg: "100%" },
                                        }}
                                    />
                                </Stack>
                                <Stack
                                    sx={{ position: "relative", width: "100%" }}
                                >
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"start"}
                                        alignItems={"center"}
                                        flexWrap={"wrap"}
                                        sx={{
                                            position: "absolute",
                                            top: { xs: -135, lg: -120 },
                                            transform: "rotate(-5deg)",
                                            width: "100%",
                                            left: -3,
                                        }}
                                    >
                                        <Typography
                                            color={"myBlack.main"}
                                            sx={{
                                                fontSize: { xs: 50, sm: 70 },
                                                ml: 1,
                                                fontWeight: 800,
                                            }}
                                        >
                                            {product.title}
                                        </Typography>
                                        <Box
                                            sx={{
                                                ml: 3,
                                                height: 50,
                                                width: 50,
                                                bgcolor: `${product.primaryColor}`,
                                                borderRadius: "50%",
                                            }}
                                        />
                                    </Stack>
                                    <Box
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "block",
                                            },
                                            transformOrigin: "top left",
                                            transform: "skewY(-5deg)",
                                            height: 500,
                                            width: "100%",
                                            bgcolor: `${product.secondaryColor}`,
                                            "::after": {
                                                content: "''",
                                                display: "block",
                                                height: 500,
                                                transform: "skewY(5deg)",
                                                transformOrigin: "bottom left",
                                                bgcolor: `${product.secondaryColor}`,
                                            },
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: {
                                                xs: "unset",
                                                sm: "absolute",
                                            },
                                            mx: { xs: 1.5, sm: 0 },
                                            pt: 11,
                                            px: { xs: 1.5, sm: 5 },
                                            pb: 5,
                                            top: 30,
                                            left: { xs: 0, lg: -50 },
                                            maxWidth: {
                                                xs: "100%",
                                                sm: "90%",
                                                lg: 650,
                                            },
                                            minHeight: 550,
                                            borderRadius: 5,
                                            boxShadow:
                                                "0px 4px 20px 0px #46A1EF4D",
                                            bgcolor: "white",
                                        }}
                                    >
                                        <Stack gap={3}>
                                            <Typography
                                                color={"primary.main"}
                                                sx={{
                                                    fontSize: 45,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                {product.subTitle}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: 18,
                                                    fontWeight: 400,
                                                }}
                                            >
                                                {product.content}
                                            </Typography>
                                            <Link to={`/details-product/${i}`}>
                                                <PrimaryButton variant="outlined">
                                                    View Case Study{" "}
                                                    <KeyboardDoubleArrowRightIcon
                                                        sx={{ ml: 1 }}
                                                        color="primary"
                                                    />
                                                </PrimaryButton>
                                            </Link>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Stack>
                            <Stack
                                sx={{
                                    position: "absolute",
                                    bottom: -120,
                                }}
                            >
                                <Stack sx={{ position: "relative" }}>
                                    <Typography
                                        component={"img"}
                                        src={wave}
                                        alt="wave"
                                        width={"100%"}
                                        sx={{
                                            top: -17,
                                            position: "absolute",
                                        }}
                                    />
                                    <Typography
                                        component={"img"}
                                        src={wave}
                                        alt="wave"
                                        width={"100%"}
                                    />
                                </Stack>
                            </Stack>
                        </Stack>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
import PropTypes from "prop-types";
Products.propTypes = {
    products: PropTypes.array.isRequired,
};
import wave from "../../assets/images/icons/wave.svg";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

