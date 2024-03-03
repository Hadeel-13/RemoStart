import Container from "../Components/Utility/Container";
import AboutUs from "../Components/Home/AboutUs";
import ContactUS from "../Components/Home/ContactUS";
import OurProducts from "../Components/Home/OurProducts";
import OurTeam from "../Components/Home/OurTeam";
import ReviewsSection from "../Components/Home/ReviewsSection";
import Services from "../Components/Home/Services";
import Statistics from "../Components/Home/Statistics";
import Welcome from "../Components/Home/Welcome";
export default function Home() {
    return (
        <>
            <Container>
                <Welcome />
            </Container>
            <Statistics />
            <OurProducts />
            <Services />
            <Container>
                <AboutUs />
            </Container>
            <ReviewsSection />
            <Container>
                <OurTeam />
                <div id="contactus">
                    <ContactUS />
                </div>
            </Container>
        </>
    );
}
