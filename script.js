// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'b45e96323fmshf5e4bc50d3b8a90ple091djsnfb21cde4eb87',
// 		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };


// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)

// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));



// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'c6a440d2ccmsha20d2718057826ap1d2d97jsn3ac556d03780',
// 		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'c6a440d2ccmsha20d2718057826ap1d2d97jsn3ac556d03780',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = async (city) => {
    cityName.innerHTML = city;

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Parse response as JSON

        // Access properties from the parsed JSON data
        cloud_pct.innerHTML = data.cloud_pct;
        temp.innerHTML = data.temp;
        temp2.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity.innerHTML = data.humidity;
        humidity2.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed.innerHTML = data.wind_speed;
        wind_speed2.innerHTML = data.wind_speed;
        wind_degrees.innerHTML = data.wind_degrees;
        // sunrise.innerHTML = data.sunrise;
        sunset.innerHTML = data.sunset;

    } catch (error) {
        console.error(error);
    }
};

const fetchWeather = async () => {
    await getWeather("Delhi");
};

// Call the async function
fetchWeather();

submit.addEventListener("click", async (e) => {
    e.preventDefault();
    await getWeather(city.value);
});
