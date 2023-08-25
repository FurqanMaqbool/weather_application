import { Text, TextInput, View, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';
export default SearchBar = (props)=>{
    return(
        <View style={styles.SearchBar}>
            <TextInput placeholder="Enter Your City" onChangeText={props.changeDetected}/>
            <AntDesign name="search1" size={24} color="black" onPress={props.onpress}/>
        </View>
    );
}

const styles = StyleSheet.create({
    SearchBar:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1.5,
        borderColor: 'black',
        width: Dimensions.get('screen').width - 80,
        padding: 10,
        borderRadius: 5,
        marginTop: 200,
    }
})

// https://api.openweathermap.org/data/2.5/weather?q=khushab&appid=37458cca1b2ceec8df448ea978663c31