import "./HotelPage.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const HotelPage = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {src : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg"},
        {src : "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?cs=srgb&dl=pexels-freemockupsorg-775219.jpg&fm=jpg"},
        {src : "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?cs=srgb&dl=pexels-pixabay-279746.jpg&fm=jpg"},
        {src : "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?cs=srgb&dl=pexels-pixabay-277572.jpg&fm=jpg"},
        {src : "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1457847.jpg&fm=jpg"},
    ];

    const handleOpen = (index) => {
        setSlideNumber(index);
        setOpen(true);
    }
    
    const handleMove = (direction) => {
        let newSlideNumber;

        if(direction === "l"){
            newSlideNumber = slideNumber === 0 ? 4 : slideNumber-1;
        }
        else{
            newSlideNumber = slideNumber === 4 ? 0 : slideNumber+1;
        }

        setSlideNumber(newSlideNumber)
    }

    return (
        <div>
            <Navbar/>
            <Header type="hotelsList"/>
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("l")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserver or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m from center.</span>
                    <span className="hotelPriceHighlight">Book a stay over $115 at this property and get free airport taxi.</span>
                    <div className="hotelImages">
                        {photos.map((photo, index) => (
                            <div className="hotelImgWrapper">
                                <img onClick={() =>     handleOpen(index)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Sty in the heart o the Krakow</h1>
                            <p className="hotelDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam similique, architecto autem voluptatem dolor, harum veritatis inventore quam, sit esse nostrum eveniet adipisci assumenda iste commodi blanditiis eligendi suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam similique, architecto autem voluptatem dolor, harum veritatis inventore quam, sit esse nostrum eveniet adipisci assumenda iste commodi blanditiis eligendi suscipit?</p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam necessitatibus dolorum suscipit harum ea provident</span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default HotelPage;
