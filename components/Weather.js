import { View, Text, StyleSheet, Dimensions } from "react-native"
import axios from 'axios';
import { useState, useEffect } from "react";
export default Weather = (props)=>{
    const [weatherData, setWeatherData] = useState({"coord":{"lon":72.3525,"lat":32.2967},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":309.78,"feels_like":312.49,"temp_min":309.78,"temp_max":309.78,"pressure":998,"humidity":37,"sea_level":998,"grnd_level":978},"visibility":10000,"wind":{"speed":3.06,"deg":105,"gust":2.44},"clouds":{"all":3},"dt":1692944950,"sys":{"country":"PK","sunrise":1692924058,"sunset":1692971110},"timezone":18000,"id":1173687,"name":"Khushāb","cod":200});
    useEffect(() => {
        // API URL
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=37458cca1b2ceec8df448ea978663c31`;
      
        // Fetch data using axios
        axios.get(apiUrl)
          .then(response => {
            // Update the state with fetched data
            setWeatherData(response.data);
          })
          .catch(error => {
            console.error('Error fetching weather data:', error);
          });
      }, [props.cityName]);
      const temperature = (weatherData.main.temp - 273.15).toFixed(0)
    return(
        <View>
            <Text style={styles.deg}>{temperature}°</Text>
            <Text style={styles.cityName}>{weatherData.name}</Text>
            <View style={styles.icon}>
                <View>
                    <Text>Humidity: {weatherData.main.humidity}</Text>
                    <Text>Temp</Text>
                </View>
                <View>
                    <Text>Icon</Text>
                </View>
            </View>
        </View>   
    )
}
// {
//     "coord":{"lon":72.3525,"lat":32.2967},
//     "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
//     "base":"stations",
//     "main":{"temp":309.78,"feels_like":312.49,"temp_min":309.78,"temp_max":309.78,"pressure":998,"humidity":37,"sea_level":998,"grnd_level":978},
//     "visibility":10000,
//     "wind":{"speed":3.06,"deg":105,"gust":2.44},
//     "clouds":{"all":3},
//     "dt":1692944950,
//     "sys":{"country":"PK","sunrise":1692924058,"sunset":1692971110},
//     "timezone":18000,
//     "id":1173687,
//     "name":"Khushāb",
//     "cod":200
// }
const styles = StyleSheet.create({
    deg:{
        fontSize: 80,
        textAlign: 'center',
        marginTop: '50%',
        color: 'black'
    },
    cityName: {
        textAlign: 'center',
        fontSize: 20,
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 50,
        height: '50%',
        textAlign: 'center',
    },
})



