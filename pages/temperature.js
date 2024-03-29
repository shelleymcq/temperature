import { useState } from "react";
import { Shadows_Into_Light } from "next/font/google";
import Table from "rc-table";
import Autocomplete from "@/components/Autocomplete";
import cities from "../data/Cities";
import cityIDs from "../data/CityIDs";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorMessage from "@/components/ErrorMessage";

import { CSVLink, CSVDownload } from "react-csv";

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 250,
    align: "center",
    className: "bg-slate-400 pt-1", // add all my tailwind classes here
  },
  {
    title: "High Temperature in F",
    dataIndex: "value",
    key: "value",
    width: 250,
    align: "center",
    className: "bg-slate-400",
  },
];

const noaaToken = "oTpqrhNkWQBIbOWgrvJrCUeJdRKIhbac";

const initialData = [
  {
    date: "",
    value: "",
  },
];

const celciusToFahrenheit = (celcius) => {
  const fahrenheit = ((celcius * 9) / 5 + 32).toFixed(1);
  return fahrenheit;
};

const Temperature = () => {
  const [temperatures, setTemperatures] = useState(initialData);
  const [city, setCity] = useState("");
  const [year, setYear] = useState("");
  const [cityID, setCityID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);
  const [downloadAvailable, setDownloadAvailable] = useState(false);

  const getCityFromChild = (input) => {
    setCity(input);
    getCityID(input);
  };

  const getCityID = (city) => {
    for (let i = 0; i < cityIDs.length; i++) {
      if (city === cityIDs[i].name) {
        setCityID(cityIDs[i].id);
      }
    }
  };

  const handleYearChange = (event) => {
    event.preventDefault();
    setYear(event.target.value);
  };

  const fetchTemps = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTemperatures(initialData);
    try {
      const res = await fetch(
        "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=TMAX&locationid=" +
          cityID +
          "&startdate=" +
          year +
          "-01-01&enddate=" +
          year +
          "-12-31&limit=1",
        {
          headers: {
            token: noaaToken,
          },
        }
      );
      const stationData = await res.json();
      const stationID = stationData.results[0].station;
      console.log(stationID);
      const data = await fetch(
        "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datacategoryid=TEMP&datatypeid=TMAX&stationid=" +
          stationID +
          "&startdate=" +
          year +
          "-01-01&enddate=" +
          year +
          "-12-31&limit=1000&units=metric",
        {
          headers: {
            token: noaaToken,
          },
        }
      );
      const yearData = await data.json();
      const tableData = await yearData.results;
      const convertedTemps = await tableData.map((item) => {
        return { ...item, value: celciusToFahrenheit(item.value) };
      });
      const temperatureData = convertedTemps.map(({ date, value }) => ({
        date,
        value,
      }));

      setTemperatures(temperatureData);
      setDownloadAvailable(true);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setErrorLoading(true);
      console.error(err);
    }
  };

  return (
    <div className="bg-slate-200 flex flex-col items-center pt-20 min-h-screen">
      <div className={shadows.className}>
        <h2 className="text-2xl font-bold text-sky-800 pt-4">
          Temperature by Year
        </h2>
      </div>

      <form onSubmit={fetchTemps} className="search py-4 text-slate-700">
        <div>
          <label>
            US City
            <Autocomplete
              suggestions={cities}
              getCityFromChild={getCityFromChild}
            />
          </label>
        </div>
        <div>
          <label>
            Year
            <input
              type="text"
              onChange={handleYearChange}
              value={year}
              className="w-16 h-6 m-2"
            />
          </label>
        </div>
        <div>
          <button
            onClick={(e) => setDownloadAvailable(false)}
            className="h-6 px-4 m-3 text-slate-200 bg-sky-900 rounded-full hover:bg-sky-800"
          >
            Search
          </button>
        </div>
      </form>
      <p className="text-sm text-slate-700 pl-1">
        Data provided by the National Oceanic and Atmospheric Administration
        Climate Data API.
      </p>
      <p className="text-xs text-slate-500 pb-4 pl-1">
        Please note that it may take a few moments for the table to update.
      </p>
      {downloadAvailable ? (
        <CSVLink
          data={temperatures}
          filename={"temperatures.csv"}
          className="h-6 px-4 m-3 text-slate-200 bg-sky-900 rounded-md hover:bg-sky-800"
        >
          Download Temperatures as a CSV file
        </CSVLink>
      ) : null}

      <div className="p-4 text-xs text-slate-800 md:text-base lg:text:lg">
        <Table columns={columns} data={temperatures} />
      </div>
      {isLoading ? <LoadingSpinner /> : null}
      {errorLoading ? <ErrorMessage /> : null}
    </div>
  );
};

export default Temperature;
