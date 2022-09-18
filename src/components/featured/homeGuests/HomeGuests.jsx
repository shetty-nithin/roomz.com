import "./HomeGuests.css";

const HomeGuests = () => {
    return (
        <div className="homeGuests">   
            <div className="homeGuestsItem">
                <img src="https://images.pexels.com/photos/8968953/pexels-photo-8968953.jpeg?cs=srgb&dl=pexels-eyl%C3%BCl-ku%C5%9Fdili-8968953.jpg&fm=jpg" alt="" className="homeGuestsImg" />
                <span className="homeuestsName">Name1</span>
                <span className="homeuestsCity">Yeshwanthpura</span>
                <span className="homeuestsPrice">$150</span>
                <div className="homeGuestsRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="homeGuestsItem">
                <img src="https://images.pexels.com/photos/13068894/pexels-photo-13068894.jpeg?cs=srgb&dl=pexels-mehmet-turgut-kirkgoz-13068894.jpg&fm=jpg" alt="" className="homeGuestsImg" />
                <span className="homeuestsName">Name2</span>
                <span className="homeuestsCity">Indira Nagara</span>
                <span className="homeuestsPrice">$140</span>
                <div className="homeGuestsRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="homeGuestsItem">
                <img src="https://images.pexels.com/photos/8460475/pexels-photo-8460475.jpeg?cs=srgb&dl=pexels-esra-%C3%B6zer-8460475.jpg&fm=jpg" alt="" className="homeGuestsImg" />
                <span className="homeuestsName">Name3</span>
                <span className="homeuestsCity">Majestic</span>
                <span className="homeuestsPrice">$120</span>
                <div className="homeGuestsRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="homeGuestsItem">
                <img src="https://images.pexels.com/photos/8391457/pexels-photo-8391457.jpeg?cs=srgb&dl=pexels-i%CC%87lknur-kayahan-8391457.jpg&fm=jpg" alt="" className="homeGuestsImg" />
                <span className="homeuestsName">Silk Board</span>
                <span className="homeuestsCity">Bengalure</span>
                <span className="homeuestsPrice">$130</span>   
                <div className="homeGuestsRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default HomeGuests;