import useFetch from "../../hooks/useFetch";
import "./HomeGuests.css";

const HomeGuests = () => {
    const {data, loading, error } = useFetch("/v1/hotels?featured=true&limit=5");

    return (
        <div className="homeGuests">   
            {loading ? "Loading" :
            <>
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
            </>}
                {/* <img src="https://images.pexels.com/photos/13068894/pexels-photo-13068894.jpeg?cs=srgb&dl=pexels-mehmet-turgut-kirkgoz-13068894.jpg&fm=jpg" alt="" className="homeGuestsImg" />
                <img src="https://images.pexels.com/photos/8460475/pexels-photo-8460475.jpeg?cs=srgb&dl=pexels-esra-%C3%B6zer-8460475.jpg&fm=jpg" alt="" className="homeGuestsImg" />
                <img src="https://images.pexels.com/photos/8391457/pexels-photo-8391457.jpeg?cs=srgb&dl=pexels-i%CC%87lknur-kayahan-8391457.jpg&fm=jpg" alt="" className="homeGuestsImg" /> */}
        </div>
    )
}

export default HomeGuests;