// // Variables
// let cityInput = document.querySelector(".city-input");
// let searchButton = document.querySelector(".search-btn");
// let API_KEY = "116c19d6b45447cd90c93656243006"; // Removed extra space at the end
// let API_KEY_members = "e60337f3d4306621f144d7e58092481c";
// let cityName;

// // Function to get weather data
// const getWeatherDataList = (cityName, lat, lon) => {
//     let WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY_members}`;

//     fetch(WEATHER_API_URL)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             // Process weather data as needed
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//             alert(`An error occurred while fetching the weather data`);
//         });
// };

// // Function to get city coordinates and initiate weather data fetch
// const getcitycoordinate = () => {
//     cityName = cityInput.value.trim();
    
//     if (!cityName) {
//         alert('Please enter a city name');
//         return;
//     }

//     let GEOCODING_API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`;

//     fetch(GEOCODING_API_URL)
//         .then(res => res.json())
//         .then(data => {
//             if (data.error) {
//                 alert(`No Coordinates found for ${cityName}`);
//                 return;
//             }
//             const { name, lat, lon } = data.location;
//             getWeatherDataList(name, lat, lon);
//         })
//         .catch(error => {
//             console.error('Error fetching coordinates:', error);
//             alert(`An error occurred while fetching the coordinates`);
//         });
// };

// // Event listener for search button click
// searchButton.addEventListener("click", getcitycoordinate);



    // DOM is fully loaded and can safely access elements

    // Selecting DOM elements
// Selecting DOM elements
// const cityInput = document.querySelector(".city-input");
// const searchButton = document.querySelector(".search-btn");
// const weatherCardsDiv = document.querySelector(".weather-cards")
// let moo = document.querySelector(".cards")
// // API key
// const API_KEY = "116c19d6b45447cd90c93656243006";
// let API_KEY_members = "e60337f3d4306621f144d7e58092481c";
// let createWheatherCard = (weartherItem) => {
//     return ` <li class="card">
//     <h2> ${weartherItem.dt_txt.split(" ")}</h2>
//     <i class="fa-solid fa-cloud-sun-rain"></i> 
//     <h4 class="mt-4">Temp: ${(weartherItem.main.temp - 273.15).toFixed(2)}C</h3>
//     <h4>Wind: ${weartherItem.wind.speed} M/S</h3>
//     <h4>Humidity: ${weartherItem.main.humidity}%</h3>
//     </li>`;
// }
// // Function to fetch weather data
// const getWeatherDataList = (cityName, lat, lon) => {
//     // Constructing the URL for OpenWeatherMap API
//     const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY_members}`;

//     fetch(WEATHER_API_URL)
//         .then(res => res.json())
//         .then(data => {
//             // Processing weather data to get unique forecasts for the next two days
//             const uniqueForecastDates = [];
//             const twoDaysForecast = data.list.filter(forecast => {
//                 const forecastDate = new Date(forecast.dt_txt).getDate();
//                 if (!uniqueForecastDates.includes(forecastDate)) {
//                     uniqueForecastDates.push(forecastDate);
//                     return true;
//                 }
//                 return false;
//             });

//             console.log(twoDaysForecast);
//             twoDaysForecast.forEach(weartherItem => {
//                 weatherCardsDiv.insertAdjacentElement("beforeend", createWheatherCard(weartherItem))
// createWheatherCard(weartherItem)
//             })
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//             alert(`An error occurred while fetching the weather data`);
//         });
// };

// // Function to fetch city coordinates and initiate weather data fetch
// const getCityCoordinates = () => {
//     let cityName = cityInput.value.trim();

//     if (!cityName) {
//         alert('Please enter a city name');
//         return;
//     }

//     // Constructing the URL for WeatherAPI geocoding service
//     const GEOCODING_API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`;

//     fetch(GEOCODING_API_URL)
//         .then(res => res.json())
//         .then(data => {
//             if (data.error) {
//                 alert(`No Coordinates found for ${cityName}`);
//                 return;
//             }
//             const { name, lat, lon } = data.location;
//             getWeatherDataList(name, lat, lon);
//         })
//         .catch(error => {
//             console.error('Error fetching coordinates:', error);
//             alert(`An error occurred while fetching the coordinates`);
//         });
// };

