import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import "./PropertyList.css";

const PropertyList = () => {
    const properties = [
        {type: "hotel", img: "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?cs=srgb&dl=pexels-amar-saleem-70441.jpg&fm=jpg"},
        {type: "apartment", img: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439391.jpg&fm=jpg"},
        {type: "resort", img: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?cs=srgb&dl=pexels-pixabay-237272.jpg&fm=jpg"},
        {type: "villa", img: "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-2476632.jpg&fm=jpg"},
        {type: "cabin", img: "https://images.pexels.com/photos/1619311/pexels-photo-1619311.jpeg?cs=srgb&dl=pexels-james-wheeler-1619311.jpg&fm=jpg"}
    ];

    const [dates] = useState([
        {startDate : new Date(),
        endDate : new Date(),
        key : "selection"}
    ]);
    const [destination] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [options] = useState({
        adult : 1,
        children : 0,
        room : 1
    })

    const { dispatch } = useContext(SearchContext);
    const navigate = useNavigate();

    const handleSearch = () => {
        dispatch({propertyType: "NEW_SEARCH", payload: {propertyType, destination, dates, options}});
        navigate(`/hotels`, {state : {propertyType, destination, dates, options}});
    }

    
    return (
        <div className="pList">
            {properties.map((property) => (
                <div className="pListItem" key={property.type}>
                    <img onMouseEnter={() => setPropertyType(property.type)} onClick={(e) => handleSearch()} src={property.img} alt="" className="pListImg" />
                    <div className="pListTitle">
                        <h1>{property.type}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PropertyList;