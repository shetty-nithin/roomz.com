import "./HotelsPage.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const HotelsPage = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options)

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
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="hsItem">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (<DateRange
                                onChange={item => setDate([item.selection])} 
                                minDate={new Date()}
                                ranges={date}
                            />)}
                        </div>
                        <div className="hsItem">
                            <label>Options</label>
                            <div className="hsOptions">
                                <div className="hsOptionItem">
                                    <span className="hsOptionText">Min Price<small> per night</small></span>
                                    <input type="number" className="hsOptionInput" />
                                </div>
                                <div className="hsOptionItem">
                                    <span className="hsOptionText">Max Price<small> per night</small></span>
                                    <input type="number" className="hsOptionInput" />
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
                        <button>Search</button>
                    </div>
                    <div className="hotelsResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelsPage;