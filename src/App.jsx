import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./Pages/Home";
import NavBar from "./Components/Layout/NavBar";
import Careers from "./Pages/Careers";
import AboutUs from "./Pages/AboutUs";
import JoinUs from "./Pages/JoinUs";
import Footer from "./Components/Layout/Footer";
import DetailsProduct from "./Pages/DetailsProduct";
// import OurProjects from "./Pages/OurProjects";
// import OurProcess from "./Pages/OurProcess";
function App() {
    const theme = createTheme({
        palette: {
            // mode: darkMode ? "dark" : "light",
            mode: "light",
            primary: {
                main: "#406AFF",
                contrastText: "#fff",
            },
            secondary: {
                main: "#19A5FF",
                contrastText: "#fff",
            },
            myYellow: {
                main: "#efdcab",
            },
            myRed: {
                main: "#F00C18",
            },
            myBlack: {
                main: "#353546",
            },
            myGrey: {
                main: "#EEEDED",
            },
        },
        typography: {
            fontFamily: "Inter",
        },
    });
    return (
        <>
            <BrowserRouter basename="/">
                <ThemeProvider theme={theme}>
                    <NavBar />
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/details-product/:id" exact element={<DetailsProduct />} />
                        {/* <Route path="/our-projects" element={<OurProjects />} />
                        <Route path="/our-process" element={<OurProcess />} /> */}
                        <Route path="/our-projects" element={<Home />} />
                        <Route path="/our-process" element={<Home />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/join-us" element={<JoinUs />} />
                        <Route path="/about-us" element={<AboutUs />} />
                    </Routes>
                    <Footer />
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}
export default App;
