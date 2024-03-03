import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Paradigm() {
    return (
        <Box sx={{ height: 990, pb: 7, bgcolor: "#343A40" }}>
            <Stack gap={9} sx={{ position: "relative" }}>
                <Stack sx={{ pt: 7 }} alignItems={"center"}>
                    <Typography
                        component={"img"}
                        width={200}
                        src={fontStyle}
                        alt="icon"
                    />
                </Stack>
                <Typography
                    sx={{
                        justifySelf: "center",
                        fontSize: { xs: 50, sm: 70 },
                        fontWeight: 500,
                        width: "max-content",
                        py: 1,
                        px: 7,
                        ml: { xs: 1, md: 11 },
                        zIndex: 1,
                        color: "white",
                        bgcolor: "#6C757D",
                        borderRadius: 15,
                    }}
                >
                    fonts
                </Typography>
                <Stack
                    sx={{
                        position: "absolute",
                        right: 0,
                        display: { xs: "none", sm: "block" },
                    }}
                >
                    <Typography
                        component={"img"}
                        width={430}
                        src={Абв}
                        alt="icon"
                    />
                    <Stack>
                        <Typography
                            sx={{
                                position: "absolute",
                                right: 0,
                                pl: 3,
                                py: 1,
                                borderStartStartRadius: 25,
                                borderEndStartRadius: 25,
                                boxShadow:
                                    " 0px 1.79871666431427px 2.2138051986694336px 0px #00000027,0px 4.322566509246826px 5.32008171081543px 0px #00000039,0px 8.139008522033691px 10.017241477966309px 0px #00000046,0px 14.518600463867188px 17.869047164916992px 0px #00000054,0px 27.155447006225586px 33.422088623046875px 0px #00000065,0px 65px 80px 0px #0000008C",
                                bgcolor: "#2A2A2B",
                            }}
                            component={"img"}
                            width={200}
                            src={a_menu}
                            alt="icon"
                        />
                    </Stack>
                </Stack>
                <Stack alignItems={"center"}>
                    <Typography
                        sx={{
                            fontSize: { xs: 60, sm: 100, lg: 140 },
                            fontWeight: 500,
                            width: "max-content",
                            color: "white",
                        }}
                    >
                        paradigm
                    </Typography>
                </Stack>
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    gap={9}
                >
                    <Stack
                        sx={{
                            height: "max-content",
                            pl: 1,
                            pr: 3,
                            py: 1,
                            borderStartEndRadius: 25,
                            borderEndEndRadius: 25,
                            boxShadow:
                                " 0px 1.79871666431427px 2.2138051986694336px 0px #00000027,0px 4.322566509246826px 5.32008171081543px 0px #00000039,0px 8.139008522033691px 10.017241477966309px 0px #00000046,0px 14.518600463867188px 17.869047164916992px 0px #00000054,0px 27.155447006225586px 33.422088623046875px 0px #00000065,0px 65px 80px 0px #0000008C",
                            bgcolor: "#2A2A2B",
                        }}
                    >
                        <Typography
                            component={"img"}
                            width={400}
                            sx={{ width: { xs: "250px", md: 300, xl: 400 } }}
                            src={fonts_menu_allign}
                            alt="icon"
                        />
                        <Typography
                            component={"img"}
                            width={350}
                            sx={{ width: { xs: "250px", md: 300, xl: 350 } }}
                            src={fonts_menu_icons}
                            alt="icon"
                        />
                    </Stack>
                    <Typography
                        component={"img"}
                        sx={{ width: { xs: "250px", sm: 550, xl: 950 }, ml: 1 }}
                        src={Letters}
                        alt="icon"
                    />
                </Stack>
            </Stack>
        </Box>
    );
}
import fontStyle from "../../../assets/images/icons/font-style.svg";
import Абв from "../../../assets/images/icons/Абв.svg";
import a_menu from "../../../assets/images/icons/a_menu.svg";
import fonts_menu_allign from "../../../assets/images/icons/fonts_menu_allign.svg";
import fonts_menu_icons from "../../../assets/images/icons/fonts_menu_icons.svg";
import Letters from "../../../assets/images/icons/Letters.svg";
