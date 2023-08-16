import moment from "moment"
import sunny from "../assets/sunny.png"
import cloudy from "../assets/cloudy.png"
import rainy from "../assets/rainy.png"
export const Day = ({date, data}) => {
  return (
    <tr className="border-2 text-center rounded px-3 py-2">
        <td className="p-3">
            {moment(date).format('dddd') === moment().format('dddd') ? 'Today' : moment(date).format('dddd')}
        </td>
        <td className="flex-column justify-center items-center">
            <div className="p-3 border-t-0 border-b-0">{data?.main?.temp_min} °C to {data?.main?.temp_max} °C</div>
        </td>
        <td className="p-3 inline-flex align-self-center">
            {data?.weather[0].description.includes('sun')?
            <div>
                <img className="" src={sunny} alt="sunnyDay"/>
            </div>
            :
            <div>
                {data?.weather[0].description.includes('rain')?
                <div>
                    <img src={rainy} alt="rainyDay"/>
                </div>
                :
                <div>
                    <img src={cloudy} alt="cloudyDay" />
                </div>}
            </div>
            }
        </td>
    </tr>
  )
}
