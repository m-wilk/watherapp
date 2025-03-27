import axios from "axios";
import { useState } from "react";
import { ReactComponent as Cloud } from "../../../assets/img/cloud.svg";

const Home = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=a048466051ba8c29e802d102981c01d7&units=metric`
      )
      .then((response) => {
        if (Array.isArray(response.data.list) && response.data.list.lenght > 0) {
          setCity(response.data.list[0].name);
          setTemp(response.data.list[0].main.temp);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="bg-winter bg-no-repeat bg-cover bg-center">
        <div className="container py-24 space-y-10">
          <h1 className="text-primary text-5xl">OpenWather</h1>
          <h2 className="text-white text-2xl max-w-[400px]">
            Weather forecasts, nowcasts and history in a fast and elegant way
          </h2>
        </div>
      </div>
      <div className="bg-light-gray py-10">
        <div className="container">
          <form onSubmit={onSubmitHandler} className="flex items-center gap-40">
            <div className="flex flex-[6]">
              <input
                className="w-full focus:outline-none px-4 py-2 rounded-l"
                placeholder="Search city"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
              <button className="bg-gray-700 px-4 py-2 rounded-r text-white">
                Search
              </button>
            </div>
            <div className="flex-[4]">inna tresc</div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-[4fr_6fr] py-24 container">
        <div>
          <div className="mb-8">
            <span className="text-red-400">Dec 30, 11:56am</span>
            <h2 className="text-2xl font-bold">{city}</h2>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Cloud />
            <span className="text-4xl">{temp}</span>
          </div>
          <div className="space-y-4">
            <p className="font-bold">
              Feels like 5°C. Scattered clouds. Moderate breeze
            </p>
            <ul className="text-gray-600  border-l-2 border-red-400 pl-4 flex flex-wrap max-w-[400px]">
              <li className="me-4">
                <span>6.2m/s SW</span>
              </li>
              <li className="me-4">
                <span>Humidity: 83%</span>
              </li>
              <li className="me-4">
                <span>Dew point: 5°C</span>
              </li>
              <li className="me-4">
                <span>1028hPa</span>
              </li>
              <li className="me-4">
                <span>UV: 1</span>
              </li>
              <li className="me-4">
                <span>Visibility: 10.0km</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <iframe
            width="600"
            height="250"
            loading="lazy"
            allowfullscreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${
              city || "Rudnik nad Sanem"
            }&zoom=10&maptype=roadmap`}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
