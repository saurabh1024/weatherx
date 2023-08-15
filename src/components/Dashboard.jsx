import { useState } from 'react'
import { getWeatherInfo } from '../utils/Api'
import { Kpi } from './Kpi'
import  Week  from './Week'
import { layers, siteMsg, mockDataPune } from '../utils/constants'
import moment from 'moment/moment'
import sun from '../assets/cloudy-day.png'
import weatherbg from '../assets/weatherbg.png'
import searchIcon from '../assets/search_icon.svg'
import MapComponent from './MapComponent'

const Dashboard = () => {
    const [input, setInput] = useState("")
    const [responseData, setResponseData] = useState([])
    const [showFlag, setShowFlag] = useState(false)

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const getWeather = async (e) => {
        if (input) {
            e.preventDefault()
            let result = await getWeatherInfo(input)
            setResponseData(result)
            setShowFlag(true)
        }
    }
    return (
        <div className='pb-20'>
            <div className='sm:flex sm:container sm:border-4 rounded-2xl'>
                <div className='sm:w-1/3 p-7'>
                    <div className='border-2 flex justify-between p-2'>
                        <input name='location' className='focus:outline-none w-full' type='text' placeholder='Search for a location' value={input} onChange={handleInput} />
                        <button name='searchBtn' onClick={getWeather}>
                            <img src={searchIcon} alt='search' height='30px' width='30px' />
                        </button>
                    </div>
                    <img src={sun} alt='sun_image' width="70%" className='sm:pl-20' />
                    <div className='text-lg'>
                        <div className='flex'>
                            <div>
                                <h1 className='text-2xl sm:text-2xl md:text-6xl pt-3 pl-2'>{responseData?.main?.temp ? responseData?.main?.temp : mockDataPune?.main?.temp}<sup>°C</sup></h1>
                                <div className='text-l sm:text-md pt-3 pl-2 normal mb-8'>
                                    {moment().format('dddd, hh:mm a')}
                                </div>
                            </div>
                            {!showFlag &&<div className="pt-12">
                                <div className='text-4xl lg:text-4xl pt-2 lg:pt-5 pl-10 mb-8 capitalize'>
                                    {mockDataPune?.name}, {mockDataPune?.sys?.country}
                                </div>
                            </div>}
                        </div>
                        

                        {showFlag && 
                        <> 
                            <div className='text-xl lg:text-4xl pt-2 lg:pt-5 pl-2 mb-8 capitalize'>
                                Feels like {responseData?.main?.temp}°C. {responseData?.weather[0]?.description}. 
                            </div>
                            <div className='w-full border-2 rounded-xl px-3 py-5 flex-column justify-center'>
                                <div className='lg:text-2xl text-sm font-semibold pb-1 pl-2 2xl:pl-20'>
                                    Dont miss the sunset.
                                </div>
                                <div className='lg:text-xl text-sm text-left mb-5 pl-2 2xl:pl-20'>
                                    <p>
                                        Sunrise was at {moment.unix(responseData?.sys?.sunrise).format("hh:mm a")}
                                    </p>
                                    Sunset will be at {moment.unix(responseData?.sys?.sunset).format("hh:mm a")}
                                </div>
                            </div>
                        </>}
                    </div>
                </div>
                {showFlag ?
                <div className='bg-stone-100 p-7 sm:w-2/3'>
                    <Kpi responseData={responseData} />
                    <Week lat={responseData?.coord?.lat} lon={responseData?.coord?.lon} start={responseData?.dt} />
                </div>
                :
                <div className='bg-stone-100 p-7 sm:w-2/3'>
                    <div className='w-full px-3 py-5 flex-column justify-center'>
                        <p className='lg:text-lg text-sm font-semibold pb-1'>Weather data</p>
                        <div className='lg:text-2xl text-sm font-semibold pb-1'>
                            {siteMsg}
                        </div>
                    </div>
                    <div className='text-2xl pt-5 pl-2 mb-8 capitalize'>
                        <img src={weatherbg} alt='sun_image' className='block lg:pl-10 h-60' />
                    </div>
                </div>
                }
            </div>
            <div className='container border-4 rounded-2xl mt-10'>
                <MapComponent lat={responseData?.coord?.lat} lon={responseData?.coord?.lon} layers={layers} />
            </div>
        </div>
    )
}

export default Dashboard