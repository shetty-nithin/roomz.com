import useFetch from "../../hooks/useFetch";
import "./Featured.css";

const Featured = () => {
    const {data, loading, error } = useFetch("/v1/hotels/countByCity?cities=Kundapura,Manglore");

    return (
        <div className="featured">
            {loading ? "Loading please wait" : 
            <>
                <div className="featuredItem">
                    <img src="https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?cs=srgb&dl=pexels-umar-mukhtar-1538177.jpg&fm=jpg" alt="" className="featuredImg" />
                    <div className="featuredTitles">``
                        <h1>Bengaluru</h1>
                        <h2>{data[0]}</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg?cs=srgb&dl=pexels-yogendra-singh-1542620.jpg&fm=jpg" alt="" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>Delhi</h1>
                        <h2>{data[1]}</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://images.pexels.com/photos/3893788/pexels-photo-3893788.jpeg?cs=srgb&dl=pexels-raghav-modi-3893788.jpg&fm=jpg" alt="" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>Mubai</h1>
                        <h2>{data[2]}</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://images.pexels.com/photos/774570/pexels-photo-774570.jpeg?cs=srgb&dl=pexels-anirban-ghosh-774570.jpg&fm=jpg" alt="" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>Kolkat</h1>
                        <h2>{data[3]}</h2>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default Featured;