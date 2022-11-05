import React from "react";
import './Home.css';


function Home()
{
    return(
        <div className="main-home">
            <h2 className="title"><b><i>Welcome! to our Weather Forecast App</i></b></h2>
            <p className="para1"><b>Weather Forecasting  ia application of science and technology to predict the conditions of the atmosphere for a given location and time.People have attempted to predict the weather informally for millennia and formally since the 19th century.</b></p>
            <p className="para2"><b>Weather Forecast are made by collecting quantitative data about the current state of the atmosphere,land, and using meteorology to project how to project how the atmosphere will change at a given place.</b></p>
            <p className="para3"><b>Once calculated manually based mainly upon changes in barometric pressure, current weather conditions or cloud cover,weather forecasting now relies on computer-based models that take many atmospheric factors into account.</b></p>
            <p className="para4"><b>Human input is still required to pick the best possible forecast model to base the forecast upon,which involves pattern recognition skills, teleconnection, knowledge of model performance, and knowledge of model bioses.</b></p>            
        </div>

    )
}

export default Home;