import React, { useState } from "react";
import image from '../Assets/dexter.png';
import './GetWeather.css';



function GetWeather() {


    const [weather, setweather] = useState('')
    const [form, setForm] = useState({})

    const apiKey = '9455c0d6200b4271f5c0957fb7b9048b'



    const weatherData = (e) => {
        if (e.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${apiKey}`)
                .then(res => (res.json()))
                .then(result => {
                    setForm(result);
                    setweather('');
                    console.log(result)

                });

        }
        var error = document.getElementById("error")
        if(!(document.getElementById("inputVal").value))
        {
            error.textContent ="Please enter the valid city"
            return
        }
            error.textContent =" " 
        
    }


    // const handleChange =((e) =>{
    //     let name = e.target.name;
    //     let value = e.target.value;

    //     if(name == "city")
    //     {
    //         setForm({...form, city:value})
    //     }
    //     console.log(form.city);
    // })










    return (
        <div>

            <div className="main-weather">
                    <div className="left">
                        <h4 className="heading">Let's Find weather in my city</h4>
                        <img src={image} className="image" alt="image" />
                    </div>
                    <div className="right">
                        <div className="weather-app">
                            <input
                                type="text"
                                className="input"
                                placeholder="Enter the city..."
                                onChange={e => setweather(e.target.value)}
                                value={weather}
                                onKeyPress={weatherData}
                                id="inputVal"
                                
                            />
                            <div id="error"></div>
                            <div id="error"><b>{form.message}</b></div>
                            <div>
                                {(typeof form.main != "undefined") ? (
                                    <div className="location">
                                        <div className="area">

                                            <p><strong>Weather Details of city: <b>{form.name},{form.sys.country}</b></strong></p>
                                        </div>
                                        <div className="temp">
                                            <p>Current Temperature : <b>{form.main.temp} °C</b></p>
                                        </div>
                                        <div className="temp-range">
                                            <p>Temperature Range: <b>{(form.main.temp_max)} °C to {(form.main.temp_max)} °C</b></p>
                                        </div>
                                        <div className="climate-condition">
                                            <p>Climate Condition in <b>{form.name},{form.sys.country}</b> : <b>{form.weather[0].main}</b></p>
                                        </div>

                                        <div className="feel-like">
                                            <p>Feel Like : <b>{form.main.feels_like}</b></p>
                                        </div>

                                        <div className="humidity">
                                            <p>Humidity: <b>{(form.main.humidity)}</b></p>

                                        </div>



                                    </div>
                                ) : ('')}
                            </div>



                        </div>

                    </div>
                
            </div >

        </div >



    )
}

export default GetWeather;