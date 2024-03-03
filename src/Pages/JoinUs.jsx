import {
    Button,
    FormControl,
    FormLabel,
    Grid,
    InputBase,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";
import Container from "../Components/Utility/Container";
import CustomSection from "../Components/Utility/CustomSection";
import { PrimaryButton } from "../Components/Utility/CustomButton";
import { useRef, useState } from "react";

export default function JoinUs() {
    const inputFile = useRef(null);
    const inputImage = useRef(null);
    return (
        <>
            <CustomSection title="Join Us!" />
            <Container sx={{ my: 7 }}>
                <Grid container gridRow={3} spacing={3}>
                    <Grid item xs={12}>
                        <CustomInput
                            id="first-name"
                            lebel="Upload your CV"
                            type="text"
                            required
                        >
                            <input
                                style={{ display: "none" }}
                                type="file"
                                ref={inputFile}
                                className="shadow px-1 hidden"
                                accept=".jpg,.png,.jpeg,.gif,.svg,.pdf,.docx"
                            />
                            <PrimaryButton
                                variant="outlined"
                                sx={{
                                    mt: 1,
                                    ":hover": {
                                        bgcolor: "primary.main",
                                        color: "#fff",
                                    },
                                }}
                                onClick={() => {
                                    inputFile.current.click();
                                }}
                            >
                                <span style={{ display: "flex" }}>
                                    attach your CV
                                    <AttachFile
                                        sx={{
                                            transform: "rotate(50deg)",
                                            ml: 3,
                                        }}
                                    />
                                </span>
                            </PrimaryButton>
                        </CustomInput>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            id="first-name"
                            lebel="First Name"
                            type="text"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            id="last-name"
                            lebel="Last Name"
                            type="text"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            id="Email"
                            lebel="Email"
                            type="email"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            id="phonenum"
                            lebel="Phone Num"
                            type="text"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            id="address"
                            lebel="Address"
                            type="text"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomInput lebel="Add picture">
                            <input
                                style={{ display: "none" }}
                                type="file"
                                ref={inputImage}
                                className="shadow px-1 hidden"
                                accept=".jpg,.png,.jpeg,.gif,.svg,"
                            />
                            <Button
                                variant="text"
                                sx={{
                                    py: 1.5,
                                    color: "myBlack.main",
                                    bgcolor: "myGrey.main",
                                }}
                                onClick={() => {
                                    inputImage.current.click();
                                }}
                            >
                                <PhotoCamera sx={{ mr: 3 }} />
                                Upload personal picture
                            </Button>
                        </CustomInput>
                    </Grid>
                </Grid>
                <Typography sx={{ fontSize: 50, fontWeight: 700, my: 3 }}>
                    Job Information
                </Typography>
                <Grid container gridRow={3} spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <CustomSelect
                            lebel="Position"
                            options={positions}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomSelect
                            lebel="Position Type"
                            options={[
                                "Select a Position Type",
                                "Training",
                                "Job",
                            ]}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            id="linked-link"
                            lebel="Linked in profile "
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            id="other-links"
                            lebel="Other links (Behance, Git hub, etc..)"
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomInput
                            id="about"
                            lebel="talk about your self in 150 Characters"
                            type="text"
                            required
                            multiline
                        />
                    </Grid>
                </Grid>
                <Stack sx={{ mt: 3 }} alignItems={"end"}>
                    <PrimaryButton
                        variant="outlined"
                        sx={{
                            mt: 1,
                            ":hover": {
                                bgcolor: "primary.main",
                                color: "#fff",
                            },
                        }}
                    >
                        Submit application
                    </PrimaryButton>
                </Stack>
            </Container>
        </>
    );
}
import { PhotoCamera, AttachFile } from "@mui/icons-material";
import PropTypes from "prop-types";
const redStar = (
    <Typography component={"span"} color={"myRed.main"}>
        *
    </Typography>
);
function CustomInput({
    id,
    lebel,
    placeholder,
    type,
    children,
    multiline = false,
    required,
}) {
    return (
        <FormControl error={false} fullWidth>
            <FormLabel
                sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: "myBlack.main",
                }}
            >
                {lebel} {required ? <>{redStar}</> : null}
            </FormLabel>
            {}
            {multiline ? (
                <InputBase
                    type={type}
                    multiline
                    rows={4}
                    sx={styleInput}
                    id={id}
                    placeholder={placeholder}
                    aria-describedby="my-helper-text"
                />
            ) : children ? (
                children
            ) : (
                <InputBase
                    type={type}
                    sx={{
                        ...styleInput,
                        ":invalid": {
                            borderColor: "myRed.main",
                        },
                    }}
                    id="my-input"
                    placeholder={placeholder}
                    aria-describedby="my-helper-text"
                />
            )}
            {/* <FormHelperText id="my-helper-text">
                    We'll never share your email.
                </FormHelperText> 
            */}
        </FormControl>
    );
}
CustomInput.propTypes = {
    id: PropTypes.string,
    lebel: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(["email", "text"]),
    multiline: PropTypes.bool,
    required: PropTypes.bool,
    children: PropTypes.any,
};

const styleInput = {
    p: 1,
    borderRadius: 2.5,
    border: "1px solid #353546",
    color: "myBlack.main",
};
function CustomSelect({ lebel, options, required }) {
    const [currentOption, setCurrentOption] = useState("");
    const handleCurrentOption = (event) => {
        setCurrentOption(event.target.value);
        console.log;
    };
    return (
        <FormControl fullWidth>
            <FormLabel
                sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: "myBlack.main",
                }}
            >
                {lebel} {required ? <>{redStar}</> : null}
            </FormLabel>
            <Select
                value={currentOption}
                onChange={handleCurrentOption}
                displayEmpty
                size="small"
                sx={{ p: 0.6, borderRadius: 2.5, outline: "1px solid #353546" }}
                inputProps={{ "aria-label": "Without label" }}
            >
                <MenuItem value="">
                    <em>{options[0]}</em>
                </MenuItem>
                {options?.slice(1).map((option, i) => (
                    <MenuItem key={i} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
            {/* <FormHelperText>Without label</FormHelperText> */}
        </FormControl>
    );
}
CustomSelect.propTypes = {
    required: PropTypes.bool,
    lebel: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
};
const positions = [
    "Select a Position",
    "Front End",
    "Back End",
    "UI UX",
    "Artificial Intelligence",
    "Mobile Applications",
];
