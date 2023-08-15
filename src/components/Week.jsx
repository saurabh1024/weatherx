import { useState } from 'react'
import {getWeeklyForecast, getPastWeekForecast} from '../utils/Api'
import { Day } from './Day'

const Week = ({lat,lon,start}) => {

const [weekData, setWeekData] = useState([])
const [flag, setFlag] = useState(false)

const getWeekData = async() =>{
    let uniqueDates = []
    let uniqueTimes = []
    let data = []
    let result = await getWeeklyForecast(lat,lon)
    // this will push only unique dates
    result.list.forEach(item => {
        let justDate = item.dt_txt.split(' ')[0];
        let justTime = item.dt_txt.split(' ')[1];
        if (!uniqueDates.includes(justDate)) {
            uniqueDates.push(justDate);
            uniqueTimes.push(justTime);
            data.push(item);
        }
    })
    setWeekData(data)
    setFlag(true)
}
const getPastWeekData = async() =>{
    let result = await getPastWeekForecast(lat,lon,start)
    setWeekData(result.list)
    if(result?.list?.length > 0){
        setFlag(true)
    }
}
  return (
    <div className=''>
        <div className='pb-5'>
            <h1 className='pt-5 text-xl'>You might also want to check the Forecast for this week or data for past week.</h1>
            <button className='mt-3 2xl:w-1/5 w-1/2 xl:w-1/3 border-2 rounded-l-2xl px-5 py-1 bg-white hover:border-slate-400' onClick={() => getWeekData(lat,lon)}>Upcoming Week</button>
            <button className='mt-3 2xl:w-1/5 w-1/2 xl:w-1/3 border-2 rounded-r-2xl px-5 py-1 bg-white hover:border-slate-400' onClick={() => getPastWeekData(lat,lon)}>Past Week</button>
        </div>
        {flag &&
        <div className='mt-3'>
            <h1 className='text-2xl pb-3'>Upcoming week forecast</h1>
            <table className='bg-white w-full table-fixed text-center overflow-y-auto h-32'>
                <thead>
                    <tr>
                        <th className='border-2 border-r-0 rounded py-3'>Date and Time</th>
                        <th className='border-2 border-r-0 border-l-0 rounded'>Temperature</th>
                        <th className='border-2 border-l-0 rounded'>Forecast</th>
                    </tr>
                </thead>
                
                <tbody>
                    {weekData?.map((dateList,index) => {
                        return <Day key={index} date={dateList?.dt_txt} data={dateList} />
                    })}
                </tbody>
            </table>
        </div>}       
    </div>
  )
}

export default Week
