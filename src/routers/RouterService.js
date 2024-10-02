import { createStackNavigator } from "@react-navigator/stack";
import ServiceDetail from "../screens/ServiceDetail";
import AddNewService from "../screens/AddNewService";
import Services from "../screens/Services";
import { useMyContextController } from "../store";
import { IconButton } from "react-native-paper";

const Stack = createStackNavigator()
const RouterService = ()=>{
    const [controller, dispatch] = useMyContextController()
    const {userLogin} = controller

    return(
        <Stack.Navigator
            initialRouterName="Services">
                
            </Stack.Navigator>
    )
}