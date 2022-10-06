import useFetch from "../../hooks/useFetch";
import "./HomeGuests.css";


const HomeGuests = () => {
    const {data, loading } = useFetch("/v1/hotels?featured=true&limit=5");

    return (
        <div className="homeGuests">   
            {loading 
                ? "Loading" 
                : <>
                    {data.map(item => (
                        <div className="homeGuestsItem" key={item._id}>
                            <img src={item.photos[0]} alt="" className="homeGuestsImg" style={{width: "200px", height: "250px"}}/>
                            <span className="homeuestsName">{item.name}</span>
                            <span className="homeuestsCity">{item.city}</span>
                            <span className="homeuestsPrice">starting from Rs {item.cheapestPrice}</span>
                            {item.rating && <div className="homeGuestsRating">
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