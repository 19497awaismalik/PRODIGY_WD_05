let heading=document.getElementById("heading");
let temperature1=document.getElementById("temperature")
let temperature2=document.getElementById("temperature-2")
let mintemperature=document.getElementById("temp-min")
let maxtemperature=document.getElementById("temp-max")

let humidity1=document.getElementById("humidity");
let lanlag=document.getElementById("lan-lag");
let windDegree=document.getElementById("wind-dregee");
let feels=document.getElementById("feels");

let windspeed1=document.getElementById("wind-speed");
let sunrise=document.getElementById("sunrise");
let sunset=document.getElementById("sunset");
let windspeed2=document.getElementById("wind-speed-2");


const getCoordinates = async (city) => {
    // heading.innerHTML=city
    const geocodeUrl = `https://nominatim.openstreetmap.org/search?city=${city}&format=json&limit=1`;

    try {
        const response = await fetch(geocodeUrl);
        const data = await response.json();
        if (data.length > 0) {
            const { lat, lon } = data[0];
            return { lat, lon };
        } else {
            throw new Error('City not found');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
    }
};

const getWeather = async (lat, lon) => {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_min,temperature_2m_max,winddirection_10m_dominant,weathercode,sunrise,sunset&hourly=apparent_temperature,winddirection_10m,relative_humidity_2m&timezone=auto`;

    try {
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        const { temperature,windspeed } = data.current_weather;
        temperature1.innerHTML=temperature
        temperature2.innerHTML=temperature
        mintemperature.innerHTML=data.daily.temperature_2m_min[0];
        maxtemperature.innerHTML=data.daily.temperature_2m_max[0];

            humidity1.innerHTML=data.hourly.relative_humidity_2m[0]
        windDegree.innerHTML=data.hourly.winddirection_10m[0]
        feels.innerHTML=data.hourly.apparent_temperature[0]
        lanlag.innerHTML=`${data.latitude} ${data.longitude}`
        windspeed1.innerHTML=windspeed
        windspeed2.innerHTML=windspeed
        
        sunrise.innerHTML=data.daily.sunrise[0]
        sunset.innerHTML=data.daily.sunset[0]
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

// Example usage
const city = 'lahore';
heading.innerHTML=city
getCoordinates(city).then(coords => {
    if (coords) {
        getWeather(coords.lat, coords.lon);
    }
});


let search=document.getElementById("mobile-button");

search.addEventListener("click",function(){

    let input=document.getElementById("mobile-search");
    heading.innerHTML=input.value
    getCoordinates(input.value).then(coords => {
            if (coords) {
                    getWeather(coords.lat, coords.lon);
                }
            });
            input.value=""
        
    })

    const handle=()=>{
        let input=document.getElementById("search");
        heading.innerHTML=input.value
        getCoordinates(input.value).then(coords => {
                if (coords) {
                        getWeather(coords.lat, coords.lon);
                    }
                });
                input.value=""
            
    }
        

    const islamabadhandler=async()=>{
      let coords= await getCoordinates("islamabad")
            if (coords) {
                const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true&daily=temperature_2m_min,temperature_2m_max,winddirection_10m_dominant,weathercode,sunrise,sunset&hourly=apparent_temperature,winddirection_10m,relative_humidity_2m&timezone=auto`;


                try {
                    let temperature1=document.getElementById("is-temp")
                    let mintemperature=document.getElementById("is-mintemp")
                    let maxtemperature=document.getElementById("is-maxtemp")
                    let humidity=document.getElementById("is-humidity")
                    let feels=document.getElementById("is-feels")
                    let windDegree=document.getElementById("is-winddeg")
                    let sunrise=document.getElementById("is-sunrise")
                    let sunset=document.getElementById("is-sunset")
                    
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    const { temperature} = data.current_weather;
                    temperature1.innerHTML=temperature
                    mintemperature.innerHTML=data.daily.temperature_2m_min[0];
                    maxtemperature.innerHTML=data.daily.temperature_2m_max[0];
            
                        humidity.innerHTML=data.hourly.relative_humidity_2m[0]
                        feels.innerHTML=data.hourly.apparent_temperature[0]
                    windDegree.innerHTML=data.hourly.winddirection_10m[0]
              
                    
                    sunrise.innerHTML=data.daily.sunrise[0]
                    sunset.innerHTML=data.daily.sunset[0]
                    
                    
                } catch (error) {
                    console.error('Error fetching weather data:', error);
                }
                }
            
    }
    islamabadhandler()
    const karachihandler=async()=>{
        let coords= await getCoordinates("karachi")
              if (coords) {
                  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true&daily=temperature_2m_min,temperature_2m_max,winddirection_10m_dominant,weathercode,sunrise,sunset&hourly=apparent_temperature,winddirection_10m,relative_humidity_2m&timezone=auto`;
  
  
                  try {
                      let temperature1=document.getElementById("ka-temp")
                      let mintemperature=document.getElementById("ka-mintemp")
                      let maxtemperature=document.getElementById("ka-maxtemp")
                      let humidity=document.getElementById("ka-humidity")
                      let feels=document.getElementById("ka-feels")
                      let windDegree=document.getElementById("ka-winddeg")
                      let sunrise=document.getElementById("ka-sunrise")
                      let sunset=document.getElementById("ka-sunset")
                      
                      const response = await fetch(apiUrl);
                      const data = await response.json();
                     
                      const { temperature } = data.current_weather;
                      temperature1.innerHTML=temperature
                      
                      mintemperature.innerHTML=data.daily.temperature_2m_min[0];
                      maxtemperature.innerHTML=data.daily.temperature_2m_max[0];
              
                          humidity.innerHTML=data.hourly.relative_humidity_2m[0]
                          feels.innerHTML=data.hourly.apparent_temperature[0]
                      windDegree.innerHTML=data.hourly.winddirection_10m[0]
               
                      
                      sunrise.innerHTML=data.daily.sunrise[0]
                      sunset.innerHTML=data.daily.sunset[0]
                      
                       
                  } catch (error) {
                      console.error('Error fetching weather data:', error);
                  }
                  }
              
      }
      karachihandler()
      const faisalabad=async()=>{
        let coords= await getCoordinates("faisalabad")
              if (coords) {
                  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true&daily=temperature_2m_min,temperature_2m_max,winddirection_10m_dominant,weathercode,sunrise,sunset&hourly=apparent_temperature,winddirection_10m,relative_humidity_2m&timezone=auto`;
  
  
                  try {
                      let temperature1=document.getElementById("fa-temp")
                      let mintemperature=document.getElementById("fa-mintemp")
                      let maxtemperature=document.getElementById("fa-maxtemp")
                      let humidity=document.getElementById("fa-humidity")
                      let feels=document.getElementById("fa-feels")
                      let windDegree=document.getElementById("fa-winddeg")
                      let sunrise=document.getElementById("fa-sunrise")
                      let sunset=document.getElementById("fa-sunset")
                      
                      const response = await fetch(apiUrl);
                      const data = await response.json();
                      const { temperature } = data.current_weather;
                      temperature1.innerHTML=temperature
                     
                      mintemperature.innerHTML=data.daily.temperature_2m_min[0];
                      maxtemperature.innerHTML=data.daily.temperature_2m_max[0];
              
                          humidity.innerHTML=data.hourly.relative_humidity_2m[0]
                          feels.innerHTML=data.hourly.apparent_temperature[0]
                      windDegree.innerHTML=data.hourly.winddirection_10m[0]
                     
                      sunrise.innerHTML=data.daily.sunrise[0]
                      sunset.innerHTML=data.daily.sunset[0]
                      
                  } catch (error) {
                      console.error('Error fetching weather data:', error);
                  }
                  }
              
      }
      faisalabad()
    const kasurehandler=async()=>{
        let coords= await getCoordinates("pendi")
              if (coords) {
                  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true&daily=temperature_2m_min,temperature_2m_max,winddirection_10m_dominant,weathercode,sunrise,sunset&hourly=apparent_temperature,winddirection_10m,relative_humidity_2m&timezone=auto`;
  
  
                  try {
                      let temperature1=document.getElementById("ks-temp")
                      let mintemperature=document.getElementById("ks-mintemp")
                      let maxtemperature=document.getElementById("ks-maxtemp")
                      let humidity=document.getElementById("ks-humidity")
                      let feels=document.getElementById("ks-feels")
                      let windDegree=document.getElementById("ks-winddeg")
                      let sunrise=document.getElementById("ks-sunrise")
                      let sunset=document.getElementById("ks-sunset")
                      
                      const response = await fetch(apiUrl);
                      const data = await response.json();
                      const { temperature, weathercode,windspeed } = data.current_weather;
                      temperature1.innerHTML=temperature
                      // temperature2.innerHTML=temperature
                      mintemperature.innerHTML=data.daily.temperature_2m_min[0];
                      maxtemperature.innerHTML=data.daily.temperature_2m_max[0];
              
                          humidity.innerHTML=data.hourly.relative_humidity_2m[0]
                          feels.innerHTML=data.hourly.apparent_temperature[0]
                      windDegree.innerHTML=data.hourly.winddirection_10m[0]
                   
                      
                      sunrise.innerHTML=data.daily.sunrise[0]
                      sunset.innerHTML=data.daily.sunset[0]
                      
                  } catch (error) {
                      console.error('Error fetching weather data:', error);
                  }
                  }
              
      }
      kasurehandler()