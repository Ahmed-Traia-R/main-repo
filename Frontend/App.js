import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './screens/Profile Patient/BottomNavigation';
import DoctorLogin from './screens/LoginScreen/DoctorLogin';
import DoctorSignUp from './screens/SignupScreen/DoctorSignUp';
import Profile from './screens/Profile Patient/Profile';
import EditDoctorProfile from './screens/Profiles/EditDoctorProfile';
import DoctorProfile from './screens/Profiles/DoctorProfile';
import HomeDoctor from './screens/Home/HomeDoctor';
import MedicalHistory from './screens/Profile Patient/MedicalHistory';

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box, Drawer } from "native-base";

import DoctorDetails from "./screens/Profiles/DoctorDetails";
import LoginScreen from './screens/Patient/LoginScreen';
import Home from "./screens/Home/Home";
import DoctorSignUp2 from "./screens/SignupScreen/DoctorSignUp2";
import Register from "./screens/SignupScreen/Register";
import DoctorDashboard from "./screens/Doctor/DoctorDashboard";
import Otpscreen from "./screens/LoginScreen/Otpscreen";
import RoleSelection from './screens/LoginScreen/RoleSelection';
import RegisterScreen from "./screens/Patient/RegisterScreen";
import { AuthProvider } from './screens/Patient/AuthContext';

const Stack = createNativeStackNavigator();


export default function App() {



  return (
    <NativeBaseProvider>
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
      <Stack.Screen
          options={{ headerShown: false }}
          name="RoleSelection"
          component={RoleSelection}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Otpscreen"
          component={Otpscreen}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegisterScreen}
        />
      <Stack.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
      <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="DoctorLogin"
          component={DoctorLogin}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DoctorProfile"
          component={DoctorProfile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DoctorDashboard"
          component={DoctorDashboard}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterAs"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DoctorSignUp"
          component={DoctorSignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DoctorSignUp2"
          component={DoctorSignUp2}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="DoctorDetails"
          component={DoctorDetails}
        />
        
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeDoctor"
          component={HomeDoctor}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="EditDoctorProfile"
          component={EditDoctorProfile}
        />

      </Stack.Navigator>

      <BottomNavigation />
    </NavigationContainer>
    </AuthProvider>
  </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
