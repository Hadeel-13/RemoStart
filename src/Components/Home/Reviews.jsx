import { Swiper, SwiperSlide } from "swiper/react";
// import PropTypes from "prop-types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Review.css";
// import required modules
import { Pagination } from "swiper/modules";
import { Box, Stack, Typography } from "@mui/material";
import startcomma from "../../assets/images/icons/start_fluent_comma.svg";
import endcomma from "../../assets/images/icons/end_fluent_comma.svg";
export default function Review() {
    const startComma = (
        <Typography
            component={"img"}
            src={startcomma}
            width={13}
            height={23}
            sx={{ alignSelf: "start" }}
            alt="start_comma"
        />
    );
    const endComma = (
        <Typography
            component={"img"}
            src={endcomma}
            width={13}
            height={23}
            sx={{ alignSelf: "end" }}
            alt="end_comma"
        />
    );
    return (
        <>
            <Box
                sx={{
                    position: {
                        xs: "unsabsoluteet",
                        xl: "absolute",
                    },
                    p: 5,
                    zIndex: 1,
                    borderRadius: 1.5,
                    right: { xs: "0", lg: 0, xl: 75 },
                    bottom: { xs: "0", lg: 0, xl: 130 },
                    width: { xs: "auto", xl: 900 },
                    height: { xs: "auto" },
                    color: "myBlack.main",
                    background:
                        "linear-gradient( to top left,#B8D9FFCC,#FFFFFFCC)",
                }}
            >
                <Swiper
                    pagination={{
                        clickable: true,
                        enabled: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 1,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {Array.from(Array(6)).map((_, i) => (
                        <SwiperSlide key={i}>
                            <Stack>
                                <Typography
                                    sx={{ fontSize: 22, fontWeight: 500 }}
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 12, fontWeight: 400 }}
                                >
                                    {subTitle}
                                </Typography>
                                <Stack
                                    direction={"row"}
                                    sx={{ p: 1.5 }}
                                    gap={1}
                                >
                                    {startComma}
                                    {startComma}
                                    <Typography
                                        sx={{
                                            fontSize: 16,
                                            fontWeight: 400,
                                            textAlign: "justify",
                                        }}
                                    >
                                        {review}
                                    </Typography>
                                    {endComma}
                                    {endComma}
                                </Stack>
                            </Stack>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </>
    );
}
const title = "mohammad essa";
const subTitle = "mohammad essa";
const review =
    "Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodoconsequat. Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip exea commodo consequat. Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed doeiusmod tempor incididunt .";
// Review.propTypes = {
//     title: PropTypes.string.isRequired,
// };
