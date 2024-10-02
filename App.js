import { MyContextControllerProvider } from "./src/store";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigationn/native";
import Router from "./src/routers/Router";

const App = ()=>{
  const USERS = firestore().collection("USERS")
  const admin = {
    fullname: "Admin",
    email: "2124801030177@student.tdmu.edu.vn",
    password: "123456",
    phone: "0794655669",
    address: "Binh` Duong",
    role: "admin"
  }
  useEffect(()=>{
    USERS.doc(admin.email)
    .onSnapshot(
      u=>{
        if(!u.exists){
          auth().createUserWithEmailAndPassword(admin.email, admin.password)
          .then(respone =>
            USERS.doc(admin.email).set(admin),
            console.log("Add new account admin")
          )
        }
      }
    )
  ,[]})
  return (
    <MyContextControllerProvider>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </MyContextControllerProvider>
  )
}

export default App