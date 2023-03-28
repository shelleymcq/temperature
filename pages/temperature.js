import { useState } from 'react'
import { Shadows_Into_Light } from 'next/font/google'
import Table from 'rc-table'

const shadows = Shadows_Into_Light({ 
  subsets: ['latin'],
  weight: ['400'],
})

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: 200,
  },
  {
    title: 'Temperature in C',
    dataIndex: 'value',
    key: 'value',
    width: 100,
  }
]

const noaaToken = "oTpqrhNkWQBIbOWgrvJrCUeJdRKIhbac";
// TODO: replace hardcoded city and year with user inputs
const city = 'CITY:US060018';
const year = 2002;

const initialData = [
  {
    date: '',
    value: '',
  }
]

const Temperature = () => {
  const [temperatures, setTemperatures] = useState(initialData)
  // Step 1: fetch station code using input city
  // Step 2: fetch year's data with station code
  // Step 3: display date and temps in table
  const fetchTemps = async () => {
    try {
      const res = await fetch(
        "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=TMAX&locationid=" +
        city +
        "&startdate=" +
        year +
        "-01-01&enddate=" +
        year +
        "-12-31&limit=1",
          {
            headers: {
              token: noaaToken
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
              token: noaaToken
            },
          }
      );
      const yearData = await data.json();
      const tableData = yearData.results;
      console.log(tableData);  // logs array of day objects with 'date' = date and 'value' = temperature in celcius
      setTemperatures(tableData);
    } catch (err) {
        console.error(err);
    }
  }

  return (
    <div className='bg-blue-300 flex flex-col items-center pt-20 min-h-screen'>
      <div className={shadows.className}>
        <h2 className='text-2xl font-bold text-cyan-600'>Temperature by Year</h2>
      </div>
      <div>
        <p>inputs will go here</p>
        <button onClick={fetchTemps}>Submit</button>
        <Table columns={columns} data={temperatures} />
      </div>
    </div>
  )
}

export default Temperature