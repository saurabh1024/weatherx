export const layers = ['temp_new', 'precipitation_new', 'wind_new', 'clouds_new', 'pressure_new', 'humidity_new']
export const API_KEY = '8d2a110b6ad468ae1a0e459757cf659d'
export const siteMsg = 'For any location, city, geographic coordinates on the globe, available on your fingertips.'
export const mockDataPune = {
    "coord": {
        "lon": 73.8553,
        "lat": 18.5196
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 21.83,
        "feels_like": 22.42,
        "temp_min": 21.83,
        "temp_max": 21.83,
        "pressure": 1011,
        "humidity": 90,
        "sea_level": 1011,
        "grnd_level": 949
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.63,
        "deg": 248,
        "gust": 3.01
    },
    "clouds": {
        "all": 66
    },
    "dt": 1692130077,
    "sys": {
        "country": "IN",
        "sunrise": 1692146789,
        "sunset": 1692192706
    },
    "timezone": 19800,
    "id": 1259229,
    "name": "Pune",
    "cod": 200
}
