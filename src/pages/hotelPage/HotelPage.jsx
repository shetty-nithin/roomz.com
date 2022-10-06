import "./HotelPage.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const HotelPage = () => {
    const location = useLocation();
    const hotelId = location.pathname.split("/")[2];
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openFloor, setOpenFloor] = useState(false);

    const {data, loading, error } = useFetch(`/v1/hotels/find/${hotelId}`);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { dates, options } = useContext(SearchContext);
    const MILLISECONDS_PER_DAY = 1000*60*60*24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime()-date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }
    const days = dayDifference(dates[0].endDate, dates[0].startDate);

    const handleOpen = (index) => {
        setSlideNumber(index);
        setOpen(true);
    }
    
    const handleMove = (direction) => {
        let newSlideNumber;

        if(direction === "l"){
            newSlideNumber = slideNumber === 0 ? 4 : slideNumber-1;
        } else{
            newSlideNumber = slideNumber === 4 ? 0 : slideNumber+1;
        }

        setSlideNumber(newSlideNumber);
    }

    const handleClick = () => {
        if(user){
            setOpenFloor(true);
        } else{
            navigate("/login");
        }
    }

    return (
        <div>
            <Navbar/>
            <Header type="hotelsList"/>
            {loading ? "Loading..." :
            <>
                <div className="hotelContainer">
                    {open && <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")}/>
                        <div className="sliderWrapper">
                            <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")}/>
                    </div>}
                    <div className="hotelWrapper">
                        <button className="bookNow"  onClick={handleClick}>Reserver or Book Now!</button>
                        <h1 className="hotelTitle">{data.name}</h1>
                        <div className="hotelAddress">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{data.address}</span>
                        </div>
                        <span className="hotelDistance">Excellent location - {data.distance} from center.</span>
                        <span className="hotelPriceHighlight">Book a stay over ${data.cheapestPrice} at this property and get free airport taxi.</span>
                        <div className="hotelImages">
                            {data.photos?.map((photo, index) => (
                                <div className="hotelImgWrapper">
                                    <img onClick={() => handleOpen(index)} src={photo} alt="" className="hotelImg" />
                                </div>
                            ))}
                        </div>
                        <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelTitle">{data.title}</h1>
                                <p className="hotelDesc">{data.desc}</p>
                            </div>
                            <div className="hotelDetailsPrice">
                                <h1>Perfect for a {days}-nights stay!</h1>
                                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam necessitatibus dolorum suscipit harum ea provident</span>
                                <h2>
                                    <b>${days*data.cheapestPrice*options.room}</b> ({days} nights)
                                </h2>
                                <button onClick={handleClick}>Reserve or Book now!</button>
                            </div>
                        </div>
                    </div>
                    <MailList/>
                    <Footer/>
                </div>
            </>}
            {openFloor && <Reserve setOpenFloor={setOpenFloor} hotelId={hotelId}/>}
        </div>
    )
}

export default HotelPage;
