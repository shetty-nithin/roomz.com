import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./Reserve.css";


const Reserve = ({setOpenFloor, hotelId}) => {
    const [selectedRooms, setSelectedRooms] = useState([]);
    const { data } = useFetch(`/v1/hotels/rooms/${hotelId}`);
    const { dates } = useContext(SearchContext);

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        let list = [];
        const date = new Date(start.getTime());
        
        while(date <= end){
            list.push(new Date(date).getTime());
            date.setDate(date.getDate()+1);
        }
        return list;
    }

    const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some(date => {
            allDates.includes(new Date(date).getTime())
        });
        return !isFound;
    }

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;

        setSelectedRooms(checked 
            ? [...selectedRooms, value] 
            : selectedRooms.filter(item => (item !== value))
        )
    };

    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            await Promise.all(selectedRooms.map(roomId => {
                const res = axios.put(`/v1/rooms/availability/${roomId}`,{dates: allDates});
                return res.data;
            }));

            const findRoomNumbers = (roomNumbers) => {
                let rooms = [];

                roomNumbers.map(roomNumber => {
                    rooms.push(roomNumber.number);
                });
                return rooms;
            }

            const findRoomId = (roomNumbers) => {
                let roomIds = [];

                roomNumbers.map(id => {
                    roomIds.push(id._id);
                });
                return roomIds;
            }

            await Promise.all(data.map(item => {
                const res = axios.post("/v1/bookings", {
                    totalCost: allDates.length*item.price,
                    hotelId: item.hotel,
                    roomType: item.title,
                    roomNumbers: {number: findRoomNumbers(item.roomNumbers), id: findRoomId(item.roomNumbers)},
                    startDate: item.startDate,
                    endDate: item.endDate
                });
                return res.data;
            }))

            setOpenFloor(false);
            navigate("/");
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="reserve">
            <div className="reserveContainer">
                <FontAwesomeIcon icon={faCircleXmark} className="reserveClose" onClick={() => setOpenFloor(false)}/>
                <span>Select Room:</span>
                {data.map(item => (
                    <div className="reserveItem">
                        <div className="reserveItemInfo">
                            <div className="reserveTitle">{item.title}</div>
                            <div className="reserveDesc">{item.desc}</div>
                            <div className="reserveMaxPeople">max people : <b>{item.maxPeople}</b></div>
                            <div className="reservePrice">Rs {item.price}</div>
                        </div>
                        <div className="reserveSelectRooms">
                            {item.roomNumbers.map(roomNumber => (
                                <div className="room">
                                        <label>{roomNumber.number}</label>
                                        <input type="checkbox" value={roomNumber._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)}/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className="reserveButton">Reserve Now!</button>
            </div>
        </div>
    )
}

export default Reserve;