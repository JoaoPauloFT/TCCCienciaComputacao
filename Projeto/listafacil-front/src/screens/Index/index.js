import React, {useEffect, useState} from "react";

import Profile from "./../Profile";
import ShoppingList from "./../ShoppingList";
import Shopping from "./../Shopping";
import CameraView from "./../Camera";
import ProductsShoppingList from "./../ProductsShoppingList";
import EditProductsShoppingList from "./../EditProductsShoppingList";
import ViewProductsShoppingList from "./../ViewProductsShoppingList";
import ViewProductsPurchases from "./../ViewProductsPurchases";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Camera} from "expo-camera";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Text, View} from "react-native";
import ProductsProvider from "../../contexts/products";
import PurchasesProvider from "../../contexts/purchases";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs () {
    return (
        <Tab.Navigator initialRouteName="Lista de Compra">
            <Tab.Screen
                name="Lista de Compra"
                component={ShoppingList}
                options={{
                    tabBarActiveTintColor: "#9370DB",
                    tabBarIcon: ({size, color}) => (<MaterialCommunityIcons name={"cart"} color={color} size={size} />),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Compras Realizadas"
                component={Shopping}
                color
                options={{
                    tabBarActiveTintColor: "#9370DB",
                    tabBarIcon: ({size, color}) => (<MaterialCommunityIcons name={"shopping"} color={color} size={size} />),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

export default function Index(){

    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View/>;
    }

    if (hasPermission === false) {
        return <Text>Acesso Negado!</Text>;
    }

    return (
        <ProductsProvider>
            <PurchasesProvider>
                <Stack.Navigator initialRouteName="TabMenu">
                    <Stack.Screen
                        name="Perfil"
                        component={Profile}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Camera"
                        component={CameraView}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="ProductsShoppingList"
                        component={ProductsShoppingList}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="EditProductsShoppingList"
                        component={EditProductsShoppingList}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="ViewProductsShoppingList"
                        component={ViewProductsShoppingList}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="TabMenu"
                        component={Tabs}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="ViewProductsPurchases"
                        component={ViewProductsPurchases}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </PurchasesProvider>
        </ProductsProvider>
    )
}