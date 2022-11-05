import './TemperatureConverter.css'
import arrow from '../Assets/arrow.webp';



function TemperatureConverter() {



    // const [temp, setTemp] = useState(
    //     {
    //         fahrenheit: '',
    //         celsius: ''
    //     }
    // )

    // function handleSave(e) {
    //     e.preventDefault()
    //     // console.log(temp)
    //      let fahrenheitTemp=document.getElementById("fahrenheit")
    //     let celsiusTemp=document.getElementById("celsius")




    // document.getElementById("celsius").onchange = function() {
    //     defaultTempC = "celsius";
    //   };
    //   document.getElementById("fahrenheit").onchange = function() {
    //     defaultTempF = "fahrenheit";
    //   };

    let defaultTempC = "celsius"
    let defaultTempF = "fahrenheit"

    const convert = () => {

        var celsius = document.getElementById("celsius").value;
        celsius = parseFloat(celsius);

        var fahrenheit = document.getElementById("fahrenheit").value;
        fahrenheit = parseFloat(fahrenheit);

        //Adding Formula for Conversion

        var conversionCelsius;
        var conversionFahrenheit;

        if (defaultTempC !== "celsius") {
            return;
        }
        conversionFahrenheit = ((celsius * 9 / 5) + 32);
        document.getElementById("fahrenheit").value = (conversionFahrenheit).toFixed(2);


        if (defaultTempF !== "fahrenheit") {
            return;
        }

        conversionCelsius = ((fahrenheit - 32) * 5 / 9);
        document.getElementById("celsius").value = (conversionCelsius).toFixed(2);

        document.getElementById('celsius').innerHTML = conversionCelsius;
        document.getElementById('fahrenheit').innerHTML = conversionFahrenheit;

    }


    //Resetting the value

    const reset = () => {
        document.getElementById("celsius").value = "";
        document.getElementById("fahrenheit").value = "";
    }



    // const updatedCelsius = e => setTemp({
    //     celsius: e.target.value,
    //     fahrenheit: (+e.target.value * 9 / 5 + 32).toFixed(2)
    // })

    // const updatedFahrenheit = e => setTemp({
    //     celsius: ((+e.target.value - 32) * 5 / 9).toFixed(2),
    //     fahrenheit: e.target.value


    // })

    return (
        <div className="temperature_main">
            <h2 className="temperature_title">Temperature Converter</h2>
            <div>
                <div>
                    <input
                        type="number"
                        className="input_Fah"
                        placeholder="Enter Fahrenheit"
                        name="inputTemp"
                        id="fahrenheit"
                    // value={temp.fahrenheit}
                    // onChange={() => defaultTempC = "celsius" }

                    />
                </div>
                <img src={arrow} className="temp_img" alt="image1" />
                <div>
                    <input
                        type="number"
                        className="input_Cal"
                        placeholder="Enter Celsius"
                        name="inputTemp"
                        id="celsius"
                    // value={temp.celsius}
                    // onChange={() => defaultTempF = "fahrenheit"}
                    />
                </div>
                <button className="leftBt" onClick={convert} id="submit">Convert!</button>
                <button className="rightBt" onClick={reset} id="reset">Reset</button>
            </div>
        </div>

    )
}

export default TemperatureConverter;