import { useEffect, useState } from "react";
import "./App.css";
import DateInput from "./components/dateinput/DateInput";
import Navbar from "./components/navbar/Navbar";
import TextInput from "./components/textInput/TextInput";
import TravelType from "./components/travelType/TravelType";
import PassengerTypeInput from "./components/passengertypeinput/PassengerTypeInput";
import Button from "./components/button/Button";
import allData from "../src/assets/data/LHR_CDG_ADT1_TYPE_1.txt";

function App() {
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [passengerType, setPassengerType] = useState("adult");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handlePassengerTypeChange = (e) => {
    setPassengerType(e.target.value);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(allData);
      const textData = await response.text();
      const jsonData = JSON.parse(textData);
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <h1 className=" mx-20 my-5 text-3xl font-bold">Master Price</h1>
      <hr />
      <div className=" mx-20 flex justify-center mt-5 items-center relative pb-5 after:absolute after:w-full after:h-[1px] after:bg-[#818CF8] after:left-0 after:right-0 after:bottom-0">
        <TravelType>Round trip</TravelType>
        <TravelType background>One Way</TravelType>
        <TravelType>Multi City</TravelType>
      </div>
      <div className="mx-20">
        <div className=" mt-2 flex gap-3 mb-4 relative pb-3 after:absolute after:w-full after:h-[1px] after:bg-[#818CF8] after:left-0 after:right-0 after:bottom-0">
          <TextInput type="text" placeholder="From" />
          <TextInput type="text" placeholder="To" />
          <DateInput
            type="date"
            id="dateInput"
            value={date}
            onChange={handleDateChange}
          />
          <PassengerTypeInput
            id="passengerTypeSelect"
            value={passengerType}
            onChange={handlePassengerTypeChange}
          />
          <TextInput type="number" placeholder="0" />
        </div>
        <div className=" flex justify-end relative pb-2 after:absolute after:w-full after:h-[1px] after:bg-[#818CF8] after:left-0 after:right-0 after:bottom-0">
          <Button clickHandler={fetchData}>SEARCH</Button>
        </div>
      </div>
      {data.length < 1 || data === undefined || data === null ? null : (
        <div className="mx-20">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <p className=" mb-5">{data.message}</p>
              <table className="w-full text-[#4D5374]">
                <thead className="bg-[#E5E7EB] ">
                  <tr>
                    <th className="p-2 font-normal">FLIGHT</th>
                    <th className="p-2 font-normal">AIRCRAFT</th>
                    <th className="p-2 font-normal">CLASS</th>
                    <th className="p-2 font-normal">FARE</th>
                    <th className="p-2 font-normal">ROUTE</th>
                    <th className="p-2 font-normal">Departure</th>
                    <th className="p-2 font-normal">Arrival</th>
                    <th className="p-2 font-normal">Duration</th>
                    <th className="p-2 font-normal">Price</th>
                  </tr>
                </thead>

                <tbody>
                  {data.flightOffer?.map((value, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? "bg-[#F3F4F6]"
                          : "bg-[#E5E7EB] border-[#F87171] border-b-[1px] border-t-[1px]"
                      }
                    >
                      <td className="p-2">
                        {value.itineraries[0].segments.map((item, index) => (
                          <div key={index}>
                            <p>
                              {item.carrierCode}
                              <span> {item.aircraft}</span>
                            </p>
                          </div>
                        ))}
                      </td>
                      <td className="p-2">
                        {value.itineraries[0].segments.map((item, index) => (
                          <div key={index}>
                            <p>{item.flightNumber}</p>
                          </div>
                        ))}
                      </td>
                      <td className="p-2">
                        {value.class[0].map((item, index) => (
                          <div key={index}>
                            <p>{item}</p>
                          </div>
                        ))}
                      </td>
                      <td className="p-2">
                        {value.fareBasis[0].map((item, index) => (
                          <div key={index}>
                            <p>{item}</p>
                          </div>
                        ))}
                      </td>
                      <td className="p-2">
                        {value.itineraries[0].segments.map((item, index) => (
                          <div key={index}>
                            <span>{item.departure.iataCode}</span>-
                            <span>{item.arrival.iataCode}</span>{" "}
                          </div>
                        ))}
                      </td>
                      <td className="p-2">
                        {value.itineraries[0].segments.map((item, index) => (
                          <div key={index}>
                            <p>{item.departure.at}</p>{" "}
                          </div>
                        ))}
                      </td>
                      <td className="p-2">
                        {value.itineraries[0].segments.map((item, index) => (
                          <div key={index}>
                            <p>{item.arrival.at}</p>{" "}
                          </div>
                        ))}
                      </td>
                      <td className="p-2">{value.itineraries[0].duration}</td>
                      <td className="p-2">{value.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
