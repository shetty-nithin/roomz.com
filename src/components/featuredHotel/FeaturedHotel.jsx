import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./FeaturedHotel.css";


const HomeGuests = () => {
    const {data, loading } = useFetch("/v1/hotels?featured=true&limit=5");

    const [destination] = useState("");
    const [propertyType] = useState("");
    const [dates] = useState([{startDate: new Date(), endDate: new Date(), key: "selection"}]);
    const [options] = useState({adult : 1, children : 0, room : 1});
    const [hotelId, setHotelId] = useState("");

    const { dispatch } = useContext(SearchContext);
    const navigate = useNavigate();

    const handleSearch = () => {
        dispatch({type: "NEW_SEARCH", payload: {propertyType, destination, dates, options}});
        navigate(`/hotels/${hotelId}`, {state: {propertyType, destination, dates, options}});
    }

    return (
        <div className="featuredHotel">   
            {loading 
                ? "Loading" 
                : <>
                    {data.map(item => (
                        <div className="featuredHotelItem" key={item._id}>
                            <img onMouseEnter={() => setHotelId(item._id)} onClick={() => handleSearch()} src={item.photos[0]} alt="" className="featuredHotelImg"/>
                            <span className="featuredHotelName">{item.name}</span>
                            <span className="featuredHotelCity">{item.city}</span>
                            <span className="featuredHotelPrice">starting from Rs {item.cheapestPrice}</span>
                            {item.rating && <div className="featuredHotelRating">
                                <button>{item.rating}</button>
                                <span>Excellent</span>
                            </div>}
                        </div>
                    ))}
                </>
            }
        </div>
    )
}

export default HomeGuests;