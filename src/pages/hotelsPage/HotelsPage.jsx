import "./HotelsPage.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const HotelsPage = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [propertyType, setPropertyType] = useState(location.state.propertyType);
    const [dates, setDates] = useState(location.state.dates);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const {data, loading, refetchData } = useFetch(`/v1/hotels?city=${destination || "Banglore"}&min=${min || 0}&max=${max || 9999}&type=${propertyType || "hotel"}`);

    const handleClick = () => {
        refetchData()
    }
    
    return (
        <div>
            <Navbar/>
            <Header type="hotelsList"/>
            <div className="hotelsContainer">
                <div className="hotelsWrapper">
                    <div className="hotelsSearch">
                        <h1 className="hsTitle">Search</h1>

                        <div className="hsItem">
                            <label>Destination</label>
                            <input onChange={e => setDestination(e.target.value)} placeholder={destination} type="text" />
                        </div>

                        <div className="hsItem">
                            <label>Property Type</label>
                            <input onChange={e => setPropertyType(e.target.value)} placeholder={propertyType} type="text" />
                        </div>

                        <div className="hsItem">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (<DateRange
                                onChange={item => setDates([item.selection])} 
                                minDate={new Date()}
                                ranges={dates}
                            />)}
                        </div>

                        <div className="hsItem">
                            <label>Options</label>
                            <div className="hsOptions">
                                <div className="hsOptionItem">
                                    <span className="hsOptionText">Min Price<small> per night</small></span>
                                    <input type="number" className="hsOptionInput" onChange={e => setMin(e.target.value)}/>
                                </div>
                                <div className="hsOptionItem">
                                    <span className="hsOptionText">Max Price<small> per night</small></span>
                                    <input type="number" className="hsOptionInput" onChange={e => setMax(e.target.value)}/>
                                </div>
                                <div className="hsOptionItem">
                                    <span className="hsOptionText">Adult</span>
                                    <input type="number" min={1} className="hsOptionInput" placeholder={options.adult}/>
                                </div>
                                <div className="hsOptionItem">
                                    <span className="hsOptionText">Children</span>
                                    <input type="number" min={0} className="hsOptionInput" placeholder={options.children}/>
                                </div>
                                <div className="hsOptionItem">
                                    <span className="hsOptionText">Room</span>
                                    <input type="number" min={1} className="hsOptionInput" placeholder={options.room}/>
                                </div>
                            </div>
                        </div>
                        
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="hotelsResult">
                        {loading 
                            ? "Loading... " 
                            : <>
                                {data.map(item => (
                                    <SearchItem item={item} key={item._id}/>
                                ))}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelsPage;