import "./SearchItem.css";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg" alt="" className="searchItemImg" />
            <div className="searchItemDesc">
                <h1 className="searchItemTitle">Tower Street Apartment</h1>
                <span className="searchItemDistance">500m from center</span>
                <span className="searchItemTaxiOp">Free aitport taxi</span>
                <span className="searchItemSubTitle">Studio apartment with air conditioning.</span>
                <span className="searchItemFeatures">Entire stidio | 1 bathroom | 21sq.m bedroom</span>
                <span className="searchItemCancelOp">Free Cancellation</span>
                <span className="searchItemCancelOpSubTitle">You can cancel later, so lock this great price today!</span>
            </div>
            <div className="searchItemDetails">
                <div className="searchItemRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="searchItemDetailTexts">
                    <span className="searchItemPrice">$130</span>
                    <span className="searchItemTaxOp">Includes taxes and fees</span>
                    <button className="searchItemCheckBtn">See Availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;