import { useContext } from "react";
import { useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";
import "./Featured.css";


const Featured = () => {
    const cities = [
        { name: "Banglore", img: "https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?cs=srgb&dl=pexels-umar-mukhtar-1538177.jpg&fm=jpg"},
        { name: "Delhi", img: "https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?cs=srgb&dl=pexels-kritesh-kaushik-2413613.jpg&fm=jpg"},
        { name: "Mumbai", img: "https://images.pexels.com/photos/6137804/pexels-photo-6137804.jpeg?cs=srgb&dl=pexels-amisha-shukla-6137804.jpg&fm=jpg"},
        { name: "Hyderbad", img: "https://images.pexels.com/photos/6079192/pexels-photo-6079192.jpeg?cs=srgb&dl=pexels-sangeet-rao-6079192.jpg&fm=jpg"},
        { name: "Kolkata", img: "https://images.pexels.com/photos/13739066/pexels-photo-13739066.jpeg?cs=srgb&dl=pexels-iqbal-farooz-13739066.jpg&fm=jpg"},
    ];

    const [dates, setDates] = useState([
        {startDate : new Date(),
        endDate : new Date(),
        key : "selection"}
    ]);
    const [destination, setDestination] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [options, setOptions] = useState({
        adult : 1,
        children : 0,
        room : 1
    })

    const { dispatch } = useContext(SearchContext);
    const navigate = useNavigate();

    const handleSearch = () => {
        dispatch({type: "NEW_SEARCH", payload: {propertyType, destination, dates, options}});
        navigate("/hotels", {state : {propertyType, destination, dates, options}});
    }

    return (
        <div className="featured">
            {cities.map(city => (
                <div className="featuredItem" key={city.name}>
                    <img onMouseEnter={() => setDestination(city.name)} onClick={() => handleSearch()} src={city.img} alt="" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>{city.name}</h1>
                    </div>
                </div> 
            ))}
        </div>
    )
}

export default Featured;