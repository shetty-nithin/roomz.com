import useFetch from "../../hooks/useFetch";
import "./PropertyList.css";

const PropertyList = () => {
    const {data, loading, error } = useFetch("/v1/hotels/countByType");
    const images = [
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-338504.jpg&fm=jpg",
        "https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?cs=srgb&dl=pexels-jimmy-chan-1458457.jpg&fm=jpg",
        "https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?cs=srgb&dl=pexels-francesco-ungaro-96444.jpg&fm=jpg",
        "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?cs=srgb&dl=pexels-pixabay-53464.jpg&fm=jpg",
        "https://images.pexels.com/photos/774042/pexels-photo-774042.jpeg?cs=srgb&dl=pexels-min-an-774042.jpg&fm=jpg"
    ];
    
    return (
        <div className="pList">
            {loading 
                ? ("Loading...") 
                : (<>
                    {data && images.map((img, i) => (
                        <div className="pListItem" key={i}>
                            <img src={img} alt="" className="pListImg" />
                            <div className="pListTitle">
                                <h1>{data[i]?.type}</h1>
                                <h2>{data[i]?.count} {data[i]?.type}</h2>
                            </div>
                        </div>
                    ))}
                </>)
            }
        </div>
    )
}

export default PropertyList;