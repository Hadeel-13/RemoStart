import { useState } from "react";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ width: "100%" }}
            {...other}
        >
            {value === index && <Box sx={{ m: 3 }}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

export default function OurProducts({ products }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "myGrey.main",
                borderRadius: 5,
                boxShadow: "0px 4px 4px 0px #00000040",
                display: { xs: "block", sm: "flex" },
                width: "100%",
                height: { xs: "100%", xl: 700 },
                p: 3,
            }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                textColor="secondary"
                indicatorColor="secondary"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    borderRight: 1,
                    borderColor: "divider",
                    display: { xs: "none", sm: "flex" },
                }}
            >
                {products?.map((product, i) => (
                    <Tab
                        key={i}
                        label={`Product ${i + 1}`}
                        {...a11yProps(i)}
                        sx={{
                            textTransform: "unset",
                            width: "max-content",
                            mx: 1,
                        }}
                    />
                ))}
            </Tabs>
            <Tabs
                orientation="horizontal"
                variant="scrollable"
                textColor="secondary"
                indicatorColor="secondary"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    display: { xs: "block", sm: "none" },
                }}
            >
                {products?.map((product, i) => (
                    <Tab
                        key={i}
                        label={`Product ${i + 1}`}
                        {...a11yProps(i)}
                        sx={{
                            textTransform: "unset",
                            width: "max-content",
                        }}
                    />
                ))}
            </Tabs>
            {products?.map((product, i) => (
                <TabPanel key={i} value={value} index={i}>
                    <div>
                        <Grid container spacing={3} sx={{ width: "100%" }}>
                            <Grid
                                item
                                xs={12}
                                lg={8}
                                sx={{ width: "100%", position: "relative" }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "5%",
                                        left: "30%",
                                        bgcolor: "myBlack.main",
                                        opacity: "30%",
                                        height: 300,
                                        width: { xs: 200, sm: 300 },
                                        borderRadius: "50%",
                                        zIndex: 0,
                                    }}
                                />
                                <Typography
                                    component={"img"}
                                    src={product.image}
                                    alt={`product${i + 1} image`}
                                    width={"100%"}
                                    height={"90%"}
                                    sx={{ zIndex: 1, position: "relative" }}
                                />
                            </Grid>
                            <Grid item xs={12} lg={4} sx={{ width: "100%" }}>
                                <Typography
                                    sx={{
                                        width: "max-content",
                                        fontSize: 40,
                                        fontWeight: 700,
                                        color: "secondary.main",
                                    }}
                                >
                                    Product {`${i + 1}`}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 22, fontWeight: 400 }}
                                >
                                    {product.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </TabPanel>
            ))}
        </Box>
    );
}
OurProducts.propTypes = {
    products: PropTypes.array,
};