// // Event listener for search button click
// searchButton.addEventListener("click", getCityCoordinates);
const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const weatherCardsDiv = document.querySelector(".weather-cards");
const locationButton = document.querySelector(".location-btn");
const API_KEY = "116c19d6b45447cd90c93656243006";
const API_KEY_members = "e60337f3d4306621f144d7e58092481c";
const currentWeatherDiv = document.querySelector(".current-weather");

// Function to create weather card HTML
const createWeatherCard = (weatherItem, isCurrent = false) => {
    const cityName = cityInput.value.trim();
    const temperature = (weatherItem.main.temp - 273.15).toFixed(2); // Convert temperature from Kelvin to Celsius

    if (isCurrent) {
        const date = new Date(weatherItem.dt * 1000); // Convert dt (timestamp) to milliseconds
        const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        
        return `
            <div class="current-card">
                <div class="d-flex justify-content-between">
                    <h2 class="me-4">${cityName}</h2>
                    <p class="mt-2 fs-3">(${formattedDate})</p>
                </div>
                <p>Temperature: ${temperature} C</p>
                <p>Wind: ${weatherItem.wind.speed} m/s</p>
                <p>Humidity: ${weatherItem.main.humidity}%</p>
                <div class="icon">
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}.png" alt="weather-icon" class="pic">
                    <h4>${weatherItem.weather[0].description}</h4>
                </div>
            </div>
        `;
    } else {
        return `
            <li class="card">
                <h2>${weatherItem.dt_txt.split(" ")[0]}</h2>
                <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}.png" alt="weather-icon">
                <h4 class="mt-4">Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)} C</h4>
                <h4>Wind: ${weatherItem.wind.speed} M/S</h4>
                <h4>Humidity: ${weatherItem.main.humidity}%</h4>
            </li>
        `;
    }
};

// Function to fetch weather data for both current and forecast
const getWeatherData = (lat, lon) => {
    // Current weather API URL
    const CURRENT_WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY_members}`;

    // Forecast weather API URL
    const FORECAST_WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY_members}`;

    // Fetch current weather
    fetch(CURRENT_WEATHER_API_URL)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            const currentWeatherHTML = createWeatherCard(data, true);
            currentWeatherDiv.innerHTML = currentWeatherHTML;
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert(`An error occurred while fetching the current weather data`);
        });

    // Fetch forecast weather
    fetch(FORECAST_WEATHER_API_URL)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            weatherCardsDiv.innerHTML = ''; // Clear previous weather cards

            const uniqueDates = [];
            data.list.forEach((item, index) => {
                const date = new Date(item.dt_txt); // Use dt_txt for forecast weather
                const dateKey = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

                if (!uniqueDates.includes(dateKey)) {
                    uniqueDates.push(dateKey);
                    const weatherCardHTML = createWeatherCard(item);
                    weatherCardsDiv.insertAdjacentHTML('beforeend', weatherCardHTML);
                }
            });
        })
        .catch(error => {
            console.error('Error fetching forecast weather data:', error);
            alert(`An error occurred while fetching the forecast weather data`);
        });
};

