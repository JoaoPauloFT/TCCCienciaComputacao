import React, {useContext} from "react";
import {FlatList, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import TabNameView from "../../components/TabNameView";
import styles from "./styles";
import {PurchasesContext} from "../../contexts/purchases";
import FloatingButtonDelete from "../../components/FloatingButtonDelete";
import {DeletePurchase} from "../../services/api/Purchases";
import {AuthContext} from "../../contexts/auth";

export default function Index({navigation}){

    const { token } = useContext(AuthContext);
    const { productsList, purchaseId } = useContext(PurchasesContext);

    const back = () => {
        navigation.reset({
            index: 1,
            routes: [{name: "TabMenu"}]
        });
    }

    const delPurchase = async () => {
        let info = await DeletePurchase(token, purchaseId);
        if (!info["message"]) {
            navigation.reset({
                index: 0,
                routes: [{name: "TabMenu"}]
            })
        } else {
            ToastAndroid.show("Não foi possível excluir a lista de compra!", ToastAndroid.SHORT);
        }
    }

    return (
        <View style={styles.container}>
            <TabNameView
                nameView={"Compras realizadas"}
                navigation={navigation}
            />
            <View style={styles.contentData}>
                {productsList.length > 0 ? (
                    <FlatList
                        style={styles.listShopping}
                        data={productsList}
                        renderItem={({item}) => {
                            return (
                                <View style={styles.contentList}>
                                    <Text style={styles.textList}>{item["name"]}</Text>
                                </View>
                            );
                        }}
                    />
                ) : (
                    <Text style={styles.textNoData}>Não existe nenhum item nessa compra!</Text>
                )}
                <TouchableOpacity
                    style={styles.contentButton}
                    onPress={back}
                >
                    <Text style={styles.textButton}>Voltar</Text>
                </TouchableOpacity>
            </View>
            <FloatingButtonDelete
                action={delPurchase}
            />
        </View>
    )
}