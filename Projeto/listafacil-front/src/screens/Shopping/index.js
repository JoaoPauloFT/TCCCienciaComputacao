import React, {useContext, useEffect, useState} from "react";
import {FlatList, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "../ShoppingList/styles";
import TabNameView from "../../components/TabNameView";
import ItemList from "../../components/ItemList";
import FloatingButton from "../../components/FloatingButton";
import {ShoppingByUser} from "../../services/api/User";
import {AuthContext} from "../../contexts/auth";
import {PurchasesInfo} from "../../services/api/Purchases";
import {PurchasesContext} from "../../contexts/purchases";

export default function Index({navigation}){

    const [Shopping, setShopping] = useState([]);
    const { token } = useContext(AuthContext);
    const { editPurchase } = useContext(PurchasesContext);

    const create = () => {
        navigation.navigate("Camera", {
            origem: "Purchase"
        });
    }

    async function openShopping (id) {
        let info = await PurchasesInfo(token, id);
        if (info["id"]) {
            let prod = info["PurchasedProducts"];
            let nameProds = [];
            for (let i = 0; i < prod.length; i++) {
                nameProds = [...nameProds, {
                    id: prod[i]["id"],
                    name: prod[i]["name"]
                }];
            }
            editPurchase(id, nameProds);
            navigation.navigate("ViewProductsPurchases");
        } else {
            ToastAndroid.show("Não foi possível editar a lista de compra!", ToastAndroid.SHORT);
        }
    }

    async function getShopping(token) {
        let result = await ShoppingByUser(token);
        setShopping(result);
    }

    useEffect(() => {
        getShopping(token);
    }, []);

    return (
        <View style={styles.container}>
            <TabNameView
                nameView={"Compras Realizadas"}
                navigation={navigation}
            />
            <View style={styles.contentData}>
                {Shopping.length > 0 ? (
                    <FlatList
                        style={styles.listShopping}
                        data={Shopping}
                        renderItem={({item}) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {openShopping(item["id"])}}
                                >
                                    <ItemList
                                        title={item["title"]}
                                    />
                                </TouchableOpacity>
                            );
                        }}
                    />
                ) : (
                    <Text style={styles.textNoData}>Não existe nenhuma compra cadastrada!</Text>
                )}
            </View>
            <FloatingButton
                action={create}
            />
        </View>
    )
}