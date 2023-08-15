
export const Kpi = ({responseData}) => {
return (
    <div className="container">
        <h1 className="text-xl mb-6">Today's Hightlights</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">        
            <div className="border-2 bg-white rounded-xl h-40 px-5 text-center pt-5">
                <h1 className="text-slate-500 font-normal p-2">Humidity</h1>
                <span className="text-4xl">{responseData?.main?.humidity}</span><span className="p-1">%</span>
            </div>
            <div className="border-2 bg-white rounded-xl h-40 px-5 text-center pt-5">
                <h1 className="text-slate-500 font-normal p-2">Wind Speed</h1>
                <span className="text-4xl">{responseData?.wind?.speed} </span><p>m/s</p>
            </div>
            <div className="border-2 bg-white rounded-xl h-40 px-5 text-center pt-5">
                <h1 className="text-slate-500 font-normal p-2">Visibility</h1>
                <span className="text-4xl">{responseData?.visibility/1000}</span><p>kms</p>
            </div>
            <div className="border-2 bg-white rounded-xl h-40 px-5 text-center pt-5">
                <h1 className="text-slate-500 font-normal p-2">Pressure</h1>
                <span className="text-4xl">{responseData?.main?.pressure}</span><p>hPa</p>
            </div>
        </div>
    </div>   
  )
}
