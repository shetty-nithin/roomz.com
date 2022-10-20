import "./SearchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({item}) => {
    return (
        <div className="searchItem">
            <img src={item.photos} alt="" className="searchItemImg" />

            <div className="searchItemDesc">
                <h1 className="searchItemTitle">{item.name}</h1>
                <span className="searchItemDistance">{item.distance}m from the center</span>
                <span className="searchItemTaxiOp">Free aitport taxi</span>
                <span className="searchItemSubTitle">Studio apartment with air conditioning.</span>
                <span className="searchItemFeatures">{item.desc}</span>
                <span className="searchItemCancelOp">Free Cancellation</span>
                <span className="searchItemCancelOpSubTitle">You can cancel later, so lock this great price today!</span>
            </div>
            
            <div className="searchItemDetails">
                {item.rating && 
                    <div className="searchItemRating">
                        <span>Excellent</span>
                        <button>{item.rating}</button>
                    </div>
                }
                <div className="searchItemDetailTexts">
                    <span className="searchItemPrice">Rs {item.cheapestPrice}</span>
                    <span className="searchItemTaxOp">Including all taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="searchItemCheckBtn">See Availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;