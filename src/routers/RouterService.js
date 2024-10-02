import { createStackNavigator } from "@react-navigator/stack";
import ServiceDetail from "../screens/ServiceDetail";
import AddNewService from "../screens/AddNewService";
import Services from "../screens/Services";
import { useMyContextController } from "../store";
import { IconButton } from "react-native-paper";
import { Header } from "react-native/Libraries/NewAppScreen";

const Stack = createStackNavigator()
const RouterService = ()=>{
    const [controller, dispatch] = useMyContextController()
    const {userLogin} = controller

    return(
        <Stack.Navigator
            initialRouterName="Services"
                screenOptions={{
                    title: (userLogin!=null) && (userLogin.name),
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "pink"
                    },
                    headerRight: (props) => <IconButton icon={"account"} />
                }}
            >
                <Stack.Screen name="Services" component={Services}/>
                <Stack.Screen name="AddNewService" component={AddNewService}/>
                <Stack.Screen name="ServiceDetail" component={ServiceDetail}/>
            </Stack.Navigator>
    )
}

export default RouterService