import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import HomeGuests from "../../components/homeGuests/HomeGuests";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <h1 className="homeTitle">Browse by City</h1>
                <Featured/>
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Browse by Hotel</h1>
                <HomeGuests/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default HomePage;