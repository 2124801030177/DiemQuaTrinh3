import { Image, View } from "react-native";
import { IconButton, Text } from "react-native-paper"

const Service = ({navigation})=>{
    return(
        <View style={{flex: 1}}>
            <Image soure={require(/*duong dan hinh anh trong asset */)}
                style={{
                    alignSelf: "center",
                    marginVertical: 50
                }}
            />
        </View>
    )
}