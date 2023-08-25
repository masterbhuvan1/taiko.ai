import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
interface country {
  countryInfo: {
    _id: "";
    lat: number;
    long: number;
  };
  country: string;
  active: number;
  recovered: number;
  deaths: number;
}
export default function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/countries"
        );
        setCountriesData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const zoom = 2;

  return (
    <div className="bg-white mb-10 p-4 rounded-lg relative shadow-md">
      <h2 className="text-xl font-semibold mb-4">COVID-19 Map</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MapContainer center={[20, 0]} zoom={zoom} className="w-full h-80">
          <TileLayer
            className="absolute"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {countriesData.map((country: country) => (
            <Marker
              key={country.countryInfo._id}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <h3>{country.country}</h3>
                  <p>Active Cases: {country.active}</p>
                  <p>Recovered: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}
