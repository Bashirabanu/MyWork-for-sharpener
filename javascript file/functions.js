


function getTemperature(temperature, conversionUnit) {
    if (conversionUnit === "C") {
      return temperature;
    } else if (conversionUnit === "K") {
      return temperature + 273.15;
    } else {
      return "Invalid Conversion Unit";
    }
  }

  console.log(getTemperature(35,'K'));