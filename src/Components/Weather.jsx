import axios from "axios";
import cities from "../../cities";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

const ApiKey = "86698979db9f4f92a6455021240411";

export default function Weather() {
  const [start,setStart]=useState(0)
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setCity("Ardabil");
    setStart(1)
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=Ardabil&aqi=no`
      )
      .then(function (response) {
        setWeather((prev) => response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handleSelect(e) {
    setIsLoading(true);
    setCity(e.target.value);
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${e.target.value}&aqi=no`
      )
      .then(function (response) {
        setWeather((prev) => response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="mb-32">
        <select
          onChange={handleSelect}
          className="w-64 font-semibold bg-skin-fill text-skin-common border border-skin-base text-sm rounded-lg justify-center mx-auto block p-2.5"
          name="city"
          id="city"
        >
          {cities.map((city) => (
            <option key={city.name} value={city.name} id={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      {isLoading || start === 0 ? (
        <>
          <Skeleton
            sx={{ bgcolor:"#ffffffc9" }}
            className="mb-10 rounded-lg"
            variant="rectangular"
            width={384}
            height={40}
          />
          <Skeleton
            sx={{ bgcolor: "#ffffffc9" }}
            className="mb-10 rounded-lg"
            variant="rectangular"
            width={384}
            height={40}
          />
          <Skeleton
            sx={{ bgcolor: "#ffffffc9" }}
            className="mb-10 rounded-lg"
            variant="rectangular"
            width={384}
            height={40}
          />
        </>
      ) : (
        <div className="flex flex-col gap-8 text-2xl font-bold text-skin-common w-64 md:w-96">
          <div className="flex justify-between items-center">{city} <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/city-block.png" alt="city-block"/></div>
          <div className="flex justify-between items-center">{weather.current["temp_c"]} C <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/thermometer.png" alt="thermometer"/></div>
          <div className="flex justify-between items-center">{weather.current.condition.text} <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/happy-cloud.png" alt="happy-cloud"/></div>
        </div>
      )}
      <div className="flex flex-col">
        <div></div>
      </div>
    </div>
  );
}
