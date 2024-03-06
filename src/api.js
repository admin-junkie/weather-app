

const getWeather = async (city) => {
    const apiKey = 'a878faac696d32ee26d2a089496b7e29';
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then( (res) => res.json())
    .then((json) =>{
        return json;
    })
}

export default getWeather;