import {
    Box,
    FormControl,
    FormLabel,
    Grid,
    InputBase,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import Title from "../Utility/Title";

export default function ContactUS() {
    return (
        <Stack gap={7} sx={{ my: 7 }}>
            <Title>Contact Us</Title>
            <Paper elevation={3} sx={{ borderRadius: 7 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Stack gap={7} sx={{ py: 9, px: { xs: 1.5, sm: 5 } }}>
                            <div>
                                <Typography
                                    color={"myRed.main"}
                                    sx={{ fontSize: 40, fontWeight: 700 }}
                                >
                                    Say Hi!
                                </Typography>
                                <Typography
                                    color={"myBlack.main"}
                                    sx={{ fontSize: 22, fontWeight: 400 }}
                                >
                                    We’d like to talk with you.
                                </Typography>
                            </div>
                            <Stack gap={3}>
                                <CustomInput
                                    lebel="My name is"
                                    placeholder="Full name"
                                />
                                <CustomInput
                                    lebel="My email is"
                                    placeholder="Email"
                                />

                                <CustomInput
                                    lebel="Your message"
                                    placeholder="I want to say that..."
                                    isMultiline={true}
                                />
                                <PrimaryButton variant="contained">
                                    Send message
                                </PrimaryButton>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                            display: "flex",
                            alignItems: "end",
                            justifyContent: "end",
                            position: "relative",
                            color: "white",
                            // backgroundImage: `url(${bgcontact})`,
                            // backgroundRepeat: "no-repeat",
                            // height: 670,
                        }}
                    >
                        <Typography
                            component={"img"}
                            // height={670}
                            // width={570}
                            // sx={{ height: "100%", width: "100%" }}
                            sx={{
                                display: { xs: "none", lg: "block" },
                            }}
                            src={bgcontact}
                        />
                        <Box
                            sx={{
                                py: 9,
                                px: { xs: 1.5, sm: 5 },
                                borderRadius: 7,
                                position: { xs: "unset", lg: "absolute" },
                                top: 0,
                                right: 0,
                                width: { xs: "100%", lg: "auto" },
                                bgcolor: {
                                    xs: "primary.main",
                                    lg: "transparent",
                                },
                            }}
                        >
                            <Stack gap={5} sx={{ maxWidth: 470 }}>
                                <div>
                                    <Typography
                                        sx={{
                                            fontSize: 40,
                                            fontWeight: 700,
                                            textAlign: {
                                                xs: "start",
                                                lg: "end",
                                            },
                                        }}
                                    >
                                        We Transform ideas into a working
                                        Reality
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 18,
                                            fontWeight: 400,
                                            textAlign: {
                                                xs: "start",
                                                lg: "end",
                                            },
                                        }}
                                    >
                                        Fill up the form and our Team will get
                                        back to you within 24 hours.
                                    </Typography>
                                </div>
                                <Box sx={{ ml: { xs: 0, sm: 7 } }}>
                                    <ContactInfo />
                                </Box>
                                <SocialMedia justifyContent="center" />
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Stack>
    );
}
import bgcontact from "../../assets/images/design/bg-contact.svg";
import SocialMedia from "../Utility/SocialMedia";
import ContactInfo from "../Utility/ContactInfo";
function CustomInput({ id, lebel, placeholder, type, isMultiline }) {
    return (
        <FormControl fullWidth>
            <FormLabel
                sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: "myBlack.main",
                }}
            >
                {lebel}{" "}
                <Typography component={"span"} color={"myRed.main"}>
                    *
                </Typography>
            </FormLabel>
            {isMultiline ? (
                <InputBase
                    type={type}
                    multiline
                    rows={4}
                    sx={styleInput}
                    id={id}
                    placeholder={placeholder}
                    aria-describedby="my-helper-text"
                />
            ) : (
                <InputBase
                    type={type}
                    sx={styleInput}
                    id="my-input"
                    placeholder={placeholder}
                    aria-describedby="my-helper-text"
                />
            )}
            {/* <FormHelperText id="my-helper-text">
                    We'll never share your email.
                </FormHelperText> */}
        </FormControl>
    );
}
import PropTypes from "prop-types";
import { PrimaryButton } from "../Utility/CustomButton";
CustomInput.propTypes = {
    id: PropTypes.string,
    lebel: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["email", "text"]),
    isMultiline: PropTypes.bool,
};

const styleInput = {
    pl: 5,
    borderRadius: 2.5,
    border: "1px solid #eee",
    color: "myBlack.main",
    boxShadow:
        "-5px -5px 10px 0px #FFFFFF inset, 5px 5px 10px 0px #AAAACC80 inset, 2px 2px 4px 0px #AAAACC40 inset, -2px -2px 4px 0px #FFFFFF80 inset",
};