// Function to fetch city coordinates and initiate weather data fetch
const getCityCoordinates = () => {
    const cityName = cityInput.value.trim();

    if (!cityName) {
        alert('Please enter a city name');
        return;
    }

    const GEOCODING_API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`;

    fetch(GEOCODING_API_URL)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            if (data.error) {
                alert(`No coordinates found for ${cityName}`);
                return;
            }
            const { lat, lon } = data.location;
            getWeatherData(lat, lon);
        })
        .catch(error => {
            console.error('Error fetching coordinates:', error);
            alert(`An error occurred while fetching the coordinates`);
        });
};

// Function to fetch user coordinates and initiate weather data fetch
const getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords;
            const REVERSE_GEOCODING_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=&appid=${API_KEY_members}`;
            
            fetch(REVERSE_GEOCODING_URL).then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => {
                    if (!data[0]) {
                        throw new Error('No city found for the provided coordinates');
                    }
                    const cityName = data[0].name;
                    const GEOCODING_API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`;
                    return fetch(GEOCODING_API_URL);
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => {

                    if (data.error) {
                        alert(`No coordinates found for ${cityName}`);
                        return;
                    }
                    const { lat, lon } = data.location;
                    getWeatherData(lat, lon);
                })
                .catch(error => {
                    console.error('Error fetching coordinates:', error);
                    alert(`An error occurred while fetching the city`);
                });
        },
        error => {
            if (error.code === error.PERMISSION_DENIED) {
                alert("Geolocation request denied");
            }
        }
    );
};

// Event listeners for search button click and location button click
searchButton.addEventListener("click", getCityCoordinates);
locationButton.addEventListener("click", getUserCoordinates);








// const cityInput = document.querySelector(".city-input");
// const searchButton = document.querySelector(".search-btn");
// const currentWeatherDiv = document.querySelector(".current-weather");
// const weatherCardsDiv = document.querySelector(".weather-cards");
// const API_KEY = "116c19d6b45447cd90c93656243006";
// const API_KEY_members = "e60337f3d4306621f144d7e58092481c";

// // Function to create weather card HTML
// const createWeatherCard = (weatherItem, isCurrent = false) => {
//     const date = new Date(weatherItem.dt_txt);
//     const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

//     if (isCurrent) {
//         return `
//             <div class="current-card">
//                 <h2>${cityName}</h2>
//                 <p>${formattedDate}</p>
//                 <p>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)} C</p>
//                 <p>Wind: ${weatherItem.wind.speed} M/S</p>
//                 <p>Humidity: ${weatherItem.main.humidity}%</p>
//                 <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}.png" alt="weather-icon">
//             </div>
//         `;
//     } else {
//         return `
//             <li class="card">
//                 <h2>${formattedDate}</h2>
//                 <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}.png" alt="weather-icon">
//                 <h4 class="mt-4">Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)} C</h4>
//                 <h4>Wind: ${weatherItem.wind.speed} M/S</h4>
//                 <h4>Humidity: ${weatherItem.main.humidity}%</h4>
//             </li>
//         `;
//     }
// };

// // Function to fetch current weather data
// const getCurrentWeather = (lat, lon) => {
//     const CURRENT_WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY_members}`;

//     fetch(CURRENT_WEATHER_API_URL)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return res.json();
//         })
//         .then(data => {
//             const currentWeatherHTML = createWeatherCard(data, true);
//             currentWeatherDiv.innerHTML = currentWeatherHTML;
//         })
//         .catch(error => {
//             console.error('Error fetching current weather data:', error);
//             alert(`An error occurred while fetching the current weather data`);
//         });
// };

// // Function to fetch forecast weather data
// const getForecastWeather = (lat, lon) => {
//     const FORECAST_WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY_members}`;

//     fetch(FORECAST_WEATHER_API_URL)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return res.json();
//         })
//         .then(data => {
//             weatherCardsDiv.innerHTML = ''; // Clear previous weather cards

//             const uniqueDates = [];
//             data.list.forEach((item, index) => {
//                 const date = new Date(item.dt_txt).getDate();
//                 if (!uniqueDates.includes(date)) {
//                     uniqueDates.push(date);
//                     const weatherCardHTML = createWeatherCard(item);
//                     weatherCardsDiv.insertAdjacentHTML('beforeend', weatherCardHTML);
//                 }
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching forecast weather data:', error);
//             alert(`An error occurred while fetching the forecast weather data`);
//         });
// };

// // Function to fetch city coordinates and initiate weather data fetch
// const getCityCoordinates = () => {
//     const cityName = cityInput.value.trim();

//     if (!cityName) {
//         alert('Please enter a city name');
//         return;
//     }

//     const GEOCODING_API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`;

//     fetch(GEOCODING_API_URL)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return res.json();
//         })
//         .then(data => {
//             if (data.error) {
//                 alert(`No coordinates found for ${cityName}`);
//                 return;
//             }
//             const { lat, lon } = data.location;
//             getCurrentWeather(lat, lon); // Fetch current weather
//             getForecastWeather(lat, lon); // Fetch forecast weather
//         })
//         .catch(error => {
//             console.error('Error fetching coordinates:', error);
//             alert(`An error occurred while fetching the coordinates`);
//         });
// };

// // Event listener for search button click
// searchButton.addEventListener("click", getCityCoordinates);
